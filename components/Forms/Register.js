import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, InputLabel, Stack } from '@mui/material';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import useStyles from './form-style';
import OllifurLogo from '../../public/images/Ollifur.png';
import googleIcon from '../../public/images/google.svg';
import { auth } from '../../lib/firebase';

function Register() {
  const { classes } = useStyles();
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  // Media query
  const theme = useTheme();
  const router = useRouter();
  const { locale } = router.query;

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const googleProvider = new GoogleAuthProvider();

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

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== values.password) {
        return false;
      }
      return true;
    });
    ValidatorForm.addValidationRule('isTruthy', (value) => value);
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
      updateProfile(userCredential.user, {
        displayName: values.name,
        photoURL: null,
      });
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
            Create an account
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
            Start your 30-day free trial.
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
                  htmlFor="name"
                  sx={{
                    color: 'var(--gray-700, #344054)',
                    fontFamily: 'Inter',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '20px',
                  }}
                >
                  Name*
                </InputLabel>
                <TextValidator
                  fullWidth
                  className={classes.input}
                  onChange={handleChange('name')}
                  name="name"
                  value={values.name}
                  validators={['required']}
                  errorMessages={['this field is required']}
                  placeholder="Enter your name"
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
              <Grid item>
                <Stack
                  direction="row"
                  useFlexGap
                  flexWrap="wrap"
                  alignItems="center"
                  gap={0.5}
                >
                  <CheckCircleIcon
                    style={{
                      fill: 'var(--gray-300, #D0D5DD)',
                    }}
                  />
                  <Typography
                    component="span"
                    style={{
                      color: 'var(--gray-600, #475467)',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '20px',
                    }}
                  >
                    {' '}
                    Must be at least 8 characters
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  useFlexGap
                  flexWrap="wrap"
                  alignItems="center"
                  gap={0.5}
                >
                  <CheckCircleIcon
                    style={{
                      fill: 'var(--gray-300, #D0D5DD)',
                    }}
                  />
                  <Typography
                    component="span"
                    style={{
                      color: 'var(--gray-600, #475467)',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '20px',
                    }}
                  >
                    {' '}
                    Must contain one special character
                  </Typography>
                </Stack>
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
                  Get started
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
                      Sign up with Google
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
                    Already have an account?
                  </Typography>
                  <Button
                    variant="text"
                    size="small"
                    sx={{ padding: 0 }}
                    disableRipple
                    href="/login"
                  >
                    Log in
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

export default Register;
