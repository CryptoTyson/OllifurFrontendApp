import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  Container,
  Typography,
  Box,
  Button,
  CircularProgress,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import brand from '~/public/text/brand';

export default function PaymentSuccess() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { session_id: sessionId } = router.query;

  useEffect(() => {
    const verifyPayment = async () => {
      if (!sessionId) return;

      try {
        const response = await fetch('/api/verify-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ sessionId }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Payment verification failed');
        }

        if (!data.success) {
          throw new Error('Payment verification was not successful');
        }

        setLoading(false);
      } catch (err) {
        console.error('Payment verification error:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    if (sessionId) {
      verifyPayment();
    } else {
      // If no sessionId is present in URL, show error
      setError('No payment session found');
      setLoading(false);
    }
  }, [sessionId]);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          bgcolor: '#FDF8F5',
        }}
      >
        <CircularProgress />
        <Typography sx={{ mt: 2 }}>Verifying payment...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          bgcolor: '#FDF8F5',
        }}
      >
        <Typography color="error" sx={{ mb: 2 }}>
          {error}
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
          Return to Bookings
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Head>
        <title>{brand.retail.name} - Payment Successful</title>
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
            <CheckCircleOutlineIcon
              sx={{ fontSize: 64, color: '#4CAF50', mb: 2 }}
            />
            <Typography variant="h4" gutterBottom>
              Payment Successful
            </Typography>
            <Typography color="textSecondary" sx={{ mb: 4 }}>
              Thank you for your booking. We have sent a confirmation email with all the details.
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
              Return to Bookings
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
