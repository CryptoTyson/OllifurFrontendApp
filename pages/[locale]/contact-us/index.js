import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { makeStyles } from 'tss-react/mui';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';
import emailIcon from '../../../public/images/EmailIcon.png';
import locationIcon from '../../../public/images/LocationIcon.png';
import phoneIcon from '../../../public/images/PhoneIcon.png';
import Contact from '~/components/Forms/Contact';

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
    fontSize: '30px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '38px'
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
    color: 'var(--Gray-800, #1D2939)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '30px'
  },
  innerText: {
    color: 'var(--gray-800, #1D2939)',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '30px',
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
}));
function ContactUs(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir } = props;
  const [email, setEmail] = React.useState('');

  const handleSubmit = () => {};

  const handleChange = (value) => {
    console.log(value);
    setEmail(value);
  };

  React.useEffect(() => {
    ValidatorForm.addValidationRule('isTruthy', (value) => value);
  });

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
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
                      marginBottom: '34px',
                    }}
              >
                <Grid
                  container
                  direction="column"
                  alignContent="center"
                  alignItems="center"
                  spacing={8}
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
                        Contact us
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={isDesktop ? classes.heading : classes.mobileHeading}>
                        Our team is here for you
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        component="span"
                        className={classes.supportingtext}
                      >
                        Questions or special requests? Let us make it easier for you.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    md={12}
                    xs={12}
                    direction="row"
                    alignContent="center"
                    alignItems="center"
                    justifyContent={isDesktop ? 'space-around' : 'center'}
                  >
                    <Grid item>
                      <img
                        style={{
                          display: 'block',
                          margin: 'auto',
                          marginBottom: '20px',
                        }}
                        src={emailIcon}
                        alt="Email icon"
                      />
                      <Typography
                        style={{
                          color: 'var(--gray-900, #101828)',
                          textAlign: 'center',
                          fontFamily: 'Inter',
                          fontSize: '20px',
                          fontStyle: 'normal',
                          fontWeight: '600',
                          lineHeight: '30px',
                        }}
                      >
                        Email
                      </Typography>
                      <Typography
                        style={{
                          color: 'var(--gray-600, #475467)',
                          textAlign: 'center',
                          fontFamily: 'Inter',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          marginBottom: '10px',
                          lineHeight: '24px',
                        }}
                      >
                        Our friendly team is here to help.
                      </Typography>
                      <Typography className={classes.button}>
                        Support@Ollifur.com
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        style={{
                          display: 'block',
                          margin: 'auto',
                          marginBottom: '20px',
                        }}
                        src={locationIcon}
                        alt="Location icon"
                      />
                      <Typography
                        style={{
                          color: 'var(--gray-900, #101828)',
                          fontFamily: 'Inter',
                          textAlign: 'center',
                          fontSize: '20px',
                          fontStyle: 'normal',
                          fontWeight: '600',
                          lineHeight: '30px',
                        }}
                      >
                        Office
                      </Typography>
                      <Typography
                        style={{
                          color: 'var(--gray-600, #475467)',
                          fontFamily: 'Inter',
                          textAlign: 'center',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          marginBottom: '10px',
                          lineHeight: '24px',
                        }}
                      >
                        Come say hello at our office HQ.
                      </Typography>
                      <Typography className={classes.button}>
                        595 BURRARD ST VANCOUVER BC
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        style={{
                          display: 'block',
                          margin: 'auto',
                          marginBottom: '20px',
                        }}
                        src={phoneIcon}
                        alt="Phone icon"
                      />
                      <Typography
                        style={{
                          color: 'var(--gray-900, #101828)',
                          fontFamily: 'Inter',
                          textAlign: 'center',
                          fontSize: '20px',
                          fontStyle: 'normal',
                          fontWeight: '600',
                          lineHeight: '30px',
                        }}
                      >
                        Phone
                      </Typography>
                      <Typography
                        style={{
                          color: 'var(--gray-600, #475467)',
                          fontFamily: 'Inter',
                          textAlign: 'center',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          lineHeight: '24px',
                          marginBottom: '10px',
                        }}
                      >
                        Mon-Sun from 8am to 11pm.
                      </Typography>
                      <Typography className={classes.button}>
                        +1 (604) 782 5121
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              <div style={{ borderTop: '1px solid #EAECF0' }} />
            </div>
          </Container>
        </section>
        <section id="contact us" style={{ marginTop: isDesktop ? '96px' : '0px', marginBottom: '16px' }}>
          <Container>
            <Grid
              container
              direction="column"
              alignContent="center"
              alignItems="center"
              spacing={4}
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
                    Contact us
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={isDesktop ? classes.heading : classes.mobileHeading}>
                    Get in touch
                  </Typography>
                </Grid>
                <Grid item container justifyContent="center">
                  <Typography
                    component="span"
                    className={classes.supportingtext}
                  >
                    We will call or email within 12 hours of receiving your
                    message.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                item
                md={12}
                xs={12}
                direction="row"
                alignContent="center"
                alignItems="center"
                justifyContent="center"
              >
                <Grid item>
                  <Contact />
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </section>
        <div>
          <Footer bg toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

ContactUs.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)

export default ContactUs;
