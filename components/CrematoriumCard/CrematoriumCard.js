import React from 'react';
import Grid from '@mui/material/Grid';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import {
  Box,
  Button,
  Chip,
  IconButton,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import DignityMemorials from '../../public/images/DM_logo_130x40.svg';
import star from '../../public/images/star-01.svg';
import car from '../../public/images/car-01.svg';
import hourglass from '../../public/images/hourglass-02.svg';
import shield from '../../public/images/shield-01.svg';
import marker from '../../public/images/marker-pin-02.svg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { makeStyles } from 'tss-react/mui';
import Image from 'next/image';

const useStyles = makeStyles()((theme) => ({
  text: {
    color: 'var(--Gray-600, #475467)',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '24px',
  },
}));

function CrematoriumCard({
  img,
  title,
  rating,
  reviews,
  location,
  pickup,
  hours,
  price,
}) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const { classes } = useStyles();

  return isDesktop ? (
    <Box
      sx={{
        borderRadius: '0px 0px 16px 16px',
        background: '#FCF4EE',
        width: '100%',
        padding: '20px',
        borderTop: '8px solid #fafafa',
        '&:hover': {
          borderTop: '8px solid #884E1B',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
        },
      }}
    >
      <Grid container direction="row" spacing={2}>
        <Grid item xs={3}>
          <Box
            style={{
              width: '200px',
              height: '144px',
              borderRadius: '16px',
              background: 'var(--blue-light-50, #F0F9FF)',
              boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.25)',
            }}
            display="flex"
            flexWrap="wrap"
            alignContent="center"
            justifyContent="center"
          >
            <Image src={img} alt="DMImage" width={200} height={144} />
          </Box>
        </Grid>
        <Grid container item direction="column" xs={9} spacing={2}>
          <Grid item direction="column">
            <Stack direction="row" spacing={1} justifyContent={'space-between'}>
              <Stack direction="column" spacing={1}>
                <Typography
                  style={{
                    color: 'var(--Primary-700, #884E1B)',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '20px',
                  }}
                >
                  Communal, Private & Witnessed Cremations
                </Typography>
                <Typography
                  style={{
                    color: 'var(--Gray-900, #101828)',
                    fontFamily: 'Inter',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '28px',
                  }}
                >
                  {title}
                </Typography>
              </Stack>
              <IconButton
                style={{
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid var(--Primary-200, #EBBF99)',
                  background: 'var(--Primary-50, #F8EADD)',
                  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                  marginBottom: '8px',
                }}
              >
                <FavoriteBorderIcon style={{ color: '#884E1B' }} />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={1}>
              <Rating
                name="read-only"
                value={rating}
                precision={0.1}
                readOnly
              />
              <Typography
                style={{
                  color: 'var(--Gray-900, #101828)',
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: '24px',
                }}
              >
                {rating}
              </Typography>
              <Typography
                style={{
                  color: 'var(--Gray-600, #475467)',
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '24px',
                }}
              >
                {reviews} reviews
              </Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Box display={'flex'} justifyContent={'space-between'}>
              <Stack direction="row" spacing={3} alignItems={'center'}>
                <Box display={'flex'} gap={1}>
                  <img
                    src={marker}
                    alt="marker"
                    width={'20px'}
                    height={'20px'}
                  />
                  <Typography className={classes.text}>{location}</Typography>
                </Box>
                {pickup && (
                  <Box display={'flex'} gap={1}>
                    <img
                      src={marker}
                      alt="marker"
                      width={'20px'}
                      height={'20px'}
                    />
                    <Typography className={classes.text}>Pickup</Typography>
                  </Box>
                )}
                <Box display={'flex'} gap={1}>
                  <img
                    src={marker}
                    alt="marker"
                    width={'20px'}
                    height={'20px'}
                  />
                  <Typography className={classes.text}>{hours}</Typography>
                </Box>
              </Stack>

              <Box display={'flex'} gap={1}>
                <Typography
                  style={{
                    color: 'var(--Gray-900, #101828)',
                    fontFamily: 'Inter',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '30px',
                  }}
                >
                  {price}
                </Typography>
                <Typography
                  style={{
                    color: 'var(--Gray-600, #475467)',
                    fontFamily: 'Inter',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '30px',
                  }}
                >
                  CAD onwards
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  ) : (
    <Box
      sx={{
        borderRadius: '0px 0px 16px 16px',
        background: '#FCF4EE',
        width: '100%',
        padding: '20px',
        borderTop: '8px solid #fafafa',
        '&:hover': {
          borderTop: '8px solid #884E1B',
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
        },
      }}
    >
      <Grid container direction="row" spacing={2}>
        <Grid item container spacing={2}>
          <Grid item>
            <Box
              style={{
                height: '90px',
                width: '90px',
                borderRadius: '16px',
                background: 'var(--blue-light-50, #F0F9FF)',
                boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.25)',
              }}
              display="flex"
              flexWrap="wrap"
              alignContent="center"
              justifyContent="center"
            >
              <img
                src={DignityMemorials}
                style={{
                  width: '57.235px',
                  height: '17.141px',
                }}
                alt="DMImage"
              />
            </Box>
          </Grid>
          <Grid item>
            <Stack direction="column" spacing={1}>
              <Typography
                style={{
                  color: 'var(--gray-900, #101828)',
                  fontFamily: 'Inter',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '28px',
                }}
                component="span"
              >
                Dignity Memorials
              </Typography>
              <div style={{ display: '-webkit-box' }}>
                <img src={marker} alt="marker" />
                <Typography
                  style={{
                    color: 'var(--primary-700, #884E1B)',
                    fontFamily: 'Inter',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '18px',
                  }}
                >
                  3787 Kingsway Street
                </Typography>
              </div>
            </Stack>
          </Grid>
        </Grid>
        <Grid item>
          <Stack direction="row" flexWrap="wrap">
            <Chip
              icon={<img src={star} alt="star" />}
              label="4.5"
              sx={{
                borderRadius: '16px',
                border: '1px solid var(--primary-100, #F2D4BB)',
                background: 'var(--primary-50, #F8EADD)',
                margin: '4px 4px',
                mixBlendMode: 'multiply',
                '& .MuiChip-label': {
                  color: 'var(--primary-700, #884E1B)',
                  textAlign: 'center',
                  fontFamily: 'Inter',
                  fontSize: '12px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '20px',
                },
              }}
            />
            <Chip
              icon={<img src={car} alt="car" />}
              label="Pickup Offered within Vancouver"
              sx={{
                borderRadius: '16px',
                border: '1px solid var(--primary-100, #F2D4BB)',
                background: 'var(--primary-50, #F8EADD)',
                margin: '4px 4px',
                mixBlendMode: 'multiply',
                '& .MuiChip-label': {
                  color: 'var(--primary-700, #884E1B)',
                  textAlign: 'center',
                  fontFamily: 'Inter',
                  fontSize: '12px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '20px',
                },
              }}
            />
            <Chip
              icon={<img src={hourglass} alt="hourglass" />}
              label="24/7"
              sx={{
                borderRadius: '16px',
                border: '1px solid var(--primary-100, #F2D4BB)',
                background: 'var(--primary-50, #F8EADD)',
                margin: '4px 4px',
                mixBlendMode: 'multiply',
                '& .MuiChip-label': {
                  color: 'var(--primary-700, #884E1B)',
                  textAlign: 'center',
                  fontFamily: 'Inter',
                  fontSize: '12px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '20px',
                },
              }}
            />
            <Chip
              icon={<img src={shield} alt="shield" />}
              label="Pvt/Witnessed Cremation Offered"
              sx={{
                borderRadius: '16px',
                border: '1px solid var(--primary-100, #F2D4BB)',
                background: 'var(--primary-50, #F8EADD)',
                margin: '4px 4px',
                mixBlendMode: 'multiply',
                '& .MuiChip-label': {
                  color: 'var(--primary-700, #884E1B)',
                  textAlign: 'center',
                  fontFamily: 'Inter',
                  fontSize: '12px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '20px',
                },
              }}
            />
          </Stack>
        </Grid>
        <Grid item>
          <Typography
            style={{
              color: 'var(--gray-600, #475467)',
              fontFamily: 'Inter',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '24px',
              textAlign: 'left',
            }}
          >
            Vancouver Memorial Services and Crematorium has provided funeral,
            cremation and burial services in Vancouver, British Columbia, for
            more than 100 years. Vancouver ksdjhbagkjsd sdlkjhbvgskdljfsldf sdfb
            sdkjfbsdf suify sdkjfbsdf ksdfuyi sdfkjsd fk
          </Typography>
        </Grid>
        <Grid item container justifyContent="center" spacing={4}>
          <Grid item>
            <Typography
              style={{
                color: 'var(--gray-900, #101828)',
                fontFamily: 'Inter',
                fontSize: '30px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '38px',
              }}
            >
              $70 Onwards
            </Typography>
          </Grid>
          <Grid item>
            <Button
              sx={{
                borderRadius: '8px',
                border: '1px solid var(--primary-600, #D77F33)',
                background: 'var(--primary-600, #D77F33)',
                boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
              }}
              fullWidth
              variant="contained"
            >
              Schedule a Date & Time
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CrematoriumCard;
