import { Theme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';

interface StyleProps {
  theme: Theme;
}

export const useFlexBox = makeStyles<void>()((theme) => ({
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  centerAll: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const useText = makeStyles<void>()((theme) => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 48,
    lineHeight: '72px',
    [theme.breakpoints.down('lg')]: {
      fontSize: 38,
      lineHeight: '60px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
      lineHeight: '44px',
    },
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 28,
    lineHeight: '44px',
    [theme.breakpoints.down('lg')]: {
      fontSize: 24,
      lineHeight: '36px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      lineHeight: '28px',
    },
  },
  paragraph: {
    fontSize: 16,
    lineHeight: '24px',
  },
}));

export const useTextAlign = makeStyles<void>()((theme) => ({
  textCenter: {
    textAlign: 'center',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
}));

export const useSpacing = makeStyles<void>()((theme) => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.default,
  },
  containerWrap: {
    '& > *': {
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
    },
  },
  spaceBottom: {
    marginBottom: theme.spacing(10),
  },
  spaceTop: {
    paddingTop: theme.spacing(10),
  },
  spaceTopShort: {
    paddingTop: theme.spacing(5),
  },
  containerGeneral: {
    position: 'relative',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
  },
}));
