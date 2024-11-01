import React, { useState } from 'react';
import {
  Box,
  Grid,
  Pagination,
  Container,
  styled,
  Button,
  Stack
} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PostCard from '~/components/Home/PopularPosts/PostCard';

const CustomPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPagination-ul': {
    gap: '8px',
  },
  '& .MuiPaginationItem-root': {
    margin: 0,
    borderRadius: '8px',
    minWidth: '32px',
    height: '32px',
    color: '#1D2939',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      }
    }
  },
  '& .MuiPaginationItem-ellipsis': {
    height: '32px',
    display: 'flex',
    alignItems: 'center',
  }
}));

const NavButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  color: '#475467',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '&.Mui-disabled': {
    color: theme.palette.text.disabled,
  }
}));

// Fix duplicate IDs in the posts data
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
      title: 'Pet Euthanasia at the Vet. What to Expect',
      description: 'Compassionate Farewell & Navigating the Process of Pet Euthanasia at the Vet',
      image: '/images/blog/post-3.png',
      author: 'Emily Robinson',
      date: '29 Jan 2023',
      link: '#'
    },
    {
      id: 4,
      category: 'Burials',
      title: 'Is it Legal to bury your pet in your backyard in Vancouver',
      description: 'Learn about the regulations for backyard pet burials in Vancouver and what alternatives exist.',
      image: '/images/blog/post-4.jpeg',
      author: 'Emily Robinson',
      date: '3 Feb 2023',
      link: '#'
    },
    {
      id: 5,
      category: 'Cremations',
      title: 'Pet Cremation Costs in Other Regions Compared to Vancouver',
      description: 'A look at how pet cremation costs vary across different regions.',
      image: '/images/blog/post-1.png',
      author: 'Emily Robinson',
      date: '10 Feb 2023',
      link: '#'
    },
    {
      id: 6,
      category: 'Burials',
      title: 'Choosing the Best Burial Options for Your Pet',
      description: 'Exploring the options available for pet burials in Vancouver.',
      image: '/images/blog/post-2.png',
      author: 'Emily Robinson',
      date: '15 Feb 2023',
      link: '#'
    },
    {
      id: 7,
      category: 'Grief Support',
      title: 'Coping with the Loss of a Pet: A Guide for Owners',
      description: 'Tips and resources for pet owners struggling with the loss of their beloved companions.',
      image: '/images/blog/post-3.png',
      author: 'John Doe',
      date: '20 Feb 2023',
      link: '#'
    },
    {
      id: 8,
      category: 'Euthanasia',
      title: 'At-Home Pet Euthanasia: Is It the Right Choice?',
      description: 'An in-depth look at the benefits and drawbacks of at-home euthanasia for pets.',
      image: '/images/blog/post-4.jpeg',
      author: 'Emily Robinson',
      date: '25 Feb 2023',
      link: '#'
    },
    {
      id: 9,
      category: 'Memorials',
      title: 'Creating a Lasting Memorial for Your Pet',
      description: 'Ideas for meaningful ways to remember and honor your pet after they\'ve passed.',
      image: '/images/blog/post-1.png',
      author: 'Jane Smith',
      date: '1 Mar 2023',
      link: '#'
    },
    {
      id: 10,
      category: 'Cremations',
      title: 'Eco-Friendly Pet Cremation Options',
      description: 'Exploring environmentally friendly alternatives for pet cremation.',
      image: '/images/blog/post-2.png',
      author: 'Emily Robinson',
      date: '5 Mar 2023',
      link: '#'
    },
    {
      id: 11,
      category: 'Legal',
      title: 'Understanding Pet Burial Laws in Canada',
      description: 'A guide to the legal aspects of pet burial across different provinces in Canada.',
      image: '/images/blog/post-3.png',
      author: 'John Doe',
      date: '10 Mar 2023',
      link: '#'
    },
    {
      id: 12,
      category: 'Grief Support',
      title: 'How to Help Children Cope with the Loss of a Pet',
      description: 'Advice for parents on helping children understand and cope with the death of a pet.',
      image: '/images/blog/post-4.jpeg',
      author: 'Jane Smith',
      date: '15 Mar 2023',
      link: '#'
    },
    {
      id: 13,
      category: 'Cremations',
      title: 'Pet Cremation vs Burial: Which is Right for You?',
      description: 'Comparing pet cremation and burial to help you make the best decision for your pet.',
      image: '/images/blog/post-1.png',
      author: 'Emily Robinson',
      date: '20 Mar 2023',
      link: '#'
    },
    {
      id: 14,
      category: 'Euthanasia',
      title: 'Signs It Might Be Time to Say Goodbye to Your Pet',
      description: 'Recognizing the signs that it may be time to consider euthanasia for your pet.',
      image: '/images/blog/post-2.png',
      author: 'John Doe',
      date: '25 Mar 2023',
      link: '#'
    },
    {
      id: 15,
      category: 'Memorials',
      title: 'Personalized Pet Memorial Ideas',
      description: 'Creative and personalized ways to memorialize your pet.',
      image: '/images/blog/post-3.png',
      author: 'Jane Smith',
      date: '30 Mar 2023',
      link: '#'
    }
  ];

const BlogGrid = () => {
  const postsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [displayPosts, setDisplayPosts] = useState(posts.slice(0, postsPerPage));

  // Calculate total pages
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Update current posts when page changes
  React.useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    setDisplayPosts(posts.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Handle previous/next navigation
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        {displayPosts.map((post) => (
          <Grid item xs={12} md={6} lg={4} key={post.id}>
            <Box>
              <PostCard post={post} />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ mt: 4, mb: 2 }}
      >
        <NavButton
          onClick={handlePrevious}
          disabled={currentPage === 1}
          startIcon={<KeyboardArrowLeftIcon />}
        >
          Previous
        </NavButton>

        <CustomPagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          hidePrevButton
          hideNextButton
          siblingCount={1}
          boundaryCount={1}
        />

        <NavButton
          onClick={handleNext}
          disabled={currentPage === totalPages}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Next
        </NavButton>
      </Stack>
    </Container>
  );
};

export default BlogGrid;
