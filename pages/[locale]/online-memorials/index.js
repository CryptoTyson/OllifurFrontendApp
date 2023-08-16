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
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';
import HeartsImg from '../../../public/images/memorials.png';
import HeartsImgMd from '../../../public/images/memorials-md.png';
import HeartIcon from '../../../public/images/heart.png';
import DogImg from '../../../public/images/dog-img.png';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HandsHeart from '../../../public/images/Hands-haeart.png';
import DogPic from '../../../public/images/dog-pic.jpeg';

const useStyles = makeStyles()((theme) => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
    [theme.breakpoints.up('md')]: {
      height: '100%',
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
    color: 'var(--primary-700, #884E1B)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '24px',
  },
  heading: {
    color: 'var(--gray-900, #101828)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '44px',
    letterSpacing: '-0.72px',
  },
  supportingtext: {
    color: 'var(--gray-600, #475467)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'italic',
    fontWeight: '400',
    lineHeight: '30px',
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
    color: 'var(--primary-700, #884E1B)',
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

function OnlineMemorials(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir } = props;
  const [cremationType, setCremationType] = React.useState(1);

  const handleTypeChange = (event) => {
    setCremationType(event.target.value);
  };

  React.useEffect(() => {
    ValidatorForm.addValidationRule('isTruthy', (value) => value);
  });

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Fragment>
      <Head>
        <title>{brand.retail.name + ' - Online Memorials'}</title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
        <section id="home">
          <Container>
            <div className={classes.bannerWrap}>
              <div className={classes.inner}>
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
                    direction="row"
                    alignItems="center"
                    spacing={isDesktop ? 0 : 8}
                  >
                    <Grid container item md={6} xs={12} spacing={5}>
                      <Grid item>
                        <Stack alignItems="flex-start" spacing={2}>
                          <Typography
                            style={
                              isDesktop
                                ? {
                                    color: 'var(--gray-900, #101828)',
                                    fontFamily: 'Inter',
                                    fontSize: '60px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '72px',
                                    letterSpacing: '-1.2px',
                                  }
                                : {
                                    color: 'var(--gray-900, #101828)',
                                    fontFamily: 'Inter',
                                    fontSize: '36px',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    lineHeight: '44px',
                                    letterSpacing: '-0.72px',
                                    textAlign: 'start',
                                  }
                            }
                          >
                            Share Cherished memories with everyone
                          </Typography>
                          <Typography
                            style={
                              isDesktop
                                ? {
                                    color: 'var(--gray-600, #475467)',
                                    fontFamily: 'Inter',
                                    fontSize: '20px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '30px',
                                  }
                                : {
                                    color: 'var(--gray-600, #475467)',
                                    fontFamily: 'Inter',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '28px',
                                    textAlign: 'start',
                                  }
                            }
                            component="span"
                          >
                            Forever Remembered,{' '}
                            <Typography
                              style={{
                                color: 'var(--gray-600, #475467)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '30px',
                              }}
                              component="span"
                            >
                              Memorize your pet for free, online, forever.
                            </Typography>
                          </Typography>
                        </Stack>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <Button
                          style={{
                            padding: '12px 20px',
                            borderRadius: '8px',
                            border: '1px solid var(--primary-600, #D77F33)',
                            background: 'var(--primary-600, #D77F33)',
                            boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                          }}
                          variant="contained"
                          fullWidth={!isDesktop}
                        >
                          <Typography
                            style={{
                              color: 'var(--base-white, #FFF)',
                              fontFamily: 'Inter',
                              fontSize: '16px',
                              fontStyle: 'normal',
                              fontWeight: '600',
                              lineHeight: '24px',
                            }}
                          >
                            Create New
                          </Typography>
                        </Button>
                      </Grid>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <img
                        src={isDesktop ? HeartsImg : HeartsImgMd}
                        alt="hearts-img"
                      />
                    </Grid>
                  </Grid>
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
                      <Typography className={classes.heading}>
                        Memorialize your pets here at Ollifur
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        width={isDesktop ? '745px' : 'auto'}
                        className={classes.supportingtext}
                      >
                        Although they leave pawprints on our floors for a brief
                        moment, they also leave imprints on our hearts for a
                        lifetime.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container item spacing={isDesktop ? 12 : 6}>
                    <Grid container item spacing={isDesktop ? 12 : 6}>
                      <Grid
                        container
                        item
                        md={6}
                        xs={12}
                        direction="column"
                        alignItems="start"
                        justifyContent="center"
                        spacing={2}
                      >
                        <Grid item>
                          <img
                            style={{
                              display: 'block',
                            }}
                            src={HeartIcon}
                            alt="Email icon"
                          />
                        </Grid>
                        <Grid item>
                          <Typography
                            style={{
                              color: 'var(--gray-900, #101828)',
                              fontFamily: 'Inter',
                              fontSize: '30px',
                              fontStyle: 'normal',
                              fontWeight: '600',
                              lineHeight: '38px',
                              textAlign: 'start',
                            }}
                          >
                            Create a Tribute
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            style={{
                              color: 'var(--gray-600, #475467)',
                              fontFamily: 'Inter',
                              fontSize: '18px',
                              fontStyle: 'normal',
                              fontWeight: '400',
                              lineHeight: '28px',
                              textAlign: 'start',
                            }}
                          >
                            Share your cherished moments and let their spirit
                            live on in the hearts of those who visit this
                            memorializations page.
                          </Typography>
                        </Grid>
                        <Grid container item>
                          <Stack direction="column" spacing={2}>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems={isDesktop ? 'center' : 'auto'}
                            >
                              <CheckCircleOutlineIcon
                                fontSize={isDesktop ? 'medium' : 'large'}
                                style={{ color: '#D77F33' }}
                              />
                              <Typography
                                style={{
                                  color: 'var(--gray-600, #475467)',
                                  fontFamily: 'Inter',
                                  fontSize: '18px',
                                  fontStyle: 'normal',
                                  fontWeight: '400',
                                  textAlign: 'start',
                                  lineHeight: '28px',
                                }}
                                component="span"
                              >
                                Take a moment to{' '}
                                <Typography
                                  style={{
                                    color: 'var(--gray-600, #475467)',
                                    fontFamily: 'Inter',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '28px',
                                  }}
                                  component="span"
                                >
                                  reflect
                                </Typography>{' '}
                                on all the special moments.
                              </Typography>
                            </Stack>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems={isDesktop ? 'center' : 'auto'}
                            >
                              <CheckCircleOutlineIcon
                                fontSize={isDesktop ? 'medium' : 'large'}
                                style={{ color: '#D77F33' }}
                              />
                              <Typography
                                style={{
                                  color: 'var(--gray-600, #475467)',
                                  fontFamily: 'Inter',
                                  fontSize: '18px',
                                  fontStyle: 'normal',
                                  fontWeight: '700',
                                  textAlign: 'start',
                                  lineHeight: '28px',
                                }}
                                component="span"
                              >
                                Share{' '}
                                <Typography
                                  style={{
                                    color: 'var(--gray-600, #475467)',
                                    fontFamily: 'Inter',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '28px',
                                  }}
                                  component="span"
                                >
                                  your stories & photos, and anecdotes with
                                  others.
                                </Typography>
                              </Typography>
                            </Stack>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems={isDesktop ? 'center' : 'auto'}
                            >
                              <CheckCircleOutlineIcon
                                fontSize={isDesktop ? 'medium' : 'large'}
                                style={{ color: '#D77F33' }}
                              />
                              <Typography
                                style={{
                                  color: 'var(--gray-600, #475467)',
                                  fontFamily: 'Inter',
                                  fontSize: '18px',
                                  fontStyle: 'normal',
                                  fontWeight: '700',
                                  textAlign: 'start',
                                  lineHeight: '28px',
                                }}
                                component="span"
                              >
                                Celebrate{' '}
                                <Typography
                                  style={{
                                    color: 'var(--gray-600, #475467)',
                                    fontFamily: 'Inter',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '28px',
                                  }}
                                  component="span"
                                >
                                  the life of your beloved pet by sharing their
                                  legacy.
                                </Typography>
                              </Typography>
                            </Stack>
                          </Stack>
                        </Grid>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <img
                          src={DogImg}
                          style={
                            isDesktop
                              ? {
                                  borderRadius: '4px',
                                }
                              : {
                                  borderRadius: '4px',
                                  maxWidth: '100%',
                                  maxHeight: '100%',
                                }
                          }
                          alt="dog-img"
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      direction="row-reverse"
                      spacing={isDesktop ? 24 : 6}
                    >
                      <Grid
                        container
                        item
                        md={6}
                        xs={12}
                        direction="column"
                        alignItems="start"
                        justifyContent="center"
                        spacing={2}
                      >
                        <Grid item>
                          <img
                            style={{
                              display: 'block',
                            }}
                            src={HeartIcon}
                            alt="Email icon"
                          />
                        </Grid>
                        <Grid item>
                          <Typography
                            style={{
                              color: 'var(--gray-900, #101828)',
                              fontFamily: 'Inter',
                              fontSize: '30px',
                              fontStyle: 'normal',
                              fontWeight: '600',
                              lineHeight: '38px',
                              textAlign: 'start',
                            }}
                          >
                            Create a Tribute
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            style={{
                              color: 'var(--gray-600, #475467)',
                              fontFamily: 'Inter',
                              fontSize: '18px',
                              fontStyle: 'normal',
                              fontWeight: '400',
                              lineHeight: '28px',
                              textAlign: 'start',
                            }}
                          >
                            Share your cherished moments and let their spirit
                            live on in the hearts of those who visit this
                            memorializations page.
                          </Typography>
                        </Grid>
                        <Grid container item>
                          <Stack direction="column" spacing={2}>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems={isDesktop ? 'center' : 'auto'}
                            >
                              <CheckCircleOutlineIcon
                                fontSize={isDesktop ? 'medium' : 'large'}
                                style={{ color: '#D77F33' }}
                              />
                              <Typography
                                style={{
                                  color: 'var(--gray-600, #475467)',
                                  fontFamily: 'Inter',
                                  fontSize: '18px',
                                  fontStyle: 'normal',
                                  fontWeight: '400',
                                  textAlign: 'start',
                                  lineHeight: '28px',
                                }}
                                component="span"
                              >
                                Take a moment to{' '}
                                <Typography
                                  style={{
                                    color: 'var(--gray-600, #475467)',
                                    fontFamily: 'Inter',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '28px',
                                  }}
                                  component="span"
                                >
                                  reflect
                                </Typography>{' '}
                                on all the special moments.
                              </Typography>
                            </Stack>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems={isDesktop ? 'center' : 'auto'}
                            >
                              <CheckCircleOutlineIcon
                                fontSize={isDesktop ? 'medium' : 'large'}
                                style={{ color: '#D77F33' }}
                              />
                              <Typography
                                style={{
                                  color: 'var(--gray-600, #475467)',
                                  fontFamily: 'Inter',
                                  fontSize: '18px',
                                  fontStyle: 'normal',
                                  fontWeight: '700',
                                  textAlign: 'start',
                                  lineHeight: '28px',
                                }}
                                component="span"
                              >
                                Share{' '}
                                <Typography
                                  style={{
                                    color: 'var(--gray-600, #475467)',
                                    fontFamily: 'Inter',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '28px',
                                  }}
                                  component="span"
                                >
                                  your stories & photos, and anecdotes with
                                  others.
                                </Typography>
                              </Typography>
                            </Stack>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems={isDesktop ? 'center' : 'auto'}
                            >
                              <CheckCircleOutlineIcon
                                fontSize={isDesktop ? 'medium' : 'large'}
                                style={{ color: '#D77F33' }}
                              />
                              <Typography
                                style={{
                                  color: 'var(--gray-600, #475467)',
                                  fontFamily: 'Inter',
                                  fontSize: '18px',
                                  fontStyle: 'normal',
                                  fontWeight: '700',
                                  textAlign: 'start',
                                  lineHeight: '28px',
                                }}
                                component="span"
                              >
                                Celebrate{' '}
                                <Typography
                                  style={{
                                    color: 'var(--gray-600, #475467)',
                                    fontFamily: 'Inter',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '28px',
                                  }}
                                  component="span"
                                >
                                  the life of your beloved pet by sharing their
                                  legacy.
                                </Typography>
                              </Typography>
                            </Stack>
                          </Stack>
                        </Grid>
                      </Grid>
                      <Grid item md={6} xs={12}>
                        <img
                          src={HandsHeart}
                          style={
                            isDesktop
                              ? {
                                  borderRadius: '4px',
                                }
                              : {
                                  borderRadius: '4px',
                                  maxWidth: '100%',
                                  maxHeight: '100%',
                                }
                          }
                          alt="dog-img"
                        />
                      </Grid>
                    </Grid>
                    <Grid container item spacing={isDesktop ? 12 : 6}>
                      <Grid
                        container
                        item
                        md={6}
                        xs={12}
                        direction="column"
                        alignItems="start"
                        justifyContent="center"
                        spacing={2}
                      >
                        <Grid item>
                          <img
                            style={{
                              display: 'block',
                            }}
                            src={HeartIcon}
                            alt="Email icon"
                          />
                        </Grid>
                        <Grid item>
                          <Typography
                            style={{
                              color: 'var(--gray-900, #101828)',
                              fontFamily: 'Inter',
                              fontSize: '30px',
                              fontStyle: 'normal',
                              fontWeight: '600',
                              lineHeight: '38px',
                              textAlign: 'start',
                            }}
                          >
                            Create a Tribute
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography
                            style={{
                              color: 'var(--gray-600, #475467)',
                              fontFamily: 'Inter',
                              fontSize: '18px',
                              fontStyle: 'normal',
                              fontWeight: '400',
                              lineHeight: '28px',
                              textAlign: 'start',
                            }}
                          >
                            Share your cherished moments and let their spirit
                            live on in the hearts of those who visit this
                            memorializations page.
                          </Typography>
                        </Grid>
                        <Grid container item>
                          <Stack direction="column" spacing={2}>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems={isDesktop ? 'center' : 'auto'}
                            >
                              <CheckCircleOutlineIcon
                                fontSize={isDesktop ? 'medium' : 'large'}
                                style={{ color: '#D77F33' }}
                              />
                              <Typography
                                style={{
                                  color: 'var(--gray-600, #475467)',
                                  fontFamily: 'Inter',
                                  fontSize: '18px',
                                  fontStyle: 'normal',
                                  fontWeight: '400',
                                  textAlign: 'start',
                                  lineHeight: '28px',
                                }}
                                component="span"
                              >
                                Take a moment to{' '}
                                <Typography
                                  style={{
                                    color: 'var(--gray-600, #475467)',
                                    fontFamily: 'Inter',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    lineHeight: '28px',
                                  }}
                                  component="span"
                                >
                                  reflect
                                </Typography>{' '}
                                on all the special moments.
                              </Typography>
                            </Stack>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems={isDesktop ? 'center' : 'auto'}
                            >
                              <CheckCircleOutlineIcon
                                fontSize={isDesktop ? 'medium' : 'large'}
                                style={{ color: '#D77F33' }}
                              />
                              <Typography
                                style={{
                                  color: 'var(--gray-600, #475467)',
                                  fontFamily: 'Inter',
                                  fontSize: '18px',
                                  fontStyle: 'normal',
                                  fontWeight: '700',
                                  textAlign: 'start',
                                  lineHeight: '28px',
                                }}
                                component="span"
                              >
                                Share{' '}
                                <Typography
                                  style={{
                                    color: 'var(--gray-600, #475467)',
                                    fontFamily: 'Inter',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '28px',
                                  }}
                                  component="span"
                                >
                                  your stories & photos, and anecdotes with
                                  others.
                                </Typography>
                              </Typography>
                            </Stack>
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems={isDesktop ? 'center' : 'auto'}
                            >
                              <CheckCircleOutlineIcon
                                fontSize={isDesktop ? 'medium' : 'large'}
                                style={{ color: '#D77F33' }}
                              />
                              <Typography
                                style={{
                                  color: 'var(--gray-600, #475467)',
                                  fontFamily: 'Inter',
                                  fontSize: '18px',
                                  fontStyle: 'normal',
                                  fontWeight: '700',
                                  textAlign: 'start',
                                  lineHeight: '28px',
                                }}
                                component="span"
                              >
                                Celebrate{' '}
                                <Typography
                                  style={{
                                    color: 'var(--gray-600, #475467)',
                                    fontFamily: 'Inter',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    lineHeight: '28px',
                                  }}
                                  component="span"
                                >
                                  the life of your beloved pet by sharing their
                                  legacy.
                                </Typography>
                              </Typography>
                            </Stack>
                          </Stack>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        md={6}
                        xs={12}
                        justifyContent="center"
                      >
                        <Grid item>
                          <img
                            src={DogPic}
                            style={
                              isDesktop
                                ? {
                                    borderRadius: '4px',
                                    width: '669',
                                    height: '512px',
                                  }
                                : {
                                    borderRadius: '4px',
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                  }
                            }
                            alt="dog-img"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
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
                      <Typography className={classes.heading}>
                        Recently uploaded Memorials
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={classes.supportingtext}>
                        Love lasts a lifetime
                      </Typography>
                    </Grid>
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

OnlineMemorials.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default OnlineMemorials;
