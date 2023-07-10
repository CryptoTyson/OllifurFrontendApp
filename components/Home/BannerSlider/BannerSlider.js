import React, { useRef, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Hidden from '@mui/material/Hidden';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import Divider from '@mui/material/Divider';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import link from '~/public/text/link';
import imgAPI from '~/public/images/imgAPI';
import { useText, useTextAlign } from '~/theme/common';
import useStyles from './slider-style';

function BannerSlider() {
  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { t } = useTranslation('common');
  const slider = useRef(null);

  const [curSlide, setCurSlide] = useState(0);

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
        }
      }
    ]
  };

  const handleAfterChange = currentSlide => {
    setCurSlide(currentSlide);
  };

  const gotoSlide = slide => {
    slider.current.slickGoTo(slide);
  };

  return (
    <div className={classes.bannerWrap}>
      <div className={classes.carousel}>
        <Carousel
          {...slickOptions}
          className={classes.slider}
          afterChange={handleAfterChange}
          ref={slider}
        >
          <div className={classes.slide}>
            <div className={classes.inner}>
              <div className={cx(classes.img, classes.backgroundBanner)}>
                <img
                  src={imgAPI.retail[5]}
                  data-2d={imgAPI.retail[4]}
                  data-3d={imgAPI.retail[5]}
                  alt="background"
                  className="img-2d3d"
                />
              </div>
              <Container>
                <Grid container alignItems="center">
                  <Grid item md={7} xs={12}>
                    <Box px={{ sm: 3 }} alignItems="center">
                      <div className={classes.text}>
                        <h4 className={text.title}>
                          {t('retail-landing.banner_title')}
                        </h4>
                        <h5 className={text.subtitle}>
                          {t('retail-landing.banner_desc')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button size="large" color="primary" href="#" className={cx(classes.button, classes.textBtn)}>
                            {t('btn_detail')}
                          </Button>
                          <Button size="large" variant="outlined" color="secondary" href={link.retail.register} className={cx(classes.button, classes.containedBtn)}>
                            {t('btn_get')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={5} xs={12}>
                    <Box px={{ sm: 3 }} py={2}>
                      <div className={classes.img}>
                        <img
                          className={cx('img-2d3d', classes.imgSlide1)}
                          src={imgAPI.retail[1]}
                          data-2d={imgAPI.retail[0]}
                          data-3d={imgAPI.retail[1]}
                          alt="banner 1 3D"
                        />
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className={classes.slide}>
            <div className={classes.inner}>
              <Container>
                <Grid container alignItems="center" justifyContent="flex-end" direction={isMobile ? 'column-reverse' : 'row'}>
                  <Grid item lg={5} md={4} xs={12}>
                    <Box px={{ lg: 5 }} py={2}>
                      <div className={classes.img}>
                        <img
                          className={cx('img-2d3d', classes.imgSlide2)}
                          src={imgAPI.retail[3]}
                          data-2d={imgAPI.retail[2]}
                          data-3d={imgAPI.retail[3]}
                          alt="banner 2 3D"
                        />
                      </div>
                    </Box>
                  </Grid>
                  <Grid item lg={7} md={8} xs={12}>
                    <Box px={{ sm: 3 }} alignItems="center">
                      <div className={classes.text}>
                        <h4 className={text.title}>
                          {t('retail-landing.banner_title')}
                        </h4>
                        <h5 className={text.subtitle}>
                          {t('retail-landing.banner_desc')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button size="large" color="primary" href="#" className={cx(classes.button, classes.textBtn)}>
                            {t('btn_detail')}
                          </Button>
                          <Button size="large" variant="outlined" color="secondary" href={link.retail.register} className={cx(classes.button, classes.containedBtn)}>
                            {t('btn_get')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
          <div className={cx(classes.slide, classes.centerContent)}>
            <div className={classes.inner}>
              <Container>
                <Grid container justifyContent="flex-end">
                  <Grid item md={12} xs={12}>
                    <Box px={{ sm: 12 }}>
                      <div className={cx(classes.text, align.textCenter)}>
                        <h4 className={text.title}>
                          {t('retail-landing.banner_title')}
                        </h4>
                        <h5 className={text.subtitle}>
                          {t('retail-landing.banner_desc')}
                        </h5>
                        <div className={classes.btnArea}>
                          <Button size="large" color="primary" href="#" className={cx(classes.button, classes.textBtn)}>
                            {t('btn_detail')}
                          </Button>
                          <Button size="large" variant="outlined" color="secondary" href={link.retail.register} className={cx(classes.button, classes.containedBtn)}>
                            {t('btn_get')}
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <div className={cx(classes.img, classes.hBanner)}>
                      <div className={cx(classes.ovalFloor, classes.slide3)} />
                      <img
                        className="img-2d3d"
                        src={imgAPI.retail[7]}
                        data-2d={imgAPI.retail[6]}
                        data-3d={imgAPI.retail[7]}
                        alt="banner 3 3D"
                      />
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </div>
        </Carousel>
      </div>
      <div className={classes.slideNavGroup}>
        <Hidden mdDown>
          <Container>
            <nav className={classes.slideNav}>
              <ButtonBase
                className={cx(classes.btnNav, curSlide === 0 ? classes.active : '')}
                onClick={() => gotoSlide(0)}
              >
                <strong>First Slide</strong>
                Interdum et malesuada fames ac ante
              </ButtonBase>
              <Divider className={classes.divider} orientation="vertical" flexItem />
              <ButtonBase
                className={cx(classes.btnNav, curSlide === 1 ? classes.active : '')}
                onClick={() => gotoSlide(1)}
              >
                <strong>Second Slide</strong>
                Interdum et malesuada fames ac ante
              </ButtonBase>
              <Divider className={classes.divider} orientation="vertical" flexItem />
              <ButtonBase
                className={cx(classes.btnNav, curSlide === 2 ? classes.active : '')}
                onClick={() => gotoSlide(2)}
              >
                <strong>Third Slide</strong>
                Interdum et malesuada fames ac ante
              </ButtonBase>
            </nav>
          </Container>
        </Hidden>
      </div>
    </div>
  );
}

export default BannerSlider;
