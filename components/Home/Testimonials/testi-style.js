import { makeStyles } from 'tss-react/mui';

const testiStyles = makeStyles({ uniqId: 'testimonial' })((theme, _params, classes) => ({
  root: {
    minHeight: 400,
  },
  carouselWrap: {
    position: 'relative',
    zIndex: 1,
    paddingBottom: theme.spacing(3),
    textAlign: 'center'
  },
  item: {
    '&:focus': {
      outline: 'none'
    }
  },
  content: {
    fontStyle: 'italic',
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  name: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    margin: theme.spacing(2, 0, 4),
    '& strong': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  carouselText: {
    [`& .${classes.item}`]: {
      position: 'relative'
    },
    '& > div': {
      marginBottom: 0
    }
  },
  carouselAvatar: {
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: 768,
    },
    [`& .${classes.item}`]: {
      cursor: 'pointer',
      height: 140,
      paddingTop: theme.spacing(2)
    },
    '& div[class*="slick-center"]': {
      [`& .${classes.avatar}`]: {
        padding: theme.spacing(0.5),
        background: theme.palette.mode === 'dark' ? `linear-gradient(120deg, ${theme.palette.secondary.light}, ${theme.palette.primary.light})` : `linear-gradient(120deg, ${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
        opacity: 1,
        transform: 'scale(1.4)'
      }
    }
  },
  avatar: {
    width: 80,
    height: 80,
    margin: '0 auto',
    opacity: 0.7,
    transition: 'all 0.3s ease',
    '& img': {
      borderRadius: '50%'
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default testiStyles;
