import { Typography } from '@mui/material';
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

function UploadImage({ onImageUpload, uploadType }) {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState(null);

  const validateFile = (file) => {
    // Check file type
    const validTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      setError('Please upload SVG, PNG, JPG or GIF files only');
      return false;
    }

    // Check dimensions based on upload type
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        if (img.width > 800 || img.height > 400) {
          setError('Profile image dimensions should not exceed 800x400px');
          resolve(false);
        }
        resolve(true);
      };
      img.src = URL.createObjectURL(file);
    });
  };

  const handleFile = async (file) => {
    setError('');
    if (!file) return;

    const isValid = await validateFile(file);
    if (!isValid) return;

    // Create preview
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);

    // Call parent handler with upload type context
    if (onImageUpload) {
      onImageUpload(file, uploadType);
    }
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    handleFile(file);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      document.getElementById(`file-input-${uploadType}`).click();
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '12px',
    border: `1px solid ${isDragging ? '#884E1B' : '#EAECF0'}`,
    background: 'var(--Base-White, #FFF)',
    width: '100%',
    maxWidth: '400px',
    minHeight: '200px',
    margin: '0 auto',
    position: 'relative',
    cursor: 'pointer',
    transition: 'border-color 0.3s ease',
    overflow: 'hidden'
  };

  return (
    <div
      role="button"
      tabIndex={0}
      style={containerStyle}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onClick={() => document.getElementById(`file-input-${uploadType}`).click()}
      onKeyPress={handleKeyPress}
    >
      <input
        type="file"
        id={`file-input-${uploadType}`}
        style={{ display: 'none' }}
        accept=".svg,.png,.jpg,.jpeg,.gif"
        onChange={handleInputChange}
      />

      {preview ? (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%'
        }}
        >
          <img
            src={preview}
            alt="Preview"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '12px'
            }}
          />
        </div>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path d="M7.16602 13.3333L10.4993 10M10.4993 10L13.8327 13.3333M10.4993 10V17.5M17.166 13.9524C18.1839 13.1117 18.8327 11.8399 18.8327 10.4167C18.8327 7.88536 16.7807 5.83333 14.2493 5.83333C14.0673 5.83333 13.8969 5.73833 13.8044 5.58145C12.7177 3.73736 10.7114 2.5 8.41602 2.5C4.96424 2.5 2.16602 5.29822 2.16602 8.75C2.16602 10.4718 2.86222 12.0309 3.98847 13.1613" stroke="#475467" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <Typography sx={{
            color: 'var(--Primary-700, #884E1B)',
            fontFamily: 'Inter',
            fontSize: { xs: '12px', sm: '14px' },
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '20px',
            textAlign: 'center',
            mt: 2
          }}
          >
            Click to upload<span style={{ color: '#475467', fontWeight: 400 }}> or drag and drop</span>
          </Typography>
          <Typography sx={{
            color: 'var(--Gray-600, #475467)',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: { xs: '10px', sm: '12px' },
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '18px',
            mt: 1
          }}
          >
            SVG, PNG, JPG or GIF (max. 800x400px)
          </Typography>
        </>
      )}

      {error && (
        <Typography sx={{
          color: '#FF4842',
          textAlign: 'center',
          fontSize: '12px',
          mt: 1,
          position: 'absolute',
          bottom: '8px',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '4px'
        }}
        >
          {error}
        </Typography>
      )}
    </div>
  );
}

UploadImage.propTypes = {
  onImageUpload: PropTypes.func,
  uploadType: PropTypes.isRequired
};

UploadImage.defaultProps = {
  onImageUpload: () => {}
};

export default UploadImage;
