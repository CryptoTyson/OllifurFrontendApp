import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Lightbox from 'react-18-image-lightbox';
import IconButton from '@mui/material/IconButton';
import ButtonBase from '@mui/material/ButtonBase';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Carousel from 'react-slick';

import { useText, useTextAlign } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import Title from '../Title';
import MediaCard from '../Cards/MediaCard';
import useStyles from './about-style';

function PhotoSlider() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  

  // Image Lightbox
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const imgData = [
    imgAPI.photo[11],
    imgAPI.photo[12],
    imgAPI.photo[13],
    imgAPI.photo[14],
    imgAPI.photo[15],
    imgAPI.photo[16]
  ];

  // Slider Carousel
  const slider = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 3,
    infinite: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleNext = () => {
    slider.current.slickNext();
  };

  const handlePrev = () => {
    slider.current.slickPrev();
  };

  function showPopup(index) {
    setOpen(true);
    setPhotoIndex(index);
  }

  function onMovePrevRequest() {
    setPhotoIndex((photoIndex + imgData.length - 1) % imgData.length);
  }

  function onMoveNextRequest() {
    setPhotoIndex((photoIndex + imgData.length + 1) % imgData.length);
  }

  return (
    <div>
      {open && (
        <Lightbox
          mainSrc={imgData[photoIndex]}
          nextSrc={imgData[(photoIndex + 1) % imgData.length]}
          prevSrc={imgData[(photoIndex + 1) % imgData.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={onMovePrevRequest}
          onMoveNextRequest={onMoveNextRequest}
        />
      )}
      <Container>
        <Title align={isMobile ? 'center' : 'left'}>
          <span>
            {'about_gallery'}
          </span>
        </Title>
        <p className={cx(text.subtitle2, isMobile ? align.textCenter : '')}>
          Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        {loaded && (
          <div className={classes.carousel}>
            <IconButton
              onClick={() => handlePrev()}
              className={cx(classes.nav, classes.prev)}
              size="large"
            >
              <ArrowBackIcon />
            </IconButton>
            <Carousel ref={slider} {...settings}>
              {imgData.map((item, index) => (
                <ButtonBase
                  key={index.toString()}
                  className={classes.item}
                  onClick={() => showPopup(index)}
                >
                  <Box px={1}>
                    <MediaCard
                      title="Sed lacinia velit, ut malesuada eros interdum a"
                      orientation="portrait"
                      type="photo"
                      thumb={item}
                      href="#!"
                    />
                  </Box>
                </ButtonBase>
              ))}
            </Carousel>
            <IconButton
              onClick={() => handleNext()}
              className={cx(classes.nav, classes.next)}
              size="large"
            >
              <ArrowForwardIcon />
            </IconButton>
          </div>
        )}
      </Container>
    </div>
  );
}

export default PhotoSlider;
