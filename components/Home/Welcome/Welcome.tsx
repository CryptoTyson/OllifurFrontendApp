import React, { useRef, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import link from '../../../public/text/link';
import { useText, useTextAlign } from '../../../theme/common';
import useStyles from './slider-style';
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
import yt from '../../../youtube';
import CloseIcon from '@mui/icons-material/Close';
import Title from '../../Title';
import imgAPI from '../../../public/images/imgAPI';
import Feature from '../Feature/Feature';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';

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

  const { classes, cx }: any = useStyles();
  const { classes: text }: any = useText();
  const { classes: align } = useTextAlign();
  const { t } = useTranslation('common');
  const slider = useRef(null);

  const chipData = [
    {
      label: 'Vancouver',
    },
    {
      label: 'Toronto',
    },
    {
      label: 'Calgary',
    },
    {
      label: 'Burnaby',
    },
    {
      label: 'Surrey',
    },
    {
      label: 'Hamilton',
    },
    {
      label: 'Ottawa',
    },
    {
      label: 'Edmonton',
    }
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
    <div className={classes.bannerWrap}>
      <div className={classes.carousel}>
        <div {...slickOptions} className={classes.slider}>
          <div className={classes.slide}>
            <div >
              <div
                style={{
                  height: '75%',
                  alignItems: isDesktop ? 'flex-start' : 'center',
                }}
                className={classes.inner}
              >
                <Container style={isDesktop ? { padding: 0 } : {}}>
                  <Grid
                    container
                    style={{
                      paddingTop: isDesktop ? '50px' : '0px',
                    }}
                    justifyContent={isDesktop ? 'space-between' : 'center'}
                  >
                    <Grid item md={8} xs={12}>
                      <Box>
                        <div className={cx(classes.text)}>
                          {isDesktop && (
                            <Stack
                              gap={2}
                              direction={'row'}
                              alignItems={'center'}
                            >
                              <Typography
                                style={{ fontWeight: 700, color: '#553111' }}
                                className={text.supportingText}
                              >
                                Over 1k+ reviews
                              </Typography>
                              <Rating name="read-only" value={5} readOnly />
                            </Stack>
                          )}
                          <Typography
                            className={text.title}
                            component={isDesktop ? 'p' : 'span'}
                          >
                            Cherish the ones you love.
                          </Typography>
                          <Typography
                            style={{
                              display: 'inline',
                              background:
                                'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 52%, rgba(117, 224, 167, 0.50) 50%, rgba(117, 224, 167, 0.50) 100%)',
                            }}
                            component={'span'}
                            className={cx(text.title)}
                          >
                            We’ll take care of the rest
                          </Typography>
                          <Typography
                            style={{
                              width: isDesktop ? '95%' : '100%',
                              marginTop: isDesktop ? '25px' : '10px',
                            }}
                            className={text.supportingText}
                          >
                            At{' '}
                            <Typography
                              component={'span'}
                              className={text.supportingText}
                              style={{ fontWeight: 700 }}
                            >
                              Ollifur
                            </Typography>
                            , we aim to provide your pets with a compassionate
                            farewell, honoring their extraordinary journey with
                            the love and care they deserve.
                          </Typography>
                          <Stack
                            direction={isDesktop ? 'row' : 'column-reverse'}
                            spacing={2}
                            style={{ marginTop: '40px' }}
                          >
                            <Button
                              fullWidth={isMobile}
                              sx={{
                                ':hover': { background: '#FFF' },
                                color: '#344054',
                                background: '#FFF',
                              }}
                              endIcon={<VolunteerActivismOutlinedIcon />}
                              variant="contained"
                              color="primary"
                            >
                              <Typography
                                style={{
                                  color: 'var(--Gray-700, #344054)',
                                  fontFamily: 'Inter',
                                  fontSize: '18px',
                                  fontStyle: 'normal',
                                  fontWeight: '600',
                                  lineHeight: '28px',
                                }}
                              >
                                Pre-plan
                              </Typography>
                            </Button>
                            <Button
                              variant="contained"
                              color="primary"
                              fullWidth={isMobile}
                              href={link.retail.register}
                              endIcon={<ArrowForwardIcon />}
                            >
                              Immediate Need
                            </Button>
                          </Stack>
                          
                        </div>
                      </Box>
                      
                    </Grid>
                    <Grid item md={4} xs={12}>
                      
                    {isDesktop ? (
                  <Box
                    sx={{
                    }}
                  >
                    <div>
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
                      <img
                        src={'/images/landing-pic-mobile.png'}
                        alt="Landing Image"
                        width='275px'
                        height='275px'
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
                    // Replace the fixed inset with responsive values
                    inset: {
                      // Base values for large screens
                      lg: '110% 0% 0% 50%',
                      // Adjusts for extra large screens
                      xl: '110% 0% 0% 50%',
                    },
                    // Make width responsive instead of fixed
                    width: {
                      lg: '90%',
                      xl: '1106px'
                    },
                    // You can also make height responsive if needed
                    height: {
                      lg: '249px'
                    },
                    // Transform to center the box horizontally
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
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                              >
                                <path
                                  d="M17.5 18L14.5834 15.0833M16.6667 10.0833C16.6667 13.9954 13.4954 17.1667 9.58333 17.1667C5.67132 17.1667 2.5 13.9954 2.5 10.0833C2.5 6.17132 5.67132 3 9.58333 3C13.4954 3 16.6667 6.17132 16.6667 10.0833Z"
                                  stroke="#667085"
                                  stroke-width="1.66667"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
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
                      />
                      <TextField
                        fullWidth
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
                            boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                          },
                          '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                          },
                        }}
                        placeholder="Set your location"
                      />
                      <Button variant="contained" color="primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <path
                            d="M17.5 18L14.5834 15.0833M16.6667 10.0833C16.6667 13.9954 13.4954 17.1667 9.58333 17.1667C5.67132 17.1667 2.5 13.9954 2.5 10.0833C2.5 6.17132 5.67132 3 9.58333 3C13.4954 3 16.6667 6.17132 16.6667 10.0833Z"
                            stroke="#fff"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
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
                        label={data.label}
                        variant="filled"
                        onClick={() => {}}
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
                          }
                        }}
                      />))}
                    </Stack>
                  </Box>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
