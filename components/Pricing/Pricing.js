import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useTranslation } from 'next-i18next';
import { useText, useTextAlign } from '~/theme/common';
import PricingCard from '../Cards/PricingCard';
import Title from '../Title';
import useStyles from './pricing-style';

const tiers = [
  {
    title: 'Free',
    price: 0,
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    buttonText: 'pricing_free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Personal',
    price: 5,
    description: [
      '15 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support'
    ],
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    buttonText: 'pricing_buy',
    buttonVariant: 'outlined'
  },
  {
    title: 'Pro',
    price: 15,
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'pricing_buy',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: 30,
    info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'btn_contact',
    buttonVariant: 'outlined',
  }
];

function Pricing() {
  const { classes, cx } = useStyles();
  const { classes: align } = useTextAlign();
  const { classes: text } = useText();
  

  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'xl'));

  return (
    <Container className={classes.root}>
      <Title align="center">
        {'pricing_title'}
      </Title>
      <p className={cx(text.subtitle2, align.textCenter)}>
        {'pricing_desc'}
      </p>
      <div className={classes.pricingWrap}>
        <Grid container spacing={!isTablet ? 3 : 0} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={6} md={3}>
              <PricingCard
                title={tier.title}
                subheader={tier.subheader}
                price={tier.price}
                description={tier.description}
                info={tier.info}
                buttonText={t('' + tier.buttonText)}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}

export default Pricing;
