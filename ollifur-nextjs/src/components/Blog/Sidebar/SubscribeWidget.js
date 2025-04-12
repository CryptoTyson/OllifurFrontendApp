import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';
import Paper from '../../Paper';
import useStyles from '../blog-style';

function SidebarBlog() {
  const { classes } = useStyles();
  const [email, setEmail] = useState('');
  const { t } = useTranslation('common');

  const handleChange = event => {
    setEmail(event.target.value);
  };

  return (
    <Paper title={t('blog_subscribe')} icon="ion-wifi" colorMode whiteBg noMargin desc="Get lates update from us">
      <div className={classes.subscribeForm}>
        <FormControl variant="standard">
          <TextField
            label="Email"
            value={email}
            onChange={handleChange}
            margin="normal"
            required
            variant="filled"
            classes={{
              root: classes.whiteInputRoot,
            }}
          />
        </FormControl>
        <Button className={classes.invertBtn} size="small" variant="outlined" type="submit">
          {t('btn_submit')}
        </Button>
      </div>
    </Paper>
  );
}

export default SidebarBlog;
