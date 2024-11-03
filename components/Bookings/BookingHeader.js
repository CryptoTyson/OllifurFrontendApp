import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
    background: '#FDF8F5',
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(16),
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      padding: theme.spacing(6, 0, 3),
    },
  },
  breadcrumbs: {
    marginBottom: theme.spacing(2),
    '& a': {
      color: '#667085',
      textDecoration: 'none',
      '&:hover': {
        color: '#D77F33',
      }
    }
  },
  title: {
    color: '#101828',
    fontFamily: 'Inter',
    fontSize: '30px',
    fontWeight: 600,
    lineHeight: '38px',
    letterSpacing: '-0.6px',
    marginBottom: theme.spacing(1),
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
    <section className={classes.bannerWrap}>
      <Container>
        <div className={classes.breadcrumbs}>
          <Typography component="span">
            <a href="/">Home</a> / <a href="/crematoriums">Crematoriums</a> / <span>Digital memorial</span>
          </Typography>
        </div>
        <Typography variant="h1" className={classes.title}>
          Bookings
        </Typography>
        <Typography className={classes.subtitle}>
          Schedule a Date & Time for pickups, Cremations & More
        </Typography>
      </Container>
    </section>
  );
};

export default BookingHeader;
