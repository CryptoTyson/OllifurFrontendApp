import { createDirectus, staticToken, rest, uploadFiles } from '@directus/sdk';
import formidable from 'formidable';
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

async function uploadFileToDirectus(file) {
  try {
    // Create FormData and append the file
    const formData = new FormData();
    formData.append('file', file);

    // Upload file to Directus
    const fileResponse = await directus.request(uploadFiles(formData));
    return fileResponse.id; // Return the file ID
  } catch (error) {
    console.error('Error uploading file to Directus:', error);
    throw error;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Parse the incoming form data
    const form = formidable({ multiples: true });

    const formData = await new Promise((resolve, reject) => {
      form.parse(req, (err, parsedFields, parsedFiles) => {
        if (err) reject(err);
        resolve({ fields: parsedFields, files: parsedFiles });
      });
    });

    const { fields, files } = formData;

    if (!fields.name || !fields.dateInfo || !fields.description || !files.profileImage) {
      return res.status(400).json({ message: 'Required fields are missing' });
    }

    // Upload profile image
    const profileImageId = await uploadFileToDirectus(files.profileImage);

    // Upload gallery images
    let galleryImageIds = [];
    if (files.galleryImages) {
      // Handle both single and multiple gallery images
      const galleryImagesArray = Array.isArray(files.galleryImages)
        ? files.galleryImages
        : [files.galleryImages];

      // Upload all gallery images in parallel
      galleryImageIds = await Promise.all(
        galleryImagesArray.map((image) => uploadFileToDirectus(image))
      );
    }

    // Format memorial data with file IDs
    const formattedMemorialData = {
      name: fields.name,
      date_info: fields.dateInfo,
      description: fields.description,
      profile_image: profileImageId,
      gallery_images: galleryImageIds,
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
