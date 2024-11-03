import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import { Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';
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

const CompanionForm = ({ values, handleChange }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.formSection}>
      <Typography className={classes.sectionTitle}>
        Personal Information (COMPANION)
      </Typography>
      <ValidatorForm onSubmit={(e) => e.preventDefault()}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="name">Name</InputLabel>
            <TextValidator
              id="name"
              fullWidth
              value={values.name}
              onChange={handleChange('name')}
              className={classes.input}
              validators={['required']}
              errorMessages={['This field is required']}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="species">Species of Pet</InputLabel>
            <Select
              id="species"
              fullWidth
              value={values.species}
              onChange={handleChange('species')}
              className={classes.input}
            >
              <MenuItem value="dog">Dog</MenuItem>
              <MenuItem value="cat">Cat</MenuItem>
              <MenuItem value="bird">Bird</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12}>
            <InputLabel htmlFor="characteristics">
              Distinctive Characteristics
            </InputLabel>
            <TextValidator
              id="characteristics"
              fullWidth
              multiline
              rows={3}
              value={values.characteristics}
              onChange={handleChange('characteristics')}
              className={classes.input}
              placeholder="White mark on fur across head"
              validators={['required']}
              errorMessages={['This field is required']}
            />
          </Grid>
        </Grid>
      </ValidatorForm>
    </div>
  );
};

CompanionForm.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    characteristics: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CompanionForm;
