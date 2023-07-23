import React from 'react';
import Container from '@mui/material/Container';
import { Grid, useMediaQuery, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useTheme } from '@mui/material/styles';
import useStyles from './testi-style';
import testimonialImg from '../../../public/images/testimonial.png';

function Testimonials() {
  const { classes } = useStyles();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={4}
        >
          <Grid item md={4} xs={12}>
            <img
              style={{
                height: isDesktop ? 328 : 200,
                width: isDesktop ? 328 : 200,
              }}
              src={testimonialImg}
              alt="testimonial img"
            />
          </Grid>
          <Grid item md={8} xs={12}>
            <Rating readOnly value={5} />
            <Typography
              style={{
                color: 'var(--gray-900, #101828)',
                fontFamily: 'Inter',
                fontSize: isDesktop ? '36px' : '24px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: '44px',
                letterSpacing: '-0.72px',
              }}
            >
              I can't express enough gratitude for Ollifur & Omer specifically.
              The care and empathy he displayed was nothing short of excellent.
              I’ll always miss you Luna.
            </Typography>
            <Typography
              style={{
                color: 'var(--gray-900, #101828)',
                fontFamily: 'Inter',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '28px',
                marginTop: '25px',
              }}
            >
              — Candice Wu
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Testimonials;
