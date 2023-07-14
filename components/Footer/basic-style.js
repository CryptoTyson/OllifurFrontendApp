import { makeStyles } from 'tss-react/mui';

const basicStyles = makeStyles({ uniqId: 'basic_footer' })(theme => ({
  footer: {
    position: 'relative',
    paddingBottom: theme.spacing(5)
  },
  root: {
    paddingTop: 1,
    textAlign: 'center',
    position: 'relative',
    zIndex: 11,
    '& nav': {
      margin: theme.spacing(6, 0),
      '& ul': {
        margin: 0,
        padding: 0,
        '& li': {
          display: 'inline-block',
          margin: theme.spacing(0, 1),
          '& a': {
            color: theme.palette.text.primary,
            textTransform: 'capitalize',
            textDecoration: 'none !important',
            padding: theme.spacing(0, 1),
            fontSize: 18,
            [theme.breakpoints.down('sm')]: {
              fontSize: 16
            }
          }
        }
      }
    }
  },
  logo: {
    marginBottom: theme.spacing(3),
    '& img': {
      width: 70,
    }
  },
  subscribe: {
    maxWidth: 560,
    margin: '0 auto',
    marginBottom: theme.spacing(5),
    position: 'relative',
    '& h5': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  form: {
    display: 'block',
    position: 'relative',
    marginTop: theme.spacing(3),
  },
  field: {
    width: '100%',
    '& input': {
      paddingRight: theme.spacing(20),
      [theme.breakpoints.down('sm')]: {
        paddingRight: 90
      }
    }
  },
  button: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 90
  },
  socmed: {
    display: 'flex',
    width: 200,
    margin: `${theme.spacing(8)} auto`,
    justifyContent: 'space-between',
  },
  icon: {
    padding: theme.spacing(),
    background: theme.palette.divider,
    color: theme.palette.primary.main,
    '& i': {
      width: 25,
      height: 25,
      fontSize: 22,
      lineHeight: '24px'
    }
  },
  copyright: {
    display: 'block',
    padding: theme.spacing(1.5),
    marginTop: theme.spacing(3),
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default basicStyles;
