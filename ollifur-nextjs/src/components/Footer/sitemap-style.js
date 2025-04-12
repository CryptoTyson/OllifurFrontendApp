import { makeStyles } from 'tss-react/mui';

const footerStyles = makeStyles({ uniqId: 'sitemap' })((theme) => ({
  root: {
    position: 'relative'
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  footer: {
    position: 'relative',
    zIndex: 11,
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(5),
    },
    '& ul': {
      margin: 0,
      padding: 0,
    },
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      '& a': {
        fontSize: 16,
        textDecoration: 'none !important',
        '&:hover': {
          color: theme.palette.primary.main
        }
      }
    },
    '& p': {
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(0, 3),
        textAlign: 'center'
      }
    }
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: 16,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
  },
  logo: {
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    '& img': {
      width: 48,
      marginRight: theme.spacing(),
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 24,
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      padding: theme.spacing(0, 3)
    }
  },
  footerDesc: {
    display: 'block',
    fontSize: 14,
    marginBottom: theme.spacing(2)
  },
  socmed: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    '& button': {
      margin: theme.spacing(),
      background: theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.secondary.light,
      width: 36,
      height: 36,
      lineHeight: '36px',
      '& i': {
        color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
      }
    },
    '& svg': {
      width: 24,
      height: 24
    }
  },
  icon: {
    '& + div': {
      background: 'none !important',
      padding: theme.spacing(1.5, 1.5, 1.5, 4),
      width: 'calc(100% - 32px)',
    }
  },
  siteMapItem: {
    [theme.breakpoints.down('lg')]: {
      paddingBottom: '0 !important',
      paddingTop: '0 !important',
    }
  },
  accordionRoot: {
    background: 'none',
    boxShadow: 'none',
    maxWidth: 480,
    margin: '0 auto',
    marginTop: theme.spacing(2),
  },
  accordionContent: {
    margin: 0,
    '& strong': {
      color: theme.palette.primary.main
    }
  },
  accordionIcon: {
    padding: 0
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default footerStyles;
