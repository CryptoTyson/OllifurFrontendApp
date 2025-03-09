import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { makeStyles } from 'tss-react/mui';
import { Box, Button, Typography, useMediaQuery, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';
import UploadImage from '../../../components/UploadImage';

const useStyles = makeStyles()((theme) => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(10),
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      padding: theme.spacing(20, 0, 5),
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(15),
    },
  },
  inner: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  subheading: {
    color: 'var(--primary-600, #884E1B)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '24px',
  },
  mobileHeading: {
    color: 'var(--Gray-900, #101828)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '44px'
  },
  heading: {
    color: 'var(--gray-900, #101828)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '60px',
    letterSpacing: '-0.96px',
  },
  supportingtext: {
    color: 'var(--Gray-600, #475467)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'italic',
    fontWeight: '400',
    lineHeight: '30px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      fontWeight: '400',
      lineHeight: '28px'
    },
  },
  innerText: {
    color: 'var(--Gray-700, #344054)',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '20px',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'left',
    },
  },
  button: {
    color: 'var(--primary-700, #D77F33)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '24px',
    display: 'block',
    margin: 'auto',
    marginBottom: '10px',
  },
  galleryContainer: {
    padding: theme.spacing(4, 0),
  },
  galleryItem: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),
  },
  createButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(4),
  },
  nameInput: {
    '& .MuiInputBase-input': {
      color: 'var(--Primary-600, #D77F33)',
      textAlign: 'center',
      fontFamily: 'Inter',
      fontSize: '24px',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '32px',
    },
    '& .MuiInput-underline:before': {
      borderBottom: 'none',
    },
    '& .MuiInput-underline:hover:before': {
      borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
    },
  },
  dateInput: {
    '& .MuiInputBase-input': {
      color: 'var(--Gray-900, #101828)',
      textAlign: 'center',
      fontFamily: 'Inter',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '24px',
    },
    '& .MuiInput-underline:before': {
      borderBottom: 'none',
    },
    '& .MuiInput-underline:hover:before': {
      borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
    },
  },
  descriptionInput: {
    '& .MuiInputBase-root': {
      color: 'var(--Gray-600, #475467)',
      fontFamily: 'Inter',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '28px',
      padding: 0,
      [theme.breakpoints.down('sm')]: {
        textAlign: 'start',
      }
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none'
    },
    '& .MuiInputBase-multiline': {
      padding: 0
    },
    '& .MuiInputBase-input': {
      padding: 0,
      whiteSpace: 'pre-wrap'
    }
  },
}));

