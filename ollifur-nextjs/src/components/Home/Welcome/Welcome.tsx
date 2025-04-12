'use client';
import React, { useRef, useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {
  useLoadScript,
  LoadScriptProps,
  Autocomplete,
} from '@react-google-maps/api';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import link from '../../../public/text/link'; // Still has path issue, will address later
import { useText, useTextAlign } from '../../../theme/common'; // Still uses tss-react, will address later
import {
  BannerWrap,
  Carousel,
  Slider,
  Slide,
  Inner,
  Text, // Import the styled components
} from './slider-style';
import {
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Icon,
  IconButton,
  InputAdornment,
  Paper,
  Rating,
  Stack,
  TextField,
  Typography,
  Zoom,
} from '@mui/material';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import YouTube from 'react-youtube';
import yt from '../../../youtube'; // Still has path issue, will address later
import CloseIcon from '@mui/icons-material/Close';
import Title from '../../Title';
import imgAPI from '../../../public/images/imgAPI'; // Still has path issue, will address later
import Feature from '../Feature/Feature';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';

interface ChipData {
  label: string;
}

interface LocationState {
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  } | null;
}

const Transition = React.forwardRef(function Transition(props, ref) {
  // eslint-disable-line
  return (
    <Zoom ref={ref} {...props}>
      <></>
    </Zoom>
  );
});

