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
import { Box, InputAdornment, TextField, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';
import MemorialsCard from '../../../components/MemorialsCard/MemorialsCard';
import SupportBanner from '../../../components/SupportBanner';

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
    color: 'var(--Gray-600, #475467)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'italic',
    fontWeight: '400',
    lineHeight: '30px'
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
}));
function BrowseMemorials(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir } = props;

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
                        Browse all open Memorials
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
                        Although they leave pawprints on our floors for a brief moment, they also leave imprints on our hearts for a lifetime.
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      sx={{
                      mx: '240px',
                      textAlign: 'center',
                    }}
                    >
                      <Typography
                        component="span"
                        className={classes.supportingtext}
                      >
                        ~
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    md={12}
                    xs={12}
                    direction="column"
                    spacing={1}
                  >
                    <Grid item>
                      <Typography className={classes.innerText}>
                        Search Memorials
                      </Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Search"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z" stroke="#98A2B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </InputAdornment>
                          ),
                          sx: {
                            borderRadius: 2,
                          }
                        }}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            padding: '0px 12px',
                            borderRadius: '8px',
                            '& fieldset': {
                              border: '1px solid #D0D5DD',
                              boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)'
                            },
                          },
                          '& .MuiOutlinedInput-input': {
                            padding: '8px 2px',
                            color: '#667085',
                          }
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </div>
              <Grid
                container
                spacing={3}
                sx={{
                  marginTop: isDesktop ? '' : '20px',
                }}
              >
                {
                  Array(12).fill().map(() => (
                    <Grid item xs={12} md={6} lg={4}>
                      <Box>
                        <MemorialsCard image="/images/dog.jpg" />
                      </Box>
                    </Grid>
                ))
                }
              </Grid>
              <SupportBanner />
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

BrowseMemorials.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default BrowseMemorials;
