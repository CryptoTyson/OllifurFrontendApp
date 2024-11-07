import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)

import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import Detail from '~/components/List/Detail';
import Description from '~/components/List/Description';
import RelatedItems from '~/components/List/RelatedItems';
import CommentGroup from '~/components/Comment/Group';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';

function DetailProduct(props) {
  const { classes } = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  return (
    <Fragment>
      <Head>
        <title>
          { brand.retail.name + ' - Detail Product' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <div className={classes.containerGeneral}>
          <Box mt={{ lg: 4 }}>
            <Detail />
            <Description />
            <RelatedItems />
            <CommentGroup />
          </Box>
        </div>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

DetailProduct.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)

export default DetailProduct;
