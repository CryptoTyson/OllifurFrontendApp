import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  CircularProgress,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import stripe from '../../lib/stripe';

const useStyles = makeStyles()((theme) => ({
  orderSummary: {
    background: 'white',
    borderRadius: '12px',
    padding: theme.spacing(0),
    border: '1px solid #EAECF0',
    '& .MuiAccordion-root': {
      boxShadow: 'none',
      '&:before': {
        display: 'none',
      },
    },
  },
  serviceItem: {
    display: 'flex',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  serviceIcon: {
    width: '40px',
    height: '40px',
    color: '#475467',
  },
  serviceContent: {
    flex: 1,
  },
  serviceDescription: {
    color: '#667085',
    fontSize: '14px',
    marginTop: '4px',
  },
  summaryItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    '& .MuiTypography-root': {
      color: '#475467',
      fontSize: '14px',
      lineHeight: '20px',
    },
  },
  input: {
    marginBottom: theme.spacing(2),
    '& .MuiInputBase-input': {
      background: 'white',
      borderRadius: '8px',
      padding: '10px 14px',
      height: '24px',
    },
    '& .MuiOutlinedInput-root': {
      background: 'white',
      borderRadius: '8px',
      '& fieldset': {
        borderColor: '#EAECF0',
      },
      '&:hover fieldset': {
        borderColor: '#D77F33',
      },
    },
  },
  payButton: {
    background: '#D77F33',
    color: 'white',
    borderRadius: '8px',
    padding: '10px',
    height: '44px',
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: 600,
    '&:hover': {
      background: '#884E1B',
    },
  },
  removeLink: {
    color: '#D77F33',
    fontSize: '14px',
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const OrderSummary = ({
  bookingData,
  termsAccepted,
  setTermsAccepted,
  onPaymentSubmit,
  additionalNotes,
  setAdditionalNotes,
}) => {
  const { classes } = useStyles();
  const [isProcessing, setIsProcessing] = useState(false);
  const [discountCode, setDiscountCode] = useState('');

  // Define services based on booking data
  const services = [
    {
      id: 'cremation',
      name: 'Communal Cremation',
      description: 'Shared farewell for your companion. No individual ashes return.',
      amount: 245.00,
      icon: DescriptionOutlinedIcon,
    },
    {
      id: 'collection',
      name: 'Home Collection',
      description: 'A caring solution for retrieving your companion from your home.',
      amount: 30.78,
      icon: DirectionsCarOutlinedIcon,
    },
    {
      id: 'memorial',
      name: 'Digital Memorial',
      description: 'Creating Lasting Memories In Our Digital Memorial Space',
      amount: 0,
      icon: MenuBookOutlinedIcon,
    },
  ];

  // Calculate totals
  const subtotal = services.reduce((sum, service) => sum + service.amount, 0);
  const discount = discountCode ? 749.99 : 0;
  const tax = (subtotal - discount) * 0.13; // 13% tax rate
  const total = subtotal - discount + tax;

  const handlePayment = async () => {
    try {
      setIsProcessing(true);

      // Prepare complete booking data
      const completeBookingData = {
        ...bookingData,
        additionalNotes,
        discountCode,
        status: 'pending',
        payment_status: 'pending'
      };

      // Create booking first
      const bookingResponse = await fetch('/api/create-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookingData: completeBookingData }),
      });

      if (!bookingResponse.ok) {
        throw new Error('Failed to create booking');
      }

      const { booking } = await bookingResponse.json();

      if (!booking || !booking.id) {
        throw new Error('No booking ID received from server');
      }

      // Format services for Stripe
      const formattedServices = services.map(service => ({
        name: service.name,
        description: service.description,
        amount: service.amount,
      }));

      // Pass booking ID to Stripe for metadata
      await stripe.initiatePayment(completeBookingData, formattedServices, booking.id);

      onPaymentSubmit();
    } catch (error) {
      console.error('Payment process failed:', error);
      // Handle payment error (show error message to user)
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className={classes.orderSummary}>
      <Box sx={{ padding: '16px' }}>
        <Typography
          variant="h6"
          sx={{
            color: '#101828',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '24px',
            marginBottom: '16px',
          }}
        >
          Order Review
        </Typography>
        <Typography sx={{ color: '#475467', fontSize: '14px', marginBottom: '24px' }}>
          {services.length} items in cart
        </Typography>

        {services.map((service) => (
          <div key={service.id} className={classes.serviceItem}>
            <service.icon className={classes.serviceIcon} />
            <div className={classes.serviceContent}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Typography sx={{ fontWeight: 500 }}>{service.name}</Typography>
                <Typography sx={{ fontWeight: 600 }}>
                  {service.amount === 0 ? 'FREE' : `$${service.amount.toFixed(2)}`}
                </Typography>
              </Box>
              <Typography className={classes.serviceDescription}>
                {service.description}
              </Typography>
            </div>
          </div>
        ))}
      </Box>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            padding: '16px',
            '& .MuiAccordionSummary-content': {
              margin: 0,
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: '#101828',
              fontSize: '16px',
              fontWeight: 700,
              lineHeight: '24px',
            }}
          >
            Discount Codes
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: '0 16px 16px' }}>
          <TextField
            fullWidth
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className={classes.input}
            placeholder="Enter discount code"
          />
        </AccordionDetails>
      </Accordion>

      <Box sx={{ padding: '16px' }}>
        <Typography
          variant="h6"
          sx={{
            color: '#101828',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '24px',
            marginBottom: '16px',
          }}
        >
          Billing Summary
        </Typography>

        <div className={classes.summaryItem}>
          <Typography>Subtotal</Typography>
          <Typography>${subtotal.toFixed(2)}</Typography>
        </div>
        {discount > 0 && (
          <div className={classes.summaryItem}>
            <Typography>Discount</Typography>
            <Typography>-${discount.toFixed(2)}</Typography>
          </div>
        )}
        <div className={classes.summaryItem}>
          <Typography>Tax</Typography>
          <Typography>${tax.toFixed(2)}</Typography>
        </div>
        <div className={classes.summaryItem} style={{ marginTop: '16px' }}>
          <Typography
            variant="h6"
            sx={{
              color: '#101828 !important',
              fontSize: '16px !important',
              fontWeight: '700 !important',
            }}
          >
            Grand Total
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#101828 !important',
              fontSize: '16px !important',
              fontWeight: '700 !important',
            }}
          >
            ${total.toFixed(2)}
          </Typography>
        </div>

        <TextField
          fullWidth
          multiline
          rows={4}
          placeholder="Anything you'd like us to know..."
          className={classes.input}
          sx={{ marginTop: '16px' }}
          value={additionalNotes}
          onChange={(e) => setAdditionalNotes(e.target.value)}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
          }
          label={
            <Typography sx={{ fontSize: '14px' }}>
              Please check to acknowledge our{' '}
              <Typography
                component="span"
                sx={{ color: '#D77F33', display: 'inline' }}
              >
                Privacy & Terms Policy
              </Typography>
            </Typography>
          }
          sx={{ mb: 2 }}
        />

        <Button
          fullWidth
          className={classes.payButton}
          onClick={handlePayment}
          disabled={!termsAccepted || isProcessing}
        >
          {isProcessing ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            `Pay $${total.toFixed(2)}`
          )}
        </Button>
      </Box>
    </div>
  );
};

OrderSummary.propTypes = {
  bookingData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    characteristics: PropTypes.string,
    guardianName: PropTypes.string.isRequired,
    guardianPhone: PropTypes.string.isRequired,
    guardianEmail: PropTypes.string.isRequired,
    guardianAddress: PropTypes.string.isRequired,
    pickupAddress: PropTypes.string.isRequired,
    pickupCity: PropTypes.string.isRequired,
    pickupPostal: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  termsAccepted: PropTypes.bool.isRequired,
  setTermsAccepted: PropTypes.func.isRequired,
  onPaymentSubmit: PropTypes.func.isRequired,
  additionalNotes: PropTypes.string.isRequired,
  setAdditionalNotes: PropTypes.func.isRequired,
};

export default OrderSummary;
