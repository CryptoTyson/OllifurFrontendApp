import React from 'react';
import Button from '@mui/material/Button';

import { useText } from '~/theme/common';
import useStyles from './action-style';

function CallAction() {
  // Translation Function
  
  const { classes: text } = useText();

  const { classes } = useStyles();
  return (
    <div className={classes.action}>
      <h4 className={text.title2}>
        {'retail-landing.footer_text'}
      </h4>
      <div className={classes.btnArea}>
        <Button href="#" variant="contained" color="primary">{'btn_get'}</Button>
      </div>
    </div>
  );
}

export default CallAction;
