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
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ValidatorForm } from 'react-material-ui-form-validator';
import Pagination from '@mui/material/Pagination';
import { Button, DateRangePicker } from 'rsuite';
// import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';
import CrematoriumCard from '../../components/CrematoriumCard/CrematoriumCard';
import Map from '../../components/Map';
import 'rsuite/dist/rsuite.min.css';
import { AccountCircle } from '@mui/icons-material';

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
      paddingTop: theme.spacing(10),
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
    color: 'var(--Primary-600, #D77F33)',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '30px',
    textDecorationLine: 'underline',
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

const cremationData = [
  {
    img: '/images/Image-1.png',
    title: 'Heavenly Rest Cremations',
    rating: 4.7,
    reviews: 175,
    location: {
      name: 'Calgary, AB',
      lat: 51.0447,
      lng: -114.0719,
    },
    pickup: false,
    hours: '9am - 5pm',
    price: '$220',
  },
  {
    img: '/images/Image-2.png',
    title: 'Eternal Peace Services',
    rating: 4.8,
    reviews: 150,
    location: {
      name: 'Toronto, ON',
      lat: 43.7,
      lng: -79.42,
    },
    pickup: true,
    hours: '24/7',
    price: '$250',
  },
  {
    img: '/images/Image-3.png',
    title: 'Serenity Cremation Services',
    rating: 5.0,
    reviews: 98,
    location: {
      name: 'Montreal, QC',
      lat: 45.5017,
      lng: -73.5673,
    },
    pickup: true,
    hours: '24/7',
    price: '$245',
  },
  {
    img: '/images/Image-4.png',
    title: 'Lasting Memories Crematorium',
    rating: 4.5,
    reviews: 210,
    location: {
      name: 'Halifax, NS',
      lat: 44.6488,
      lng: -63.5752,
    },
    pickup: false,
    hours: '10am - 6pm',
    price: '$200',
  },
  {
    img: '/images/Image-2.png',
    title: 'Eternal Rest Funerals',
    rating: 4.6,
    reviews: 120,
    location: {
      name: 'Edmonton, AB',
      lat: 53.5461,
      lng: -113.4938,
    },
    pickup: true,
    hours: '24/7',
    price: '$235',
  },
  {
    img: '/images/Image-1.png',
    title: 'Tranquil Passage Cremations',
    rating: 4.9,
    reviews: 134,
    location: {
      name: 'Winnipeg, MB',
      lat: 49.8951,
      lng: -97.1384,
    },
    pickup: true,
    hours: '8am - 8pm',
    price: '$210',
  },
  {
    img: '/images/Image-4.png',
    title: 'Harmony Cremation Services',
    rating: 4.4,
    reviews: 89,
    location: {
      name: 'Ottawa, ON',
      lat: 45.4215,
      lng: -75.6972,
    },
    pickup: false,
    hours: '9am - 5pm',
    price: '$225',
  },
  {
    img: '/images/Image-1.png',
    title: 'Peaceful Journey Crematorium',
    rating: 4.8,
    reviews: 160,
    location: {
      name: 'Vancouver, BC',
      lat: 49.2827,
      lng: -123.1207,
    },
    pickup: true,
    hours: '24/7',
    price: '$240',
  },
  {
    img: '/images/DM_logo_130x40.svg',
    title: 'Final Farewell Services',
    rating: 4.7,
    reviews: 143,
    location: {
      name: 'Saskatoon, SK',
      lat: 52.1579,
      lng: -106.67,
    },
    pickup: false,
    hours: '8am - 6pm',
    price: '$215',
  },
];

const cremationCardsPerPage = 4;

