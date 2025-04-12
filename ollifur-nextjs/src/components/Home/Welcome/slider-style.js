import { styled } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

const decoBanner = '/images/retail/deco-banner.svg';

export const BannerWrap = styled('div')(({ theme }) => ({
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
}));

export const Carousel = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    position: 'relative',
    zIndex: 5,
  },
}));

export const Slide = styled('div')(({ theme, centerContent }) => ({
  position: 'relative',
  paddingTop: centerContent ? `${theme.spacing(1)} !important` : undefined,
  [theme.breakpoints.down('md')]: {
    textAlign: 'left',
    padding: theme.spacing(15, 0, 10),
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(15, 0, 2),
  },
}));

export const ImgSlide1 = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    float: theme.direction === 'rtl' ? 'right' : 'left',
  },
}));

export const ImgSlide2 = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    float: theme.direction === 'rtl' ? 'left' : 'right',
  },
}));

export const HBanner = styled('div')(({ theme }) => ({
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
}));

export const BackgroundBanner = styled('div')(({ theme }) => ({
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
}));

export const Inner = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  position: 'relative',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

export const Text = styled('div')(({ theme }) => ({
  direction: 'ltr',
  '& h4': {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(2),
  },
  '& h5': {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(4),
  },
}));

export const BtnArea = styled('div')(({ theme }) => ({
  '& button': {
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
  },
}));

export const TextBtn = styled('div')(({ theme }) => ({
  paddingLeft: theme.spacing(),
  paddingRight: theme.spacing(),
  [theme.breakpoints.up('sm')]: {
    marginRight: theme.spacing(4),
  },
}));

export const SlideNav = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  maxWidth: 1080,
  margin: '0 auto',
}));

export const BtnNav = styled('button')(({ theme, active }) => ({
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
    paddingLeft: active ? theme.spacing(3) : 0,
    color: active ? theme.palette.secondary.main : 'inherit',
    '&:before': {
      content: '""',
      width: 18,
      height: 18,
      opacity: active ? 1 : 0,
      transform: active ? 'scale(1)' : 'scale(0)',
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
}));

export const Slider = styled('div')(({ theme }) => ({
  zIndex: 1,
  '& div[class*="slick-current"]': {
    [theme.breakpoints.down('md')]: {
      zIndex: 1,
    },
  },
}));

export const Divider = styled('div')(({ theme }) => ({
  margin: theme.spacing(0, 2),
}));
