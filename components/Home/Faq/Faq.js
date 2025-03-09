import React from 'react';
import Container from '@mui/material/Container';
import { Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { useTheme } from '@mui/material/styles';
import FaqAccordion from '../../FaqAccordion';
import AvatarGroupImg from '../../../public/images/Avatar group.png';

const useStyles = makeStyles()((theme) => ({
  heading: {
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.primary[500]
        : 'var(--gray-900, #101828)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '36px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '44px',
    letterSpacing: '-0.72px',
  },
  supportingText: {
    color: theme.palette.mode === 'dark' ? 'white' : 'var(--gray-600, #475467)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '30px',
  },
  link: {
    color: '#553111',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '24px',
    textDecorationLine: 'underline',
  },
  summary: {
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.primary.light
        : 'var(--gray-600, #475467)',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px',
  },
  listHeading: {
    color: 'var(--gray-600, #475467)',
    fontFamily: 'Inter',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '24px',
  },
  getInTouch: {
    borderRadius: '16px',
    background:
      theme.palette.mode === 'dark'
        ? theme.palette.primary.light
        : 'var(--gray-50, #F9FAFB)',
    padding: '10px',
  },
  spacing: {
    marginTop: '20px',
    marginLeft: '17px',
  },
}));

function Faq() {
  const { classes, cx } = useStyles();
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const faqData = [
    {
      summary: 'Are there any specific requirements or preparations before bringing my pet for cremation?',
      details: 'Yes, while there are no specific requirements. There are some generalized rules to follow when bringing in a pet for cremation. You can read all about it here'
    },
    {
      summary: 'How long does it take for the cremation process?',
      details: 'The duration of a pet cremation can vary depending on several factors, such as the size of the pet and the specific cremation process used. Generally, the cremation process for a pet can take anywhere from 1 to 3 hours. Larger animals may require more time for the complete cremation process.'
    },
    {
      summary: 'Do you assist with transportation of my pet to the crematorium?',
      details: 'Crematoriums that assist with the transport of your pet have a tag on them saying "Pickup offered within city". Please keep a lookout for this while browsing/booking a crematorium.'
    },
    {
      summary: 'How much does a cremation usually cost?',
      details: 'The cost of pet cremation can vary depending on various factors, such as the size of the pet, the location, the type of cremation service chosen, and any additional options or services selected. Generally, the cost of pet cremation can range from around $50 to $300 or more.\n\nThe two main types of pet cremation are individual (private) cremation and communal (group) cremation. Individual cremation, where your pet is cremated individually and their ashes are returned to you, is typically more expensive than communal cremation, where multiple pets are cremated together, and the ashes are not returned.\n\nAdditional factors that can affect the cost include urns or memorial options, transportation fees, and any extra services like witnessing the cremation or special requests.'
    },
    {
      summary: 'What should I expect during my visit to a pet crematorium?',
      details: {
        introduction: "During your visit to a pet crematorium, you can expect a professional and compassionate environment where staff members understand the sensitivity and emotional nature of the situation. Here's an overview of what you may encounter:",
        steps: [
          {
            heading: 'Reception and consultation',
            content: 'Upon arrival, you will be greeted by compassionate and professional staff who will guide you through the process and ask for your booking Email via Ollifur.'
          },
          {
            heading: 'Viewing room (if available)',
            content: 'Some pet crematoriums offer a viewing room where you can spend some final moments with your pet before the cremation. This can provide a chance to say goodbye in a private and peaceful setting.'
          },
          {
            heading: 'Transfer of your pet',
            content: 'Once the necessary paperwork is presented, the crematorium staff will respectfully transfer your pet to the cremation area. They will handle your pet with care and ensure a professional and dignified process.'
          },
          {
            heading: 'Cremation process',
            content: "Depending on the type of cremation you have chosen (individual or communal), the process will proceed accordingly. In an individual cremation, your pet will be cremated separately, while in a communal cremation, multiple pets will be cremated together. The specific details of the cremation process may vary based on the facility's procedures and equipment."
          },
          {
            heading: 'Collection of ashes (if applicable)',
            content: "If you have chosen an individual cremation, you will have the option to collect your pet's ashes once the process is complete. The staff will provide you with the ashes, typically in an urn or another container of your choice."
          }
        ],
        conclusion: 'Throughout your visit, the staff should be available to answer any questions you may have and provide emotional support. They understand the grief associated with losing a beloved pet and are there to assist you in making the process as comfortable as possible.'
      }
    }
  ];

  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        item
        xs={12}
        spacing={2}
      >
        <Grid container direction="column" item spacing={2}>
          <Grid item>
            <Typography className={classes.heading}>
              Frequently asked questions
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.supportingText}>
              Find answers to all your questions about Pet Cremations.
            </Typography>
          </Grid>
        </Grid>
        <Grid container item spacing={2}>
          {faqData.map((faq) => (
            <Grid item xs={12} key={faq.summary}>
              <FaqAccordion
                summary={faq.summary}
                details={
                  typeof faq.details === 'string' ? (
                    <Typography component="span" className={classes.summary}>
                      {faq.details}
                    </Typography>
                  ) : (
                    <Typography component="span" className={classes.summary}>
                      {faq.details.introduction}
                      <ol type="1">
                        {faq.details.steps.map((step) => (
                          <li key={step.heading}>
                            <Typography component="span" className={classes.listHeading}>
                              {step.heading} -
                            </Typography>
                            {step.content}
                          </li>
                        ))}
                      </ol>
                      {faq.details.conclusion}
                    </Typography>
                  )
                }
                isFirst={faq === faqData[0]}
              />
            </Grid>
        ))}
          <Grid
            container
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            xs={12}
            spacing={2}
            item
            className={cx(classes.getInTouch, isDesktop && classes.spacing)}
          >
            <Grid item>
              <img src={AvatarGroupImg} alt="Avatar" />
            </Grid>
            <Grid item>
              <Typography
                className={classes.heading}
                style={{ fontSize: '20px' }}
              >
                Still have questions?
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.supportingText}>
                Can’t find the answer you’re looking for? Chat with our friendly
                team.
              </Typography>
            </Grid>
            <Grid item>
              <Button href="/contact-us" variant="contained">
                Get in touch
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Faq;
