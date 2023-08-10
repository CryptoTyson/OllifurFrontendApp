import React from 'react';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Settings from './Settings';
import useStyles from '../header-style';
import link from '../../../public/text/link';
import { signOut } from 'firebase/auth';

import { auth } from '../../../lib/firebase';
import { useAuth } from '../../../lib/authContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface UserMenuProps {
  onToggleDark(...args: unknown[]): unknown;
  onToggleDir(...args: unknown[]): unknown;
}

function UserMenu(props: UserMenuProps) {
  const { classes }: any = useStyles();
  const theme = useTheme();
  const { onToggleDark, onToggleDir } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const router = useRouter();
  const { locale } = router.query;
  const user = useAuth();

  const onLogOut = () => {
    signOut(auth);
    localStorage.setItem('authToken', '');
    router.replace('/');
  };

  return (
    <div className={classes.userMenu}>
      {isDesktop && (
        <div>
          {user ? (
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={() => onLogOut()}
            >
              Log Out
            </Button>
          ) : (
            <React.Fragment>
              <Link href={`/${locale}${link.retail.login}`}>
                <Button size="small">Log in</Button>
              </Link>
              <Link href={`/${locale}${link.retail.register}`}>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  href={link.retail.register}
                >
                  Sign up
                </Button>
              </Link>
            </React.Fragment>
          )}
          {/* <span className={classes.vDivider} /> */}
        </div>
      )}
      {/* <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} /> */}
    </div>
  );
}

export default UserMenu;