function CreateMemorial(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir } = props;
  const [profileImage, setProfileImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState(Array(8).fill(null));
  const [name, setName] = useState('Oliver (Ollie)');
  const [dateInfo, setDateInfo] = useState('Dec 2022 — Jun 23rd 2023 (6 years)');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    ValidatorForm.addValidationRule('isTruthy', (value) => value);
  });

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const handleProfileImageUpload = (file) => {
    setProfileImage(file);
    console.log('Profile image uploaded:', file);
  };

  const handleGalleryImageUpload = (index, file) => {
    const newGalleryImages = [...galleryImages];
    newGalleryImages[index] = file;
    setGalleryImages(newGalleryImages);
    console.log('Gallery image uploaded at index', index, ':', file);
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      // Validate required fields
      if (!name || !dateInfo || !description || !profileImage) {
        alert('Please fill in all required fields and upload a profile image');
        setIsSubmitting(false);
        return;
      }

      const formData = new FormData();
      formData.append('profileImage', profileImage);

      // Append gallery images (only non-null ones)
      galleryImages.forEach((img, index) => {
        if (img) {
          formData.append('galleryImages', img);
        }
      });

      // Append other memorial data
      formData.append('name', name);
      formData.append('dateInfo', dateInfo);
      formData.append('description', description);

      const response = await fetch('/api/create-memorial', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to create memorial');
      }

      const data = await response.json();
      console.log('Memorial created:', data);

      // Show success message
      alert('Memorial created successfully!');
      // You can add router.push here to redirect to the memorial page
    } catch (error) {
      console.error('Error creating memorial:', error);
      alert('Failed to create memorial. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const galleryItems = Array(8).fill().map((_, i) => ({ id: `gallery-upload-${i + 1}` }));

  return (
    <Fragment>
      <Head>
        <title>{brand.retail.name + ' - Contact Us'}</title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
        <section id="home">
          <Container>
            <div className={classes.bannerWrap}>
              <div
                className={classes.inner}
                style={{
                  margin: isDesktop ? '80px 0px' : '0px',
                  marginBottom: '234px',
                }}
              >
                <Grid
                  container
                  direction="column"
                  alignContent="center"
                  alignItems="center"
                  spacing={isDesktop ? 8 : 2}
                >
                  <Grid
                    container
                    item
                    md={6}
                    xs={12}
                    direction="column"
                    alignContent="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item>
                      <Typography className={classes.subheading}>
                        Memorials
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={isDesktop ? classes.heading : classes.mobileHeading}>
                        Create a new memorial
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      sx={{
                        mx: isDesktop ? '240px' : '0px',
                        textAlign: 'center',
                      }}
                    >
                      <Typography
                        component="span"
                        className={classes.supportingtext}
                      >
                        Tell us a little about the remarkable soul you're honoring
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              <div style={{
                borderRadius: '16px',
                background: 'var(--Gray-200, #EAECF0)',
                padding: '34px 20px',
                marginBottom: '64px',
                marginTop: isDesktop ? '200px' : '160px'
              }}
              >
                <Grid container spacing={2} justifyContent="center" direction="column" alignItems="center" sx={{ marginTop: '-160px', position: 'relative', zIndex: 1 }}>
                  <Grid item xs={12} md={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: '100%', maxWidth: '259px' }}>
                      <UploadImage
                        onImageUpload={handleProfileImageUpload}
                        uploadType="profile"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      variant="standard"
                      className={classes.nameInput}
                      inputProps={{ style: { textAlign: 'center' } }}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      value={dateInfo}
                      onChange={(e) => setDateInfo(e.target.value)}
                      variant="standard"
                      className={classes.dateInput}
                      inputProps={{ style: { textAlign: 'center', width: '300px' } }}
                    />
                  </Grid>
                </Grid>
              </div>
              <div>
                <Grid container spacing={2} justifyContent="center" direction="column">
                  <Grid item xs={12} md={12}>
                    <Typography sx={{
                      color: 'var(--Primary-800, #774418)',
                      fontSize: '30px',
                      fontWeight: '600',
                      lineHeight: '38px',
                      [theme.breakpoints.down('sm')]: {
                        textAlign: 'start',
                        fontSize: '20px',
                        lineHeight: '30px',
                      }
                    }}
                    >A few words
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      multiline
                      rows={12}
                      fullWidth
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      variant="outlined"
                      className={classes.descriptionInput}
                      placeholder="Share your memories and thoughts..."
                      sx={{
                        whiteSpace: 'pre-wrap',
                        color: 'var(--Gray-600, #475467)',
                        fontSize: '18px',
                        fontWeight: '400',
                        lineHeight: '28px',
                        [theme.breakpoints.down('sm')]: {
                          textAlign: 'start',
                        }
                      }}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.galleryContainer}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item xs={12}>
                    <Typography sx={{
                      color: 'var(--Primary-800, #774418)',
                      fontSize: '30px',
                      fontWeight: '600',
                      lineHeight: '38px',
                      marginBottom: '24px',
                      [theme.breakpoints.down('sm')]: {
                        fontSize: '20px',
                        lineHeight: '30px',
                      }
                    }}
                    >Gallery
                    </Typography>
                  </Grid>
                  <Grid container item spacing={3}>
                    {galleryItems.map((item, index) => (
                      <Grid key={item.id} item xs={12} sm={6} md={3} className={classes.galleryItem}>
                        <Box sx={{ width: '100%', maxWidth: isDesktop ? '300px' : '181px' }}>
                          <UploadImage
                            onImageUpload={(file) => handleGalleryImageUpload(index, file)}
                            uploadType={`gallery-${index}`}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid item xs={12} className={classes.createButtonContainer}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        maxWidth: '295px',
                      }}
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Creating...' : 'Create'}
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Container>
        </section>
        <div>
          <Footer bg toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

CreateMemorial.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default CreateMemorial;
