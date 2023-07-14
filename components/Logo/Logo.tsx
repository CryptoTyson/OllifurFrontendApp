import React, { useEffect, useState } from 'react';
import logo from '../../public/images/ollifur.svg';
import logoDark from '../../public/images/ollifur-dark.svg';
import brand from '../../public/text/brand';
import useStyles from './logo-style';

interface LogoProps {
  type: string;
  size?: string;
}


function Logo(props: LogoProps) {
  let themeType = 'light';
  
  if (typeof Storage !== 'undefined') {
    themeType = localStorage.getItem('oironTheme') || 'light';
  }
  const { classes, cx }: any = useStyles();
  const { type, size } = props;
  const logoImage = themeType === 'dark' ? logoDark : logo;

  return (
    <span
      className={cx(
        classes[type],
        classes.logo,
        // classes[size]
      )}
    >
      <img src={logoImage} alt="logo" />
    </span>
  );
}

Logo.defaultProps = {
  size: 'medium',
};

export default Logo;
