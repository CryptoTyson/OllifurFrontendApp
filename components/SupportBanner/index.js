import React from 'react';
import {
  Typography,
  Button,
  Grid
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
    root: {
        margin: theme.spacing(12, 0),
        display: 'flex',
        padding: '64px',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        borderRadius: '16px',
        background: 'var(--Gray-200, #EAECF0)'
    },
    heading: {
        color: 'var(--Gray-900, #101828)',
        fontFamily: 'Inter',
        fontSize: '30px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: '38px'
    },
    subheading: {
        color: 'var(--Base-Black, #000)',
        fontFamily: 'Inter',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '28px'
    },

  }));

const SupportBanner = () => {
    const { classes } = useStyles();

    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid container direction="column" item sm={8} spacing={2}>
            <Grid item>
              <Typography className={classes.heading}>
                We’re here for you, if you need us.
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.subheading}>
                Facing trouble? want something specific you don’t see? Let us help.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            sm={4}
            spacing={2}
            justifyContent="flex-end"
          >
            <Grid item>
              <Button
                variant="contained"
                sx={{
                    color: 'var(--Gray-700, #344054)',
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '24px',
                    borderRadius: '8px',
                    border: '1px solid var(--Gray-300, #D0D5DD)',
                    background: 'var(--Base-White, #FFF)',
                    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                    ':hover': {
                        background: 'var(--Gray-100, #F3F4F6)'
                    }
                }}
              >
                New Memorial
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                sx={
                    {
                        boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                    }
                }
              >
                Crematoriums
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
      );
};

export default SupportBanner;
