import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import Login from '~/components/Forms/Login';
import brand from '~/public/text/brand';
import link from '~/public/text/link';

function LoginPage(props) {
  // Theme breakpoints

  // Translation Function
  

  const { classes, cx } = useSpacing();

  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <Head>
        <title>{brand.retail.name + ' - Login'}</title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          text={'header_register'}
          href={link.retail.register}
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <Container maxWidth="lg">
          <div className={cx(classes.containerGeneral, classes.containerFront)}>
            <Login />
          </div>
        </Container>
      </div>
    </Fragment>
  );
}

LoginPage.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default LoginPage;
