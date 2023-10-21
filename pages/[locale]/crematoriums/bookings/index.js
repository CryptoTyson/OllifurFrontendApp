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
  TextField,
  Typography,
} from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';
import { MuiTelInput } from 'mui-tel-input';

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

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
  };

  const [phone, setPhone] = React.useState('');

  const [values, setValues] = React.useState({
    first_name: '',
    pet_species: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handlePhoneChange = (newPhone) => {
    setPhone(newPhone);
    setValues({ ...values, phone: newPhone });
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
  const [selectedTime, setSelectedTime] = React.useState(null);
  const [selectedDay, setSelectedDay] = React.useState(null);

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
                              htmlFor="first_name"
                              sx={{
                                color: 'var(--gray-700, #344054)',
                                fontFamily: 'Inter',
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                lineHeight: '20px',
                              }}
                            >
                              First Name*
                            </InputLabel>
                            <TextValidator
                              fullWidth
                              className={classes.input}
                              onChange={handleChange('first_name')}
                              name="first_name"
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
                      <Typography style={{ fontWeight: 500 }}>
                        Order Review
                      </Typography>
                      <Typography style={{ marginLeft: 'auto' }}>
                        3 items added
                      </Typography>
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
                      <Typography style={{ fontWeight: 500 }}>
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
                      <Typography style={{ fontWeight: 500 }}>
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
                        <Typography>Subtotal</Typography>
                        <Typography>$3720.27</Typography>
                      </div>
                      <div
                        style={{
                          marginBottom: '10px',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography>Discount</Typography>
                        <Typography>-$749.99</Typography>
                      </div>
                      <div
                        style={{
                          marginBottom: '10px',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography>Pickup</Typography>
                        <Typography>$259.99</Typography>
                      </div>
                      <div
                        style={{
                          marginBottom: '10px',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography>Shipping</Typography>
                        <Typography>$0.00</Typography>
                      </div>
                      <div
                        style={{
                          marginBottom: '10px',
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography>Tax</Typography>
                        <Typography>$228.72</Typography>
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
                    <Typography style={{ fontSize: '20px', fontWeight: 500 }}>
                      Grand Total
                    </Typography>
                    <Typography style={{ fontSize: '20px', fontWeight: 500 }}>
                      $3,439.00
                    </Typography>
                  </div>

                  <TextField
                    label="Order Comments"
                    variant="outlined"
                    fullWidth
                    placeholder="Anything you'd like us to know..."
                    style={{ marginBottom: '15px' }}
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
                      padding: '15px',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      fontSize: '16px',
                    }}
                  >
                    Pay $250
                  </Button>

                  <Typography
                    align="center"
                    style={{
                      marginTop: '10px',
                      fontSize: '12px',
                      color: 'gray',
                    }}
                  >
                    Powered by Stripe
                  </Typography>
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
