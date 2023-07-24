import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useTranslation } from 'next-i18next';
import { useTheme, alpha, styled } from '@mui/material/styles';
import { InputLabel } from '@mui/material';
import { useText } from '~/theme/common';
import SocialAuth from './SocialAuth';
import AuthFrame from './AuthFrame';
import useStyles from './form-style';

const BootstrapInput = styled(TextValidator)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 8,
    position: 'relative',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

function Login() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const [values, setValues] = useState({
    email: ' ',
    password: ' ',
  });
  // Media query
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== values.password) {
        return false;
      }
      return true;
    });
  });

  const [check, setCheck] = useState(false);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = (event) => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    console.log('data submited');
  };

  return (
    <AuthFrame
      title={t('login_subtitle')}
      type="login"
      subtitle={t('auth_desc')}
    >
      <div>
        <div className={classes.head}>
          <h3
            className={
              isDesktop ? text.subtitle : cx(text.title, text.textPrimary)
            }
          >
            {t('login_title')}
          </h3>
        </div>
        <SocialAuth />
        <div className={classes.separator}>
          <Typography>{t('login_or')}</Typography>
        </div>
        <ValidatorForm
          onError={(errors) => console.log(errors)}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={3}>
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
                Email
              </InputLabel>
              <BootstrapInput
                className={classes.input}
                onChange={handleChange('email')}
                value={values.email}
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', 'Email is not valid']}
                id="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                type="password"
                fullWidth
                variant="filled"
                className={classes.input}
                label={t('login_password')}
                validators={['required']}
                onChange={handleChange('password')}
                errorMessages={['This field is required']}
                name="password"
                value={values.password}
              />
            </Grid>
          </Grid>
          <div className={classes.formHelper}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={check}
                  onChange={(e) => handleCheck(e)}
                  color="secondary"
                  value={check}
                  className={classes.check}
                />
              }
              label={<span>{t('login_remember')}</span>}
            />
            <Button size="small" className={classes.buttonLink} href="#">
              {t('login_forgot')}
            </Button>
          </div>
          <div className={classes.btnArea}>
            <Button
              variant="contained"
              className={classes.buttonLarge}
              fullWidth
              type="submit"
              color="secondary"
              size="large"
            >
              {t('continue')}
            </Button>
          </div>
        </ValidatorForm>
      </div>
    </AuthFrame>
  );
}

export default Login;
