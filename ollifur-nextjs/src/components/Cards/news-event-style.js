import { makeStyles } from 'tss-react/mui';

const cardsStyles = makeStyles({ uniqId: 'news_card' })(theme => ({
  news: {
    display: 'flex',
    direction: 'ltr',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    '& figure': {
      overflow: 'hidden',
      borderRadius: theme.rounded.small,
      margin: 0,
      marginRight: theme.spacing(2),
      width: 120,
      height: 140,
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        height: 'auto',
        maxHeight: 200,
        margin: theme.spacing(2, 1)
      },
      '& img': {
        maxHeight: '100%',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        [theme.breakpoints.down('sm')]: {
          width: '100%',
          height: 'auto',
        },
      }
    }
  },
  desc: {
    flex: 1,
    '& p': {}
  },
  text: {
    padding: theme.spacing(0, 1.5),
    maxWidth: 400
  },
  type: {
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
    color: theme.palette.text.secondary
  },
  btn: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default cardsStyles;
