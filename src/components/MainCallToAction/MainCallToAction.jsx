import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

const MainCallToAction = () => {
  return (
    <Box
      sx={{
        width: '100%', // Full width
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '100px 20px',
        backgroundColor: '#222', // Dark background for intense feeling
        borderRadius: '8px',
        boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.3)', // Strong shadow for impact
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="https://www.google.com/url?sa=i&url=http%3A%2F%2Fm.worldtaekwondo.org%2Fwtnews%2Fview.html%3Fnid%3D132056&psig=AOvVaw0gHIkVO4GEy91oXDEFEggH&ust=1731195047657000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLDa9qfyzYkDFQAAAAAdAAAAABAJ" // Replace with intense martial arts image
        alt="Martial Arts Action"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.3, // Darker opacity for better text readability
          zIndex: -1,
        }}
      />

      {/* Section Tagline */}
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          color: '#f1faee', // Light color for tagline
          marginBottom: '10px',
          fontSize: '1.5rem',
          textTransform: 'uppercase',
          letterSpacing: '3px',
        }}
      >
        Ignite Your Power Within
      </Typography>

      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: '#fff',
          marginBottom: '25px',
          fontFamily: 'Arial, sans-serif',
          textTransform: 'uppercase',
        }}
      >
        Conquer Your Limits. Achieve the Impossible.
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          color: '#f1faee', // Soft light text color
          maxWidth: '700px',
          marginBottom: '50px',
          lineHeight: 1.7,
        }}
      >
        Step into the dojo of your life and break through all barriers. Our martial arts programs will guide you to physical and mental transformation, unleashing the warrior within.
      </Typography>

      {/* Buttons */}
      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <Button
            variant="contained"
            color="error" // Red button for urgency
            sx={{
              padding: '15px 35px',
              fontSize: '18px',
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: '30px',
              backgroundColor: '#e63946', // Red for action
              ':hover': {
                backgroundColor: '#c0392b', // Darker red on hover
              },
            }}
          >
            Start Your Training
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="error"
            sx={{
              padding: '15px 35px',
              fontSize: '18px',
              fontWeight: 'bold',
              textTransform: 'none',
              borderRadius: '30px',
              borderColor: '#e63946',
              color: '#e63946',
              ':hover': {
                backgroundColor: '#e63946',
                color: '#fff',
              },
            }}
          >
            Watch a Demo
          </Button>
        </Grid>
      </Grid>

      {/* Highlighted Feature */}
      <Box
        sx={{
          marginTop: '70px',
          padding: '25px',
          backgroundColor: '#1d3557', // Dark blue background
          borderRadius: '10px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: '#f1faee', // Light color for feature heading
            marginBottom: '15px',
          }}
        >
          Unlock Your True Potential
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#fff',
            fontSize: '1.1rem',
          }}
        >
          Our martial arts programs are designed for people of all levels. Join now and transform both your body and mind to the highest level of mastery.
        </Typography>
      </Box>
    </Box>
  );
};

export default MainCallToAction;
