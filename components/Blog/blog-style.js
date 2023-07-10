import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import {
  deepOrange, deepPurple, blue,
  red, pink, indigo,
  cyan, green
} from '@mui/material/colors';

const useStyles = makeStyles({ uniqId: 'blog' })((theme, _params, classes) => ({
  media: {
    height: '100%',
    position: 'absolute',
    width: '100%',
    '&:after': {
      content: '""',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8))',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      position: 'absolute'
    }
  },
  profileList: {
    padding: 0,
    '& li': {
      paddingLeft: 0
    }
  },
  orange: {},
  purple: {},
  pink: {},
  green: {},
  cyan: {},
  indigo: {},
  avatar: {
    margin: 10,
    [`&.${classes.orange}`]: {
    backgroundColor: deepOrange[500],
    },
    [`&.${classes.purple}`]: {
      backgroundColor: deepPurple[500],
    },
    [`&.${classes.pink}`]: {
      backgroundColor: pink[300],
    },
    [`&.${classes.green}`]: {
      backgroundColor: cyan[500],
    },
    [`&.${classes.cyan}`]: {
      backgroundColor: green[500],
    },
    [`&.${classes.indigo}`]: {
      backgroundColor: indigo[500],
    },
  },
  avatarIcon: {
    backgroundColor: alpha(theme.palette.divider, 0.1),
    '& svg': {
      fill: theme.palette.primary.main
    }
  },
  invertBtn: {
    borderColor: theme.palette.common.white,
    color: theme.palette.common.white,
  },
  albumRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    '& > *': {
      width: '100%'
    }
  },
  gridList: {
    width: 500,
    height: 'auto',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  img: {
    maxWidth: 'none'
  },
  listText: {
    whiteSpace: 'normal'
  },
  subscribeForm: {
    padding: theme.spacing(),
    marginTop: theme.spacing(-2),
    display: 'flex',
    alignItems: 'flex-end',
    '& > div': {
      flex: 1
    },
    '& button': {
      top: -14,
      marginLeft: theme.spacing(1)
    }
  },
  whiteInputRoot: {
    '& label, input': {
      color: `${theme.palette.common.white} !important`,
    },
    '& .MuiFilledInput-root': {
      borderColor: alpha(theme.palette.common.white, 0.6),
    },
  },
  subtitle: {},
  blogHeadline: {
    cursor: 'pointer',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      alignItems: 'flex-end',
      display: 'flex'
    },
    [theme.breakpoints.down('sm')]: {
      [`& .${classes.subtitle}`]: {
        display: 'none'
      }
    }
  },
  anchorContent: {
    display: 'block',
    color: '#fff',
    textDecoration: 'none',
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5)
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(10)
    }
  },
  headlineTitle: {
    display: 'block',
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1)
    }
  },
  titleBlog: {
    fontWeight: theme.typography.fontWeightMedium
  },
  imageBlog: {
    margin: theme.spacing(5, 0),
    '& img': {
      width: '100%'
    }
  },
  list: {
    listStyle: 'disc'
  },
  divider: {
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up('sm')]: {
      margin: `${theme.spacing(1.5)} 0`,
    },
    background: 'none'
  },
  dividerBordered: {
    margin: `${theme.spacing(3)} 0`
  },
  content: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 2)
    }
  },
  postList: {
    [theme.breakpoints.down('lg')]: {
      marginTop: theme.spacing(3)
    }
  },
  article: {
    color: theme.palette.text.primary,
    fontSize: 16,
    lineHeight: '24px',
    '& ul, ol': {
      marginLeft: theme.spacing(5),
      paddingBottom: theme.spacing(2),
      paddingLeft: 0
    },
    '& ul': {
      listStyleType: 'disc'
    },
    '& ol': {
      listStyleType: 'decimal'
    },
    '& code': {
      whiteSpace: 'normal',
    }
  },
  redBtn: {
    color: red[500],
    borderColor: red[500],
    '&:hover': {
      borderColor: red[700],
    },
  },
  blueBtn: {
    color: blue[300],
    borderColor: blue[300],
    '&:hover': {
      borderColor: blue[500],
    },
  },
  indigoBtn: {
    color: indigo[300],
    borderColor: indigo[300],
    '&:hover': {
      borderColor: indigo[500],
    },
  },
  cyanBtn: {
    color: cyan[500],
    borderColor: cyan[500],
    '&:hover': {
      borderColor: cyan[700],
    },
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
  btnArea: {
    '& button': {
      borderWidth: 2,
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        borderRadius: '50%',
        width: 35,
        height: 35,
        padding: 0,
        minWidth: 0
      },
      '& i': {
        fontSize: 22,
        lineHeight: '22px',
        [theme.breakpoints.up('sm')]: {
          marginRight: theme.spacing(1),
        }
      }
    }
  },
  pagination: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(3)
  },
  flipRtl: {
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'inherit'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
