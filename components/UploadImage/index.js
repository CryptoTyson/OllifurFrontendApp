import { Typography } from '@mui/material';
import React from 'react';

function UploadImage() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '12px',
        border: '1px solid var(--Gray-200, #EAECF0)',
        background: 'var(--Base-White, #FFF)',
        width: '100%',
        maxWidth: '400px',
        minHeight: '200px',
        margin: '0 auto'
      }}
    >
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
      >Click to upload<span style={{ color: '#475467', fontWeight: 400 }}> or drag and drop</span>
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
      >SVG, PNG, JPG or GIF (max. 800x400px)
      </Typography>
    </div>
  );
}

export default UploadImage;
