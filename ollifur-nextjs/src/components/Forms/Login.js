import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useTheme } from '@mui/material/styles';
import { Box, InputLabel, Stack } from '@mui/material';
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import useStyles from './form-style';
import OllifurLogo from '../../public/images/Ollifur.png';
import googleIcon from '../../public/images/google.svg';
import { auth } from '../../lib/firebase';

function Login() {
  const { classes } = useStyles();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  // Media query
  const theme = useTheme();
  const router = useRouter();
  const { locale } = router.query;
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== values.password) {
        return false;
      }
      return true;
    });
  });

  const [check, setCheck] = useState(false);

  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      console.log(userCredential.user);
      localStorage.setItem('authToken', await userCredential.user.getIdToken());
      router.replace(`/${locale}`);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = (event) => {
    setCheck(event.target.checked);
  };

  const handleSubmit = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
      console.log(userCredential.user);
      localStorage.setItem('authToken', await userCredential.user.getIdToken());
      router.replace(`/${locale}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box mx={isDesktop ? 50 : 0}>
      <Grid
        container
        direction="column"
        alignContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <img src={OllifurLogo} alt="Logo" />
        </Grid>
        <Grid item>
          <Typography
            style={{
              color: 'var(--gray-900, #101828)',
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: '30px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '38px',
            }}
          >
            Log in to your account
          </Typography>
          <Typography
            style={{
              color: 'var(--gray-600, #475467)',
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '24px',
            }}
          >
            Welcome back! Please enter your details.
          </Typography>
        </Grid>
        <Grid item>
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
                  placeholder="Enter your email"
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
                  htmlFor="password"
                  sx={{
                    color: 'var(--gray-700, #344054)',
                    fontFamily: 'Inter',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '20px',
                  }}
                >
                  Password*
                </InputLabel>
                <TextValidator
                  fullWidth
                  className={classes.input}
                  type="password"
                  onChange={handleChange('password')}
                  name="password"
                  value={values.password}
                  validators={['required']}
                  errorMessages={['this field is required']}
                  placeholder="Create a password"
                  sx={{
                    '& .MuiInputBase-input': {
                      padding: '10px 14px',
                    },
                  }}
                />
              </Grid>
              <Grid container item xs={12} justifyContent="space-between">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={check}
                      onChange={(e) => handleCheck(e)}
                      color="primary"
                      value={check}
                    />
                  }
                  label={
                    <Typography
                      component="span"
                      style={{
                        color: 'var(--gray-700, #344054)',
                        fontFamily: 'Inter',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: '20px',
                      }}
                    >
                      Remember for 30 days
                    </Typography>
                  }
                />
                <Button
                  variant="text"
                  size="small"
                  sx={{
                    color: 'var(--primary-700, #884E1B)',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '20px',
                  }}
                  disableRipple
                >
                  Forgot password
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  className={classes.buttonLarge}
                  type="submit"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Sign in
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    startIcon={<img src={googleIcon} alt="google icon" />}
                    style={{
                      borderRadius: '8px',
                      border: '1px solid var(--gray-300, #D0D5DD)',
                      background: 'var(--base-white, #FFF)',
                      boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                    }}
                    fullWidth
                    onClick={() => signInWithGoogle()}
                  >
                    <Typography
                      style={{
                        color: 'var(--gray-700, #344054)',
                        fontFamily: 'Inter',
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '24px',
                      }}
                    >
                      Sign in with Google
                    </Typography>
                  </Button>
                </Stack>
              </Grid>
              <Grid item>
                <Stack
                  direction="row"
                  useFlexGap
                  flexWrap="wrap"
                  alignItems="center"
                  gap={0.5}
                >
                  <Typography
                    style={{
                      color: 'var(--gray-600, #475467)',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '20px',
                    }}
                  >
                    Don’t have an account?
                  </Typography>
                  <Button
                    variant="text"
                    size="small"
                    sx={{
                      color: 'var(--primary-700, #884E1B)',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: '600',
                      lineHeight: '20px',
                    }}
                    disableRipple
                    href="/register"
                  >
                    Sign up
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </ValidatorForm>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;
