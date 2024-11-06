import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
    background: '#F8EADD',
    borderRadius: '0 0 24px 24px',
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(12),
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      padding: theme.spacing(6, 0, 3),
    },
  },
  breadcrumbs: {
    marginBottom: theme.spacing(1),
    '& span': {
      color: 'var(--Primary-600, #D77F33)',
      fontFamily: 'Inter',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '24px',
    },
    '& a': {
      color: 'var(--Gray-600, #475467)',
      fontFamily: 'Inter',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '24px',
      textDecorationLine: 'underline',
      '&:hover': {
        color: '#D77F33',
      }
    }
  },
  title: {
    color: 'var(--Gray-900, #101828)',
    fontFamily: 'Inter',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '60px',
    letterSpacing: '-0.96px'
  },
  subtitle: {
    color: '#475467',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  },
}));

const BookingHeader = () => {
  const { classes } = useStyles();

  return (
    <>
      <div style={{
      background: 'white',
      position: 'relative',
      display: 'block',
      paddingTop: '80px',
    }}
      />
      <section className={classes.bannerWrap}>
        <Container>
          <div className={classes.breadcrumbs}>
            <Typography component="span">
              <a href="/">Home</a> / <a href="/crematoriums">Crematoriums</a> / <span>Digital memorial</span>
            </Typography>
          </div>
          <Typography
            variant="h1"
            className={classes.title}
            sx={{
            pb: '16px',
          }}
          >
            Bookings
          </Typography>
          <Typography
            className={classes.subtitle}
            sx={{
          paddingBottom: '114px',
        }}
          >
            Schedule a Date & Time for pickups, Cremations & More
          </Typography>
        </Container>
      </section>
    </>

  );
};

export default BookingHeader;
