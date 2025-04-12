import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Grid } from '@mui/material';
import DogPic from '../../public/images/dog-pic.jpeg';

function MemorialsCard({ image }) {
  return (
    <Box
      m={2}
      style={{
        borderRadius: '16px',
        border: '2px solid var(--primary-900, #553111)',
        background: '#FCF4EE',
        padding: '10px',
      }}
    >
      <Card sx={{ maxWidth: 345, background: '#FCF4EE', boxShadow: 'none' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="220"
          image={image}
        />
        <CardContent sx={{ padding: '0px' }}>
          <Grid
            container
            direction="column"
            spacing={1}
            padding="5px"
            marginTop="10px"
          >
            <Grid item>
              <Typography
                gutterBottom
                style={{
                  color: 'var(--primary-700, #884E1B)',
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  textAlign: 'left',
                  fontWeight: '400',
                  lineHeight: '20px',
                }}
              >
                A Very, very Good boi
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{
                  color: 'var(--gray-900, #101828)',
                  fontFamily: 'Inter',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  textAlign: 'left',
                  lineHeight: '32px',
                }}
              >
                Olliver (Ollie)
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                style={{
                  color: 'var(--gray-600, #475467)',
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left',
                }}
              >
                12 Years of happiness 12 Years of happiness 12 Years of
                happiness 12
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions style={{ padding: '5px' }}>
          <Button
            endIcon={<ChevronRightIcon style={{ color: '#884E1B' }} />}
            style={{ padding: '12px 0px' }}
            size="medium"
          >
            <Typography
              style={{
                color: 'var(--primary-700, #884E1B)',
                fontFamily: 'Inter',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: '24px',
              }}
            >
              Go to Memorial
            </Typography>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default MemorialsCard;
