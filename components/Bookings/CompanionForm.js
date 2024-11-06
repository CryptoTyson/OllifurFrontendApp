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
              placeholder="Ollie"
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
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="subSpecies">Sub Species</InputLabel>
            <Select
              id="subSpecies"
              fullWidth
              value={values.subSpecies}
              onChange={handleChange('subSpecies')}
              className={classes.input}
            >
              <MenuItem value="german_shepherd">German Shepherd</MenuItem>
              <MenuItem value="golden_retriever">Golden Retriever</MenuItem>
              <MenuItem value="labrador">Labrador</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="characteristics">Distintive Characteristics</InputLabel>
            <TextValidator
              id="characteristics"
              fullWidth
              value={values.characteristics}
              placeholder="White mark on fur across head"
              onChange={handleChange('characteristics')}
              className={classes.input}
              validators={['required']}
              errorMessages={['This field is required']}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="microchipped">Are they Microchipped?</InputLabel>
            <Select
              id="microchipped"
              fullWidth
              value={values.microchipped}
              onChange={handleChange('microchipped')}
              className={classes.input}
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="vetRecords">Do you have any Veterinary Records?</InputLabel>
            <Select
              id="vetRecords"
              fullWidth
              value={values.vetRecords}
              onChange={handleChange('vetRecords')}
              className={classes.input}
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel htmlFor="adoptionRecords">Do you have adoption/purchase records?</InputLabel>
            <Select
              id="adoptionRecords"
              fullWidth
              value={values.adoptionRecords}
              onChange={handleChange('adoptionRecords')}
              className={classes.input}
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clipPath="url(#clip0_5689_366157)">
              <path d="M10.0003 6.66663V9.99996M10.0003 13.3333H10.0087M1.66699 7.10224V12.8977C1.66699 13.1015 1.66699 13.2034 1.69002 13.2993C1.71043 13.3843 1.7441 13.4656 1.78979 13.5402C1.84133 13.6243 1.91339 13.6964 2.05752 13.8405L6.1598 17.9428C6.30393 18.0869 6.37599 18.159 6.46009 18.2105C6.53465 18.2562 6.61594 18.2899 6.70097 18.3103C6.79687 18.3333 6.89879 18.3333 7.10261 18.3333H12.898C13.1019 18.3333 13.2038 18.3333 13.2997 18.3103C13.3847 18.2899 13.466 18.2562 13.5406 18.2105C13.6247 18.159 13.6967 18.0869 13.8408 17.9428L17.9431 13.8405C18.0873 13.6964 18.1593 13.6243 18.2109 13.5402C18.2566 13.4656 18.2902 13.3843 18.3106 13.2993C18.3337 13.2034 18.3337 13.1015 18.3337 12.8977V7.10224C18.3337 6.89842 18.3337 6.79651 18.3106 6.7006C18.2902 6.61557 18.2566 6.53428 18.2109 6.45972C18.1593 6.37563 18.0873 6.30356 17.9431 6.15944L13.8408 2.05715C13.6967 1.91302 13.6247 1.84096 13.5406 1.78943C13.466 1.74374 13.3847 1.71006 13.2997 1.68965C13.2038 1.66663 13.1019 1.66663 12.898 1.66663H7.10261C6.89879 1.66663 6.79687 1.66663 6.70097 1.68965C6.61594 1.71006 6.53465 1.74374 6.46009 1.78943C6.37599 1.84096 6.30393 1.91302 6.1598 2.05715L2.05752 6.15944C1.91339 6.30356 1.84133 6.37563 1.78979 6.45972C1.7441 6.53428 1.71043 6.61557 1.69002 6.7006C1.66699 6.79651 1.66699 6.89842 1.66699 7.10224Z" stroke="#344054" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_5689_366157">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <Typography sx={{
              color: 'var(--Gray-500, #667085)',
              fontFamily: 'Inter',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '20px'
          }}
          >
            This information helps us identify your companion and ensure they are taken care exactly as specified by you
          </Typography>
        </div>
      </ValidatorForm>
    </div>
  );
};

CompanionForm.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    subSpecies: PropTypes.string.isRequired,
    characteristics: PropTypes.string.isRequired,
    microchipped: PropTypes.string.isRequired,
    vetRecords: PropTypes.string.isRequired,
    adoptionRecords: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CompanionForm;
