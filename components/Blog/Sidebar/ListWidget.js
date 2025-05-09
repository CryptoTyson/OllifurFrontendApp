import React from 'react';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTranslation } from 'next-i18next';
import Paper from '../../Paper';
import useStyles from '../blog-style';

function ListWidget() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');

  const periode = [
    'October 2018',
    'September 2018',
    'August 2018',
    'July 2018',
    'June 2018',
    'April 2018',
    'March 2018',
    'Febuary 2018'
  ];

  return (
    <Paper title={t('blog_archived')} icon="ion-folder" whiteBg desc="">
      <div>
        <div className={classes.albumRoot}>
          <List component="nav">
            {periode.map((item, index) => (
              <ListItem key={index.toString()} button>
                <ListItemText primary={item} />
                <KeyboardArrowRight className={classes.flipRtl} />
              </ListItem>
            ))}
          </List>
        </div>
        <Divider className={classes.divider} />
        <Grid container justifyContent="center">
          <Button fullWidth color="primary">
            See All
          </Button>
        </Grid>
      </div>
    </Paper>
  );
}

export default ListWidget;
