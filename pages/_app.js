import React, { useState, useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import CssBaseline from '@mui/material/CssBaseline';
import LoadingBar from 'react-top-loading-bar';
import appTheme from '~/theme/appTheme';
/* import css vendors */
import 'react-18-image-lightbox/style.css';
import '~/vendors/animate.css';
import '~/vendors/animate-slider.css';
import '~/vendors/hamburger-menu.css';
import '../vendors/animate-extends.css';
import '../vendors/react-top-loading-bar.css';
import '../vendors/page-transition.css';
import '../vendors/slick/slick.css';
import '../vendors/slick/slick-theme.css';
import './utils/styles.css';

import { AuthContextProvider } from '../lib/authContext';

let themeType = 'light';
if (typeof Storage !== 'undefined') {
  // eslint-disable-line
  themeType = localStorage.getItem('oironTheme') || 'light';
}

const isBrowser = typeof document !== 'undefined';
let insertionPoint;

if (isBrowser) {
  const emotionInsertionPoint = document.querySelector(
    'meta[name="emotion-insertion-point"]',
  );
  insertionPoint = emotionInsertionPoint ?? undefined;
}

const cache = createCache({
  key: 'mui-style',
  insertionPoint,
  prepend: true,
});

function MyApp(props) {
  const { Component, pageProps, router } = props; // eslint-disable-line
  const [loading, setLoading] = useState(0);

  const themeName = 'rose';
  const [theme, setTheme] = useState({
    ...appTheme(themeName, themeType),
  });

  useEffect(() => {
    // Remove preloader
    const preloader = document.getElementById('preloader');
    if (preloader !== null || undefined) {
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    }

    // Remove loading bar
    setLoading(0);
    setTimeout(() => {
      setLoading(100);
    }, 2000);
  }, []);

  const toggleDarkTheme = () => {
    const newPaletteType = theme.palette.mode === 'light' ? 'dark' : 'light';
    localStorage.setItem(
      'oironTheme',
      theme.palette.mode === 'light' ? 'dark' : 'light',
    );

    setTheme({
      ...appTheme(themeName, newPaletteType),
    });
  };

  const muiTheme = createTheme(theme);
  return (
    <CacheProvider value={cache}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={muiTheme}>
        <AuthContextProvider>
          <CssBaseline />
          <LoadingBar
            height={0}
            color={theme.palette.primary.main}
            progress={loading}
            className="top-loading-bar"
          />
          <div id="main-wrap">
            <Component
              {...pageProps}
              onToggleDark={toggleDarkTheme}
              key={router.route}
            />
          </div>
        </AuthContextProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
};

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default MyApp;
