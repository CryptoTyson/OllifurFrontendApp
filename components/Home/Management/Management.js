import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import { useText, useTextAlign } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import Title from '../../Title';
import useStyles from './management-style';

const managementData = [
  {
    title: 'item1_title',
    desc: 'item1_desc',
    color: 'primary',
    illustration: [imgAPI.retail[13], imgAPI.retail[14]],
    img: imgAPI.retail[28]
  },
  {
    title: 'item2_title',
    desc: 'item2_desc',
    color: 'secondary',
    illustration: [imgAPI.retail[15], imgAPI.retail[16]],
    img: imgAPI.retail[29]
  },
  {
    title: 'item3_title',
    desc: 'item3_desc',
    color: 'accent',
    illustration: [imgAPI.retail[17], imgAPI.retail[18]],
    img: imgAPI.retail[30]
  },
  {
    title: 'item4_title',
    desc: 'item4_desc',
    color: 'primary',
    illustration: [imgAPI.retail[19], imgAPI.retail[20]],
    img: imgAPI.retail[31]
  },
  {
    title: 'item5_title',
    desc: 'item5_desc',
    color: 'secondary',
    illustration: [imgAPI.retail[21], imgAPI.retail[22]],
    img: imgAPI.retail[32]
  },
  {
    title: 'item6_title',
    desc: 'item6_desc',
    color: 'accent',
    illustration: [imgAPI.retail[23], imgAPI.retail[24]],
    img: imgAPI.retail[33]
  }
];

function Management() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const { t } = useTranslation('common');

  // Slider
  const sliderSide = useRef(null);
  const sliderCenter = useRef(null);
  const [side, setSide] = useState(null);
  const [center, setCenter] = useState(null);

  const sideOptions = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 3,
    arrows: false,
    centerMode: true,
    variableWidth: false,
    focusOnSelect: true,
    centerPadding: 0,
  };

  const centerOptions = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    fade: true,
    arrows: false,
    pauseOnHover: true,
  };

  useEffect(() => {
    setSide(sliderSide.current);
    setCenter(sliderCenter.current);
  }, []);

  return (
    <div className={classes.root}>
      <Title align="center">
        {t('retail-landing.management_title')}
      </Title>
      <Box px={{ sm: 15, xs: 4 }}>
        <p className={cx(text.subtitle2, align.textCenter)}>
          {t('retail-landing.management_desc')}
        </p>
      </Box>
      <div className={classes.sliderWrap}>
        <div className={cx(classes.carousel, classes.carouselSide)}>
          <Carousel
            {...sideOptions}
            className={classes.sliderSide}
            ref={sliderSide}
            asNavFor={center}
          >
            {managementData.map((item, index) => (
              <div
                key={index.toString()}
                className={classes.item}
              >
                <div className={classes.paperRound}>
                  <img
                    className="img-2d3d"
                    src={item.illustration[1]}
                    data-2d={item.illustration[0]}
                    data-3d={item.illustration[1]}
                    alt="illustration"
                  />
                  <h4 className={text[item.color + 'Color']}>
                    {t('retail-landing.management_' + item.title)}
                  </h4>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        <div className={cx(classes.carousel, classes.carouselCenter)}>
          <Carousel
            {...centerOptions}
            className={classes.sliderCenter}
            ref={sliderCenter}
            asNavFor={side}
          >
            {managementData.map((item, index) => (
              <div
                key={index.toString()}
                className={classes.item}
              >
                <div className={cx(classes.item, index % 2 ? classes.mobile : classes.desktop)}>
                  <figure>
                    <img src={item.img} alt="screen" />
                  </figure>
                  <div className={classes.desc}>
                    <div>
                      <img
                        className="img-2d3d"
                        src={item.illustration[1]}
                        data-2d={item.illustration[0]}
                        data-3d={item.illustration[1]}
                        alt="illustration"
                      />
                      <div className={classes.text}>
                        <h4 className={text['text' + item.color]}>
                          {t('retail-landing.management_' + item.title)}
                        </h4>
                        <p>{t('retail-landing.management_' + item.desc)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Management;
