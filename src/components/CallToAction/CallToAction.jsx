import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const principles = [
  "Courtesy",
  "Integrity",
  "Perseverance",
  "Self-Control",
  "Indomitable Spirit"
];

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
        backgroundColor: '#1c1c1e',
        borderRadius: '8px',
        boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.5)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        src="https://via.placeholder.com/1920x1080/1c1c1e/ffffff?text=Martial+Arts"
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
          color: '#d32f2f',
          marginBottom: '10px',
          fontSize: '1.25rem',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          fontFamily: '"Roboto Slab", sans-serif',
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
          fontFamily: '"Oswald", sans-serif',
        }}
      >
        Unleash Your Inner Warrior
      </Typography>

      {/* Animated Taekwondo Principles */}
      <Box sx={{ marginBottom: '40px' }}>
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 * index, duration: 0.5 }}
          >
            <Typography
              variant="h6"
              sx={{
                color: '#d32f2f',
                fontWeight: 600,
                fontFamily: '"Oswald", sans-serif',
              }}
            >
              {principle}
            </Typography>
          </motion.div>
        ))}
      </Box>

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
          backgroundColor: '#1a237e',
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
