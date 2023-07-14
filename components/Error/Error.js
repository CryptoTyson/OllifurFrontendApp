import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import link from '~/public/text/link';
import useStyles from './error-style';

function Error(props) {
  const { classes } = useStyles();
  const { classes:  txt } = useText();
  const { errCode, text } = props;
  const { t } = useTranslation('common');

  return (
    <div className={classes.errorWrap}>
      <Container>
        <Grid container>
          <Grid item md={5} xs={12}>
            <div className={classes.flex}>
              <div className={classes.illustration}>
                <img
                  src={imgAPI.retailInner[9]}
                  data-2d={imgAPI.retailInner[8]}
                  data-3d={imgAPI.retailInner[9]}
                  className="img-2d3d"
                  alt="error"
                />
              </div>
            </div>
          </Grid>
          <Grid item md={7} xs={12}>
            <div className={classes.text}>
              <Typography variant="h1" className={txt.textPrimary}>
                <strong>
                  {errCode}
                </strong>
              </Typography>
              <Typography variant="h4">{text}</Typography>
              <Typography>
                {t('404_subtitle')}
              </Typography>
              <Button color="primary" variant="contained" href={link.retail.home} size="large" className={classes.button}>
                {t('back')}
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Error.propTypes = {
  errCode: PropTypes.string,
  text: PropTypes.string,

};

Error.defaultProps = {
  errCode: '404',
  text: '',
};

export default Error;
