import { makeStyles } from 'tss-react/mui';
const pipeDeco = '/images/retail/pipe-deco.svg';

const featureStyles = makeStyles({ uniqId: 'feature' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    zIndex: 4,
  },
  desc: {},
  container: {},
  item: {
    position: 'relative',
    minHeight: 320,
    marginBottom: theme.spacing(5),
    '& h6': {
      marginBottom: theme.spacing(5)
    },
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(10)
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    [`& .${classes.desc}`]: {
      position: 'relative',
      zIndex: 60
    },
  },
  last: {
    marginBottom: theme.spacing(10),
    [`& .${classes.container}`]: {
      position: 'relative'
    }
  },
  illustration: {
    position: 'relative'
  },
  mobileScreen: {
    width: 203,
    height: 405,
    overflow: 'hidden',
    position: 'relative',
    borderRadius: theme.rounded.big,
    boxShadow: theme.shade.light,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
    '& img': {
      height: '100%',
      minWidth: '100%'
    }
  },
  desktopScreen: {
    width: '100%',
    margin: '0 auto',
    overflow: 'hidden',
    position: 'relative',
    padding: 20,
    borderRadius: theme.rounded.big,
    boxShadow: theme.shade.light,
    background: theme.palette.common.white,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  graphic: {
    margin: 0,
    position: 'relative',
    '& img': {
      maxWidth: '100%'
    }
  },
  screen1: {
    margin: '0 auto',
  },
  artwork1: {
    [theme.breakpoints.up('lg')]: {
      left: 100
    },
    [theme.breakpoints.up('md')]: {
      width: 160,
      position: 'absolute',
      top: -50,
      left: 50
    },
    [theme.breakpoints.down('md')]: {
      margin: '0 auto'
    }
  },
  artwork2: {
    [theme.breakpoints.up('md')]: {
      width: 380,
      position: 'absolute',
      bottom: theme.spacing(3),
      right: theme.direction === 'rtl' ? theme.spacing(-15) : -220,
    },
    [theme.breakpoints.up('lg')]: {
      right: theme.spacing(-15)
    },
    [theme.breakpoints.down('md')]: {
      margin: '0 auto'
    }
  },
  bg: {
    position: 'absolute',
    background: `url(${pipeDeco}) no-repeat transparent`,
    width: 457,
    height: 362,
    opacity: 0.15,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  pipe1: {
    top: 100,
    left: -50
  },
  pipe2: {
    top: -20,
    left: -120,
    transform: 'rotate(90deg) scaleY(-1)',
  },
  pipe3: {
    top: 400,
    left: -160
  },
  pipe4: {
    bottom: -80,
    right: -120
  },
  button: {},
  videoContainer: {
    position: 'relative'
  },
  video: {
    overflow: 'hidden',
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
    marginTop: theme.spacing(5),
    width: '100%',
    position: 'relative',
    height: 450,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.palette.common.black,
    [theme.breakpoints.down('sm')]: {
      height: 180
    },
    '& img': {
      position: 'absolute',
      left: 0,
      width: '100%',
      minHeight: '100%',
      opacity: 0.7
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold,
      textAlign: 'center',
      position: 'relative',
      margin: theme.spacing(8, 0, 4),
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(4, 0)
      }
    },
    [`& .${classes.button}`]: {
      background: theme.palette.primary.main,
      width: 54,
      [theme.breakpoints.up('sm')]: {
        lineHeight: 130,
        width: 130,
        height: 130
      },
      '& i': {
        color: theme.palette.common.white,
        [theme.breakpoints.up('sm')]: {
          fontSize: 32,
          transform: 'scale(1.7) translateX(2px)'
        }
      }
    }
  },
  videoPopup: {
    width: 690,
    maxWidth: 'none'
  },
  closeBtn: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default featureStyles;
