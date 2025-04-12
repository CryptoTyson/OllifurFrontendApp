import { makeStyles } from 'tss-react/mui';

const heroBanner = makeStyles({ uniqId: 'hero_banner' })(() => ({
  heroBannerWrap: {
    position: 'relative',
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default heroBanner;
