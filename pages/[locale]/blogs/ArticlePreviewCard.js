import React from 'react';
import { makeStyles } from 'tss-react/mui';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

export const runtime = 'edge';

const useStyles = makeStyles()((theme) => ({
  card: {
    position: 'relative',
    width: '100%',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
    borderRadius: '16px',
    overflow: 'hidden',
  },
  media: {
    height: 720,
    transition: 'transform 0.5s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))',
  },
  content: {
    position: 'absolute',
    bottom: theme.spacing(3),
    left: theme.spacing(3),
    right: theme.spacing(3),
    color: theme.palette.common.white,
  },
  authorSection: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.5),
    marginTop: theme.spacing(2),
  },
  heading: {
    color: 'var(--Base-White, #FFF)',
    fontFamily: 'Inter',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '32px'
  },
  supportingText: {
    color: 'var(--Base-White, #FFF)',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px'
  },
  metadataContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: theme.spacing(8),
    marginTop: theme.spacing(2),
    padding: theme.spacing(2, 0),
  },
  metadataSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
  },
  metadataLabel: {
    color: 'var(--Base-White, #FFF)',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '20px',
    marginBottom: theme.spacing(0.5),
  },
  metadataContent: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  authorName: {
    color: theme.palette.common.white,
    fontSize: '16px',
    fontWeight: 500,
    marginLeft: theme.spacing(1),
  },
  publishDate: {
    color: theme.palette.common.white,
    fontSize: '16px',
    fontWeight: 500,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: theme.palette.grey[300],
  },
}));

const ArticlePreviewCard = () => {
  const { classes } = useStyles();

  return (
    <Card className={classes.card} elevation={3}>
      <CardMedia
        className={classes.media}
        image="/images/featured-blog.jpeg"
        title="Pet Cremation Article"
      />
      <div className={classes.overlay} />
      <Box className={classes.content}>

        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}
        >
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            className={classes.heading}
          >
            Preparing Your Beloved Pet for Cremation
          </Typography>
          <Box>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Box>
        </Box>

        <Typography
          variant="subtitle1"
          className={classes.supportingText}
        >
          Learn how to navigate the Emotional Process and Practical Considerations for Preparing Your Pet's Final Farewell
        </Typography>

        <Box className={classes.metadataContainer}>
          <Box className={classes.metadataSection}>
            <Typography className={classes.metadataLabel}>
              Written by
            </Typography>
            <Box className={classes.metadataContent}>
              <Avatar
                alt="Drew Cano"
                src="/images/Avatar.png"
                className={classes.avatar}
              />
              <Typography className={classes.authorName}>
                Drew Cano
              </Typography>
            </Box>
          </Box>

          <Box className={classes.metadataSection}>
            <Typography className={classes.metadataLabel}>
              Published on
            </Typography>
            <Box sx={{
                padding: '8px 0px',
            }}
            >
              <Typography className={classes.publishDate}>
                15 Feb 2023
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

    </Card>
  );
};

export default ArticlePreviewCard;
