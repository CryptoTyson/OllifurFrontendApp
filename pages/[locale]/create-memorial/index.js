import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { makeStyles } from 'tss-react/mui';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
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
}));

function CreateMemorial(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir } = props;
  const [profileImage, setProfileImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState(Array(8).fill(null));

  React.useEffect(() => {
    ValidatorForm.addValidationRule('isTruthy', (value) => value);
  });

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const handleProfileImageUpload = (file) => {
    setProfileImage(file);
    // Here you would typically upload the file to your server
    console.log('Profile image uploaded:', file);
  };

  const handleGalleryImageUpload = (index, file) => {
    const newGalleryImages = [...galleryImages];
    newGalleryImages[index] = file;
    setGalleryImages(newGalleryImages);
    // Here you would typically upload the file to your server
    console.log('Gallery image uploaded at index', index, ':', file);
  };

  // Create an array of unique IDs for gallery items
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
                    <Typography sx={{
                        color: 'var(--Primary-600, #D77F33)',
                        textAlign: 'center',
                        fontFamily: 'Inter',
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '32px',
                        [theme.breakpoints.down('sm')]: {
                          fontSize: '18px',
                          lineHeight: '28px',
                        }
                    }}
                    >Oliver (Ollie)
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Typography sx={{
                          color: 'var(--Gray-900, #101828)',
                          textAlign: 'center',
                          fontFamily: 'Inter',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          lineHeight: '24px',
                          [theme.breakpoints.down('sm')]: {
                          fontSize: '14px',
                          lineHeight: '28px',
                        }
                    }}
                    >Dec 2022 — Jun 23rd 2023 (6 years)
                    </Typography>
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
                    <Typography sx={{
                      whiteSpace: 'pre-wrap',
                      color: 'var(--Gray-600, #475467)',
                      fontSize: '18px',
                      fontWeight: '400',
                      lineHeight: '28px',
                      [theme.breakpoints.down('sm')]: {
                        textAlign: 'start',
                      }
                    }}
                    >
                      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate ligula quis ante interdum, sed tincidunt justo tempus. Nulla finibus, odio eu scelerisque cursus, tortor ligula egestas sapien, at ultrices velit lorem ut lorem. Integer malesuada sollicitudin lacus, sit amet pharetra nibh. Nunc vitae diam fringilla, maximus ipsum id, consectetur libero. Maecenas fringilla, erat non faucibus volutpat, nunc turpis rutrum nisl, eu tincidunt nunc enim a justo. Aliquam erat volutpat. Sed pellentesque sagittis libero. Aenean ultrices, enim ac efficitur sollicitudin, sapien turpis elementum risus, eu facilisis odio justo ac justo. Vestibulum at lectus sem. Donec mattis fringilla dui, eu interdum urna volutpat at. Integer ullamcorper mauris eget neque efficitur vulputate. Donec sed fringilla nisi. Cras dapibus, nisl et mattis dapibus, ligula erat varius turpis, sed tempus odio nunc sed arcu

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate ligula quis ante interdum, sed tincidunt justo tempus. Nulla finibus, odio eu scelerisque cursus, tortor ligula egestas sapien, at ultrices velit lorem ut lorem. Integer malesuada sollicitudin lacus, sit amet pharetra nibh. Nunc vitae diam fringilla, maximus ipsum id, consectetur libero. Maecenas fringilla, erat non faucibus volutpat, nunc turpis rutrum nisl, eu tincidunt nunc enim a justo. Aliquam erat volutpat. Sed pellentesque sagittis libero. Aenean ultrices, enim ac efficitur sollicitudin, sapien turpis elementum risus, eu facilisis odio justo ac justo. Vestibulum at lectus sem. Donec mattis fringilla dui, eu interdum urna volutpat at. Integer ullamcorper mauris eget neque efficitur vulputate. Donec sed fringilla nisi. Cras dapibus, nisl et mattis dapibus, ligula erat varius turpis, sed tempus odio nunc sed arcu

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate ligula quis ante interdum, sed tincidunt justo tempus. Nulla finibus, odio eu scelerisque cursus, tortor ligula egestas sapien, at ultrices velit lorem ut lorem. Integer malesuada sollicitudin lacus, sit amet pharetra nibh. Nunc vitae diam fringilla, maximus ipsum id, consectetur libero. Maecenas fringilla, erat non faucibus volutpat, nunc turpis rutrum nisl, eu tincidunt nunc enim a justo. Aliquam erat volutpat. Sed pellentesque sagittis libero. Aenean ultrices, enim ac efficitur sollicitudin, sapien turpis elementum risus, eu facilisis odio justo ac justo. Vestibulum at lectus sem. Donec mattis fringilla dui, eu interdum urna volutpat at. Integer ullamcorper mauris eget neque efficitur vulputate. Donec sed fringilla nisi. Cras dapibus, nisl et mattis dapibus, ligula erat varius turpis, sed tempus odio nunc sed arcu

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate ligula quis ante interdum, sed tincidunt justo tempus. Nulla finibus, odio eu scelerisque cursus, tortor ligula egestas sapien, at ultrices velit lorem ut lorem. Integer malesuada sollicitudin lacus, sit amet pharetra nibh. Nunc vitae diam fringilla, maximus ipsum id, consectetur libero. Maecenas fringilla, erat non faucibus volutpat, nunc turpis rutrum nisl, eu tincidunt nunc enim a justo. Aliquam erat volutpat. Sed pellentesque sagittis libero. Aenean ultrices, enim ac efficitur sollicitudin, sapien turpis elementum risus, eu facilisis odio justo ac justo. Vestibulum at lectus sem. Donec mattis fringilla dui, eu interdum urna volutpat at. Integer ullamcorper mauris eget neque efficitur vulputate. Donec sed fringilla nisi. Cras dapibus, nisl et mattis dapibus, ligula erat varius turpis, sed tempus odio nunc sed arcu`}
                    </Typography>
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
                    >Create
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

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default CreateMemorial;
