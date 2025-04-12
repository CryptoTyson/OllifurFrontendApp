import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HeroBanner from '../HeroBanner';
import { useText } from '~/theme/common';
import useStyles from './about-style';

function Banner(props) {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { children } = props;

  return (
    <HeroBanner>
      <div className={classes.bannerWrap}>
        <div className={classes.inner}>Hello</div>
      </div>
    </HeroBanner>
  );
}

Banner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Banner;
