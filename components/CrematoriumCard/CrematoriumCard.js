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
import marker from '../../public/images/marker-pin-02.svg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { makeStyles } from 'tss-react/mui';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

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
    <Card>
      <CardActionArea>
        <CardMedia component="img" image={img} alt="green iguana" />
        <CardContent>
          <Stack spacing={2}>
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
            <div>
              <Typography
                style={{
                  color: 'var(--Primary-700, #884E1B)',
                  fontFamily: 'Inter',
                  fontSize: '13px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '20px',
                }}
                align="left"
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
                align="left"
              >
                {title}
              </Typography>
            </div>

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

            <Stack direction="row" spacing={3} alignItems={'center'}>
              <Box display={'flex'} gap={1}>
                <img src={marker} alt="marker" width={'20px'} height={'20px'} />
                <Typography className={classes.text}>{location}</Typography>
              </Box>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CrematoriumCard;
