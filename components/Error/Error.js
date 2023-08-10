import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Grid, useMediaQuery } from '@mui/material/';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useTheme } from '@mui/material/styles';
import imgAPI from '~/public/images/imgAPI';
import { useText, useSpacing } from '~/theme/common';
import link from '~/public/text/link';
import Img404 from '../../public/images/404 illustration.png';

function Error(props) {
  const { classes } = useSpacing();
  const { classes: txt } = useText();
  const { errCode, text } = props;
  const { t } = useTranslation('common');

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Container>
      <div
        style={{
          height: '100vh',
          position: 'relative',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        <Grid
          container
          direction={isDesktop ? 'row' : 'row-reverse'}
          justifyContent="center"
          alignItems="center"
          alignContent="center"
        >
          {!isDesktop && (
            <Grid item xs={12} md={6}>
              <img
                style={{
                  width: isDesktop ? '514px' : '280px',
                  height: isDesktop ? '164px' : '90px',
                }}
                src={Img404}
                alt="404"
              />
            </Grid>
          )}
          <Grid item xs={12} md={6}>
            <Typography
              style={{
                color: 'var(--primary-700, #884E1B)',
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '24px',
              }}
            >
              404 error
            </Typography>
            <Typography
              style={{
                color: 'var(--gray-900, #101828)',
                fontFamily: 'Inter',
                fontSize: '60px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '72px',
                letterSpacing: '-1.2px',
              }}
            >
              Under maintenance
            </Typography>
            <Typography
              style={{
                color: 'var(--gray-600, #475467)',
                fontFamily: 'Inter',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '30px',
              }}
            >
              Sorry, the page you are looking for doesn't exist or has been
              moved. Try searching our site:
            </Typography>
            <Button
              fullWidth={!isDesktop}
              style={{ marginTop: '20px' }}
              variant="contained"
              href="/"
            >
              Home
            </Button>
          </Grid>
          {isDesktop && (
            <Grid item xs={12} md={6}>
              <img
                style={{
                  width: isDesktop ? '514px' : '280px',
                  height: isDesktop ? '164px' : '90px',
                }}
                src={Img404}
                alt="404"
              />
            </Grid>
          )}
        </Grid>
      </div>
    </Container>
  );
}

Error.propTypes = {
  errCode: PropTypes.string,
  text: PropTypes.string,
};

Error.defaultProps = {
  errCode: '404',
  text: '',
};

export default Error;
