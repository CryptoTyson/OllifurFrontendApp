import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Hidden from '@mui/material/Hidden';
import Head from 'next/head';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import FormDeco from '~/components/Decoration/FormDeco';
import ContactMap from '~/components/Forms/ContactMap';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';

function WithMap(props) {
  const { classes } = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  return (
    <Fragment>
      <Head>
        <title>
          { brand.retail.name + ' - Contact Map' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <div className={classes.containerGeneral}>
          <Container className={classes.spaceBottomShort}>
            <Hidden mdDown>
              <FormDeco />
            </Hidden>
            <div className={classes.containerFront}>
              <ContactMap />
            </div>
          </Container>
        </div>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

WithMap.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default WithMap;
