import * as React from 'react';
import PropTypes from 'prop-types';
import { styled, useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container, Typography } from '@mui/material';
import BlogPosts from './BlogPosts';

export const runtime = 'edge';

// Custom styled components
const StyledTabs = styled(Tabs)({
  minHeight: '48px',
  '& .MuiTabs-indicator': {
    backgroundColor: '#FF6B00',
    height: '2px'
  }
});

const StyledTab = styled(Tab)({
  color: 'var(--Gray-500, #667085)',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '24px',
  textTransform: 'none',
  padding: '12px 16px',
  '&.Mui-selected': {
    color: 'var(--Primary-600, #D77F33)',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '24px'

  },
});

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`category-tabpanel-${index}`}
      aria-labelledby={`category-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `category-tab-${index}`,
    'aria-controls': `category-tabpanel-${index}`,
  };
}

export default function BlogPostsTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    isDesktop ? (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="blog categories"
            variant="scrollable"
            scrollButtons="auto"
          >
            <StyledTab label="View all" {...a11yProps(0)} />
            <StyledTab label="Cremate" {...a11yProps(1)} />
            <StyledTab label="Burials" {...a11yProps(2)} />
            <StyledTab label="Euthanasia" {...a11yProps(3)} />
            <StyledTab label="Aftercare" {...a11yProps(4)} />
            <StyledTab label="Memorialization" {...a11yProps(5)} />
          </StyledTabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <BlogPosts />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Cremation content
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Burials content
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          Euthanasia content
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          After content
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          Memorialization content
        </CustomTabPanel>
      </Box>
    ) : (
      <>
        <Container>
          <Typography sx={{
              color: 'var(--Gray-900, #101828)',
              fontFamily: 'Inter',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: '30px'
            }}
          >
            Popular blog posts
          </Typography>
        </Container>
        <BlogPosts />
      </>
    )
  );
}
