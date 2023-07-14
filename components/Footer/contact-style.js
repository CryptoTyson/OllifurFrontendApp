import { makeStyles } from 'tss-react/mui';

const contactStyles = makeStyles({ uniqId: 'contact_footer' })(theme => ({
  footer: {
    textAlign: 'center',
    paddingBottom: theme.spacing(10),
    position: 'relative'
  },
  root: {
    position: 'relative',
    zIndex: 11
  },
  logo: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(5),
    fontSize: 18,
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('lg')]: {
      marginTop: theme.spacing(5)
    },
    '& img': {
      width: 54,
      display: 'block',
      margin: '0 auto 8px',
    },
    '& h4': {
      textTransform: 'uppercase',
    }
  },
  margin: {
    margin: theme.spacing(2)
  },
  socmed: {
    margin: theme.spacing(3, 0),
    '& button': {
      margin: theme.spacing(),
      background: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
      width: 36,
      height: 36,
      '& i': {
        color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark
      }
    },
    '& i': {
      fontSize: 24
    }
  },
  contact: {
    color: theme.palette.text.secondary,
  },
  divider: {
    margin: theme.spacing(1.5),
    border: 'none',
    background: 'none'
  },
  formWrap: {
    position: 'relative'
  },
  formBox: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(7),
    },
  },
  title: {
    textAlign: 'left',
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    [theme.breakpoints.down('sm')]: {
      top: theme.spacing(3),
      position: 'relative'
    }
  },
  input: {
    width: '100%',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3)
    }
  },
  form: {
    textAlign: 'left',
    position: 'relative',
  },
  btnArea: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(0, 0, 3),
    '& span': {
      '& a': {
        textDecoration: 'none !important',
        color: theme.palette.secondary.main
      }
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default contactStyles;
