'use client';

import React, { useState } from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack'; // Import Stack
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Snackbar from '@mui/material/Snackbar';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import logo from '@/public/images/logo-retail.svg'; // Updated path
import brand from '@/lib/brand'; // Updated path
import { useText, useTextAlign } from '@/lib/hooks/useStyles'; // Updated path
import useStyles from './contact-style';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

function Contact() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  // Removed useTranslation
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [openNotif, setNotif] = useState(false);

  const handleChange =
    (name: keyof FormValues) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: event.target.value });
    };

  const handleSubmit = () => {
    setNotif(true);
    // TODO: Implement actual form submission logic
  };

  const handleClose = () => {
    setNotif(false);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <footer className={classes.footer}>
      <Container className={classes.root} maxWidth="lg">
        {/* Using Stack instead of Grid */}
        <Stack direction={isMobile ? 'column-reverse' : 'row'} spacing={6}>
          {/* Left Section */}
          <Box sx={{ width: { xs: '100%', md: '41.66%' } }}>
            <Box mx={{ xs: 0, md: 10 }} mt={5}>
              {' '}
              {/* Adjusted margins for mobile */}
              <div className={classes.logo}>
                <img src={logo.src} alt="logo" />{' '}
                {/* Use .src for Image component */}
                {brand.retail.name}
              </div>
              <Typography>
                {/* Replaced t() call */}
                Banner Title Placeholder.&nbsp; Banner Description Placeholder
              </Typography>
              <div className={classes.socmed}>
                <IconButton
                  aria-label="Facebook"
                  className={classes.margin}
                  size="small"
                >
                  <i className="ion-social-facebook" />
                </IconButton>
                <IconButton
                  aria-label="Instagram"
                  className={classes.margin}
                  size="small"
                >
                  <i className="ion-social-instagram" />
                </IconButton>
                <IconButton
                  aria-label="Twitter"
                  className={classes.margin}
                  size="small"
                >
                  <i className="ion-social-twitter" />
                </IconButton>
                <IconButton
                  aria-label="LinkedIn"
                  className={classes.margin}
                  size="small"
                >
                  <i className="ion-social-linkedin" />
                </IconButton>
              </div>
              <div className={classes.contact}>
                <Typography className={text.paragraph}>
                  {/* Replaced t() call */}
                  Phone:
                  <br />
                  +12 345 678 90
                </Typography>
                <Divider className={classes.divider} />
                <Typography className={text.paragraph}>
                  Skype
                  <br />
                  jenadoe.skype
                </Typography>
                <Box mt={8}>
                  <Typography variant="subtitle2" className={align.textCenter}>
                    &copy;&nbsp;
                    {brand.retail.footerText}
                  </Typography>
                </Box>
              </div>
            </Box>
          </Box>

          {/* Right Section */}
          <Box sx={{ width: { xs: '100%', md: '58.33%' } }}>
            <div className={classes.formWrap}>
              <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                key="top right"
                open={openNotif}
                autoHideDuration={4000}
                onClose={handleClose}
                ContentProps={{
                  'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Message Sent</span>}
              />
              <Paper className={classes.formBox}>
                {/* Using Box with Flexbox instead of inner Grid */}
                <Box display="flex" flexWrap="wrap" gap={2}>
                  <Box sx={{ width: { xs: '100%', lg: '40%' } }}>
                    {' '}
                    {/* Adjusted width slightly */}
                    <h3 className={cx(classes.title, text.title)}>
                      {/* Replaced t() call */}
                      Contact Title Placeholder
                    </h3>
                  </Box>
                  <Box sx={{ width: { xs: '100%', lg: '55%' } }}>
                    {' '}
                    {/* Adjusted width slightly */}
                    <div className={classes.form}>
                      <ValidatorForm
                        onSubmit={handleSubmit}
                        onError={(errors: any) => console.log(errors)}
                      >
                        <TextValidator
                          className={classes.input}
                          label="Name" // Replaced t() call
                          onChange={handleChange('name')}
                          name="Name"
                          variant="filled"
                          value={values.name}
                          validators={['required']}
                          errorMessages={['this field is required']}
                          fullWidth // Ensure full width within flex item
                        />
                        <TextValidator
                          className={classes.input}
                          label="Email" // Replaced t() call
                          onChange={handleChange('email')}
                          name="Email"
                          variant="filled"
                          value={values.email}
                          validators={['required', 'isEmail']}
                          errorMessages={[
                            'this field is required',
                            'email is not valid',
                          ]}
                          fullWidth // Ensure full width within flex item
                        />
                        <TextValidator
                          multiline
                          rows="6"
                          variant="filled"
                          className={classes.input}
                          label="Message" // Replaced t() call
                          onChange={handleChange('message')}
                          name="Message"
                          value={values.message}
                          fullWidth // Ensure full width within flex item
                        />
                        <div className={classes.btnArea}>
                          <Button
                            variant="contained"
                            fullWidth
                            type="submit"
                            color="primary"
                            size="large"
                          >
                            {/* Replaced t() call */}
                            Send Message
                          </Button>
                        </div>
                      </ValidatorForm>
                    </div>
                  </Box>
                </Box>
              </Paper>
            </div>
          </Box>
        </Stack>
      </Container>
    </footer>
  );
}

export default Contact;
