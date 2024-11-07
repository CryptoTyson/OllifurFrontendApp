import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import { Grid, InputLabel, Typography, MenuItem, Tooltip } from '@mui/material';
import { ValidatorForm, SelectValidator } from 'react-material-ui-form-validator';

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
    color: '#667085',
    marginBottom: theme.spacing(2),
    '& .MuiInputBase-input::placeholder': {
      color: '#667085'
    },
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
  helperText: {
    color: '#667085',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px',
    marginTop: theme.spacing(1),
  },
  tooltipText: {
    textDecoration: 'underline',
    cursor: 'help',
  }
}));

const cremationTypes = [
  { value: 'private', label: 'Private Cremation', description: 'Pets will be cremated privately.' },
  { value: 'communal', label: 'Communal Cremation', description: 'Pets will be cremated with other pets.' }
];

const weightRanges = [
  '0 - 20 lbs / 0 - 9 Kg',
  '21 - 50 lbs / 9.5 - 23 Kg',
  '51 - 100 lbs / 23.5 - 45 Kg',
  '101+ lbs / 45.5+ Kg'
];

const CremationInfo = ({ values, handleChange }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.formSection}>
      <Typography className={classes.sectionTitle}>
        Cremation information
      </Typography>
      <ValidatorForm onSubmit={(e) => e.preventDefault()}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="cremationType">Cremation Type</InputLabel>
            <SelectValidator
              id="cremationType"
              fullWidth
              value={values.cremationType}
              onChange={handleChange('cremationType')}
              className={classes.input}
              validators={['required']}
              errorMessages={['This field is required']}
              select
            >
              {cremationTypes.map((type) => (
                <MenuItem key={type.value} value={type.value}>
                  {type.label}
                </MenuItem>
              ))}
            </SelectValidator>
            {values.cremationType && (
              <Typography className={classes.helperText}>
                {cremationTypes.find(type => type.value === values.cremationType)?.description}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="weightRange">Weight of Pet</InputLabel>
            <SelectValidator
              id="weightRange"
              fullWidth
              value={values.weightRange}
              onChange={handleChange('weightRange')}
              className={classes.input}
              validators={['required']}
              errorMessages={['This field is required']}
              select
            >
              {weightRanges.map((range) => (
                <MenuItem key={range} value={range}>
                  {range}
                </MenuItem>
              ))}
            </SelectValidator>
            <Typography className={classes.helperText}>
              <Tooltip
                title="The weight of your pet helps us prepare the appropriate equipment and resources for the cremation process"
                placement="top"
                arrow
              >
                <span className={classes.tooltipText}>Why do we ask for this?</span>
              </Tooltip>
            </Typography>
          </Grid>
        </Grid>
      </ValidatorForm>
    </div>
  );
};

CremationInfo.propTypes = {
  values: PropTypes.shape({
    cremationType: PropTypes.string.isRequired,
    weightRange: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CremationInfo;
