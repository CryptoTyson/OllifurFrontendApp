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
  subtotal: {
    color: 'var(--Gray-900, #101828) !important',
    fontFamily: 'Inter',
    fontSize: '14px !important',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '20px !important'
  },
  cost: {
    color: 'var(--Dark-Dark-3, #4F4F4F) !important',
    fontFamily: 'Inter',
    fontSize: '14px !important',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '20px !important'
  },
  subTax: {
    color: 'var(--Gray-400, #98A2B3) !important',
    fontFamily: 'Inter',
    fontSize: '14px !important',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px !important',
    paddingLeft: '9px',
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
    '& .MuiInputBase-input::placeholder': {
      color: '#667085'
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
  isEnabled,
}) => {
  const { classes } = useStyles();
  const [isProcessing, setIsProcessing] = useState(false);
  const [discountCode, setDiscountCode] = useState('');

  // Define base services
  const baseServices = [
    {
      id: 'cremation',
      name: 'Communal Cremation',
      description: 'Shared farewell for your companion. No individual ashes return.',
      amount: 245.00,
      icon: DescriptionOutlinedIcon,
    },
    {
      id: 'memorial',
      name: 'Digital Memorial',
      description: 'Creating Lasting Memories In Our Digital Memorial Space',
      amount: 0,
      icon: MenuBookOutlinedIcon,
    },
  ];

  // Add Home Collection service only if pickup is enabled
  const services = isEnabled ? [
    ...baseServices,
    {
      id: 'collection',
      name: 'Home Collection',
      description: 'A caring solution for retrieving your companion from your home.',
      amount: 30.78,
      icon: DirectionsCarOutlinedIcon,
    }
  ] : baseServices;

  // Calculate totals
  const subtotal = services.reduce((sum, service) => sum + service.amount, 0);
  const discount = discountCode ? 749.99 : 0;
  const tax = (subtotal - discount) * 0.13; // 13% tax rate
  const total = subtotal - discount + tax;

  const handlePayment = async () => {
    try {
      setIsProcessing(true);

      // Calculate service cost (sum of all service amounts)
      const serviceCost = services.reduce((sum, service) => sum + service.amount, 0);

      // Prepare complete booking data with financial information
      const completeBookingData = {
        ...bookingData,
        additionalNotes,
        discountCode,
        status: 'pending',
        payment_status: 'pending',
        subtotal: subtotal.toFixed(2),
        discountAmount: discount.toFixed(2),
        taxAmount: tax.toFixed(2),
        gstAmount: (tax / 2).toFixed(2), // Split tax evenly between GST and PST
        pstAmount: (tax / 2).toFixed(2),
        totalAmount: total.toFixed(2),
        serviceCost: serviceCost.toFixed(2),
        termsAccepted,
        isEnabled, // for pickup_required
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
    <div style={{
      display: 'grid',
      gap: '16px',
    }}
    >
      <div className={classes.orderSummary}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
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
              Order Review
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: '0 16px 16px' }}>
            <Box>
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
          </AccordionDetails>
        </Accordion>
      </div>
      <div className={classes.orderSummary}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{
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
      </div>
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
            Billing Summary
          </Typography>

          <div className={classes.summaryItem}>
            <Typography>Subtotal</Typography>
            <Typography className={classes.subtotal}>${subtotal.toFixed(2)}</Typography>
          </div>
          {discount > 0 && (
          <div className={classes.summaryItem}>
            <Typography>Discount</Typography>
            <Typography className={classes.cost}>-${discount.toFixed(2)}</Typography>
          </div>
        )}
          <div
            className={classes.summaryItem}
            style={{
            marginBottom: '8px'
          }}
          >
            <Typography>Tax</Typography>
            <Typography className={classes.cost}>${tax.toFixed(2)}</Typography>
          </div>
          <div
            className={classes.summaryItem}
            style={{
            marginBottom: '8px'
          }}
          >
            <Typography className={classes.subTax}>GST</Typography>
            <Typography className={classes.cost}>${(tax / 2).toFixed(2)}</Typography>
          </div>
          <div className={classes.summaryItem}>
            <Typography className={classes.subTax}>PST</Typography>
            <Typography className={classes.cost}>${(tax / 2).toFixed(2)}</Typography>
          </div>
          <div style={{
            height: '1px',
            background: '#EAECF0',
            margin: '16px 0',
            width: '100%',
            marginTop: '55px',
          }}
          />
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
            variant="outlined"
            label="Order Comments"
            fullWidth
            multiline
            rows={2}
            placeholder="Anything you'd like us to know..."
            className={classes.input}
            sx={{ marginTop: '16px',
                '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
                    color: '#828282',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '18px'
                  }
                }}
            InputLabelProps={{
              shrink: true,
            }}
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
    pickupAddress: PropTypes.string,
    pickupCity: PropTypes.string,
    pickupPostal: PropTypes.string,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    cremationType: PropTypes.string.isRequired,
    weightRange: PropTypes.string.isRequired,
  }).isRequired,
  termsAccepted: PropTypes.bool.isRequired,
  setTermsAccepted: PropTypes.func.isRequired,
  onPaymentSubmit: PropTypes.func.isRequired,
  additionalNotes: PropTypes.string.isRequired,
  setAdditionalNotes: PropTypes.func.isRequired,
  isEnabled: PropTypes.bool.isRequired,
};

export default OrderSummary;
