import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Card, CardMedia, CardContent, Box, Avatar } from '@mui/material';
import { styled } from '@mui/system';

import { makeStyles } from 'tss-react/mui';

const CategoryBadge = styled(Box)(({ theme }) => ({
  display: 'inline-block',
  padding: '4px 12px',
  color: 'var(--Primary-600, #D77F33)',
  fontSize: '14px',
  fontWeight: 500,
  marginBottom: theme.spacing(2)
}));

const useStyles = makeStyles()((theme) => ({
  postTitle: {
    marginBottom: theme.spacing(1),
    display: 'flex',
    gap: theme.spacing(2),
    textDecoration: 'none',
    color: 'var(--Gray-900, #101828)',
    fontFamily: 'Inter',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '32px'
  },
  description: {
    color: 'var(--gray-600, #475467)',
    fontSize: '14px',
    lineHeight: 1.5,
  },
  authorSection: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  authorName: {
    fontSize: '14px',
    fontWeight: 500,
    color: 'var(--gray-900, #101828)',
  },
  date: {
    fontSize: '14px',
    color: 'var(--gray-600, #475467)',
  },
}));

const PostCard = ({ post }) => {
    const { classes } = useStyles();
    return (
      <Card elevation={0} sx={{ bgcolor: 'transparent' }}>
        <CardMedia
          component="img"
          height="240"
          image={post.image}
          alt={post.title}
          sx={{ borderRadius: '12px', mb: 2 }}
        />
        <CardContent sx={{ p: 0 }}>
          <CategoryBadge>{post.category}</CategoryBadge>
          <Box component="a" href={post.link} className={classes.postTitle}>
            {post.title}
            <Box>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#101828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Box>
          </Box>
          <Typography className={classes.description}>
            {post.description}
          </Typography>
          <Box className={classes.authorSection}>
            <Avatar src="/images/blog/Avatar.png" alt={post.author} sx={{ width: 32, height: 32 }} />
            <Box>
              <Typography className={classes.authorName}>{post.author}</Typography>
              <Typography className={classes.date}>{post.date}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  };

  PostCard.propTypes = {
    post: PropTypes.shape({
      id: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired,
  };

export default PostCard;
