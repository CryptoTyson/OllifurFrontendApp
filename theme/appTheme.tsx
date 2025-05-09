import palette from './palette';
const appTheme = (color: string | number, mode: string) => ({
  palette: {
    mode,
    primary: {
      25: '#FCF4EE',
      50: '#F8EADD',
      100: '#F2D4BB',
      200: '#EBBF99',
      300: '#E4AA77',
      400: '#DD9455',
      500: '#DA8A44',
      600: '#D77F33',
      700: '#884E1B',
      800: '#774418',
      900: '#553111',
      950: '#331D0A',
    },
    secondary: {
      light: '#F8BBD0',
      main: '#DA8A44',
      dark: '#AD1457',
    },
    accent: {
      light: '#B2EBF2',
      main: '#00BCD4',
      dark: '#006064',
    },
    action: {
      hover:
        mode === 'dark' ? 'rgba(128,128,128, 0.9)' : 'rgba(128,128,128, 0.05)',
      hoverOpacity: 0.05,
    },
    background: {
      paper: mode === 'dark' ? '#424242' : '#FFFFFF',
      default: mode === 'dark' ? '#303030' : '#fafafa',
    },
    text: {
      primary: mode === 'dark' ? '#DA8A44' : '#553111',
    },
  },
  typography: {
    fontFamily: ['KindSans', 'ui-sans-serif', 'system-ui', 'sans-serif'].join(','),
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    allVariants: {
      color: mode === 'dark' ? '#DA8A44' : '#553111',
    },
  },

  shade: {
    light: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
    dark: '0px 1px 3px 0px rgba(64, 64, 64, 1), 0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)',
  },
  rounded: {
    small: '8px',
    medium: '12px',
    big: '20px',
  },
  shadows:
    mode === 'dark'
      ? [
          'none',
          '0px 1px 3px 0px rgba(50,50,50, 0.2),0px 1px 1px 0px rgba(50,50,50, 0.14),0px 2px 1px -1px rgba(50,50,50, 0.12)',
          '0px 1px 5px 0px rgba(50,50,50, 0.2),0px 2px 2px 0px rgba(50,50,50, 0.14),0px 3px 1px -2px rgba(50,50,50, 0.12)',
          '0px 1px 8px 0px rgba(50,50,50, 0.2),0px 3px 4px 0px rgba(50,50,50, 0.14),0px 3px 3px -2px rgba(50,50,50, 0.12)',
          '0px 2px 4px -1px rgba(50,50,50, 0.2),0px 4px 5px 0px rgba(50,50,50, 0.14),0px 1px 10px 0px rgba(50,50,50, 0.12)',
          '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 5px 8px 0px rgba(50,50,50, 0.14),0px 1px 14px 0px rgba(50,50,50, 0.12)',
          '0px 3px 5px -1px rgba(50,50,50, 0.2),0px 6px 10px 0px rgba(50,50,50, 0.14),0px 1px 18px 0px rgba(50,50,50, 0.12)',
          '0px 4px 5px -2px rgba(50,50,50, 0.2),0px 7px 10px 1px rgba(50,50,50, 0.14),0px 2px 16px 1px rgba(50,50,50, 0.12)',
          '0px 5px 5px -3px rgba(50,50,50, 0.2),0px 8px 10px 1px rgba(50,50,50, 0.14),0px 3px 14px 2px rgba(50,50,50, 0.12)',
          '0px 5px 6px -3px rgba(50,50,50, 0.2),0px 9px 12px 1px rgba(50,50,50, 0.14),0px 3px 16px 2px rgba(50,50,50, 0.12)',
          '0px 6px 6px -3px rgba(50,50,50, 0.2),0px 10px 14px 1px rgba(50,50,50, 0.14),0px 4px 18px 3px rgba(50,50,50, 0.12)',
          '0px 6px 7px -4px rgba(50,50,50, 0.2),0px 11px 15px 1px rgba(50,50,50, 0.14),0px 4px 20px 3px rgba(50,50,50, 0.12)',
          '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 12px 17px 2px rgba(50,50,50, 0.14),0px 5px 22px 4px rgba(50,50,50, 0.12)',
          '0px 7px 8px -4px rgba(50,50,50, 0.2),0px 13px 19px 2px rgba(50,50,50, 0.14),0px 5px 24px 4px rgba(50,50,50, 0.12)',
          '0px 7px 9px -4px rgba(50,50,50, 0.2),0px 14px 21px 2px rgba(50,50,50, 0.14),0px 5px 26px 4px rgba(50,50,50, 0.12)',
          '0px 8px 9px -5px rgba(50,50,50, 0.2),0px 15px 22px 2px rgba(50,50,50, 0.14),0px 6px 28px 5px rgba(50,50,50, 0.12)',
          '0px 8px 10px -5px rgba(50,50,50, 0.2),0px 16px 24px 2px rgba(50,50,50, 0.14),0px 6px 30px 5px rgba(50,50,50, 0.12)',
          '0px 8px 11px -5px rgba(50,50,50, 0.2),0px 17px 26px 2px rgba(50,50,50, 0.14),0px 6px 32px 5px rgba(50,50,50, 0.12)',
          '0px 9px 11px -5px rgba(50,50,50, 0.2),0px 18px 28px 2px rgba(50,50,50, 0.14),0px 7px 34px 6px rgba(50,50,50, 0.12)',
          '0px 9px 12px -6px rgba(50,50,50, 0.2),0px 19px 29px 2px rgba(50,50,50, 0.14),0px 7px 36px 6px rgba(50,50,50, 0.12)',
          '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 20px 31px 3px rgba(50,50,50, 0.14),0px 8px 38px 7px rgba(50,50,50, 0.12)',
          '0px 10px 13px -6px rgba(50,50,50, 0.2),0px 21px 33px 3px rgba(50,50,50, 0.14),0px 8px 40px 7px rgba(50,50,50, 0.12)',
          '0px 10px 14px -6px rgba(50,50,50, 0.2),0px 22px 35px 3px rgba(50,50,50, 0.14),0px 8px 42px 7px rgba(50,50,50, 0.12)',
          '0px 11px 14px -7px rgba(50,50,50, 0.2),0px 23px 36px 3px rgba(50,50,50, 0.14),0px 9px 44px 8px rgba(50,50,50, 0.12)',
          '0px 11px 15px -7px rgba(50,50,50, 0.2),0px 24px 38px 3px rgba(850,50,50 0.14),0px 9px 46px 8px rgba(50,50,50, 0.12)',
        ]
      : [
          'none',
          '0px 1px 3px 0px rgba(128,128,128, 0.2),0px 1px 1px 0px rgba(128,128,128, 0.14),0px 2px 1px -1px rgba(128,128,128, 0.12)',
          '0px 1px 5px 0px rgba(128,128,128, 0.2),0px 2px 2px 0px rgba(128,128,128, 0.14),0px 3px 1px -2px rgba(128,128,128, 0.12)',
          '0px 1px 8px 0px rgba(128,128,128, 0.2),0px 3px 4px 0px rgba(128,128,128, 0.14),0px 3px 3px -2px rgba(128,128,128, 0.12)',
          '0px 2px 4px -1px rgba(128,128,128, 0.2),0px 4px 5px 0px rgba(128,128,128, 0.14),0px 1px 10px 0px rgba(128,128,128, 0.12)',
          '0px 3px 5px -1px rgba(128,128,128, 0.2),0px 5px 8px 0px rgba(128,128,128, 0.14),0px 1px 14px 0px rgba(128,128,128, 0.12)',
          '0px 3px 5px -1px rgba(128,128,128, 0.2),0px 6px 10px 0px rgba(128,128,128, 0.14),0px 1px 18px 0px rgba(128,128,128, 0.12)',
          '0px 4px 5px -2px rgba(128,128,128, 0.2),0px 7px 10px 1px rgba(128,128,128, 0.14),0px 2px 16px 1px rgba(128,128,128, 0.12)',
          '0px 5px 5px -3px rgba(128,128,128, 0.2),0px 8px 10px 1px rgba(128,128,128, 0.14),0px 3px 14px 2px rgba(128,128,128, 0.12)',
          '0px 5px 6px -3px rgba(128,128,128, 0.2),0px 9px 12px 1px rgba(128,128,128, 0.14),0px 3px 16px 2px rgba(128,128,128, 0.12)',
          '0px 6px 6px -3px rgba(128,128,128, 0.2),0px 10px 14px 1px rgba(128,128,128, 0.14),0px 4px 18px 3px rgba(128,128,128, 0.12)',
          '0px 6px 7px -4px rgba(128,128,128, 0.2),0px 11px 15px 1px rgba(128,128,128, 0.14),0px 4px 20px 3px rgba(128,128,128, 0.12)',
          '0px 7px 8px -4px rgba(128,128,128, 0.2),0px 12px 17px 2px rgba(128,128,128, 0.14),0px 5px 22px 4px rgba(128,128,128, 0.12)',
          '0px 7px 8px -4px rgba(128,128,128, 0.2),0px 13px 19px 2px rgba(128,128,128, 0.14),0px 5px 24px 4px rgba(128,128,128, 0.12)',
          '0px 7px 9px -4px rgba(128,128,128, 0.2),0px 14px 21px 2px rgba(128,128,128, 0.14),0px 5px 26px 4px rgba(128,128,128, 0.12)',
          '0px 8px 9px -5px rgba(128,128,128, 0.2),0px 15px 22px 2px rgba(128,128,128, 0.14),0px 6px 28px 5px rgba(128,128,128, 0.12)',
          '0px 8px 10px -5px rgba(128,128,128, 0.2),0px 16px 24px 2px rgba(128,128,128, 0.14),0px 6px 30px 5px rgba(128,128,128, 0.12)',
          '0px 8px 11px -5px rgba(128,128,128, 0.2),0px 17px 26px 2px rgba(128,128,128, 0.14),0px 6px 32px 5px rgba(128,128,128, 0.12)',
          '0px 9px 11px -5px rgba(128,128,128, 0.2),0px 18px 28px 2px rgba(128,128,128, 0.14),0px 7px 34px 6px rgba(128,128,128, 0.12)',
          '0px 9px 12px -6px rgba(128,128,128, 0.2),0px 19px 29px 2px rgba(128,128,128, 0.14),0px 7px 36px 6px rgba(128,128,128, 0.12)',
          '0px 10px 13px -6px rgba(128,128,128, 0.2),0px 20px 31px 3px rgba(128,128,128, 0.14),0px 8px 38px 7px rgba(128,128,128, 0.12)',
          '0px 10px 13px -6px rgba(128,128,128, 0.2),0px 21px 33px 3px rgba(128,128,128, 0.14),0px 8px 40px 7px rgba(128,128,128, 0.12)',
          '0px 10px 14px -6px rgba(128,128,128, 0.2),0px 22px 35px 3px rgba(128,128,128, 0.14),0px 8px 42px 7px rgba(128,128,128, 0.12)',
          '0px 11px 14px -7px rgba(128,128,128, 0.2),0px 23px 36px 3px rgba(128,128,128, 0.14),0px 9px 44px 8px rgba(128,128,128, 0.12)',
          '0px 11px 15px -7px rgba(128,128,128, 0.2),0px 24px 38px 3px rgba(128,128,128, 0.14),0px 9px 46px 8px rgba(128,128,128, 0.12)',
        ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'h1, h2, h3, h4, h5, h6': {
          margin: 0,
        },
        p: {
          marginTop: 0,
          marginBottom: 16,
        },
        ul: {
          margin: 0,
          padding: 0,
        },
        button: {
          fontFamily: 'KindSans',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          '@media (min-width: 1200px)': {
            maxWidth: 1280,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        filled: {
          paddingTop: 8,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: '#EEE',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          borderRadius: '8px 8px 0 0',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 12,
        },
        elevation1: {
          boxShadow:
            mode === 'dark'
              ? '0px 1px 3px 0px rgba(64, 64, 64, 1), 0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)'
              : '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
        },
        elevation4: {
          boxShadow:
            mode === 'dark'
              ? '0px 2px 4px -1px rgba(64, 64, 64, 0.46), 0px 4px 5px 0px rgba(42, 42, 42, 0.32), 0px 1px 10px 0px rgba(20, 20, 20, 0.12)'
              : '0 1.5px 12px 4px rgba(0, 0, 0, 0.12)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedSecondary: {},
        contained: {
          boxShadow: 'none',
          color: '#FFFFFF',
          background: '#D77F33',
        },
        outlinedSecondary: {
          borderWidth: 2,
        },
        outlinedPrimary: {
          borderWidth: 2,
        },
        root: {
          borderRadius: '8px',
          fontWeight: 500,
          padding: '12px 24px',
          textTransform: 'none',
        },
        sizeSmall: {
          padding: '7px 12px',
        },
        sizeLarge: {
          padding: '8px 32px',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        button: {
          fontWeight: 600,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#344054',
          '&.Mui-focused': {
            color: '#344054',
          },
        },
        filled: {
          top: -2,
          '&.MuiInputLabel-shrink': {
            color: '#344054',
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: '12px !important',
          backgroundColor: 'none',
          border: '1px solid',
          borderColor:
            mode === 'dark' ? 'hsla(0,0%,100%,.25)' : 'rgba(0,0,0,.2)',
          '&:before': {
            display: 'none',
          },
          '&:after': {
            display: 'none',
          },
          '&.Mui-focused': {
            borderColor: '#DA8A44',
            backgroundColor: 'none',
          },
          '&:hover': {
            backgroundColor: 'none',
          },
        },
        adornedEnd: {
          paddingRight: 0,
          paddingLeft: 8,
          '& input': {
            padding: 4,
            marginTop: 24,
          },
        },
        input: {
          padding: '23px 12px 6px',
        },
      },
    },
  },
});

export default appTheme;
