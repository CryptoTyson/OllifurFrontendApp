import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
  title: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : 'var(--gray-900, #101828)', fontFamily: 'Inter', fontSize: '20px', fontStyle: 'normal', fontWeight: '600', lineHeight: '30px'
   }
}));

export default function FeatureCard({ title, desc }) {
  const { classes } = useStyles();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography className={classes.title}>
          {title}
        </Typography>
        {desc}
      </CardContent>
      <CardActions>
        <Button size="small" endIcon={<ArrowForwardIcon />}>Learn More</Button>
      </CardActions>
    </Card>
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
