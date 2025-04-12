import { makeStyles } from 'tss-react/mui';

const counterStyles = makeStyles({ uniqId: 'counter' })((theme, _params, classes) => ({
  counterWrap: {
    position: 'relative'
  },
  text: {},
  counterItem: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },
    '& svg': {
      width: 80,
      height: 80,
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(2),
      },
      [theme.breakpoints.down('md')]: {
        marginRight: theme.spacing(2),
      }
    },
    [`& .${classes.text}`]: {
      '& h4': {
        fontWeight: 'bold',
      }
    }
  },
  dark: {
    background: theme.palette.primary.main,
    [`& .${classes.counterItem}`]: {
      color: theme.palette.common.white,
      '& svg': {
        fill: theme.palette.common.white,
      }
    }
  },
  primary: {
    fill: theme.palette.primary.main
  },
  secondary: {
    fill: theme.palette.secondary.main
  },
  accent: {
    fill: theme.palette.accent.main
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
