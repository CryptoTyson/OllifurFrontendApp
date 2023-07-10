import React from 'react';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Settings from './Settings';
import useStyles from '../header-style';
import link from '../../../public/text/link';

interface UserMenuProps {
  onToggleDark(...args: unknown[]): unknown
  onToggleDir(...args: unknown[]): unknown
}

function UserMenu(props: UserMenuProps) {
  const { classes }:any = useStyles();
  const theme = useTheme();
  const { onToggleDark, onToggleDir } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className={classes.userMenu}>
      { isDesktop && (
        <div>
          <Button href={link.retail.login}>Log in</Button>
          <Button variant="contained" color="primary" href={link.retail.register}>Register</Button>
          <span className={classes.vDivider} />
        </div>
      )}
      <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} />
    </div>
  );
}

export default UserMenu;
