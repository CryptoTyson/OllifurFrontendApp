import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import { Grid, InputLabel, Typography } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const useStyles = makeStyles()((theme) => ({
  formSection: {
    background: 'white',
    borderRadius: '12px',
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    border: '1px solid #EAECF0',
  },
  sectionTitle: {
    color: '#101828',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: '28px',
    marginBottom: theme.spacing(3),
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
}));

const PickupForm = ({ values, handleChange }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.formSection}>
      <Typography className={classes.sectionTitle}>
        Do you also want to Schedule a pickup?
      </Typography>
      <ValidatorForm onSubmit={(e) => e.preventDefault()}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputLabel htmlFor="pickupAddress">Address</InputLabel>
            <TextValidator
              id="pickupAddress"
              fullWidth
              value={values.pickupAddress}
              onChange={handleChange('pickupAddress')}
              className={classes.input}
              validators={['required']}
              errorMessages={['This field is required']}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="pickupCity">City</InputLabel>
            <TextValidator
              id="pickupCity"
              fullWidth
              value={values.pickupCity}
              onChange={handleChange('pickupCity')}
              className={classes.input}
              validators={['required']}
              errorMessages={['This field is required']}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="pickupPostal">Postal Code</InputLabel>
            <TextValidator
              id="pickupPostal"
              fullWidth
              value={values.pickupPostal}
              onChange={handleChange('pickupPostal')}
              className={classes.input}
              validators={['required']}
              errorMessages={['This field is required']}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption" color="textSecondary">
              This Crematorium only offers pickups within the City of Vancouver
            </Typography>
          </Grid>
        </Grid>
      </ValidatorForm>
    </div>
  );
};

PickupForm.propTypes = {
  values: PropTypes.shape({
    pickupAddress: PropTypes.string.isRequired,
    pickupCity: PropTypes.string.isRequired,
    pickupPostal: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default PickupForm;
