import { makeStyles } from 'tss-react/mui';
const decoDesktop = '/images/retail/deco-desktop.svg';
const decoMobile = '/images/retail/deco-mobile.svg';

const managementStyles = makeStyles({ uniqId: 'management' })((theme, _params, classes) => ({
  root: {
    position: 'relative',
    marginBottom: theme.spacing(15),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(20)
    },
    '& p': {
      position: 'relative',
      zIndex: 1
    },
    '&:before': {
      content: '""',
      borderRadius: '50%',
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      position: 'absolute',
      opacity: 0.15,
      top: -680,
      height: 1360,
      width: '300%',
      left: '-100%',
      [theme.breakpoints.up('sm')]: {
        width: '200%',
        left: '-50%',
        top: -570,
        height: 1460
      }
    }
  },
  carousel: {
    position: 'relative',
    '& ul[class*="slick-dots"]': {
      position: 'relative',
      bottom: -25,
      '& li': {
        width: 15,
        height: 15,
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: 15,
        opacity: 0.7,
        transition: 'all 0.5s ease-out',
        margin: theme.spacing(0, 0.5),
        '&[class="slick-active"]': {
          background: theme.palette.primary.main,
          width: 40
        },
        '& button:before': {
          display: 'none'
        }
      },
    }
  },
  sliderWrap: {
    marginTop: theme.spacing(10)
  },
  paperRound: {
    width: 200,
    margin: '100px auto 0',
    height: 100,
    background: theme.palette.background.paper,
    borderRadius: 100,
    textAlign: 'center',
    boxShadow: theme.shade.light,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(2),
    cursor: 'pointer',
    '&:focus': {
      outline: 'none'
    },
    '& img': {
      height: 97,
    },
    '& h4': {
      fontSize: 16,
      fontWeight: theme.typography.fontWeightBold
    }
  },
  item: {
    height: 400,
    padding: theme.spacing(6, 0),
    direction: 'ltr',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 0),
    },
    '&:focus': {
      outline: 'none'
    },
    '& figure': {
      overflow: 'hidden',
      position: 'relative',
      background: theme.palette.background.paper,
      borderRadius: theme.rounded.medium,
      boxShadow: theme.shade.light,
      '& img': {
        width: '100%'
      }
    }
  },
  desc: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 1)
    }
  },
  text: {
    '& h4': {
      margin: theme.spacing(3, 0, 2),
      fontSize: 32,
      [theme.breakpoints.down('sm')]: {
        fontSize: 24
      }
    }
  },
  desktop: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '&:before': {
      content: '""',
      background: `url(${decoDesktop}) no-repeat transparent`,
      width: 590,
      height: 276,
      position: 'absolute',
      top: 70,
      left: -15,
      transform: 'scale(0.95)',
      opacity: 0.15
    },
    '& figure': {
      margin: `0 auto ${theme.spacing(3)}`,
      [theme.breakpoints.up('sm')]: {
        width: 456,
        height: 220
      },
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(0, 3)
      }
    },
    [`& .${classes.desc}`]: {
      '& > div': {
        display: 'flex',
        alignItems: 'flex-end',
      },
      '& img': {
        height: 160,
        marginRight: theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
          display: 'none'
        }
      },
      '& p': {
        marginBottom: 0
      }
    }
  },
  mobile: {
    display: 'flex',
    alignItems: 'center',
    '&:before': {
      content: '""',
      background: `url(${decoMobile}) no-repeat transparent`,
      width: 303,
      height: 462,
      position: 'absolute',
      top: 40,
      left: 20,
      opacity: 0.15
    },
    '& figure': {
      width: 196,
      height: 360,
      margin: '0 auto',
      [theme.breakpoints.down('sm')]: {
        width: 98,
        height: 180,
        margin: theme.spacing(0, 1)
      }
    },
    [`& .${classes.desc}`]: {
      textAlign: 'center',
      flex: 1,
      [theme.breakpoints.down('sm')]: {
        textAlign: 'left'
      },
      '& img': {
        maxWidth: 240,
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
          display: 'none'
        }
      },
      '& > div': {
        [theme.breakpoints.up('sm')]: {
          paddingLeft: theme.spacing(2)
        }
      }
    }
  },
  carouselCenter: {
    maxWidth: 560,
    margin: '-500px auto 0',
    position: 'relative',
    background: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
    boxShadow: theme.palette.mode === 'dark' ? `0 0 15px 40px ${theme.palette.background.default}` : `0 0 15px 40px ${theme.palette.background.paper}`,
    '&:before': {
      content: '""',
      background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      boxShadow: theme.palette.mode === 'dark' ? `0 0 15px 40px ${theme.palette.primary.dark}` : `0 0 15px 40px ${theme.palette.primary.light}`,
      width: '100%',
      height: '100%',
      position: 'absolute',
      opacity: 0.15
    }
  },
  sliderSide: {
    '& [class*="slick-list"]': {
      padding: '0 !important'
    }
  },
  carouselSide: {
    [theme.breakpoints.down('lg')]: {
      opacity: 0
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default managementStyles;
