import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'pricing' })(theme => ({
  root: {
    '& > p': {
      marginBottom: 0
    }
  },
  pricingWrap: {
    paddingTop: theme.spacing(5)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
