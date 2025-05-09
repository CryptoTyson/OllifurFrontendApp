import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';

const cardMediaStyles = makeStyles({ uniqId: 'media_card' })((theme, _params, classes) => ({
  mediaCard: {
    overflow: 'hidden',
    position: 'relative',
    margin: theme.spacing(2, 0),
    height: 340,
    [theme.breakpoints.down('lg')]: {
      height: 250
    },
    '& figure': {
      margin: 0,
      background: theme.palette.common.black,
      '& img': {
        opacity: 0.62,
        minHeight: '100%',
        width: '100%',
      }
    },
    '& > div': {
      padding: 0
    }
  },
  playBtn: {
    position: 'absolute',
    width: 80,
    height: 80,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: `6px solid ${theme.palette.common.white}`,
    backgroundColor: 'rgba(0, 0, 0, 0.24) !important',
    '&:hover': {
      background: alpha(theme.palette.background.paper, 0.8),
    },
    '& span': {
      left: 2,
      position: 'relative',
      '&:before': {
        fontSize: 60,
        color: theme.palette.common.white
      }
    }
  },
  duration: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1
  },
  property: {
    transition: 'all 0.3s ease-out',
    position: 'absolute',
    width: '100%',
    height: '100%',
    minHeight: 170,
    padding: theme.spacing(3),
    top: 0,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    left: 0,
    color: theme.palette.common.white,
    background: 'linear-gradient(to bottom, rgba(238, 238, 238, 0) 20%, #000 90%)',
    '& h5': {
      fontSize: 20,
      [theme.breakpoints.down('sm')]: {
        fontSize: 18,
      }
    }
  },
  mediaTitle: {
    color: theme.palette.common.white,
    lineHeight: '28px'
  },
  coverLink: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    cursor: 'pointer',
    zIndex: 1
  },
  /* Orientation */
  landscape: {
    [`& .${classes.mediaTitle}`]: {
      textAlign: 'left'
    }
  },
  portrait: {
    maxWidth: 400,
    [`& .${classes.mediaTitle}`]: {
      textAlign: 'center',
      justifyContent: 'center'
    }
  },
  /* Type */
  photo: {
    cursor: 'pointer'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default cardMediaStyles;
