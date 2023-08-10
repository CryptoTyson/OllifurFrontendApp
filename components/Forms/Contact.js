import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useTranslation } from 'next-i18next';
import { MuiTelInput } from 'mui-tel-input';
import { InputLabel, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useText, useTextAlign } from '~/theme/common';
import Checkbox from './Checkbox';
import useStyles from './form-style';

function Contact() {
  const { t } = useTranslation('common');
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const [phone, setPhone] = useState('');

  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    ValidatorForm.addValidationRule('isTruthy', (value) => value);
  });

  const [openNotif, setNotif] = useState(false);

  const [check, setCheck] = useState(false);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = (event) => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  const handlePhoneChange = (newPhone) => {
    setPhone(newPhone);
    setValues({ ...values, phone: newPhone });
  };

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div className={classes.formWrap}>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        key="top right"
        open={openNotif}
        autoHideDuration={4000}
        onClose={handleClose}
        classes={{
          anchorOriginTopRight: classes.notif,
        }}
        action={
          <IconButton onClick={handleClose} color="inherit" size="small">
            <CloseIcon />
          </IconButton>
        }
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Message Sent</span>}
      />
      <Box mb={5} px={{ sm: 25 }}>
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
                htmlFor="last_name"
                sx={{
                  color: 'var(--gray-700, #344054)',
                  fontFamily: 'Inter',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: '20px',
                }}
              >
                Last Name*
              </InputLabel>
              <TextValidator
                fullWidth
                className={classes.input}
                onChange={handleChange('last_name')}
                name="last_name"
                value={values.last_name}
                validators={['required']}
                errorMessages={['this field is required']}
                sx={{
                  '& .MuiInputBase-input': {
                    padding: '10px 14px',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
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
                defaultCountry="US"
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
            <Grid item xs={12}>
              <InputLabel
                shrink
                htmlFor="Message"
                sx={{
                  color: 'var(--gray-700, #344054)',
                  fontFamily: 'Inter',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: '20px',
                }}
              >
                Message
              </InputLabel>
              <TextValidator
                multiline
                fullWidth
                rows="6"
                className={classes.input}
                onChange={handleChange('message')}
                name="Message"
                value={values.message}
                placeholder="Leave us a message..."
              />
            </Grid>
            <Grid item>
              <FormControlLabel
                control={
                  <Checkbox
                    validators={['isTruthy']}
                    errorMessages="This field is required"
                    checked={check}
                    value={check}
                    onChange={(e) => handleCheck(e)}
                    color="primary"
                  />
                }
                label={
                  <Typography
                    component="span"
                    style={{
                      color: 'var(--gray-500, #667085)',
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '24px',
                    }}
                  >
                    You agree to our friendly{' '}
                    <Typography
                      style={{
                        color: 'var(--gray-500, #667085)',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '24px',
                        textDecorationLine: 'underline',
                      }}
                      component="span"
                    >
                      privacy policy.
                    </Typography>
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                size="large"
                fullWidth
              >
                {t('form_send')}
              </Button>
            </Grid>
          </Grid>
        </ValidatorForm>
      </Box>
    </div>
  );
}

export default Contact;
