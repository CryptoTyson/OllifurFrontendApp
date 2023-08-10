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
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';
import emailIcon from '../../../public/images/EmailIcon.png';
import locationIcon from '../../../public/images/LocationIcon.png';
import phoneIcon from '../../../public/images/PhoneIcon.png';
import Contact from '~/components/Forms/Contact';
import DignityMemorials from '../../../public/images/DM_logo_130x40.svg';
import star from '../../../public/images/star-01.svg';
import car from '../../../public/images/car-01.svg';
import hourglass from '../../../public/images/hourglass-02.svg';
import shield from '../../../public/images/shield-01.svg';
import marker from '../../../public/images/marker-pin-02.svg';
import CrematoriumCard from '../../../components/CrematoriumCard/CrematoriumCard';

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
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '60px',
    letterSpacing: '-0.96px',
  },
  supportingtext: {
    color: 'var(--gray-800, #1D2939)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
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
function Crematoriums(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir } = props;
  const [email, setEmail] = React.useState('');
  const [cremationType, setCremationType] = React.useState(1);

  const handleSubmit = () => {};

  const handleChange = (value) => {
    console.log(value);
    setEmail(value);
  };

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
        <title>{brand.retail.name + ' - Crematoriums'}</title>
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
                    md={6}
                    xs={12}
                    direction="column"
                    alignContent="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item>
                      <Typography className={classes.subheading}>
                        Crematoriums
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={classes.heading}>
                        Browse all available Crematoriums
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        component="span"
                        className={classes.supportingtext}
                      >
                        Facing trouble? want something specific you don’t see?{' '}
                        <Typography
                          component="span"
                          className={classes.innerText}
                        >
                          Let us help.
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                  {isDesktop ? (
                    <Grid
                      container
                      item
                      md={12}
                      xs={12}
                      direction="row"
                      alignContent="center"
                      alignItems="center"
                      justifyContent={isDesktop ? 'space-between' : 'center'}
                    >
                      <Grid item>
                        <InputLabel
                          sx={{
                            color: 'var(--gray-700, #344054)',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            lineHeight: '20px',
                          }}
                        >
                          Cremation Type
                        </InputLabel>
                        <Select
                          value={cremationType}
                          label="Cremation Type"
                          onChange={handleTypeChange}
                          sx={{
                            '& .MuiInputBase-input': {
                              padding: '10px 14px',
                              width: '167px',
                              color: 'var(--gray-500, #667085)',
                              fontFamily: 'Inter',
                              fontSize: '16px',
                              fontStyle: 'normal',
                              fontWeight: '400',
                              lineHeight: '24px',
                            },
                          }}
                        >
                          <MenuItem value={1}>Low to High</MenuItem>
                          <MenuItem value={2}>High to Low</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item>
                        <InputLabel
                          sx={{
                            color: 'var(--gray-700, #344054)',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            lineHeight: '20px',
                          }}
                        >
                          Cremation Type
                        </InputLabel>
                        <Select
                          value={cremationType}
                          label="Cremation Type"
                          onChange={handleTypeChange}
                          sx={{
                            '& .MuiInputBase-input': {
                              padding: '10px 14px',
                              width: '167px',
                              color: 'var(--gray-500, #667085)',
                              fontFamily: 'Inter',
                              fontSize: '16px',
                              fontStyle: 'normal',
                              fontWeight: '400',
                              lineHeight: '24px',
                            },
                          }}
                        >
                          <MenuItem value={1}>Low to High</MenuItem>
                          <MenuItem value={2}>High to Low</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item>
                        <InputLabel
                          sx={{
                            color: 'var(--gray-700, #344054)',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            lineHeight: '20px',
                          }}
                        >
                          Cremation Type
                        </InputLabel>
                        <Select
                          value={cremationType}
                          label="Cremation Type"
                          onChange={handleTypeChange}
                          sx={{
                            '& .MuiInputBase-input': {
                              padding: '10px 14px',
                              width: '167px',
                              color: 'var(--gray-500, #667085)',
                              fontFamily: 'Inter',
                              fontSize: '16px',
                              fontStyle: 'normal',
                              fontWeight: '400',
                              lineHeight: '24px',
                            },
                          }}
                        >
                          <MenuItem value={1}>Low to High</MenuItem>
                          <MenuItem value={2}>High to Low</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item>
                        <InputLabel
                          sx={{
                            color: 'var(--gray-700, #344054)',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            lineHeight: '20px',
                          }}
                        >
                          Cremation Type
                        </InputLabel>
                        <Select
                          value={cremationType}
                          label="Cremation Type"
                          onChange={handleTypeChange}
                          sx={{
                            '& .MuiInputBase-input': {
                              padding: '10px 14px',
                              width: '167px',
                              color: 'var(--gray-500, #667085)',
                              fontFamily: 'Inter',
                              fontSize: '16px',
                              fontStyle: 'normal',
                              fontWeight: '400',
                              lineHeight: '24px',
                            },
                          }}
                        >
                          <MenuItem value={1}>Low to High</MenuItem>
                          <MenuItem value={2}>High to Low</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item>
                        <InputLabel
                          sx={{
                            color: 'var(--gray-700, #344054)',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            lineHeight: '20px',
                          }}
                        >
                          Cremation Type
                        </InputLabel>
                        <Select
                          value={cremationType}
                          label="Cremation Type"
                          onChange={handleTypeChange}
                          sx={{
                            '& .MuiInputBase-input': {
                              padding: '10px 14px',
                              width: '167px',
                              color: 'var(--gray-500, #667085)',
                              fontFamily: 'Inter',
                              fontSize: '16px',
                              fontStyle: 'normal',
                              fontWeight: '400',
                              lineHeight: '24px',
                            },
                          }}
                        >
                          <MenuItem value={1}>Low to High</MenuItem>
                          <MenuItem value={2}>High to Low</MenuItem>
                        </Select>
                      </Grid>
                    </Grid>
                  ) : (
                    ''
                  )}
                  <Grid item container spacing={6}>
                    <Grid item xs={12}>
                      <CrematoriumCard />
                    </Grid>
                    <Grid item xs={12}>
                      <CrematoriumCard />
                    </Grid>
                    <Grid item xs={12}>
                      <CrematoriumCard />
                    </Grid>
                    <Grid item xs={12}>
                      <CrematoriumCard />
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

Crematoriums.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Crematoriums;
