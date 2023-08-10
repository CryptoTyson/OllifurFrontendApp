import React, { useRef, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import link from '../../../public/text/link';
import { useText, useTextAlign } from '../../../theme/common';
import useStyles from './slider-style';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Icon,
  IconButton,
  Paper,
  Stack,
  Typography,
  Zoom,
} from '@mui/material';
import heartHand from '../../../public/images/ollifur-dark.svg';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import YouTube from 'react-youtube';
import yt from '../../../youtube';
import CloseIcon from '@mui/icons-material/Close';
import Title from '../../Title';
import imgAPI from '../../../public/images/imgAPI';
import Feature from '../Feature/Feature';

const Transition = React.forwardRef(function Transition(props, ref) {
  // eslint-disable-line
  return (
    <Zoom ref={ref} {...props}>
      <></>
    </Zoom>
  );
});

function Welcome() {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const { classes, cx }: any = useStyles();
  const { classes: text }: any = useText();
  const { classes: align } = useTextAlign();
  const { t } = useTranslation('common');
  const slider = useRef(null);

  const slickOptions = {
    dots: false,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    infinite: true,
    autoplay: false,
    cssEase: 'ease-out',
    fade: isMobile,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          dots: true,
        },
      },
    ],
  };

  const [player, setPlayer]: any = useState([]);
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

  const _onReady = (event: any) => {
    player.push(event.target);
    setPlayer(player);
  };

  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 0,
      origin: 'http://localhost:3007',
    },
  };

  return (
    <div className={classes.bannerWrap}>
      <div className={classes.carousel}>
        <div {...slickOptions} className={classes.slider}>
          <div className={classes.slide}>
            <div className={cx(classes.slide, classes.centerContent)}>
              <div className={classes.inner}>
                <Container>
                  <Grid container justifyContent="flex-end">
                    <Grid item md={1} xs={1} sm={0} />
                    <Grid item md={10} xs={10}>
                      <Box px={{ sm: 12 }}>
                        <div className={cx(classes.text, align.textCenter)}>
                          <h4 className={text.title}>
                            Cherish the ones you love. We’ll take care of the
                            rest
                          </h4>
                          <Typography
                            variant="subtitle1"
                            px={{ sm: 12 }}
                            className={text.subtitle2}
                          >
                            At Ollifur, we aim to provide your pets with a
                            compassionate farewell, honoring their extraordinary
                            journey with the love and care they deserve.
                          </Typography>
                          <Stack
                            direction={isDesktop ? 'row' : 'column'}
                            justifyContent={'center'}
                            spacing={2}
                            style={{ marginTop: '10px' }}
                          >
                            <Button
                              fullWidth={isMobile}
                              sx={{
                                ':hover': { background: '#FFF' },
                                color: '#344054',
                                background: '#FFF',
                              }}
                              startIcon={<VolunteerActivismOutlinedIcon />}
                              variant="contained"
                              color="primary"
                              href={link.retail.register}
                            >
                              Pre-plan
                            </Button>
                            <Button
                              variant="contained"
                              color="primary"
                              fullWidth={isMobile}
                              href={link.retail.register}
                            >
                              Immediate Need
                            </Button>
                          </Stack>
                        </div>
                      </Box>
                    </Grid>
                    <Grid item md={1} xs={1} sm={0} />
                  </Grid>
                  <Feature />
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