function Crematoriums(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir } = props;
  const [cremationType, setCremationType] = React.useState(1);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [paginatedCards, setPaginatedCards] = React.useState([]);

  const pageCount = Math.ceil(cremationData.length / cremationCardsPerPage);

  const handleLocationChange = (event) => {
    setCremationType(event.target.value);
  };

  const handlePriceChange = (event) => {
    setCremationType(event.target.value);
  };

  React.useEffect(() => {
    // Calculate the index of the first and last card on the current page
    const indexOfLastCard = currentPage * cremationCardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cremationCardsPerPage;

    // Slice the array to get only the cards for the current page
    const currentCards = cremationData.slice(indexOfFirstCard, indexOfLastCard);

    // Set the cards for the current page
    setPaginatedCards(currentCards);
  }, [currentPage]);

  React.useEffect(() => {
    ValidatorForm.addValidationRule('isTruthy', (value) => value);
  });

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

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
          <div className={classes.bannerWrap}>
            {isDesktop ? (
              <Box
                sx={{
                  display: 'flex',
                  padding: '96px 0px',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '64px',
                  background: 'white',
                }}
              >
                <Stack spacing={3}>
                  <Typography className={classes.subheading}>
                    Crematoriums
                  </Typography>
                  <Typography className={classes.heading}>
                    Browse all available Crematoriums
                  </Typography>
                  <Typography
                    component="span"
                    className={classes.supportingtext}
                  >
                    Facing trouble? want something specific you don’t see?{' '}
                    <Typography component="span" className={classes.innerText}>
                      Let us help.
                    </Typography>
                  </Typography>
                </Stack>
              </Box>
            ) : (
              <Stack spacing={1} sx={{ m: '32px 16px' }}>
                <Typography
                  style={{
                    color: 'var(--Gray-900, #101828)',
                    fontFamily: 'Inter',
                    fontSize: '30px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '38px',
                  }}
                  align="left"
                >
                  232 Crematoriums in Vancouver
                </Typography>
                <Typography
                  style={{
                    color: 'var(--Gray-600, #475467)',
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '24px',
                  }}
                  align="left"
                >
                  Book a crematorium and anything else you may need.
                </Typography>
                <div
                  style={{
                    background: '#EAECF0',
                    height: '1px',
                    marginTop: '26px',
                  }}
                />
              </Stack>
            )}
            <Grid
              container
              direction={isDesktop ? 'row' : 'column-reverse'}
              style={{
                borderRadius: '16px',
                background: isDesktop ? 'var(--Primary-50, #F8EADD)' : '#FFFF',
                padding: isDesktop ? '16px' : '0px',
              }}
            >
              <Grid
                item
                md={7}
                xs={12}
                style={{ padding: '32px', background: '#FFFF' }}
              >
                {isDesktop && (
                  <Stack spacing={1}>
                    <Typography
                      style={{
                        color: 'var(--Gray-900, #101828)',
                        fontFamily: 'Inter',
                        fontSize: '30px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '38px',
                      }}
                    >
                      232 Crematoriums in Vancouver
                    </Typography>
                    <Typography
                      style={{
                        color: 'var(--Gray-600, #475467)',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '24px',
                      }}
                    >
                      Book a crematorium and anything else you may need.
                    </Typography>
                    <div
                      style={{
                        background: '#EAECF0',
                        height: '1px',
                      }}
                    />
                  </Stack>
                )}
                <Stack
                  spacing={2}
                  style={{
                    margin: '32px 0px',
                  }}
                  direction={isDesktop ? 'row' : 'column'}
                >
                  <Select
                    labelId="location"
                    id="location"
                    value={cremationType}
                    onChange={handleLocationChange}
                    style={{
                      borderRadius: '8px',
                      background: 'var(--Base-White, #FFF)',
                      boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                      width: '100%',
                      height: '44px',
                    }}
                  >
                    <MenuItem value={1}>
                      <Box
                        sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                        {...props}
                      >
                        <img
                          loading="lazy"
                          width="20"
                          srcSet="https://flagcdn.com/w40/ca.png 2x"
                          src="https://flagcdn.com/w20/ca.png"
                          alt=""
                        />
                        Vancouver, BC
                      </Box>
                    </MenuItem>
                    <MenuItem value={2}>
                      <Box
                        sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                        {...props}
                      >
                        <img
                          loading="lazy"
                          width="20"
                          srcSet="https://flagcdn.com/w40/ca.png 2x"
                          src="https://flagcdn.com/w20/ca.png"
                          alt=""
                        />
                        Calgary, AB
                      </Box>
                    </MenuItem>
                    <MenuItem value={3}>
                      <Box
                        sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                        {...props}
                      >
                        <img
                          loading="lazy"
                          width="20"
                          srcSet="https://flagcdn.com/w40/ca.png 2x"
                          src="https://flagcdn.com/w20/ca.png"
                          alt=""
                        />
                        Toronto, ON
                      </Box>
                    </MenuItem>
                  </Select>
                  <DateRangePicker
                    style={{
                      width: '100%',
                    }}
                    placeholder="Select Date Range"
                    showHeader={false}
                    showOneCalendar
                  />
                  <Select
                    labelId="price"
                    id="price"
                    value={cremationType}
                    onChange={handlePriceChange}
                    style={{
                      borderRadius: '8px',
                      background: 'var(--Base-White, #FFF)',
                      boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                      width: '100%',
                      height: '44px',
                    }}
                    startAdornment={
                      <img
                        src="/images/currency-dollar.svg"
                        style={{ marginRight: '10px' }}
                      />
                    }
                  >
                    <MenuItem value={1}>Low - High</MenuItem>
                    <MenuItem value={2}>Low</MenuItem>
                    <MenuItem value={3}>High</MenuItem>
                    <MenuItem value={4}>Cremation Type 4</MenuItem>
                  </Select>
                  <Button
                    labelId="cremation-type"
                    id="cremation-type"
                    style={{
                      borderRadius: '8px',
                      border: '1px solid var(--Gray-300, #D0D5DD)',
                      background: 'var(--Base-White, #FFF)',
                      boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                      width: '100%',
                      height: '44px',
                    }}
                    variant="contained"
                  >
                    <img
                      src="/images/filter-lines.svg"
                      style={{ marginRight: '10px' }}
                    />
                    More Filters
                  </Button>
                </Stack>
                <Stack spacing={2}>
                  {paginatedCards.map((card, index) => (
                    <CrematoriumCard
                      key={index}
                      img={card.img}
                      title={card.title}
                      rating={card.rating}
                      reviews={card.reviews}
                      location={card.location.name}
                      pickup={card.pickup}
                      hours={card.hours}
                      price={card.price}
                    />
                  ))}
                </Stack>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '32px',
                  }}
                >
                  <Pagination
                    count={pageCount}
                    page={currentPage}
                    onChange={handleChangePage}
                    variant="outlined"
                  />
                </Box>
              </Grid>

              <Grid item md={5} xs={12}>
                <Map cremationData={cremationData} />
              </Grid>
            </Grid>
          </div>
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
// const getStaticProps = makeStaticProps(['common']);
// export { getStaticPaths, getStaticProps };

export default Crematoriums;
