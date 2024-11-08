import { createDirectus, staticToken, rest, uploadFiles } from '@directus/sdk';
import formidable from 'formidable';
import fs from 'fs';
import FormData from 'form-data';
import path from 'path';
import mime from 'mime';
import { createMemorial } from '~/lib/directus';

// Configure formidable to parse form data
export const config = {
  api: {
    bodyParser: false,
  },
};

// Initialize Directus client for file uploads
const directus = createDirectus(process.env.DIRECTUS_URL || '')
  .with(rest())
  .with(staticToken(process.env.DIRECTUS_TOKEN || ''));

async function uploadFileToDirectus(filePath) {
  let fileStream = null;
  try {
    // Create a read stream from the file
    fileStream = fs.createReadStream(filePath);
    const fileName = path.basename(filePath);
    const mimeType = mime.getType(filePath) || 'application/octet-stream';

    // Create FormData using form-data package
    const formData = new FormData();

    // First append the type field - this is required by Directus
    formData.append('type', 'image');

    // Then append the file with its metadata
    formData.append('file', fileStream, {
      filename: fileName,
      contentType: mimeType,
      knownLength: fs.statSync(filePath).size,
    });

    // Upload file to Directus with proper headers
    const fileResponse = await directus.request(uploadFiles(formData));

    return fileResponse.id; // Return the file ID
  } catch (error) {
    console.error('Error uploading file to Directus:', error);
    throw error;
  } finally {
    // Close the file stream if it was opened
    if (fileStream) {
      fileStream.destroy();
    }
    // Clean up: Delete the temporary file
    try {
      fs.unlinkSync(filePath);
    } catch (err) {
      console.error('Error deleting temporary file:', err);
    }
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Parse the incoming form data
    const form = formidable({
      multiples: true,
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB limit
    });

    const formData = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve({ fields, files });
      });
    });

    const { fields, files } = formData;

    if (!fields.name || !fields.dateInfo || !fields.description || !files.profileImage) {
      return res.status(400).json({ message: 'Required fields are missing' });
    }

    // Upload profile image
    const profileImageId = await uploadFileToDirectus(files.profileImage[0].filepath);

    // Upload gallery images
    let galleryImageIds = [];
    if (files.galleryImages) {
      // Handle both single and multiple gallery images
      const galleryImagesArray = Array.isArray(files.galleryImages)
        ? files.galleryImages
        : [files.galleryImages];

      // Upload all gallery images in parallel
      galleryImageIds = await Promise.all(
        galleryImagesArray.map((image) => uploadFileToDirectus(image.filepath))
      );
    }

    // Format memorial data with file IDs
    const formattedMemorialData = {
      name: fields.name[0],
      dateInfo: fields.dateInfo[0],
      description: fields.description[0],
      profileImage: profileImageId,
      galleryImages: galleryImageIds,
      status: 'active',
    };

    console.log('Creating memorial:', formattedMemorialData);
    // Create memorial in Directus
    const memorial = await createMemorial(formattedMemorialData);

    return res.status(201).json({ message: 'Memorial created successfully', memorial });
  } catch (error) {
    console.error('Error creating memorial:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}
