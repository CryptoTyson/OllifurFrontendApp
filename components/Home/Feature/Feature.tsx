import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
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
import useStyles from './feature-style';
import yt from '../../../youtube';
import imgAPI from '../../../public/images/imgAPI';
import { TransitionProps } from '@mui/material/transitions';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Zoom ref={ref} {...props} />;
});

function Feature() {
  const { classes, cx }:any = useStyles();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const [player, setPlayer]:any = useState([]);
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

  const _onReady = (event:any) => {
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
          Title
          <IconButton onClick={handleClose} className={classes.closeBtn} size="large">
            <CloseIcon className={classes.icon} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {yt.use && (
            <YouTube
              videoId="MltGO66gTbo"
              onReady={_onReady}
            />
          )}
        </DialogContent>
      </Dialog>
      <Container fixed={isDesktop}>
        <div className={cx(classes.item, classes.last)}>
          <Container className={classes.container}>
            <Grid container justifyContent="center">
              <Grid item md={8} xs={12} className={classes.videoContainer}>
                <div className={cx(classes.bg, classes.pipe3)} />
                <div className={cx(classes.bg, classes.pipe4)} />
                <Paper className={classes.video}>
                  <img src={imgAPI.retail[27]} alt="screen" />
                  <IconButton className={classes.button} onClick={handleClickOpen} size="large">
                    <i className="ion-play" />
                  </IconButton>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default Feature;
