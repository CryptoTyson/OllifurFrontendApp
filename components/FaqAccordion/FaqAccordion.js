import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { makeStyles } from 'tss-react/mui';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles()((theme) => ({
  summary: {
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.primary[500]
        : 'var(--gray-900, #101828)',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '28px',
  },
}));

export default function FaqAccordion({ summary, details }) {
  const { classes } = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  const [expanded, setExpanded] = React.useState(isDesktop);
  return (
    <div>
      <Accordion
        onChange={() => {
          setExpanded(!expanded);
        }}
        style={{ width: '100%' }}
        expanded={expanded}
      >
        <AccordionSummary
          expandIcon={
            expanded ? (
              <RemoveCircleOutlineOutlinedIcon />
            ) : (
              <ControlPointOutlinedIcon />
            )
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ width: '100%' }}
        >
          <Typography className={classes.summary}>{summary}</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={
            isDesktop
              ? {
                  marginRight: '70px',
                }
              : { marginRight: '20px' }
          }
        >
          {details}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

FaqAccordion.propTypes = {
  summary: PropTypes.any,
  details: PropTypes.any,
};

FaqAccordion.defaultProps = {
  summary: '',
  details: '',
};
