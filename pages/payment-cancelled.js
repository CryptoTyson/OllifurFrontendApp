import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  Container,
  Typography,
  Box,
  Button,
} from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import brand from '~/public/text/brand';

export default function PaymentCancelled() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{brand.retail.name} - Payment Cancelled</title>
      </Head>
      <Box
        sx={{
          bgcolor: '#FDF8F5',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Box
            sx={{
              bgcolor: 'white',
              borderRadius: 2,
              p: 4,
              textAlign: 'center',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <ErrorOutlineIcon
              sx={{ fontSize: 64, color: '#D77F33', mb: 2 }}
            />
            <Typography variant="h4" gutterBottom>
              Payment Cancelled
            </Typography>
            <Typography color="textSecondary" sx={{ mb: 4 }}>
              Your payment was cancelled. No charges have been made to your account.
            </Typography>
            <Button
              variant="contained"
              onClick={() => router.push('/crematoriums/bookings')}
              sx={{
                bgcolor: '#D77F33',
                '&:hover': {
                  bgcolor: '#884E1B',
                },
              }}
            >
              Return to Booking
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
