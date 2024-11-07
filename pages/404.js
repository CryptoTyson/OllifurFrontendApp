import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Error from '~/components/Error';
import Header from '~/components/Header';
import brand from '~/public/text/brand';
import { useSpacing } from '~/theme/common';

function ErrorPage(props) {
  const { classes } = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  const { errorCode, stars } = props;

  if (errorCode) {
    return (
      <Fragment>
        <Head>
          <title>{brand.retail.name + ' - ' + errorCode}</title>
        </Head>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: { backgroundColor: '#F8EADD' },
          }}
        />
        <div>
          <Header
            onToggleDark={onToggleDark}
            onToggleDir={onToggleDir}
            invert
          />
          <Error errorCode={errorCode} text="404" />
        </div>
      </Fragment>
    );
  }

  return (
    <div className={classes.dedicatedPage}>
      description
      Next stars:&nbsp;
      {stars}
    </div>
  );
}

ErrorPage.propTypes = {
  errorCode: PropTypes.string,
  stars: PropTypes.number,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

ErrorPage.defaultProps = {
  errorCode: '404',
  stars: 0,
};

export default ErrorPage;
