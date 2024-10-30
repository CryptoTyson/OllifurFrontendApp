import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import { Box } from '@mui/material';

const useStyles = makeStyles()(theme => ({
  title: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : 'var(--gray-900, #101828)',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '30px'
  }
}));

export default function FeatureCard({ title, desc }) {
  const { classes } = useStyles();
  const [isInMiddle, setIsInMiddle] = React.useState(false);
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    const checkIfInMiddle = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementMiddle = rect.top + rect.height / 2;
        const windowMiddle = windowHeight / 2;

        // Define a range around the middle (you can adjust these values)
        const middleRange = 100; // pixels above and below middle
        const isNearMiddle = Math.abs(elementMiddle - windowMiddle) < middleRange;

        setIsInMiddle(isNearMiddle);
      }
    };

    // Check initial position
    checkIfInMiddle();

    // Add scroll event listener
    window.addEventListener('scroll', checkIfInMiddle, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', checkIfInMiddle);
    };
  }, []);

  return (
    <Box
      ref={cardRef}
      sx={{
        minWidth: 275,
        borderLeft: '4px solid var(--Gray-100, #F2F4F7)',
        transition: 'border-left-color 0.3s ease',
        borderLeftColor: isInMiddle ? 'var(--Primary-600, #D77F33)' : 'var(--Gray-100, #F2F4F7)'
      }}
    >
      <CardContent>
        <Typography className={classes.title}>
          {title}
        </Typography>
        {desc}
      </CardContent>
      <CardActions>
        <Button size="small" endIcon={<ArrowForwardIcon />}>Learn More</Button>
      </CardActions>
    </Box>
  );
}

FeatureCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.any,
};

FeatureCard.defaultProps = {
  title: '',
  desc: '',
};
