import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import StarIcon from '@mui/icons-material/StarBorder';
import { useText } from '~/theme/common';
import useStyles from './pricing-card-style';

function PricingCard(props) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const {
    title, subheader, price, info,
    description, buttonText
  } = props;

  return (
    <Card className={cx(classes.priceCard, title === 'Pro' ? classes.bordered : '')}>
      <div className={cx(classes.priceHeader, title === 'Pro' ? classes.hasBg : '')}>
        <CardHeader
          title={title}
          subheader={subheader}
          titleTypographyProps={{ align: 'center' }}
          subheaderTypographyProps={{ align: 'center' }}
          action={title === 'Pro' ? <StarIcon /> : null}
          className={cx(classes.cardHeader, title === 'Free' ? text.secondaryColor : text.primaryColor)}
        />
        <div className={classes.cardPricing}>
          <h2 className={cx(title === 'Free' ? text.textSecondary : text.textPrimary, text.title)}>
            $
            {price}
          </h2>
          <Typography variant="h6">
            &nbsp;/ mo
          </Typography>
        </div>
      </div>
      <CardContent className={classes.cardContent}>
        <ul>
          {description.map(line => (
            <Typography component="li" variant="subtitle1" align="center" key={line}>
              {line}
            </Typography>
          ))}
        </ul>
      </CardContent>
      <CardActions className={cx(classes.btnArea, title === 'Free' ? classes.secondaryColor : classes.primaryColor)}>
        <p>{ info }</p>
        <Button fullWidth variant="contained" color={title === 'Free' ? 'secondary' : 'primary'}>
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}

PricingCard.propTypes = {
  subheader: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.array.isRequired,
  buttonText: PropTypes.string.isRequired,
  info: PropTypes.string,
};

PricingCard.defaultProps = {
  subheader: '',
  info: '',
};

export default PricingCard;
