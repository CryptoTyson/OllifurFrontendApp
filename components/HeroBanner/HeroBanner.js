import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import useStyles from './hero-banner-style';

function HeroBanner(props) {
  const { classes } = useStyles();
  const { children } = props;
  return (
    <div className={classes.heroBannerWrap}>
      <Container className={classes.container}>{children}</Container>
    </div>
  );
}

HeroBanner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeroBanner;
