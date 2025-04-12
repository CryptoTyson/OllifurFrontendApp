import { makeStyles } from 'tss-react/mui';

const identation = 8;
const sidenavStyles = makeStyles({ uniqId: 'sidenav' })(
  (theme, _params, classes) => ({
    paperNav: {
      width: '100%',
      background: theme.palette.background.paper,
      [theme.breakpoints.up(680)]: {
        width: 300,
      },
    },
    mobileNav: {
      margin: theme.spacing(10, 0, 3),
      overflow: 'auto',
      position: 'relative',
    },
    sideMultilv: {
      padding: theme.spacing(3, 2, 0),
      '& > div': {
        marginLeft: 0,
      },
    },
    sideSinglelv: {
      padding: theme.spacing(3, 2),
    },
    userMenu: {
      padding: theme.spacing(2),
    },
    hasGrandChild: {
      padding: 0,
      '& > div': {
        marginLeft: 0,
      },
    },
    noChild: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    menuList: {
      '& span': {
        textTransform: 'capitalize',
        fontSize: 14,
      },
    },
    sideGroup: {
      margin: theme.spacing(0, 1.5),
      borderRadius: '12px',
      border: '1px solid var(--Gray-200, #EAECF0)',
      background: 'var(--Base-White, #FFF)',
      boxShadow:
        '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',

      [`& .${classes.menuList}`]: {
        padding: theme.spacing(1, 0),
      },
    },
    groupChild: {
      padding: theme.spacing(2, 0, 2, 3),
    },
    sideGroupLink: {
      paddingLeft: theme.spacing(2, 2),
    },
    titleMega: {
      textTransform: 'uppercase',
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 11,
      color: theme.palette.primary.main,
    },
    current: {
      // background:
      //   theme.palette.mode === 'dark'
      //     ? theme.palette.primary.dark
      //     : theme.palette.primary.light,
      '& svg': {
        fill: theme.palette.primary.main,
      },
    },
    currentParent: {
      // background:
      //   theme.palette.mode === 'dark'
      //     ? theme.palette.primary.dark
      //     : theme.palette.primary.light,
      '& svg': {
        fill: theme.palette.primary.main,
      },
    },
  }),
);

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sidenavStyles;
