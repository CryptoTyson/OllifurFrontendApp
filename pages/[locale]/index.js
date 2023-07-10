import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Head from 'next/head';
import Hidden from '@mui/material/Hidden';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import BannerSlider from '~/components/Home/BannerSlider';
import Feature from '~/components/Home/Feature';
import Counter from '~/components/Home/Counter';
import Management from '~/components/Home/Management';
import Business from '~/components/Home/Business';
import Testimonials from '~/components/Home/Testimonials';
import NewsEvent from '~/components/Home/NewsEvent';
import CallAction from '~/components/CallAction';
import Corner from '~/components/Home/Corner';
import Footer from '~/components/Footer';
import Notification from '~/components/Notification';
import brand from '~/public/text/brand';

function Landing(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.retail.name + ' - Home Page' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          home
        />
        <main className={classes.containerWrap}>
          <section id="home">
            <BannerSlider />
          </section>
          <section id="feature" className={classes.spaceTopShort}>
            <Feature />
          </section>
          <section className={isMobile ? classes.spaceTopShort : classes.spaceTop}>
            <Counter />
          </section>
          <section id="management" className={classes.spaceTop}>
            <Management />
          </section>
          <section id="business" className={classes.spaceTop}>
            <Business />
          </section>
          <section id="testimonials" className={isTablet ? classes.spaceTop : classes.spaceTopShort}>
            <Testimonials />
          </section>
          <section id="blog" className={classes.spaceTopShort}>
            <NewsEvent />
          </section>
          <section id="call-action" className={cx(classes.spaceTopShort, !isTablet && classes.spaceBottomShort)}>
            <CallAction />
          </section>
        </main>
        <Footer toggleDir={onToggleDir} />
        <Hidden mdDown>
          <Corner />
        </Hidden>
        <Hidden lgDown>
          <Notification />
        </Hidden>
      </div>
    </React.Fragment>
  );
}

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Landing;