function Welcome() {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const [location, setLocation] = useState<LocationState>({
    address: '',
    coordinates: null,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries: ['places'],
  });

  const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry?.location) {
        setLocation({
          address: place.formatted_address || '',
          coordinates: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          },
        });
      }
    }
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery) {
      params.append('vendor', searchQuery);
    }
    if (location.address) {
      params.append('location', location.address);
      if (location.coordinates) {
        params.append('lat', location.coordinates.lat.toString());
        params.append('lng', location.coordinates.lng.toString());
      }
    }
    // TODO: Actually navigate or use the params
    console.log('Search Params:', params.toString());
  };

  const handleChipClick = (label: string) => {
    setLocation({
      address: label,
      coordinates: null,
    });
    // Trigger search immediately after setting location from chip
    setTimeout(() => handleSearch(), 0);
  };

  // TODO: Migrate useText and useTextAlign from tss-react/mui
  const { classes: textClasses }: any = useText();
  const { classes: alignClasses } = useTextAlign();
  const { t } = useTranslation('common');
  const slider = useRef(null);

  const chipData = [
    { label: 'Vancouver', value: 'Vancouver, BC, Canada' },
    { label: 'Toronto', value: 'Toronto, ON, Canada' },
    { label: 'Calgary', value: 'Calgary, AB, Canada' },
    { label: 'Burnaby', value: 'Burnaby, BC, Canada' },
    { label: 'Surrey', value: 'Surrey, BC, Canada' },
    { label: 'Hamilton', value: 'Hamilton, ON, Canada' },
    { label: 'Ottawa', value: 'Ottawa, ON, Canada' },
    { label: 'Edmonton', value: 'Edmonton, AB, Canada' },
  ];

  const slickOptions = {
    dots: false,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    infinite: true,
    autoplay: false,
    cssEase: 'ease-out',
    fade: isMobile,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          dots: true,
        },
      },
    ],
  };

  return (
    <BannerWrap>
      {' '}
      {/* Use styled component */}
      <Carousel>
        {' '}
        {/* Use styled component */}
        <Slider // Use styled component - Note: react-slick might need specific DOM structure, verify later
          ref={slider} // Assuming react-slick can work with styled components, might need adjustment
          {...slickOptions} // Pass slick options directly if Slider is a wrapper for react-slick
        >
          <Slide>
            {' '}
            {/* Use styled component */}
            <div>
              {' '}
              {/* Keep inner div structure if needed by react-slick */}
              <Inner
                style={{
                  // Use styled component, keep inline styles if needed
                  height: '75%',
                  alignItems: isDesktop ? 'flex-start' : 'center',
                }}
              >
                <Container style={isDesktop ? { padding: 0 } : {}}>
                  <Grid
                    container
                    style={{
                      paddingTop: isDesktop ? '50px' : '0px',
                      marginRight: isDesktop ? '160px' : '0px',
                    }}
                    justifyContent={isDesktop ? 'space-between' : 'center'}
                  >
                    <Grid
                      item
                      md={8}
                      xs={12}
                      style={{
                        padding: isDesktop ? '0px 220px 0px 0px' : '0px',
                      }}
                    >
                      <Box>
                        <Text>
                          {' '}
                          {/* Use styled component */}
                          {isDesktop && (
                            <Stack
                              gap={2}
                              direction={'row'}
                              alignItems={'center'}
                            >
                              <Typography
                                style={{ fontWeight: 700, color: '#553111' }}
                                className={textClasses.supportingText} // Keep using useText for now
                              >
                                Over 1k+ reviews
                              </Typography>
                              <Rating name="read-only" value={5} readOnly />
                            </Stack>
                          )}
                          <Typography
                            className={textClasses.title} // Keep using useText for now
                            component={isDesktop ? 'p' : 'span'}
                          >
                            Cherish the ones you love.{' '}
                            {
                              <span
                                style={{
                                  display: 'inline',
                                  background:
                                    'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 52%, rgba(117, 224, 167, 0.50) 50%, rgba(117, 224, 167, 0.50) 100%)',
                                }}
                              >
                                We'll take care of the rest
                              </span>
                            }
                          </Typography>
                          <Typography
                            style={{
                              width: isDesktop ? '95%' : '100%',
                              marginTop: isDesktop ? '25px' : '10px',
                            }}
                            className={textClasses.supportingText} // Keep using useText for now
                          >
                            At{' '}
                            <Typography
                              component={'span'}
                              className={textClasses.supportingText} // Keep using useText for now
                              style={{ fontWeight: 700 }}
                            >
                              Ollifur
                            </Typography>
                            , we aim to provide your pets with a compassionate
                            farewell, honoring their extraordinary journey with
                            the love and care they deserve.
                          </Typography>
                          <Stack
                            direction={isDesktop ? 'row' : 'column'}
                            spacing={2}
                            style={{ marginTop: '40px' }}
                          >
                            <Button
                              variant="contained"
                              color="primary"
                              fullWidth={isMobile}
                              onClick={() => {
                                // TODO: Fix path issue for link
                                // window.location.href = link.retail.register;
                                console.log('Navigate to register');
                              }}
                              endIcon={<ArrowForwardIcon />}
                            >
                              <Typography
                                style={{
                                  color: 'var(--Gray-700, #FFF)',
                                  fontFamily: 'Inter',
                                  fontSize: '16px',
                                  fontStyle: 'normal',
                                  fontWeight: '600',
                                  lineHeight: '24px',
                                }}
                              >
                                Immediate Need
                              </Typography>
                            </Button>
                            <Button
                              fullWidth={isMobile}
                              sx={{
                                ':hover': {
                                  background: '#fafafa',
                                  boxShadow:
                                    '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)',
                                },
                                color: '#101828',
                                background: '#FFF',
                              }}
                              variant="contained"
                              color="primary"
                              onClick={() => {
                                window.location.href = '/online-memorials';
                              }}
                            >
                              <Typography
                                style={{
                                  color: 'var(--Gray-700, #344054)',
                                  fontFamily: 'Inter',
                                  fontSize: '16px',
                                  fontStyle: 'normal',
                                  fontWeight: '600',
                                  lineHeight: '24px',
                                }}
                              >
                                Memorials
                              </Typography>
                            </Button>
                          </Stack>
                        </Text>
                      </Box>
                    </Grid>
                    <Grid item md={4} xs={12}>
                      {isDesktop ? (
                        <Box>
                          <div>
                            {/* TODO: Fix path issue for img */}
                            <img
                              src={'/images/landing-pic-large.png'}
                              alt="Landing Image"
                            />
                          </div>
                        </Box>
                      ) : (
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '36px',
                          }}
                        >
                          <div>
                            {/* TODO: Fix path issue for img */}
                            <img
                              src={'/images/landing-pic-mobile.png'}
                              alt="Landing Image"
                              width="275px"
                              height="275px"
                            />
                          </div>
                        </Box>
                      )}
                    </Grid>
                  </Grid>
                </Container>

                {isDesktop && (
                  <Box
                    sx={{
                      padding: '26px 42px',
                      position: 'absolute',
                      inset: {
                        lg: '110% 0% 0% 50%',
                        xl: '110% 0% 0% 50%',
                      },
                      width: {
                        lg: '90%',
                        xl: '1106px',
                      },
                      height: {
                        lg: '249px',
                      },
                      transform: 'translateX(-50%)',
                      flexShrink: '0',
                      borderRadius: '12px',
                      background: 'var(--Gray-25, #FCFCFD)',
                      boxShadow:
                        '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)',
                    }}
                    gap={4}
                    display={'flex'}
                    flexDirection={'column'}
                  >
                    <Stack direction={'row'} gap={4}>
                      <TextField
                        fullWidth
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SearchIcon />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          '& .MuiOutlinedInput-input': {
                            color: 'var(--Gray-500, #667085)',
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '24px',
                          },
                          '&.MuiFormControl-root': {
                            borderRadius: '8px',
                            background: 'var(--Gray-100, #F2F4F7)',
                            boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                          },
                          '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                          },
                        }}
                        placeholder="Search for crematoriums"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            handleSearch();
                          }
                        }}
                      />
                      {isLoaded ? (
                        <Box sx={{ width: '100%' }}>
                          <Autocomplete
                            onLoad={onLoad}
                            onPlaceChanged={onPlaceChanged}
                            options={{}} // Consider adding options like types: ['(cities)']
                            className="location-autocomplete" // Keep class for potential global styling
                          >
                            <TextField
                              fullWidth
                              value={location.address}
                              onChange={(e) =>
                                setLocation((prev) => ({
                                  ...prev,
                                  address: e.target.value,
                                }))
                              }
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <LocationOnIcon />
                                  </InputAdornment>
                                ),
                              }}
                              sx={{
                                '& .MuiOutlinedInput-input': {
                                  color: 'var(--Gray-500, #667085)',
                                  fontFamily: 'Inter',
                                  fontSize: '16px',
                                  fontStyle: 'normal',
                                  fontWeight: '400',
                                  lineHeight: '24px',
                                },
                                '&.MuiFormControl-root': {
                                  borderRadius: '8px',
                                  background: 'var(--Gray-100, #F2F4F7)',
                                  boxShadow:
                                    '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                  border: 'none',
                                },
                              }}
                              placeholder="Search by location"
                            />
                          </Autocomplete>
                        </Box>
                      ) : (
                        <TextField
                          fullWidth
                          disabled
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <LocationOnIcon />
                              </InputAdornment>
                            ),
                          }}
                          sx={{
                            '& .MuiOutlinedInput-input': {
                              color: 'var(--Gray-500, #667085)',
                              fontFamily: 'Inter',
                              fontSize: '16px',
                              fontStyle: 'normal',
                              fontWeight: '400',
                              lineHeight: '24px',
                            },
                            '&.MuiFormControl-root': {
                              borderRadius: '8px',
                              background: 'var(--Gray-100, #F2F4F7)',
                              boxShadow:
                                '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                              border: 'none',
                            },
                          }}
                          placeholder="Loading..."
                        />
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSearch}
                      >
                        <SearchIcon />
                      </Button>
                    </Stack>
                    <Typography
                      style={{
                        color: '#000',
                        fontFamily: 'Inter',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '30px',
                      }}
                    >
                      You may be looking for
                    </Typography>
                    <Stack direction={'row'} gap={4}>
                      {chipData.map((data) => (
                        <Chip
                          key={`chip-${data.label}`}
                          label={data.label}
                          variant="filled"
                          onClick={() => handleChipClick(data.value)}
                          sx={{
                            ':hover': {
                              boxShadow:
                                '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.10)',
                            },
                            '& .MuiChip-label': {
                              color: 'var(--Primary-600, #D77F33)',
                              fontFamily: 'Inter',
                              fontSize: '16px',
                              fontStyle: 'normal',
                              fontWeight: '600',
                              lineHeight: '24px',
                            },
                            '&.MuiChip-root': {
                              borderRadius: '4px',
                              backgroundColor: 'var(--Primary-50, #F8EADD)',
                            },
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                )}
              </Inner>
            </div>
          </Slide>
          {/* Add other slides if they exist */}
        </Slider>
      </Carousel>
    </BannerWrap>
  );
}

export default Welcome;
