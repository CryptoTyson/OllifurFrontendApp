import React, { useState } from 'react';
import Container from '@mui/material/Container';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import YouTube from 'react-youtube';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Zoom from '@mui/material/Zoom';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import { useText, useTextAlign } from '~/theme/common';
import yt from '~/youtube';
import TitleSecondary from '../../Title/TitleSecondary';
import Title from '../../Title';
import useStyles from './feature-style';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

function Feature() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { t } = useTranslation('common');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const [player, setPlayer] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const handleClickOpen = () => {
    if (yt.use) {
      setOpenPopup(true);
      player[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    player[0].pauseVideo();
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const opts = {
    height: '360',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 0,
      origin: 'http://localhost:3007'
    }
  };

  return (
    <div className={classes.root}>
      <Dialog
        open={openPopup}
        TransitionComponent={Transition}
        keepMounted
        classes={{ paper: classes.videoPopup }}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-slide-title">
          {t('retail-landing.banner_title')}
          <IconButton onClick={handleClose} className={classes.closeBtn} size="large">
            <CloseIcon className={classes.icon} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {yt.use && (
            <YouTube
              videoId="MltGO66gTbo"
              onReady={_onReady}
              opts={opts}
            />
          )}
        </DialogContent>
      </Dialog>
      <Container fixed={isDesktop}>
        <Title align="center">
          {t('retail-landing.feature_title')}
        </Title>
        <div className={classes.item}>
          <Grid container alignItems="center" justifyContent="center" direction={isMobile ? 'column-reverse' : 'row'}>
            <Grid item md={4} xs={12}>
              <Box px={4}>
                <ScrollAnimation
                  animateOnce
                  offset={-200}
                  animateIn="fadeInLeftShort"
                  duration={0.5}
                >
                  <div className={classes.illustration}>
                    <div className={cx(classes.bg, classes.pipe1)} />
                    <figure className={cx(classes.screen1, classes.mobileScreen)}>
                      <img src={imgAPI.retail[25]} alt="screen" />
                    </figure>
                    <figure className={cx(classes.graphic, classes.artwork1)}>
                      <img
                        src={imgAPI.retail[10]}
                        data-2d={imgAPI.retail[9]}
                        data-3d={imgAPI.retail[10]}
                        className="img-2d3d"
                        alt="illustration"
                      />
                    </figure>
                  </div>
                </ScrollAnimation>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box px={4}>
                <div className={classes.desc}>
                  <TitleSecondary align={isMobile ? 'center' : 'left'} text={t('retail-landing.feature_title1')} />
                  <p className={cx(text.subtitle2, isMobile ? align.textCenter : align.textLeft)}>
                    {t('retail-landing.feature_desc1')}
                  </p>
                </div>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid container alignItems="center">
            <Grid item md={6} xs={12}>
              <Box px={4}>
                <div className={classes.desc}>
                  <TitleSecondary align={isMobile ? 'center' : 'right'} text={t('retail-landing.feature_title2')} />
                  <p className={cx(text.subtitle2, isMobile ? align.textCenter : align.textRight)}>
                    {t('retail-landing.feature_desc2')}
                  </p>
                </div>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box px={{ sm: 8 }}>
                <ScrollAnimation
                  animateOnce
                  offset={-200}
                  animateIn="fadeInRightShort"
                  duration={0.5}
                  delay={500}
                >
                  <div className={classes.illustration}>
                    <div className={cx(classes.bg, classes.pipe2)} />
                    <figure className={cx(classes.screen1, classes.desktopScreen)}>
                      <img src={imgAPI.retail[26]} alt="screen" />
                    </figure>
                    <figure className={cx(classes.graphic, classes.artwork2)}>
                      <img
                        src={imgAPI.retail[12]}
                        data-2d={imgAPI.retail[11]}
                        data-3d={imgAPI.retail[12]}
                        className="img-2d3d"
                        alt="illustration"
                      />
                    </figure>
                  </div>
                </ScrollAnimation>
              </Box>
            </Grid>
          </Grid>
        </div>
        <div className={cx(classes.item, classes.last)}>
          <Container className={classes.container}>
            <Grid container justifyContent="center">
              <Grid item md={8} xs={12} className={classes.videoContainer}>
                <div className={cx(classes.bg, classes.pipe3)} />
                <div className={cx(classes.bg, classes.pipe4)} />
                <TitleSecondary align="center" text={t('retail-landing.feature_title3')} />
                <p className={text.subtitle2}>
                  {t('retail-landing.feature_desc3')}
                </p>
                <ScrollAnimation
                  animateOnce
                  offset={100}
                  animateIn="fadeInUpShort"
                  duration={0.5}
                  delay={500}
                >
                  <Paper className={classes.video}>
                    <img src={imgAPI.retail[27]} alt="screen" />
                    <IconButton className={classes.button} onClick={handleClickOpen} size="large">
                      <i className="ion-play" />
                    </IconButton>
                  </Paper>
                </ScrollAnimation>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default Feature;
