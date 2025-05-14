import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import Grid from '@mui/material/Grid';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { makeStyles } from 'tss-react/mui';
import {
  Box,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ValidatorForm } from 'react-material-ui-form-validator';
import Pagination from '@mui/material/Pagination';
import 'rsuite/dist/rsuite.min.css';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import Header from '../../../components/Header/DropList';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';
import CrematoriumCard from '../../../components/CrematoriumCard/CrematoriumCard';
import Map from '../../../components/Map';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const useStyles = makeStyles()((theme) => ({
  mainWrap: {
    // Mobile: default block behavior, natural height
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'hidden',
    },
  },
  contentSection: {
    // Mobile: default block behavior
    [theme.breakpoints.up('md')]: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    },
  },
  bannerWrap: {
    position: 'relative', // Common style
    display: 'block', // Default for mobile, ensures it takes full width and stacks children
    // Original mobile-specific styles from before any changes
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      padding: theme.spacing(20, 0, 5),
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(10), // This overrides the paddingTop from down('md') for 'sm'
    },
    // Desktop-specific layout styles
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      overflow: 'hidden',
      paddingTop: theme.spacing(10), // Original desktop paddingTop
      paddingLeft: 0, // Resetting other paddings for the flex container model
      paddingRight: 0,
      paddingBottom: 0,
      textAlign: 'left', // Reset textAlign for desktop
    },
  },
  dataGridContainer: {
    // Mobile: Grid will behave as per its default (likely block, stacking items if not enough space)
    [theme.breakpoints.up('md')]: {
      flexGrow: 1,
      display: 'flex', // Makes children (list and map) flex items
      overflow: 'hidden', // Parent controls overflow, children manage their content
    },
  },
  scrollableList: {
    background: '#FFFF', // Common style, was previously inline
    paddingBottom: '0px', // Resetting bottom padding for desktop
    // Mobile: natural height, default overflow (content will push page down)
    [theme.breakpoints.up('md')]: {
      overflowY: 'auto', // Only scrollable on desktop
      height: '100%', // Takes full height of its flex parent (dataGridContainer)
    },
  },
  mapContainer: {
    // Mobile: natural height and layout as a block element.
    // Map component itself will determine its size based on its props/internal styles.
    [theme.breakpoints.up('md')]: {
      height: '100%', // Takes full height of its flex parent (dataGridContainer)
      display: 'flex', // To make the Map component itself fill this container
      '& > *': {
        // Assuming Map component's root can be targeted to fill
        height: '100%',
        width: '100%',
      },
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

  const [currentPage, setCurrentPage] = React.useState(1);
  const [paginatedCards, setPaginatedCards] = React.useState([]);

  const pageCount = Math.ceil(cremationData.length / cremationCardsPerPage);

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
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          navColor="bg-[#FDEAE4]"
        />
        <section id="home" className={classes.contentSection}>
          <div className={classes.bannerWrap}>
            {isDesktop ? (
              <Box
                sx={{
                  display: 'flex',
                  padding: '46px 30px 0px 30px',
                  flexDirection: 'column',
                  gap: '24px',
                  background: 'white',
                }}
              >
                <Stack spacing={3}>
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>/</BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">Crematoriums</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">Canada</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>/</BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">
                          British Columbia
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>/</BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">Vancouver</BreadcrumbLink>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </Stack>
                <Stack
                  spacing={2}
                  style={{
                    margin: '0px 0px',
                    width: '50%',
                  }}
                  direction={isDesktop ? 'row' : 'column'}
                >
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Canada">Canada</SelectItem>
                      <SelectItem value="USA">USA</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Province" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Ontario">Ontario</SelectItem>
                      <SelectItem value="Alberta">Alberta</SelectItem>
                      <SelectItem value="Manitoba">Manitoba</SelectItem>
                      <SelectItem value="Quebec">Quebec</SelectItem>
                      <SelectItem value="Nova Scotia">Nova Scotia</SelectItem>
                      <SelectItem value="New Brunswick">New Brunswick</SelectItem>
                      <SelectItem value="British Columbia">British Columbia</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="City" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Toronto">Toronto</SelectItem>
                      <SelectItem value="Calgary">Calgary</SelectItem>
                      <SelectItem value="Montreal">Montreal</SelectItem>
                      <SelectItem value="Halifax">Halifax</SelectItem>
                      <SelectItem value="Vancouver">Vancouver</SelectItem>
                      <SelectItem value="Ottawa">Ottawa</SelectItem>
                      <SelectItem value="Edmonton">Edmonton</SelectItem>
                      <SelectItem value="Winnipeg">Winnipeg</SelectItem>
                      <SelectItem value="Saskatoon">Saskatoon</SelectItem>
                    </SelectContent>
                  </Select>
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
              </Stack>
            )}
            <Grid
              container
              direction={isDesktop ? 'row' : 'column-reverse'}
              className={classes.dataGridContainer}
              style={{
                borderRadius: '16px',
                padding: isDesktop ? '16px 0px 0px 16px' : '0px',
              }}
            >
              <Grid container item xs={12} md={6} className={classes.scrollableList}>
                <Grid item className="p-4">
                  {isDesktop && (
                  <Grid item>
                    <Stack
                      spacing={1}
                      style={{
                        marginBottom: '32px',
                      }}
                    >
                      <Typography
                        style={{
                          color: 'var(--colors-gray-light-mode-600, #535862)',
                          fontFamily: '"KindSans"',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: '500',
                          lineHeight: '24px',
                        }}
                      >
                        34 Results (filters applied)
                      </Typography>
                      <div className="flex flex-row gap-50 w-full">
                        <div className="w-[70%]">
                          <Typography
                            style={{
                              color:
                                'var(--colors-gray-light-mode-800, #252B37)',
                              fontFamily: 'Recoleta',
                              fontSize: '32px',
                              fontStyle: 'normal',
                              fontWeight: '400',
                              lineHeight: 'normal',
                            }}
                          >
                            Pet crematoriums in Vancouver, BC, Canada
                          </Typography>
                        </div>
                        <Select>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sort By" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Best Match">Best Match</SelectItem>
                            <SelectItem value="City">City</SelectItem>
                            <SelectItem value="Price - High">Price - High</SelectItem>
                            <SelectItem value="Price - Low">Price - Low</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </Stack>
                  </Grid>
                )}
                  <Grid container item spacing={4}>
                    {paginatedCards.map((card) => (
                      <Grid item md={6} xs={12}>
                        <CrematoriumCard
                          img={card.img}
                          title={card.title}
                          rating={card.rating}
                          reviews={card.reviews}
                          location={card.location.name}
                          pickup={card.pickup}
                          hours={card.hours}
                          price={card.price}
                        />
                      </Grid>
                  ))}
                  </Grid>
                  <Box
                    sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '32px',
                    marginBottom: '32px',
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
                <div className="w-full">
                  <Footer bg toggleDir={onToggleDir} />
                </div>
              </Grid>

              {isDesktop && (
                <Grid item md={6} xs={12} className={classes.mapContainer}>
                  <Map cremationData={cremationData} />
                </Grid>
              )}
            </Grid>
          </div>
        </section>
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
