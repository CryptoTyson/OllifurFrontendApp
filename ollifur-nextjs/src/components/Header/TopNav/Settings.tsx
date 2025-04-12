'use client';

import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { makeStyles } from 'tss-react/mui';

let themeType = 'light';
if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('oironTheme') || 'light';
}

const useStyles = makeStyles<void>()((theme) => ({
  setting: {
    marginLeft: theme.spacing(1),
  },
  icon: {
    color: theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  active: {},
  invert: {
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
}));

interface SettingsProps {
  toggleDark(): void;
  invert?: boolean;
}

export default function Settings({
  toggleDark,
  invert = false,
}: SettingsProps) {
  const { classes, cx } = useStyles();
  const [isDark, setDark] = useState(themeType === 'dark');

  const handleChangeMode = () => {
    setDark(!isDark);
    toggleDark();
  };

  return (
    <div className={classes.setting}>
      <IconButton
        aria-label="Toggle light/dark mode"
        onClick={handleChangeMode}
        className={cx(classes.icon, invert && classes.invert)}
        size="large"
      >
        {!isDark ? (
          <DarkModeOutlinedIcon fontSize="inherit" />
        ) : (
          <LightModeOutlinedIcon fontSize="inherit" />
        )}
      </IconButton>
    </div>
  );
}
