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
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import styled from '@emotion/styled';
import { MuiTelInput } from 'mui-tel-input';
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';
import StripeIcon from '../../../../public/images/stripe.png';

const useStyles = makeStyles()((theme) => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
    [theme.breakpoints.up('md')]: {
      height: 500,
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

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#884E1B' : '#884E1B',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#884E1B',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

function bookings(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir } = props;

  const handleSubmit = () => {};

  React.useEffect(() => {
    ValidatorForm.addValidationRule('isTruthy', (value) => value);
  });

  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2023-08-07'),
  );
  const [selectedTime, setSelectedTime] = React.useState(null);
  const [selectedDay, setSelectedDay] = React.useState(null);
  const [pickupCheck, setPickupCheck] = React.useState(true);

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
  };

  const [phone, setPhone] = React.useState('');

  const [values, setValues] = React.useState({
    pet_name: '',
    pet_species: '',
    sub_species: '',
    characteristics: '',
    microchipped: '',
    veterinary_records: '',
    adp_records: '',
    owner_name: '',
    email: '',
    phone: '',
    owner_address: '',
    owner_country: '',
    owner_city: '',
    owner_pincode: '',
    pickup_address: '',
    pickup_country: '',
    pickup_city: '',
    pickup_pincode: '',
    cremation_type: '',
    pet_weight: '',
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handlePhoneChange = (newPhone) => {
    setPhone(newPhone);
    setValues({ ...values, phone: newPhone });
  };

  const handlePickupCheck = (event) => {
    setPickupCheck(event.target.checked);
  };

  React.useEffect(() => {
    ValidatorForm.addValidationRule('isTruthy', (value) => value);
  });

  const times = [
    '08 - 09 AM',
    '09 - 10 AM',
    '10 - 11 AM',
    '11 - 12 AM',
    '12 - 01 PM',
    '01 - 02 PM',
    '02 - 03 PM',
    '03 - 04 PM',
    '04 - 05 PM',
    '05 - 06 PM',
  ];

  return (
    <Fragment>
      <Head>
        <title>{brand.retail.name + ' - Bookings'}</title>
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
                    alignContent="start"
                    alignItems="start"
                    spacing={2}
                  >
                    <Grid item>
                      <Typography className={classes.subheading}>
                        Bookings
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className={classes.heading}>
                        Dignity Memorials
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        component="span"
                        className={classes.supportingtext}
                      >
                        Schedule a Date & Time for pickups, Cremations & More
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Container>
        </section>
        <section id="booking section" style={{ marginTop: '5px' }}>
          <Container>
            <Grid
              container
              direction="row"
              style={{
                borderRadius: '16px',
                background: 'var(--gray-50, #f6f7f9)',
                padding: '12px',
                marginBottom: '80px',
              }}
              spacing={2}
            >
              <Grid item sm={9}>
                <Stack spacing={2}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack
                      sx={{
                        border: '1px solid lightgray',
                        padding: '20px',
                        borderRadius: '16px',
                        background: 'var(--primary-50, #F8EADD)',
                      }}
                      spacing={3}
                    >
                      <Stack direction="row" justifyContent="space-between">
                        <Typography
                          style={{
                            color: 'var(--gray-900, #101828)',
                            fontFamily: 'Inter',
                            fontSize: '30px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '38px',
                          }}
                        >
                          Select a Slot
                        </Typography>

                        <DatePicker
                          label=""
                          value={selectedDate}
                          onChange={handleDateChange}
                          slotProps={{
                            textField: {
                              style: {
                                backgroundColor: '#F7F7F7',
                                borderRadius: '10px',
                                fontSize: '16px',
                                fontFamily: 'Arial',
                              },
                            },
                          }}
                        />
                      </Stack>
                      <Typography
                        sx={{
                          color: 'var(--gray-900, #101828)',
                          fontFamily: 'Inter',
                          fontSize: '20px',
                          fontStyle: 'normal',
                          fontWeight: '600',
                          lineHeight: '30px',
                        }}
                        component="span"
                      >
                        Select a date -{' '}
                        <Typography
                          sx={{
                            color: 'var(--gray-400, #98A2B3)',
                            fontFamily: 'Inter',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '30px',
                          }}
                          component="span"
                        >
                          {selectedDate.toLocaleString('default', {
                            month: 'long',
                          })}{' '}
                          {selectedDate.getFullYear()}
                        </Typography>
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          gap: '15px',
                          flexWrap: 'wrap',
                        }}
                      >
                        {[...Array(7)].map((_, index) => (
                          <Button
                            // eslint-disable-next-line react/no-array-index-key
                            key={index}
                            variant={
                              selectedDay === index ? 'contained' : 'outlined'
                            }
                            sx={{
                              borderRadius: '16px',
                              border: '1px solid var(--primary-700, #884E1B)',
                              background:
                                selectedDay === index
                                  ? 'var(--primary-600, #D77F33)'
                                  : 'transparent',
                              width: '80px',
                            }}
                            onClick={() => setSelectedDay(index)}
                          >
                            <Typography
                              sx={{
                                color:
                                  selectedDay === index
                                    ? 'white'
                                    : 'var(--gray-400, #98A2B3)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '30px',
                              }}
                            >
                              {
                                [
                                  'SUN',
                                  'MON',
                                  'TUE',
                                  'WED',
                                  'THU',
                                  'FRI',
                                  'SAT',
                                ][
                                  new Date(
                                    selectedDate.getFullYear(),
                                    selectedDate.getMonth(),
                                    selectedDate.getDate() + index,
                                  ).getDay()
                                ]
                              }

                              <Typography
                                sx={{
                                  color:
                                    selectedDay === index
                                      ? 'white'
                                      : 'var(--gray-900, #101828)',
                                  fontFamily: 'Inter',
                                  fontSize: '20px',
                                  fontStyle: 'normal',
                                  fontWeight: '600',
                                  lineHeight: '30px',
                                }}
                              >
                                {selectedDate.getDate() + index}
                              </Typography>
                            </Typography>
                          </Button>
                        ))}
                      </Box>
                    </Stack>
                  </LocalizationProvider>
                  <Stack
                    sx={{
                      border: '1px solid lightgray',
                      padding: '20px',
                      borderRadius: '16px',
                      background: 'var(--primary-50, #F8EADD)',
                    }}
                    spacing={3}
                  >
                    <Typography
                      sx={{
                        color: 'var(--gray-900, #101828)',
                        fontFamily: 'Inter',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '30px',
                      }}
                      component="span"
                    >
                      Select a date -{' '}
                      <Typography
                        sx={{
                          color: 'var(--gray-400, #98A2B3)',
                          fontFamily: 'Inter',
                          fontSize: '20px',
                          fontStyle: 'normal',
                          fontWeight: '600',
                          lineHeight: '30px',
                        }}
                        component="span"
                      >
                        {selectedDate.toLocaleString('default', {
                          month: 'long',
                        })}{' '}
                        {selectedDate.getFullYear()}
                      </Typography>
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        gap: '15px',
                        flexWrap: 'wrap',
                      }}
                    >
                      {times.map((time, index) => (
                        <Button
                          // eslint-disable-next-line react/no-array-index-key
                          key={index}
                          variant={
                            selectedTime === time ? 'contained' : 'outlined'
                          }
                          sx={{
                            borderRadius: '16px',
                            border: '1px solid var(--primary-700, #884E1B)',
                            background:
                              selectedTime === time
                                ? 'var(--primary-50, #D77F33)'
                                : 'transparent',
                            width: '145px',
                            padding: '12px 16px',
                          }}
                          onClick={() => setSelectedTime(time)}
                        >
                          <Typography
                            sx={{
                              color:
                                selectedTime === time
                                  ? 'white'
                                  : 'var(--gray-900, #101828)',
                              fontFamily: 'Inter',
                              fontSize: '20px',
                              fontStyle: 'normal',
                              fontWeight: '600',
                              lineHeight: '30px',
                            }}
                            component="span"
                          >
                            {time.slice(0, time.length - 2)}
                            <Typography
                              sx={{
                                color:
                                  selectedTime === time
                                    ? 'white'
                                    : 'var(--gray-400, #98A2B3)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                lineHeight: '30px',
                              }}
                              component="span"
                            >
                              {time.slice(time.length - 2, time.length)}
                            </Typography>
                          </Typography>
                        </Button>
                      ))}
                    </Box>
                  </Stack>
                  <Stack
                    container
                    sx={{
                      border: '1px solid lightgray',
                      padding: '20px',
                      borderRadius: '16px',
                      background: 'var(--primary-50, #F8EADD)',
                    }}
                    spacing={4}
                  >
                    <Typography
                      sx={{
                        color: 'var(--gray-900, #101828)',
                        fontFamily: 'Inter',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '30px',
                      }}
                    >
                      Personal Information (PET)
                    </Typography>
                    <Box>
                      <ValidatorForm
                        onSubmit={handleSubmit}
                        onError={(errors) => console.log(errors)}
                      >
                        <Grid container spacing={3}>
                          <Grid item sm={6} xs={12}>
                            <InputLabel
                              shrink
                              htmlFor="pet_name"
                              sx={{
                                color: 'var(--gray-700, #344054)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '20px',
                              }}
                            >
                              Name*
                            </InputLabel>
                            <TextValidator
                              fullWidth
                              className={classes.input}
                              onChange={handleChange('pet_name')}
                              name="pet_name"
                              value={values.first_name}
                              validators={['required']}
                              errorMessages={['this field is required']}
                              sx={{
                                '& .MuiInputBase-input': {
                                  padding: '10px 14px',
                                },
                              }}
                            />
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <InputLabel
                              shrink
                              htmlFor="Species of Pet"
                              sx={{
                                color: 'var(--gray-700, #344054)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '20px',
                              }}
                            >
                              Species of Pet*
                            </InputLabel>
                            <Select
                              labelId="Species of Pet"
                              id="Species of Pet"
                              value={values.pet_species}
                              fullWidth
                              label=""
                              onChange={handleChange('pet_species')}
                              sx={{
                                '& .MuiInputBase-input': {
                                  padding: '10px 14px',
                                },
                              }}
                            >
                              <MenuItem value="Dog">Dog</MenuItem>
                              <MenuItem value="Cat">Cat</MenuItem>
                              <MenuItem value="Bird">Bird</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <InputLabel
                              shrink
                              htmlFor="Sub Species"
                              sx={{
                                color: 'var(--gray-700, #344054)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '20px',
                              }}
                            >
                              Sub Species*
                            </InputLabel>
                            <Select
                              labelId="Sub Species"
                              id="Sub Species"
                              value={values.sub_species}
                              fullWidth
                              label=""
                              onChange={handleChange('sub_species')}
                              sx={{
                                '& .MuiInputBase-input': {
                                  padding: '10px 14px',
                                },
                              }}
                            >
                              <MenuItem value="German Shepherd">
                                German Shepherd
                              </MenuItem>
                              <MenuItem value="Husky">Husky</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <InputLabel
                              shrink
                              htmlFor="Distintive Characteristics"
                              sx={{
                                color: 'var(--gray-700, #344054)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '20px',
                              }}
                            >
                              Distintive Characteristics*
                            </InputLabel>
                            <TextValidator
                              fullWidth
                              className={classes.input}
                              onChange={handleChange('characteristics')}
                              name="characteristics"
                              value={values.characteristics}
                              validators={['required']}
                              errorMessages={['this field is required']}
                              placeholder="White mark on fur across head"
                              sx={{
                                '& .MuiInputBase-input': {
                                  padding: '10px 14px',
                                },
                              }}
                            />
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <InputLabel
                              shrink
                              htmlFor="Are they Microchipped?"
                              sx={{
                                color: 'var(--gray-700, #344054)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '20px',
                              }}
                            >
                              Are they Microchipped?*
                            </InputLabel>
                            <Select
                              labelId="Are they Microchipped?"
                              id="Are they Microchipped?"
                              value={values.microchipped}
                              fullWidth
                              label=""
                              onChange={handleChange('microchipped')}
                              sx={{
                                '& .MuiInputBase-input': {
                                  padding: '10px 14px',
                                },
                              }}
                            >
                              <MenuItem value="Yes">Yes</MenuItem>
                              <MenuItem value="No">No</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <InputLabel
                              shrink
                              htmlFor="Do you have any Veterinary Records?"
                              sx={{
                                color: 'var(--gray-700, #344054)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '20px',
                              }}
                            >
                              Do you have any Veterinary Records?*
                            </InputLabel>
                            <Select
                              labelId="Do you have any Veterinary Records?"
                              id="Do you have any Veterinary Records?"
                              value={values.veterinary_records}
                              fullWidth
                              label=""
                              onChange={handleChange('veterinary_records')}
                              sx={{
                                '& .MuiInputBase-input': {
                                  padding: '10px 14px',
                                },
                              }}
                            >
                              <MenuItem value="Yes">Yes</MenuItem>
                              <MenuItem value="No">No</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <InputLabel
                              shrink
                              htmlFor="Do you have adoption/purchase records?"
                              sx={{
                                color: 'var(--gray-700, #344054)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '20px',
                              }}
                            >
                              Do you have adoption/purchase records?*
                            </InputLabel>
                            <Select
                              labelId="Do you have adoption/purchase records?"
                              id="Do you have adoption/purchase records?"
                              value={values.adp_records}
                              fullWidth
                              label=""
                              onChange={handleChange('adp_records')}
                              sx={{
                                '& .MuiInputBase-input': {
                                  padding: '10px 14px',
                                },
                              }}
                            >
                              <MenuItem value="Yes">Yes</MenuItem>
                              <MenuItem value="No">No</MenuItem>
                            </Select>
                          </Grid>
                        </Grid>
                      </ValidatorForm>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <ReportGmailerrorredIcon
                        sx={{ color: 'var(--gray-500, #667085)' }}
                      />
                      <Typography
                        sx={{
                          color: 'var(--gray-500, #667085)',
                          fontFamily: 'Inter',
                          fontSize: '14px',
                          fontStyle: 'normal',
                          fontWeight: '600',
                          lineHeight: '20px',
                        }}
                      >
                        This information helps us identify your companion and
                        ensure they are taken care exactly as specified by you
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack
                    container
                    sx={{
                      border: '1px solid lightgray',
                      padding: '20px',
                      borderRadius: '16px',
                      background: 'var(--primary-50, #F8EADD)',
                    }}
                    spacing={4}
                  >
                    <Typography
                      sx={{
                        color: 'var(--gray-900, #101828)',
                        fontFamily: 'Inter',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '30px',
                      }}
                    >
                      Personal Information (OWNER)
                    </Typography>
                    <Box>
                      <ValidatorForm
                        onSubmit={handleSubmit}
                        onError={(errors) => console.log(errors)}
                      >
                        <Grid container spacing={3}>
                          <Grid item sm={6} xs={12}>
                            <InputLabel
                              shrink
                              htmlFor="owner_name"
                              sx={{
                                color: 'var(--gray-700, #344054)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '20px',
                              }}
                            >
                              Name*
                            </InputLabel>
                            <TextValidator
                              fullWidth
                              className={classes.input}
                              onChange={handleChange('owner_name')}
                              name="owner_name"
                              value={values.first_name}
                              validators={['required']}
                              errorMessages={['this field is required']}
                              sx={{
                                '& .MuiInputBase-input': {
                                  padding: '10px 14px',
                                },
                              }}
                            />
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <InputLabel
                              shrink
                              htmlFor="phone"
                              sx={{
                                color: 'var(--gray-700, #344054)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '20px',
                              }}
                            >
                              Phone Number
                            </InputLabel>
                            <MuiTelInput
                              fullWidth
                              className={classes.input}
                              onChange={handlePhoneChange}
                              name="phone"
                              value={phone}
                              defaultCountry="CA"
                              validators={['required']}
                              placeholder="+1 (555) 000-0000"
                              errorMessages={['this field is required']}
                              sx={{
                                '& .MuiInputBase-input': {
                                  padding: '10px 14px',
                                },
                              }}
                            />
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <InputLabel
                              shrink
                              htmlFor="email"
                              sx={{
                                color: 'var(--gray-700, #344054)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '20px',
                              }}
                            >
                              Email*
                            </InputLabel>
                            <TextValidator
                              fullWidth
                              className={classes.input}
                              onChange={handleChange('email')}
                              name="email"
                              value={values.email}
                              validators={['required']}
                              errorMessages={['this field is required']}
                              sx={{
                                '& .MuiInputBase-input': {
                                  padding: '10px 14px',
                                },
                              }}
                            />
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <InputLabel
                              shrink
                              htmlFor="owner_address"
                              sx={{
                                color: 'var(--gray-700, #344054)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '20px',
                              }}
                            >
                              Address*
                            </InputLabel>
                            <TextValidator
                              fullWidth
                              className={classes.input}
                              onChange={handleChange('owner_address')}
                              name="owner_address"
                              value={values.owner_address}
                              validators={['required']}
                              errorMessages={['this field is required']}
                              sx={{
                                '& .MuiInputBase-input': {
                                  padding: '10px 14px',
                                },
                              }}
                            />
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <InputLabel
                              shrink
                              htmlFor="owner_country"
                              sx={{
                                color: 'var(--gray-700, #344054)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '20px',
                              }}
                            >
                              Country*
                            </InputLabel>
                            <TextValidator
                              fullWidth
                              className={classes.input}
                              onChange={handleChange('owner_country')}
                              name="owner_country"
                              value={values.owner_country}
                              validators={['required']}
                              errorMessages={['this field is required']}
                              sx={{
                                '& .MuiInputBase-input': {
                                  padding: '10px 14px',
                                },
                              }}
                            />
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <InputLabel
                              shrink
                              htmlFor="owner_city"
                              sx={{
                                color: 'var(--gray-700, #344054)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '20px',
                              }}
                            >
                              City*
                            </InputLabel>
                            <TextValidator
                              fullWidth
                              className={classes.input}
                              onChange={handleChange('owner_city')}
                              name="owner_city"
                              value={values.owner_city}
                              validators={['required']}
                              errorMessages={['this field is required']}
                              sx={{
                                '& .MuiInputBase-input': {
                                  padding: '10px 14px',
                                },
                              }}
                            />
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <InputLabel
                              shrink
                              htmlFor="owner_pincode"
                              sx={{
                                color: 'var(--gray-700, #344054)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '20px',
                              }}
                            >
                              Pincode*
                            </InputLabel>
                            <TextValidator
                              fullWidth
                              className={classes.input}
                              onChange={handleChange('owner_pincode')}
                              name="owner_pincode"
                              value={values.owner_pincode}
                              validators={['required']}
                              errorMessages={['this field is required']}
                              sx={{
                                '& .MuiInputBase-input': {
                                  padding: '10px 14px',
                                },
                              }}
                            />
                          </Grid>
                        </Grid>
                      </ValidatorForm>
                    </Box>
                  </Stack>
                  <Stack
                    container
                    sx={{
                      border: '1px solid lightgray',
                      padding: '20px',
                      borderRadius: '16px',
                      background: 'var(--primary-50, #F8EADD)',
                    }}
                    spacing={4}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Typography
                        sx={{
                          color: 'var(--gray-900, #101828)',
                          fontFamily: 'Inter',
                          fontSize: '20px',
                          fontStyle: 'normal',
                          fontWeight: '600',
                          lineHeight: '30px',
                        }}
                      >
                        Do you also want to Schedule a pickup?
                      </Typography>
                      <FormControlLabel
                        control={
                          <IOSSwitch
                            sx={{ m: 1 }}
                            checked={pickupCheck}
                            onChange={handlePickupCheck}
                          />
                        }
                        label=""
                      />
                    </Box>
                    <Box>
                      <ValidatorForm
                        onSubmit={handleSubmit}
                        onError={(errors) => console.log(errors)}
                      >
                        <Grid container spacing={3}>
                          <Grid item sm={6} xs={12}>
                            <InputLabel
                              shrink
                              htmlFor="pickup_address"
                              sx={{
                                color: !pickupCheck
                                  ? '#cdcdcd'
                                  : 'var(--gray-700, #344054)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '20px',
                              }}
                            >
                              Address
                            </InputLabel>
                            <TextValidator
                              fullWidth
                              disabled={!pickupCheck}
                              className={classes.input}
                              onChange={handleChange('pickup_address')}
                              name="pickup_address"
                              value={values.pickup_address}
                              validators={['required']}
                              errorMessages={['this field is required']}
                              sx={{
                                '& .MuiInputBase-input': {
                                  padding: '10px 14px',
                                },
                              }}
                            />
                          </Grid>

                          <Grid item sm={6} xs={12}>
                            <InputLabel
                              shrink
                              htmlFor="pickup_pincode"
                              sx={{
                                color: !pickupCheck
                                  ? '#cdcdcd'
                                  : 'var(--gray-700, #344054)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '20px',
                              }}
                            >
                              Pincode
                            </InputLabel>
                            <TextValidator
                              fullWidth
                              disabled={!pickupCheck}
                              className={classes.input}
                              onChange={handleChange('pickup_pincode')}
                              name="pickup_pincode"
                              value={values.pickup_pincode}
                              validators={['required']}
                              errorMessages={['this field is required']}
                              sx={{
                                '& .MuiInputBase-input': {
                                  padding: '10px 14px',
                                },
                              }}
                            />
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <InputLabel
                              shrink
                              htmlFor="pickup_city"
                              sx={{
                                color: !pickupCheck
                                  ? '#cdcdcd'
                                  : 'var(--gray-700, #344054)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '20px',
                              }}
                            >
                              City
                            </InputLabel>
                            <TextValidator
                              fullWidth
                              disabled={!pickupCheck}
                              className={classes.input}
                              onChange={handleChange('pickup_city')}
                              name="pickup_city"
                              value={values.pickup_city}
                              validators={['required']}
                              errorMessages={['this field is required']}
                              sx={{
                                '& .MuiInputBase-input': {
                                  padding: '10px 14px',
                                },
                              }}
                            />
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <InputLabel
                              shrink
                              htmlFor="pickup_country"
                              sx={{
                                color: !pickupCheck
                                  ? '#cdcdcd'
                                  : 'var(--gray-700, #344054)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '20px',
                              }}
                            >
                              Country
                            </InputLabel>
                            <TextValidator
                              fullWidth
                              disabled={!pickupCheck}
                              className={classes.input}
                              onChange={handleChange('pickup_country')}
                              name="pickup_country"
                              value={values.pickup_country}
                              validators={['required']}
                              errorMessages={['this field is required']}
                              sx={{
                                '& .MuiInputBase-input': {
                                  padding: '10px 14px',
                                },
                              }}
                            />
                          </Grid>
                        </Grid>
                      </ValidatorForm>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <ReportGmailerrorredIcon
                        sx={{ color: 'var(--gray-500, #667085)' }}
                      />
                      <Typography
                        sx={{
                          color: 'var(--gray-500, #667085)',
                          fontFamily: 'Inter',
                          fontSize: '14px',
                          fontStyle: 'normal',
                          fontWeight: '600',
                          lineHeight: '20px',
                        }}
                      >
                        This Crematorium only offers pickups within the City of
                        Vancouver
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack
                    container
                    sx={{
                      border: '1px solid lightgray',
                      padding: '20px',
                      borderRadius: '16px',
                      background: 'var(--primary-50, #F8EADD)',
                    }}
                    spacing={4}
                  >
                    <Typography
                      sx={{
                        color: 'var(--gray-900, #101828)',
                        fontFamily: 'Inter',
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '30px',
                      }}
                    >
                      Cremation information
                    </Typography>
                    <Box>
                      <ValidatorForm
                        onSubmit={handleSubmit}
                        onError={(errors) => console.log(errors)}
                      >
                        <Grid container spacing={3}>
                          <Grid item sm={6} xs={12}>
                            <InputLabel
                              shrink
                              htmlFor="Cremation Type"
                              sx={{
                                color: 'var(--gray-700, #344054)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '20px',
                              }}
                            >
                              Cremation Type
                            </InputLabel>
                            <Select
                              labelId="Cremation Type"
                              id="Cremation Type"
                              value={values.cremation_type}
                              fullWidth
                              label=""
                              onChange={handleChange('cremation_type')}
                              sx={{
                                '& .MuiInputBase-input': {
                                  padding: '10px 14px',
                                },
                              }}
                            >
                              <MenuItem value="Private Cremation">
                                Private Cremation
                              </MenuItem>
                              <MenuItem value="Public Cremation">
                                Public Cremation
                              </MenuItem>
                            </Select>
                            <Typography
                              sx={{
                                color: 'var(--gray-600, #475467)',
                                fontFamily: 'Inter',
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '20px',
                              }}
                            >
                              Pets will be cremated privately.
                            </Typography>
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <InputLabel
                              shrink
                              htmlFor="Weight of Pet"
                              sx={{
                                color: 'var(--gray-700, #344054)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '20px',
                              }}
                            >
                              Weight of Pet
                            </InputLabel>
                            <Select
                              labelId="Weight of Pet"
                              id="Weight of Pet"
                              value={values.pet_weight}
                              fullWidth
                              label=""
                              onChange={handleChange('pet_weight')}
                              sx={{
                                '& .MuiInputBase-input': {
                                  padding: '10px 14px',
                                },
                              }}
                            >
                              <MenuItem value="0 - 20 lbs / 0 - 9 Kg">
                                0 - 20 lbs / 0 - 9 Kg
                              </MenuItem>
                              <MenuItem value="21 - 40 lbs / 10 - 19 Kg">
                                21 - 40 lbs / 10 - 19 Kg
                              </MenuItem>
                            </Select>
                            <Typography
                              sx={{
                                color: 'var(--gray-600, #475467)',
                                fontFamily: 'Inter',
                                fontSize: '14px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '20px',
                                textDecorationLine: 'underline',
                              }}
                            >
                              Why do we ask for this?
                            </Typography>
                          </Grid>
                        </Grid>
                      </ValidatorForm>
                    </Box>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item sm={3}>
                <div style={{ width: '300px', margin: 'auto' }}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      style={{
                        backgroundColor: 'white',
                        borderBottom: '1px solid #e0e0e0',
                      }}
                    >
                      <Stack>
                        <Typography
                          style={{
                            color: '#000',
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: '24px',
                          }}
                        >
                          Order Review
                        </Typography>
                        <Typography
                          style={{
                            color: '#000',
                            fontFamily: 'Inter',
                            fontSize: '12px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '18px',
                          }}
                        >
                          3 items added
                        </Typography>
                      </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                      {/* Content for Order Review */}
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      style={{
                        backgroundColor: 'white',
                        borderBottom: '1px solid #e0e0e0',
                      }}
                    >
                      <Typography
                        style={{
                          color: '#000',
                          fontFamily: 'Inter',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: '700',
                          lineHeight: '24px',
                        }}
                      >
                        Discount Codes
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      {/* Content for Discount Codes */}
                    </AccordionDetails>
                  </Accordion>

                  <Accordion defaultExpanded>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      style={{
                        backgroundColor: 'white',
                        borderBottom: '1px solid #e0e0e0',
                      }}
                    >
                      <Typography
                        style={{
                          color: '#000',
                          fontFamily: 'Inter',
                          fontSize: '16px',
                          fontStyle: 'normal',
                          fontWeight: '700',
                          lineHeight: '24px',
                        }}
                      >
                        Billing Summary
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ flexDirection: 'column' }}>
                      <div
                        style={{
                          marginBottom: '10px',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography
                          sx={{
                            color: 'var(--dark-dark-3, #4F4F4F)',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '20px',
                          }}
                        >
                          Subtotal
                        </Typography>
                        <Typography
                          sx={{
                            color: 'var(--dark-dark-3, #4F4F4F)',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '20px',
                          }}
                        >
                          $3720.27
                        </Typography>
                      </div>
                      <div
                        style={{
                          marginBottom: '10px',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography
                          sx={{
                            color: 'var(--dark-dark-3, #4F4F4F)',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '20px',
                          }}
                        >
                          Discount
                        </Typography>
                        <Typography
                          sx={{
                            color: 'var(--dark-dark-3, #4F4F4F)',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '20px',
                          }}
                        >
                          -$749.99
                        </Typography>
                      </div>
                      <div
                        style={{
                          marginBottom: '10px',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography
                          sx={{
                            color: 'var(--dark-dark-3, #4F4F4F)',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '20px',
                          }}
                        >
                          Pickup
                        </Typography>
                        <Typography
                          sx={{
                            color: 'var(--dark-dark-3, #4F4F4F)',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '20px',
                          }}
                        >
                          $259.99
                        </Typography>
                      </div>
                      <div
                        style={{
                          marginBottom: '10px',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography
                          sx={{
                            color: 'var(--dark-dark-3, #4F4F4F)',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '20px',
                          }}
                        >
                          Shipping
                        </Typography>
                        <Typography
                          sx={{
                            color: 'var(--dark-dark-3, #4F4F4F)',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '20px',
                          }}
                        >
                          $0.00
                        </Typography>
                      </div>
                      <div
                        style={{
                          marginBottom: '10px',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography
                          sx={{
                            color: 'var(--dark-dark-3, #4F4F4F)',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '20px',
                          }}
                        >
                          Tax
                        </Typography>
                        <Typography
                          sx={{
                            color: 'var(--dark-dark-3, #4F4F4F)',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: '20px',
                          }}
                        >
                          $228.72
                        </Typography>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                  <div
                    style={{
                      margin: '20px 0',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      style={{
                        color: '#000',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        lineHeight: '24px',
                      }}
                    >
                      Grand Total
                    </Typography>
                    <Typography
                      style={{
                        color: '#000',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        lineHeight: '24px',
                      }}
                    >
                      $3,439.00
                    </Typography>
                  </div>

                  <TextField
                    label="Order Comments"
                    variant="outlined"
                    fullWidth
                    placeholder="Anything you'd like us to know..."
                    style={{
                      marginBottom: '15px',
                      '& .MuiFormLabel-root-MuiInputLabel-root': {
                        background: 'black',
                      },
                    }}
                  />

                  <FormControlLabel
                    control={<Checkbox />}
                    label="Please check to acknowledge our Privacy & Terms Policy"
                    style={{ marginBottom: '15px' }}
                  />

                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{
                      borderRadius: '8px',
                      border: '1px solid var(--primary-600, #D77F33)',
                      background: 'var(--primary-600, #D77F33)',
                      boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                    }}
                  >
                    Pay $250
                  </Button>
                  <Box display="flex" justifyContent="center">
                    <img
                      src={StripeIcon}
                      alt="stripe"
                      align="center"
                      style={{
                        marginTop: '10px',
                        height: '23px',
                        width: '91px',
                      }}
                    />
                  </Box>
                </div>
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

bookings.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default bookings;
