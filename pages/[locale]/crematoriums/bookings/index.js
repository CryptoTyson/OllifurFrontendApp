import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { makeStyles } from 'tss-react/mui';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import {
  BookingHeader,
  SlotSelection,
  CompanionForm,
  GuardianForm,
  PickupForm,
  OrderSummary,
  CremationInfo,
} from '~/components/Bookings';

const useStyles = makeStyles()(() => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: '#FDF8F5',
  },
}));

function Bookings(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir } = props;

  // Form state
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [values, setValues] = useState({
    name: '',
    species: 'dog',
    subSpecies: 'german_shepherd',
    characteristics: '',
    microchipped: 'yes',
    vetRecords: 'yes',
    adoptionRecords: 'yes',
    guardianName: '',
    guardianPhone: '',
    guardianEmail: '',
    guardianAddress: '',
    guardianCountry: '',
    guardianCity: '',
    guardianPincode: '',
    pickupAddress: '',
    pickupPincode: '',
    pickupCity: '',
    pickupPostal: '',
    pickupCountry: 'Canada',
    cremationType: 'private',
    weightRange: '0 - 20 lbs / 0 - 9 Kg',
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handlePaymentSubmit = () => {
    // This will be called after successful payment initiation
    console.log('Payment initiated');
  };

  // Combine all booking data for the OrderSummary
  const bookingData = {
    ...values,
    date: selectedDate,
    time: selectedTime,
  };

  return (
    <Fragment>
      <Head>
        <title>{brand.retail.name} - Bookings</title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
        <BookingHeader />

        <Container maxWidth="xl" sx={{ pb: 8, marginTop: '-60px', position: 'relative', zIndex: 1 }}>
          <div style={{
            margin: '0 80px',
            borderRadius: '16px',
            padding: '16px 24px',
            backgroundColor: '#F9FAFB',
          }}
          >
            <Grid
              container
              spacing={4}
            >
              <Grid item xs={12} md={8}>
                <SlotSelection
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  selectedTime={selectedTime}
                  setSelectedTime={setSelectedTime}
                />

                <CompanionForm
                  values={values}
                  handleChange={handleChange}
                />

                <GuardianForm
                  values={values}
                  handleChange={handleChange}
                  setValues={setValues}
                />

                <PickupForm
                  values={values}
                  handleChange={handleChange}
                  isEnabled={isEnabled}
                  setIsEnabled={setIsEnabled}
                />

                <CremationInfo
                  values={values}
                  handleChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <OrderSummary
                  bookingData={bookingData}
                  termsAccepted={termsAccepted}
                  setTermsAccepted={setTermsAccepted}
                  onPaymentSubmit={handlePaymentSubmit}
                  additionalNotes={additionalNotes}
                  setAdditionalNotes={setAdditionalNotes}
                  isEnabled={isEnabled}
                />
              </Grid>
            </Grid>
          </div>

        </Container>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

Bookings.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Bookings;
