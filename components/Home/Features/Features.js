import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';
import FeatureCard from '../../FeatureCard/FeatureCard';

const useStyles = makeStyles()((theme) => ({
  desc: {
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.primary.dark
        : 'var(--gray-600, #475467)',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
  },
  desc2: {
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.primary.dark
        : 'var(--gray-600, #475467)',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '24px',
  },
  heading: {
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.primary[500]
        : 'var(--gray-900, #101828)',
    fontFamily: 'Inter',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '44px',
    letterSpacing: '-0.72px',
  },
  supportingText: {
    color: theme.palette.mode === 'dark' ? 'white' : 'var(--gray-600, #475467)',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '30px',
  },
}));

function Features() {
  const { classes } = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const featureCardData = [
    {
      title: 'Browse crematoriums near you',
      desc: (
        <Typography component="span" className={classes.desc}>
          Discover local crematoriums for your beloved pet's final
          journey. Choose between{' '}
          <Typography component="span" className={classes.desc2}>
            Private
          </Typography>
          ,{' '}
          <Typography component="span" className={classes.desc2}>
            Communal
          </Typography>{' '}
          or{' '}
          <Typography component="span" className={classes.desc2}>
            Witnessed
          </Typography>{' '}
          cremations.
        </Typography>),
    },
    {
      title: 'Schedule a Date & Time',
      desc:
        'Schedule a date and time at nearby pet crematoriums, offering caring services to honor their memory.',
    },
    {
      title: 'Accompany your pet to the dedicated facility',
      desc:
        'At the selected date and time, take your companion to the selected facility for a compassionate farewell.',
    },
  ];

  return (
    <div
      style={{
        paddingTop: isDesktop ? '96px' : '0px',
      }}
      className={classes.counterWrap}
    >
      <Container>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="flex-start"
          spacing={5}
        >
          <Grid container item direction="column" xs={12} spacing={1}>
            <Grid item>
              <Typography
                style={{
                  color: '#553111',
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '24px',
                }}
              >
                Completely Online
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.heading}>
                Giving your pets dignity in death.
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.supportingText}>
                Our simple 3 step process
              </Typography>
            </Grid>
          </Grid>
          <Grid container item spacing={4}>
            <Grid container item md={6} xs={12}>
              {featureCardData.map((feature) => (
                <Grid item>
                  <FeatureCard title={feature.title} desc={feature.desc} />
                </Grid>
            ))}
            </Grid>
            {isDesktop ? (
              <Grid item md={6} xs={12}>
                <div>
                  <img
                    src="/images/always-with-me.png"
                    alt="AlwaysWithMe"
                    style={{
                      flexShrink: 0,
                      position: 'absolute',
                      width: '612px',
                      height: '666px',
                      inset: '15% 0 0 60%',
                    }}
                  />
                </div>
              </Grid>
            ) : (
              <Grid
                item
                md={6}
                xs={12}
                display="flex"
                justifyContent="center"
              >
                <img
                  src="/images/always-with-me-mobile.png"
                  alt="AlwaysWithMe"
                />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Features;
