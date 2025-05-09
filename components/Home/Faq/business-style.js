import { makeStyles } from 'tss-react/mui';

const businessStyles = makeStyles({ uniqId: 'business' })((theme, _params, classes) => ({
  root: {
    [theme.breakpoints.down('lg')]: {
      padding: '0 !important'
    }
  },
  circleGroup: {
    position: 'relative',
    width: '100%',
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('lg')]: {
      minHeight: 700,
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(8)
    },
    [theme.breakpoints.down('lg')]: {
      display: 'flex',
      overflow: 'auto'
    }
  },
  circle: {
    position: 'relative',
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      position: 'absolute',
    },
    [theme.breakpoints.down('lg')]: {
      padding: 32,
      width: 275,
      height: 275,
      top: '0 !important',
      left: '0 !important'
    },
    [theme.breakpoints.down('sm')]: {
      padding: 10,
      width: 179,
      height: 179,
    },
    '& h6': {
      [theme.breakpoints.down('lg')]: {
        fontSize: 18
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 14
      }
    },
    '& i': {
      [theme.breakpoints.down('lg')]: {
        fontSize: 90,
        lineHeight: '90px'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 60,
        lineHeight: '60px'
      }
    },
    '& svg': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      opacity: 0.5,
      [theme.breakpoints.down('lg')]: {
        display: 'none'
      }
    }
  },
  paper: {
    fontWeight: theme.typography.fontWeightBold,
    borderRadius: '50%',
    width: '100%',
    height: '100%',
    lineHeight: 'normal',
    textTransform: 'capitalize',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'relative',
    boxShadow: theme.shade.light,
    background: theme.palette.background.paper,
    transition: 'all 0.3s ease-out',
    textDecoration: 'none',
    transform: 'scale(1)',
    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  large: {
    [theme.breakpoints.up('lg')]: {
      padding: 40,
      width: 344,
      height: 344,
    },
    '& h6': {
      [theme.breakpoints.up('lg')]: {
        fontSize: 24
      }
    },
    '& i': {
      [theme.breakpoints.up('lg')]: {
        lineHeight: '120px',
        fontSize: 120,
      }
    }
  },
  medium: {
    [theme.breakpoints.up('lg')]: {
      padding: 32,
      width: 275,
      height: 275,
    },
    '& h6': {
      [theme.breakpoints.up('lg')]: {
        fontSize: 18
      }
    },
    '& i': {
      [theme.breakpoints.up('lg')]: {
        fontSize: 90,
        lineHeight: '90px'
      }
    }
  },
  small: {
    [theme.breakpoints.up('lg')]: {
      padding: 20,
      width: 179,
      height: 179,
    },
    '& h6': {
      [theme.breakpoints.up('lg')]: {
        fontSize: 14
      }
    },
    '& i': {
      [theme.breakpoints.up('lg')]: {
        fontSize: 60,
        lineHeight: '60px'
      }
    }
  },
  fillPrimary: {
    [`& .${classes.paper}`]: {
      color: theme.palette.primary.main
    },
    '& i': {
      '&:before': {
        background: `linear-gradient(120deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
      }
    },
    '& svg': {
      fill: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light
    }
  },
  fillSecondary: {
    [`& .${classes.paper}`]: {
      color: theme.palette.secondary.main
    },
    '& i': {
      '&:before': {
        background: `linear-gradient(120deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
      }
    },
    '& svg': {
      fill: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light
    }
  },
  fillAccent: {
    [`& .${classes.paper}`]: {
      color: theme.palette.accent.main
    },
    '& i': {
      '&:before': {
        background: `linear-gradient(120deg, ${theme.palette.accent.light}, ${theme.palette.accent.main})`,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
      }
    },
    '& svg': {
      fill: theme.palette.mode === 'dark' ? theme.palette.accent.dark : theme.palette.accent.light
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default businessStyles;
