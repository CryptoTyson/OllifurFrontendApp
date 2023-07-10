import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import imgAPI from '~/public/images/imgAPI';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import Counter from '~/components/Counter';
import Banner from '~/components/About/Banner';
import PhotoSlider from '~/components/About/PhotoSlider';
import TeamSlider from '~/components/About/TeamSlider';
import AboutVideo from '~/components/About/Video';
import AboutProgress from '~/components/About/Progress';
import CallAction from '~/components/CallAction';
import CompanyLogo from '~/components/CompanyLogo';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';

function About(props) {
  const { classes } = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <Head>
        <title>
          { brand.retail.name + ' - About' }
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Banner>
          <img
            src={imgAPI.retailInner[1]}
            data-2d={imgAPI.retailInner[0]}
            data-3d={imgAPI.retailInner[1]}
            className="img-2d3d"
            alt="services 3d"
          />
        </Banner>
        <CompanyLogo />
        <div className={classes.spaceTopShort}>
          <Counter />
        </div>
        <div className={classes.spaceTopShort}>
          <Container>
            <Grid container justifyContent="center" spacing={6}>
              <Grid item md={6} xs={12}>
                <AboutVideo />
              </Grid>
              <Grid item md={6} sm={8} xs={12}>
                <AboutProgress />
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className={classes.spaceTopShort}>
          <TeamSlider />
        </div>
        <div className={classes.spaceTopShort}>
          <PhotoSlider />
        </div>
        <div className={classes.spaceTopShort}>
          <CallAction />
        </div>
        <div>
          <Footer bg toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

About.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default About;
