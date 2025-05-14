import React from 'react';
// import Grid from '@mui/material/Grid'; // No longer needed
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import {
  Box, // Still used for layout within CardContent
  IconButton,
  Rating,
  Stack,
  Typography,
  // useMediaQuery, // No longer needed
  // useTheme, // No longer needed after removing theme from useStyles and component body
  CardActionArea,
  Chip,
  Divider,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { makeStyles } from 'tss-react/mui';
// import Image from 'next/image'; // Using CardMedia instead
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';
// import marker from '../../public/images/marker-pin-02.svg'; // Replaced by MUI icons

const useStyles = makeStyles()(() => ({
  // Removed unused 'theme' parameter
  text: {
    color: 'var(--Gray-600, #475467)',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '24px',
  },
  detailText: {
    color: '#535862', // Figma: fill_51PLIT
    fontFamily: 'Inter', // Figma: style_PWG2ZL
    fontSize: '14px', // Figma: style_PWG2ZL
    fontStyle: 'normal',
    fontWeight: 400, // Figma: style_PWG2ZL
    lineHeight: '20px', // Figma: style_PWG2ZL (14px * 1.42857em)
  },
}));

function CrematoriumCard({
  img,
  title,
  rating, // Kept for mobile view
  reviews, // Kept for mobile view
  location,
  pickup,
  hours,
  price,
  verified,
  featured,
}) {
  // const theme = useTheme(); // Removed as it's no longer used
  // const isDesktop = useMediaQuery(theme.breakpoints.up('md')); // Removed

  const { classes } = useStyles();

  return (
    <Card
      sx={{
        background: '#FFFFFF',
        borderRadius: '8px',
        width: '100%',
        boxShadow: 'none',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="/images/crematorium-card.png"
          alt={title || 'Crematorium image'}
          sx={{
            height: 202,
            objectFit: 'cover',
            width: '100%',
            borderRadius: '8px',
          }} // Adjusted for better fit
        />
        <CardContent sx={{ padding: '16px' }}>
          <Stack spacing={1.5}>
            {/* Chips */}
            <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
              {verified && (
                <Chip
                  icon={
                    <CheckCircleIcon sx={{ color: '#00796B !important' }} />
                  }
                  label="Verified"
                  size="small"
                  sx={{
                    backgroundColor: '#E0F2F1',
                    color: '#00796B',
                    fontWeight: 500,
                  }}
                />
              )}
              {featured && (
                <Chip
                  icon={<StarIcon sx={{ color: '#E65100 !important' }} />}
                  label="Featured"
                  size="small"
                  sx={{
                    backgroundColor: '#FFF3E0',
                    color: '#E65100',
                    fontWeight: 500,
                  }}
                />
              )}
            </Stack>

            {/* Title and Favorite Icon */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Typography
                sx={{
                  color: '#D48A35', // Figma: fill_HGMDZ1
                  fontFamily: 'KindSans', // Figma: style_O12FAI
                  fontSize: '16px', // Figma: style_O12FAI
                  fontWeight: 700, // Figma: style_O12FAI
                  lineHeight: '20px', // Figma: style_O12FAI (16px * 1.25em)
                }}
              >
                {title}
              </Typography>
            </Stack>

            {/* Price */}
            <Typography
              sx={{
                color: '#252B37',
                fontFamily: 'KindSans',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '24px',
              }}
            >
              Prices starting from {price}
            </Typography>

            {/* Sub-description */}
            <Typography className={classes.detailText}>
              Communal, Private & Witnessed Cremations
            </Typography>

            {/* Location */}
            <Box display="flex" alignItems="center" gap={0.5}>
              <Typography className={classes.detailText}>{location}</Typography>
            </Box>

            {/* Pickup & Hours */}
            <Stack direction="row" spacing={1} alignItems="center">
              {' '}
              {/* Adjusted spacing */}
              {pickup && (
                <Box display="flex" alignItems="center" gap={0.5}>
                  <LocalShippingOutlinedIcon
                    sx={{ fontSize: '16px', color: '#252B37' }} // Figma: stroke_H4J995 for icon
                  />
                  <Typography className={classes.detailText}>Pickup</Typography>
                </Box>
              )}
              <Box display="flex" alignItems="center" gap={0.5}>
                <AccessTimeOutlinedIcon
                  sx={{ fontSize: '16px', color: '#252B37' }} // Figma: stroke_H4J995 for icon
                />
                <Typography sx={{ ...classes.detailText, color: '#475467' }}>
                  {hours}
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CrematoriumCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired, // Kept for mobile view
  reviews: PropTypes.number.isRequired, // Kept for mobile view
  location: PropTypes.string.isRequired,
  pickup: PropTypes.bool,
  hours: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  verified: PropTypes.bool,
  featured: PropTypes.bool,
};
CrematoriumCard.defaultProps = {
  pickup: false,
  verified: false,
  featured: false,
};

export default CrematoriumCard;
