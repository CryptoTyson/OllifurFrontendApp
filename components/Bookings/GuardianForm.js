import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import { Grid, InputLabel, Typography } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { MuiTelInput } from 'mui-tel-input';

const useStyles = makeStyles()((theme) => ({
  formSection: {
    background: 'white',
    borderRadius: '12px',
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
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

const GuardianForm = ({ values, handleChange, setValues }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.formSection}>
      <Typography className={classes.sectionTitle}>
        Personal Information (GUARDIAN)
      </Typography>
      <ValidatorForm onSubmit={(e) => e.preventDefault()}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="guardianName">Name</InputLabel>
            <TextValidator
              id="guardianName"
              fullWidth
              value={values.guardianName}
              onChange={handleChange('guardianName')}
              className={classes.input}
              validators={['required']}
              errorMessages={['This field is required']}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="guardianPhone">Phone</InputLabel>
            <MuiTelInput
              id="guardianPhone"
              fullWidth
              value={values.guardianPhone}
              onChange={(value) => setValues({ ...values, guardianPhone: value })}
              className={classes.input}
              defaultCountry="CA"
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor="guardianEmail">Email</InputLabel>
            <TextValidator
              id="guardianEmail"
              fullWidth
              value={values.guardianEmail}
              onChange={handleChange('guardianEmail')}
              className={classes.input}
              validators={['required', 'isEmail']}
              errorMessages={['This field is required', 'Email is not valid']}
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor="guardianAddress">Address</InputLabel>
            <TextValidator
              id="guardianAddress"
              fullWidth
              value={values.guardianAddress}
              onChange={handleChange('guardianAddress')}
              className={classes.input}
              validators={['required']}
              errorMessages={['This field is required']}
            />
          </Grid>
        </Grid>
      </ValidatorForm>
    </div>
  );
};

GuardianForm.propTypes = {
  values: PropTypes.shape({
    guardianName: PropTypes.string.isRequired,
    guardianPhone: PropTypes.string.isRequired,
    guardianEmail: PropTypes.string.isRequired,
    guardianAddress: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  setValues: PropTypes.func.isRequired,
};

export default GuardianForm;
