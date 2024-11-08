import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const CallToAction = () => {
  return (
    <Box
      sx={{
        width: '100%', // Full width
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 20px',
        backgroundColor: '#f0f0f0', // Soft gray background
        borderRadius: '8px',
        boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.15)', // Subtle shadow for depth
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="https://via.placeholder.com/1920x1080" // Replace with a relevant image URL
        alt="Background"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.1,
          zIndex: -1,
        }}
      />

      {/* Section Tagline */}
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 400,
          color: '#007bff',
          marginBottom: '10px',
          fontSize: '1.25rem',
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}
      >
        Empowering Ambitions
      </Typography>

      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          color: '#333',
          marginBottom: '20px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        Start Your Journey with Denton
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          color: '#555',
          maxWidth: '600px',
          marginBottom: '40px',
          lineHeight: 1.6,
        }}
      >
        Transforming ideas into reality with bespoke solutions tailored to your needs. 
        Let us guide you every step of the way with our world-class expertise and proven success.
      </Typography>

      {/* Buttons */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: '12px 28px',
              fontSize: '16px',
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: '24px',
              backgroundColor: '#007bff', // Primary button color
              ':hover': {
                backgroundColor: '#0056b3', // Hover color
              },
            }}
          >
            Get in Touch
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              padding: '12px 28px',
              fontSize: '16px',
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: '24px',
              borderColor: '#007bff',
              color: '#007bff',
              ':hover': {
                backgroundColor: '#007bff',
                color: '#fff',
              },
            }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>

      {/* Highlighted Feature */}
      <Box
        sx={{
          marginTop: '60px',
          padding: '20px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: '#007bff',
            marginBottom: '10px',
          }}
        >
          New Feature
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#333',
            fontSize: '1rem',
          }}
        >
          Discover how Denton’s tailored solutions can elevate your projects.
        </Typography>
      </Box>
    </Box>
  );
};

export default CallToAction;
