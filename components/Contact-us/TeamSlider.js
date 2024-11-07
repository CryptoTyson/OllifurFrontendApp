import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Carousel from 'react-slick';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import Title from '../Title';
import ProfileCard from '../Cards/ProfileCard';
import useStyles from './about-style';

function PhotoSlider() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [loaded, setLoaded] = useState(false);

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    variableWidth: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={cx(classes.teamRoot, classes.bgWrapper)}>
      <Container>
        <Title align={isMobile ? 'center' : 'left'}>
          <span>
            {'about_team'}
          </span>
        </Title>
        <p className={text.subtitle2}>
          Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </Container>
      <Box mt={5}>
        {loaded && (
          <div className={classes.carousel}>
            <Carousel {...settings}>
              {[...Array(6)].map((e, index) => (
                <div
                  key={index.toString()}
                  className={classes.item}
                >
                  <Box px={1}>
                    <ProfileCard
                      connection={100}
                      favorites={10}
                      albums={12}
                      cover={imgAPI.photo[41 + index]}
                      name="John Dalton"
                      title="Web Designer"
                      type="over"
                      orientation="landscape"
                      avatar={imgAPI.avatar[index]}
                    />
                  </Box>
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </Box>
    </div>
  );
}

export default PhotoSlider;
