import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import Title from '../../Title';
import NewsCard from '../../Cards/NewsCard';
import useStyles from './news-event-style';

function NewsEvent() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.root}>
      <Title align="center">
        {t('retail-landing.news_title')}
      </Title>
      <Typography align="center" className={text.subtitle2}>
        {t('retail-landing.news_desc')}
      </Typography>
      <div className={classes.blogWrap}>
        <Container fixed>
          <Grid container spacing={6} className={classes.listNews}>
            <Grid item md={5} xs={12}>
              <Box p={{ md: 3 }}>
                <NewsCard
                  img={imgAPI.photo[21]}
                  title="Sed imperdiet enim ligula, vitae viverra justo."
                  headline="headline"
                  orientation="portrait"
                  type="over"
                  href="#"
                />
              </Box>
            </Grid>
            <Grid item md={7} xs={12}>
              <Box mb={6}>
                <NewsCard
                  img={imgAPI.photo[22]}
                  orientation={isMobile ? 'portrait' : 'landscape'}
                  title="Vestibulum dignissim orci vitae eros rutrum euismod."
                  headline="news"
                  type="over"
                  href="#"
                />
                <NewsCard
                  img={imgAPI.photo[37]}
                  orientation={isMobile ? 'portrait' : 'landscape'}
                  title="Vestibulum dignissim orci vitae eros rutrum euismod."
                  headline="news"
                  type="over"
                  href="#"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default NewsEvent;
