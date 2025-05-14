import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Grid } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import useStyles from './basic-style';
import Logo from '../Logo/Logo';

function Copyright() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid
      container
      direction={isDesktop ? 'row' : 'column-reverse'}
      justifyContent="space-between"
      alignItems={isDesktop ? 'center' : 'start'}
      style={{
        padding: isDesktop ? '0px 85px' : '0px 30px',
      }}
      gap={isDesktop ? 0 : 1}
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
          &copy;&nbsp; 2023 Ollifur Inc. All rights reserved.
        </Typography>
      </Grid>
      <Grid item style={{ display: 'flex', gap: '10px' }}>
        <Link href="#" style={{ color: ' #FFFFFF' }} underline="hover">
          Terms&nbsp;
        </Link>
        <Link href="#" style={{ color: ' #FFFFFF' }} underline="hover">
          Privacy&nbsp;
        </Link>
        <Link href="#" style={{ color: ' #FFFFFF' }} underline="hover">
          Cookies
        </Link>
      </Grid>
    </Grid>
  );
}

const selfStyles = makeStyles()(() => ({
  link: {
    color: 'var(--gray-200, #FFFFFF)',
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

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const home = window.location.pathname === '/en/';

  return (
    <footer
      className={classes.footer}
      style={{
        borderRadius: home ? '8px' : '0px',
      }}
    >
      <Container className={classes.root} maxWidth="lg">
        <Grid
          container
          item
          direction="column"
          justifyContent="space-between"
          alignItems={isDesktop ? 'center' : 'flex-start'}
          xs={12}
          style={{
            padding: '0px 10px',
          }}
        >
          <Grid item style={{ padding: '40px 0px' }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#faf4f2e6] rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  className="w-8 h-8 object-cover"
                  alt="Ollifur removebg"
                  src="/ollifur.png"
                />
              </div>
              <div className="font-bold text-white text-4xl">Ollifur</div>
            </div>
          </Grid>
          <Grid item>
            <nav style={{ margin: 0 }}>
              <ul>
                <li key={1}>
                  <Link
                    href="#"
                    className={self.link}
                    style={{ color: ' #FFFFFF', padding: '5px' }}
                    underline="hover"
                  >
                    Home
                  </Link>
                </li>
                <li key={2}>
                  <Link
                    href="#"
                    className={self.link}
                    style={{ color: ' #FFFFFF', padding: '5px' }}
                    underline="hover"
                  >
                    Crematoriums
                  </Link>
                </li>
                <li key={3}>
                  <Link
                    href="#"
                    className={self.link}
                    style={{ color: ' #FFFFFF', padding: '5px' }}
                    underline="hover"
                  >
                    Pricing
                  </Link>
                </li>
                <li key={4}>
                  <Link
                    href="#"
                    className={self.link}
                    style={{ color: ' #FFFFFF', padding: '5px' }}
                    underline="hover"
                  >
                    Careers
                  </Link>
                </li>
                <li key={5}>
                  <Link
                    href="#"
                    className={self.link}
                    style={{ color: ' #FFFFFF', padding: '5px' }}
                    underline="hover"
                  >
                    Help
                  </Link>
                </li>
                <li key={6}>
                  <Link
                    href="#"
                    className={self.link}
                    style={{ color: ' #FFFFFF', padding: '5px' }}
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
              borderTop: '1px solid #A4A7AE',
              width: '100%',
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
