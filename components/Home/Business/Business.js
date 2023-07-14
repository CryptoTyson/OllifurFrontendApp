import React from 'react';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Container from '@mui/material/Container';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/material/Box';
import { useTranslation } from 'next-i18next';
import { useText, useTextAlign } from '~/theme/common';
import Title from '../../Title';
import useStyles from './business-style';

const businessData = [
  {
    icon: 'ion-briefcase',
    name: 'profesional',
    type: 'large',
    color: 'Primary',
    rotate: -90,
    x: 0,
    y: 0
  },
  {
    icon: 'ion-scissors',
    name: 'barbershop',
    type: 'medium',
    color: 'Secondary',
    rotate: 0,
    x: 320,
    y: 10
  },
  {
    icon: 'ion-tshirt',
    name: 'clothing',
    type: 'medium',
    color: 'Accent',
    rotate: 180,
    x: 40,
    y: 315
  },
  {
    icon: 'ion-android-home',
    name: 'minimarket',
    type: 'small',
    color: 'Secondary',
    rotate: 180,
    x: 275,
    y: 295
  },
  {
    icon: 'ion-android-restaurant',
    name: 'restaurant',
    type: 'large',
    color: 'Accent',
    rotate: 120,
    x: 425,
    y: 303
  },
  {
    icon: 'ion-android-car',
    name: 'automotive',
    type: 'medium',
    color: 'Primary',
    rotate: 80,
    x: 748,
    y: 277
  },
  {
    icon: 'ion-ios-wineglass',
    name: 'cafe',
    type: 'small',
    color: 'Accent',
    rotate: 120,
    x: 580,
    y: 100
  },
  {
    icon: 'ion-coffee',
    name: 'cofeshop',
    type: 'small',
    color: 'Primary',
    rotate: -60,
    x: 720,
    y: 10
  },
  {
    icon: 'ion-ios-cart',
    name: 'retail',
    type: 'large',
    color: 'Secondary',
    rotate: 0,
    x: 873,
    y: 0
  }
];

function Business() {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('common');
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();

  return (
    <Container className={classes.root}>
      <Title align="center">
        {t('retail-landing.business_title')}
      </Title>
      <Box px={5}>
        <p className={cx(text.subtitle2, align.textCenter)}>
          {t('retail-landing.business_desc')}
        </p>
      </Box>
      <div className={classes.circleGroup}>
        {businessData.map((item, index) => (
          <div key={index.toString()}>
            <ScrollAnimation
              animateOnce
              offset={50}
              delay={200 * index}
              animateIn="zoomInShort"
              duration={0.5}
            >
              <div
                className={cx(classes.circle, classes['fill' + item.color], classes[item.type])}
                style={{ top: item.y + 'px', left: item.x + 'px' }}
              >
                <svg style={{ transform: `rotate(${item.rotate}deg)` }}>
                  <use xlinkHref={'/images/retail/circle-' + item.type + '.svg#main'} />
                </svg>
                <ButtonBase href="javascipt:void(0)" className={classes.paper}>
                  <i className={item.icon} />
                  <h6>
                    {item.name}
                  </h6>
                </ButtonBase>
              </div>
            </ScrollAnimation>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Business;
