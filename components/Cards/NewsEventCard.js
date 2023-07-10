import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTranslation } from 'next-i18next';
import useStyles from './news-event-style';

function News(props) {
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const {
    text,
    img,
    type,
  } = props;
  return (
    <div className={classes.news}>
      <figure>
        <img src={img} alt="thumb" />
      </figure>
      <div className={classes.desc}>
        <div className={classes.text}>
          <Typography variant="caption" className={classes.type}>
            {t('retail-landing.' + type)}
          </Typography>
          <Typography display="block" component="p">{text}</Typography>
        </div>
        <Button size="small" className={classes.btn}>
          {t('retail-landing.news_readmore')}
        </Button>
      </div>
    </div>
  );
}

News.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,

};

export default News;
