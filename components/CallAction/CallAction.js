import React from 'react';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './action-style';

function CallAction() {
  // Translation Function
  const { t } = useTranslation('common');
  const { classes: text } = useText();

  const { classes } = useStyles();
  return (
    <div className={classes.action}>
      <h4 className={text.title2}>
        {t('retail-landing.footer_text')}
      </h4>
      <div className={classes.btnArea}>
        <Button href="#" variant="contained" color="primary">{t('btn_get')}</Button>
      </div>
    </div>
  );
}

export default CallAction;
