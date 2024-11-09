import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const CallToAction = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 20px',
        backgroundColor: '#1c1c1e', // Darker shade for an intense look
        borderRadius: '8px',
        boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.5)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="https://via.placeholder.com/1920x1080/1c1c1e/ffffff?text=Martial+Arts" // Replace with a martial arts-themed image URL
        alt="Martial Arts Background"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.15,
          zIndex: -1,
        }}
      />

      {/* Section Tagline */}
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 500,
          color: '#d32f2f', // Intense red
          marginBottom: '10px',
          fontSize: '1.25rem',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontFamily: '"Roboto Slab", sans-serif', // Strong font for tagline
        }}
      >
        Strength. Discipline. Honor.
      </Typography>

      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: '#fff',
          marginBottom: '20px',
          fontFamily: '"Oswald", sans-serif', // Bold and sharp font style
        }}
      >
        Unleash Your Inner Warrior
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          color: '#f4f4f4',
          maxWidth: '600px',
          marginBottom: '40px',
          lineHeight: 1.7,
        }}
      >
        Transform your body and mind with the power of martial arts. Unlock your potential and become a champion in every aspect of life.
      </Typography>

      {/* Buttons */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            sx={{
              padding: '14px 32px',
              fontSize: '18px',
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: '32px',
              backgroundColor: '#d32f2f',
              ':hover': {
                backgroundColor: '#b71c1c',
              },
            }}
          >
            Join the Fight
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            sx={{
              padding: '14px 32px',
              fontSize: '18px',
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: '32px',
              borderColor: '#d32f2f',
              color: '#d32f2f',
              ':hover': {
                backgroundColor: '#d32f2f',
                color: '#fff',
              },
            }}
          >
            Learn the Art
          </Button>
        </Grid>
      </Grid>

      {/* Highlighted Feature */}
      <Box
        sx={{
          marginTop: '60px',
          padding: '20px',
          backgroundColor: '#1a237e', // Dark blue background
          borderRadius: '8px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: '#d32f2f',
            marginBottom: '10px',
          }}
        >
          Master Your Skills
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#fff',
            fontSize: '1rem',
          }}
        >
          Harness the power of martial arts training and elevate your life to new heights.
        </Typography>
      </Box>
    </Box>
  );
};

export default CallToAction;
