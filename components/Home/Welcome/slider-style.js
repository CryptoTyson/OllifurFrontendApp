import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const decoBanner = '/images/retail/deco-banner.svg';

const sliderStyle = makeStyles({ uniqId: 'slider_banner' })(
  (theme, _params, classes) => ({
    carousel: {
      [theme.breakpoints.down('sm')]: {
        position: 'relative',
        zIndex: 5,
      },
    },
    bannerWrap: {
      position: 'relative',
      display: 'block',
      background:
        theme.palette.mode === 'dark' ? '#303030' : theme.palette.primary[50],
      '& ul[class*="slick-dots"]': {
        zIndex: 1,
        bottom: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
          bottom: 0,
        },
      },
    },
    img: {
      display: 'block',
    },
    centerContent: {},
    slide1: {},
    slide2: {},
    slide3: {},
    slide: {
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        textAlign: 'left',
        padding: theme.spacing(15, 0, 10),
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(15, 0, 2),
      },
      [`&.${classes.centerContent}`]: {
        paddingTop: `${theme.spacing(1)} !important`,
      },
    },
    imgSlide1: {
      [theme.breakpoints.up('md')]: {
        float: theme.direction === 'rtl' ? 'right' : 'left',
      },
    },
    imgSlide2: {
      [theme.breakpoints.up('lg')]: {
        float: theme.direction === 'rtl' ? 'left' : 'right',
      },
    },
    hBanner: {
      textAlign: 'center',
      '& img': {
        marginTop: theme.spacing(1),
        zIndex: 4,
        [theme.breakpoints.up('md')]: {
          height: 164,
        },
        [theme.breakpoints.down('md')]: {
          maxWidth: 'none',
        },
        [theme.breakpoints.down('sm')]: {
          left: -400,
        },
      },
    },
    backgroundBanner: {
      position: 'absolute',
      zIndex: 3,
      left: theme.direction === 'rtl' ? -320 : 'auto',
      right: theme.direction === 'rtl' ? 'auto' : -320,
      top: 20,
      '&:before': {
        content: '""',
        background: `url(${decoBanner}) no-repeat transparent`,
        width: 827,
        height: 246,
        transform: 'scale(0.8)',
        position: 'absolute',
        left: -150,
        bottom: 40,
      },
      '& img': {
        maxHeight: 350,
      },
      [theme.breakpoints.up('xl')]: {
        display: 'none',
      },
      [theme.breakpoints.down('lg')]: {
        display: 'none',
      },
    },
    inner: {
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      position: 'relative',
      [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
        justifyContent: 'center',
      },
    },
    slideNavGroup: {
      position: 'relative',
    },
    text: {
      direction: 'ltr',
      '& h4': {
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing(2),
      },
      '& h5': {
        color: theme.palette.text.secondary,
        marginBottom: theme.spacing(4),
      },
    },
    button: {},
    btnArea: {
      [`& .${classes.button}`]: {
        fontSize: 18,
        [theme.breakpoints.down('sm')]: {
          width: '100%',
          marginBottom: theme.spacing(2),
        },
      },
    },
    textBtn: {
      paddingLeft: theme.spacing(),
      paddingRight: theme.spacing(),
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(4),
      },
    },
    slideNav: {
      display: 'flex',
      justifyContent: 'center',
      maxWidth: 1080,
      margin: '0 auto',
    },
    active: {},
    btnNav: {
      padding: theme.spacing(1, 3, 0.5),
      textTransform: 'none',
      height: 'auto',
      border: '1px solid transparent',
      flex: 1,
      fontWeight: theme.typography.fontWeightRegular,
      flexDirection: 'column',
      alignItems: 'flex-start',
      textAlign: 'left',
      '& strong': {
        textTransform: 'capitalize',
        fontSize: 28,
        display: 'block',
        fontWeight: theme.typography.fontWeightBold,
        marginLeft: -2,
        transition: 'all 0.5s ease-out',
        '&:before': {
          content: '""',
          width: 18,
          height: 18,
          opacity: 0,
          transform: 'scale(0)',
          transition: 'all 0.5s ease-out',
          background: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
          position: 'absolute',
          borderRadius: '50%',
          top: 14,
          left: 24,
        },
      },
      '&:hover': {
        transition: 'all 0.3s ease-out',
        background: alpha(theme.palette.text.primary, 0.05),
        '& strong': {
          color: theme.palette.secondary.main,
        },
      },
      [`&.${classes.active}`]: {
        '& strong': {
          paddingLeft: theme.spacing(3),
          color: theme.palette.secondary.main,
          '&:before': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
      },
    },
    slider: {
      zIndex: 1,
      '& div[class*="slick-current"]': {
        [theme.breakpoints.down('md')]: {
          zIndex: 1,
        },
      },
      [`& .${classes.slide}`]: {
        [theme.breakpoints.up('md')]: {
          height: 1080,
          paddingTop: theme.spacing(5),
        },
      },
    },
    divider: {
      margin: theme.spacing(0, 2),
    },
  }),
);

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sliderStyle;
