import React, { useState, useEffect } from 'react';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import useStyles from '../header-style';

let themeType = 'light';
if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('oironTheme') || 'light';
}

interface SettingsProps {
  toggleDark(...args: unknown[]): unknown
  toggleDir(...args: unknown[]): unknown
  invert?: boolean
}

function Settings(props: SettingsProps) {
  const [ctn, setCtn]:any = useState(null);
  const { classes, cx }:any = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDark, setDark] = useState(themeType === 'dark');

  function handleClose() {
    setAnchorEl(null);
  }

  const handleChangeMode = () => {
    setDark(!isDark);
    props.toggleDark();
  };

  useEffect(() => {
    setCtn(document.getElementById('main-wrap'));
  });

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const { invert } = props;

  return (
    <div className={classes.setting}>
      <IconButton
        aria-describedby={id}
        aria-label="Settings"
        onClick={handleChangeMode}
        className={
          cx(
            classes.icon,
            open && classes.active,
            invert && classes.invert
          )
        }
        size="large"
      >
        {!isDark
          ? <DarkModeOutlinedIcon fontSize="inherit" /> : <LightModeOutlinedIcon fontSize="inherit" />}
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        container={ctn}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <List
          component="nav"
          className={classes.menuList}
          aria-label="Mode-menu"
          subheader={(
            <ListSubheader component="div">
              Theme
            </ListSubheader>
          )}
        >
          <ListItem>
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Light</Grid>
                <Grid item>
                  <Switch
                    checked={isDark}
                    onChange={handleChangeMode}
                    value={isDark}
                    inputProps={{ 'aria-label': 'checkbox' }}
                  />
                </Grid>
                <Grid item>Dark</Grid>
              </Grid>
            </Typography>
          </ListItem>
        </List>
      </Popover>
    </div>
  );
}

Settings.defaultProps = {
  invert: false
};

export default Settings;
