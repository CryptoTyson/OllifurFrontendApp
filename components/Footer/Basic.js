import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import useStyles from './basic-style';
import Logo from '../Logo/Logo';

function Copyright() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      <Grid item>
        <Typography
          style={{
            color: 'var(--gray-300, #D0D5DD)',
            fontFamily: 'Inter',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '24px',
          }}
          display="block"
          align="center"
        >
          &copy;&nbsp;
          2023 Ollifur Inc. All rights reserved.
        </Typography>
      </Grid>
      <Grid item>
        <Link href="#" style={{ color: ' #EAECF0' }} underline="hover">
          Terms&nbsp;
        </Link>
        <Link href="#" style={{ color: ' #EAECF0' }} underline="hover">
          Privacy&nbsp;
        </Link>
        <Link href="#" style={{ color: ' #EAECF0' }} underline="hover">
          Cookies
        </Link>
      </Grid>
    </Grid>
  );
}

const selfStyles = makeStyles()(() => ({
  link: {
    color: 'var(--gray-200, #EAECF0)',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '24px',
  },
}));

function Basic() {
  const { classes } = useStyles();
  const { classes: self } = selfStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.root} maxWidth="lg">
        <Grid
          container
          item
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          xs={12}
          spacing={2}
        >
          <Grid item style={{ paddingTop: '50px' }}>
            <Logo theme="light" />
          </Grid>
          <Grid item>
            <nav style={{ margin: 0 }}>
              <ul>
                <li key={1}>
                  <Link
                    href="#"
                    className={self.link}
                    style={{ color: ' #EAECF0' }}
                    underline="hover"
                  >
                    About Us
                  </Link>
                </li>
                <li key={2}>
                  <Link
                    href="#"
                    className={self.link}
                    style={{ color: ' #EAECF0' }}
                    underline="hover"
                  >
                    Contact
                  </Link>
                </li>
                <li key={3}>
                  <Link
                    href="#"
                    className={self.link}
                    style={{ color: ' #EAECF0' }}
                    underline="hover"
                  >
                    Crematoriums
                  </Link>
                </li>
                <li key={4}>
                  <Link
                    href="#"
                    className={self.link}
                    style={{ color: ' #EAECF0' }}
                    underline="hover"
                  >
                    Careers
                  </Link>
                </li>
                <li key={5}>
                  <Link
                    href="#"
                    className={self.link}
                    style={{ color: ' #EAECF0' }}
                    underline="hover"
                  >
                    Help
                  </Link>
                </li>
                <li key={6}>
                  <Link
                    href="#"
                    className={self.link}
                    style={{ color: ' #EAECF0' }}
                    underline="hover"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </nav>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              borderTop: '1px solid #475467',
              width: '80%',
              marginTop: '35px',
              marginBottom: '0px',
            }}
          />
        </Grid>
      </Container>
      <div className={classes.copyright}>
        <Copyright />
      </div>
    </footer>
  );
}

Basic.defaultProps = {
  bg: false,
};

export default Basic;
