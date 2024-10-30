import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  IconButton,
  Button,
  styled
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import PostCard from './PostCard';

const PostsContainer = styled(Box)(() => ({
    position: 'relative',
    overflow: 'hidden',
    width: '100%'
  }));

  const PostsTrack = styled(Box)(({ translate }) => ({
      display: 'flex',
      gap: '24px',
      transform: `translateX(-${translate}px)`, // Change to pixels
      transition: 'transform 0.3s ease-in-out',
      width: 'fit-content'
    }));

    const NavigationButton = styled(IconButton)(() => ({
        borderRadius: '28px',
        border: '1px solid var(--Gray-200, #EAECF0)',
        background: 'rgba(255, 255, 255, 0.90)',
        backdropFilter: 'blur(4px)'
    }));

    const ViewAllButton = styled(Button)(() => ({
      backgroundColor: 'var(--Primary-600, #D77F33)',
      color: 'white',
      borderRadius: '8px',
      padding: '10px 18px',
      '&:hover': {
        backgroundColor: 'var(--Primary-700, #C77230)',
      }
    }));

const posts = [
  {
    id: 1,
    category: 'Cremations',
    title: 'How much do pet cremations cost in Vancouver, BC',
    description: 'Unveiling the Price Range and Factors Influencing Pet Cremation Costs in Vancouver, BC',
    image: '/images/blog/post-1.png',
    author: 'Emily Robinson',
    date: '13th Jan 2023',
    link: '#'
  },
  {
    id: 2,
    category: 'Cremations',
    title: 'The Pet Cremation Process, A Guide for Pet Owners',
    description: 'Understanding the Journey of Farewell. A Comprehensive guide for Pet Owners',
    image: '/images/blog/post-2.png',
    author: 'Emily Robinson',
    date: '20 Jan 2023',
    link: '#'
  },
  {
    id: 3,
    category: 'Euthanasia',
    title: 'Pet Euthanasia at the Vet. What to Expect and coping with the Process.',
    description: 'Compassionate Farewell & Navigating the Process of Pet Euthanasia at the Vet',
    image: '/images/blog/post-3.png',
    author: 'Emily Robinson',
    date: '29 Jan 2023',
    link: '#'
  },
  {
    id: 4,
    category: 'Burials',
    title: 'Is it Legal to bury your beloved pet in your backyard?',
    description: 'Like to know what local authorities got to say? Get our team into action.',
    image: '/images/blog/post-4.jpeg',
    author: 'Emily Robinson',
    date: '3 Feb 2023',
    link: '#'
  }
];

const useStyles = makeStyles()((theme) => ({
    root: {
      backgroundColor: '#F2F4F7',
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    title: {
      fontSize: '30px',
      fontWeight: 600,
      color: 'var(--gray-900, #101828)',
      marginBottom: theme.spacing(1),
    },
    subtitle: {
      color: 'var(--gray-600, #475467)',
      fontSize: '16px',
      marginBottom: theme.spacing(4),
    },
    cardWidth: {
    width: '384px', // Fixed width
    flex: 'none', // Prevent flexbox from affecting width
  },
  }));

const PopularPosts = () => {
  const { classes } = useStyles();
  const [startIndex, setStartIndex] = useState(0);
  const visiblePosts = 3;

  const cardWidth = 384;
    const cardGap = 24;
    const slideDistance = cardWidth + cardGap;

    const nextSlide = () => {
    if (startIndex < posts.length - visiblePosts) {
        setStartIndex(prev => prev + 1);
    }
    };

    const prevSlide = () => {
    if (startIndex > 0) {
        setStartIndex(prev => prev - 1);
    }
    };

  return (
    <Box className={classes.root}>
      <Container maxWidth="lg">
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          mb: 4
        }}
        >
          <Box>
            <Typography className={classes.title}>
              Popular Posts
            </Typography>
            <Typography className={classes.subtitle}>
              From farewells to memories - explore articles that honor every step of the bond.
            </Typography>
          </Box>
          <ViewAllButton>
            View all posts
          </ViewAllButton>
        </Box>

        <PostsContainer>
          <PostsTrack translate={startIndex * slideDistance}>
            {posts.map((post) => (
              <Box
                key={post.id}
                className={classes.cardWidth}
              >
                <PostCard post={post} />
              </Box>
            ))}
          </PostsTrack>
        </PostsContainer>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <NavigationButton
            onClick={prevSlide}
            disabled={startIndex === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </NavigationButton>
          <NavigationButton
            onClick={nextSlide}
            disabled={startIndex >= posts.length - visiblePosts}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </NavigationButton>
        </Box>
      </Container>
    </Box>
  );
};

export default PopularPosts;
