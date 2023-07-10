import { makeStyles } from 'tss-react/mui';

const deco = '/images/retail/deco-cta.svg';

const useStyles = makeStyles({ uniqId: 'action' })(theme => ({
  action: {
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    [theme.breakpoints.down('lg')]: {
      paddingTop: 0,
      paddingBottom: theme.spacing(3)
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    '& h4': {
      marginBottom: theme.spacing(3)
    },
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      background: `url(${deco}) no-repeat transparent`,
      width: 555,
      height: 520,
      opacity: 0.15
    },
    '&:before': {
      top: -100,
      left: -270,
      transform: theme.direction === 'rtl' ? 'rotate(-90deg)' : 'rotate(90deg)',
      [theme.breakpoints.down('sm')]: {
        left: -480
      }
    },
    '&:after': {
      top: -300,
      right: -300,
      [theme.breakpoints.down('sm')]: {
        right: -480
      }
    }
  },
  btnArea: {
    justifyContent: 'center',
    position: 'relative',
    display: 'flex',
    margin: theme.spacing(3, 0, 10),
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-around'
    },
    '& a': {
      fontSize: 18,
      width: 250,
      height: '50px !important'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
