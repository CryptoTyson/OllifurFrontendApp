import { makeStyles } from 'tss-react/mui';

const titleStyles = makeStyles({ uniqId: 'title' })((theme, _params, classes) => ({
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
  dark: {},
  title: {
    display: 'block',
    position: 'relative',
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 3)
    },
    '& h3': {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 46,
      textTransform: 'capitalize',
      [theme.breakpoints.down('lg')]: {
        fontSize: 38,
        lineHeight: '50px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 32,
        lineHeight: '42px',
      },
    },
    '&:before': {
      content: '""',
      width: 70,
      height: 12,
      bottom: -32,
      borderRadius: 12,
      backgroundImage: `linear-gradient(-20deg, ${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
      position: 'absolute'
    },
    '&:after': {
      content: '""',
      width: 12,
      height: 12,
      bottom: -32,
      borderRadius: '50%',
      background: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.light,
      position: 'absolute'
    },
    '& strong': {
      color: theme.palette.text.primary,
    },
    [`&.${classes.left}`]: {
      '&:before': {
        left: 0,
      },
      '&:after': {
        left: 58,
      }
    },
    [`&.${classes.right}`]: {
      '&:before': {
        right: 0,
      },
      '&:after': {
        right: 58,
      }
    },
    [`&.${classes.center}`]: {
      '&:before': {
        left: '50%',
        marginLeft: -35,
      },
      '&:after': {
        left: 'calc(50% + 23px)',
      }
    },
    [`&.${classes.dark}`]: {
      '& h3': {
        color: theme.palette.common.white,
      }
    }
  },
  titleSecondary: {
    display: 'block',
    position: 'relative',
    margin: theme.spacing(4, 0),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(0, 0, 4)
    },
    '& h4': {
      color: theme.palette.text.primary,
      fontSize: 32,
      fontWeight: theme.typography.fontWeightMedium,
      [theme.breakpoints.down('sm')]: {
        fontSize: 24,
        lineHeight: '36px',
      },
    },
    '&:after': {
      content: '""',
      width: 17,
      height: 17,
      borderRadius: '50%',
      background: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
      position: 'absolute'
    },
    [`&.${classes.left}`]: {
      paddingLeft: theme.spacing(4),
      '&:after': {
        left: 0,
        top: 12,
      }
    },
    [`&.${classes.right}`]: {
      paddingRight: theme.spacing(4),
      '&:after': {
        right: 0,
        top: 12,
      }
    },
    [`&.${classes.center}`]: {
      marginBottom: theme.spacing(6),
      '&:after': {
        left: '50%',
        marginLeft: -8,
        bottom: -35
      }
    },
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default titleStyles;
