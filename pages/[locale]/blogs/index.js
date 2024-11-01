import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { makeStyles } from 'tss-react/mui';
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArticlePreviewCard from './ArticlePreviewCard';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';
import BlogPostsTabs from './BlogPostsTabs';

const useStyles = makeStyles()((theme) => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
  },
  bannerWrap: {
    position: 'relative',
    display: 'block',
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(10),
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(20, 0, 5),
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(15),
    },
  },
  subheading: {
    color: 'var(--primary-700, #884E1B)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '24px',
  },
  heading: {
    color: 'var(--gray-900, #101828)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '60px',
    letterSpacing: '-0.96px',
  },
  mobileHeading: {
    color: 'var(--Gray-900, #101828)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '44px',
    letterSpacing: '-0.72px'
  },
  supportingtext: {
    color: 'var(--gray-800, #1D2939)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '30px',
    [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(8),
    },
    marginBottom: theme.spacing(4),
  },
  articleSection: {
    width: '100%',
    padding: theme.spacing(4, 0),
  }
}));

function Blogs(props) {
  const { classes } = useStyles();
  const { onToggleDark, onToggleDir } = props;

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Fragment>
      <Head>
        <title>{brand.retail.name + ' - Blogs'}</title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
        <Container sx={{
            padding: 0,
        }}
        >
          <div className={classes.bannerWrap}>
            <Grid
              container
              direction="column"
              spacing={2}
              alignContent="flex-start"
              alignItems="flex-start"
              sx={{
                pt: isDesktop ? '80px' : '24px',
            }}
            >
              <Grid container item justifyContent={isDesktop ? 'flex-start' : 'center'}>
                <Typography className={classes.subheading}>
                  Our blog
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={isDesktop ? classes.heading : classes.mobileHeading}>
                  Resources and insights
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.supportingtext}>
                  Access a wealth of resources about end-of-life matters for pets.
                </Typography>
              </Grid>
            </Grid>

            {isDesktop && (
            <div className={classes.articleSection}>
              <ArticlePreviewCard />
            </div>)}
            <BlogPostsTabs />
          </div>
        </Container>
        <Footer bg toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

Blogs.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Blogs;
