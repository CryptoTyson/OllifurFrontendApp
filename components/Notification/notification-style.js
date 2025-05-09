import { makeStyles } from 'tss-react/mui';

const notificationStyles = makeStyles({ uniqId: 'notification' })(theme => ({
  notification: {
    width: '95%',
    [theme.breakpoints.up('lg')]: {
      width: '80%',
    },
    '& > div': {
      width: '100%',
      background: '#424242',
      color: theme.palette.common.white,
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(1, 4),
      },
      '& > div:first-child': {
        [theme.breakpoints.up('sm')]: {
          flex: 1,
          marginRight: theme.spacing(2)
        },
        [theme.breakpoints.down('sm')]: {
          textAlign: 'center'
        }
      }
    }
  },
  button: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 150,
    },
  },
  action: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: 0,
      margin: 0
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default notificationStyles;
