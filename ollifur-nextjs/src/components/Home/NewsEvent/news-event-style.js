import { makeStyles } from 'tss-react/mui';

const newsEventStyle = makeStyles({ uniqId: 'news_event' })(theme => ({
  root: {
    position: 'relative',
    margin: '0 auto',
    paddingBottom: theme.spacing(30),
    marginBottom: theme.spacing(-40)
  },
  blogWrap: {
    position: 'relative',
    zIndex: 10,
    margin: theme.spacing(10, 0)
  },
  listNews: {
    '& > div': {
      [theme.breakpoints.down('sm')]: {
        paddingTop: '0 !important',
        paddingBottom: '0 !important'
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default newsEventStyle;
