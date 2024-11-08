import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

const CallToAction = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '80px 20px',
          backgroundColor: '#f0f0f0', // Soft gray background
          borderRadius: '8px',
          boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.15)', // Subtle shadow for depth
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            color: '#333',
            marginBottom: '20px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Start Your Journey
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#555',
            maxWidth: '500px',
            marginBottom: '40px',
            lineHeight: 1.6,
          }}
        >
          Transforming ideas into reality with bespoke solutions tailored to your needs.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{
            padding: '12px 28px',
            fontSize: '16px',
            fontWeight: 'bold',
            textTransform: 'none',
            borderRadius: '24px',
            backgroundColor: '#007bff', // Button color
            ':hover': {
              backgroundColor: '#0056b3', // Hover color
            },
          }}
        >
          Get in Touch
        </Button>
      </Box>
    </Container>
  );
};

export default CallToAction;
