import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import useStyles from './form-style';

function AuthFrame(props) {
  const { classes } = useStyles();
  const { classes: text } = useText();
  // Media query
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const {
    children, title,
    subtitle, type
  } = props;

  return (
    <div className={classes.pageWrap}>
      <div className={classes.authFrame}>
        <Grid container spacing={isMobile ? 0 : 2}>
          <Grid item md={6} xs={12}>
            <Box px={{ sm: 6, md: 0 }}>
              <Paper className={classes.formBox}>
                <div className={classes.formWrap}>
                  {children}
                </div>
              </Paper>
            </Box>
          </Grid>
          {isDesktop && (
            <Grid item md={6} xs={12}>
              <div className={classes.greeting}>
                <h4 className={text.title2}>
                  { title }
                </h4>
                <h6 className={text.subtitle2}>
                  { subtitle }
                </h6>
                <div className={classes.img}>
                  {type === 'login' ? (
                    <img
                      src={imgAPI.retailInner[3]}
                      data-2d={imgAPI.retailInner[2]}
                      data-3d={imgAPI.retailInner[3]}
                      className="img-2d3d"
                      alt="login"
                    />
                  ) : (
                    <img
                      src={imgAPI.retailInner[5]}
                      data-2d={imgAPI.retailInner[4]}
                      data-3d={imgAPI.retailInner[5]}
                      className="img-2d3d"
                      alt="register"
                    />
                  )}
                </div>
              </div>
            </Grid>
          )}
        </Grid>
      </div>
    </div>
  );
}

AuthFrame.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  type: PropTypes.string,
};

AuthFrame.defaultProps = {
  subtitle: '',
  type: '',
};

export default AuthFrame;
