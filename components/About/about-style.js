import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const aboutStyle = makeStyles({ uniqId: 'about' })((theme, _params, classes) => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
    [theme.breakpoints.up('md')]: {
      height: 500,
      paddingTop: theme.spacing(10)
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      padding: theme.spacing(20, 0, 5)
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(15)
    }
  },
  slide: {
    position: 'relative',
  },
  img: {
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(3)
    },
    '& img': {
      maxWidth: '100%',
      maxHeight: 350
    }
  },
  inner: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(3)
    },
    '& h5': {
      color: theme.palette.text.secondary,
    }
  },
  videoPopup: {
    maxWidth: 'none',
    '& h4': {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      flex: 1,
      overflow: 'hidden',
    },
    [theme.breakpoints.up('sm')]: {
      width: 690
    },
    '& iframe': {
      width: '100%'
    }
  },
  closeBtn: {
    position: 'absolute',
    top: 4,
    right: 4
  },
  videoRoot: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  },
  videoWrap: {
    [theme.breakpoints.down('md')]: {
      maxWidth: 400,
      margin: '0 auto'
    }
  },
  progressWrap: {
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5)
    },
    '& ul': {
      margin: 0,
      padding: 0,
      '& li': {
        listStyle: 'none',
        marginBottom: theme.spacing(5),
        '&:last-child': {
          marginBottom: 0
        },
        '& h5': {
          fontWeight: theme.typography.fontWeightBold
        }
      }
    }
  },
  progressBg: {
    borderRadius: 10,
    background: theme.palette.divider,
    height: '10px !important'
  },
  bar: {
    borderRadius: 10,
  },
  accent: {
   [`& .${classes.bar}`]: {
     background: theme.palette.accent.main
   }
  },
  textIcon: {
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    '& i': {
      fontSize: 28
    },
    '& h6': {
      marginLeft: theme.spacing(1)
    }
  },
  progress: {
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5, 0, 10)
    },
    '& ul': {
      margin: 0,
      padding: 0,
      '& li': {
        listStyle: 'none',
        marginBottom: theme.spacing(5),
        '&:last-child': {
          marginBottom: 0
        },
        '& h6': {
          fontWeight: theme.typography.fontWeightBold
        }
      }
    }
  },
  bgWrapper: {
    backgroundColor: theme.palette.mode === 'dark' ? alpha(theme.palette.secondary.dark, 0.3) : alpha(theme.palette.secondary.light, 0.3),
    padding: theme.spacing(4, 0, 5),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4, 0, 10),
    },
    [theme.breakpoints.down('sm')]: {
      borderRadius: theme.spacing(5, 5, 0, 0),
    }
  },
  galleryRoot: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& ul[class*="slick-dots"]': {
      bottom: -55
    }
  },
  item: {
    direction: theme.direction === 'rtl' ? 'ltr' : 'inherit'
  },
  carousel: {
    position: 'relative',
  },
  teamRoot: {
    '& ul[class*="slick-dots"]': {
      bottom: -15,
      [theme.breakpoints.down('md')]: {
        bottom: -55
      }
    },
    [`& .${classes.item} > *`]: {
      [theme.breakpoints.down('sm')]: {
        width: 280
      }
    },
    [`& .${classes.carousel}`]: {
      '& > *': {
        height: 160,
      }
    }
  },
  nav: {
    position: 'absolute',
    top: '50%',
    fontSize: 38,
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'inherit',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  prev: {
    left: -30
  },
  next: {
    right: -30
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default aboutStyle;
