import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const MainCallToAction = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '100px 20px',
        backgroundColor: '#111',
        borderRadius: '8px',
        boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 600,
          color: '#ffb703',
          marginBottom: '10px',
          fontSize: '1.8rem',
          textTransform: 'uppercase',
          letterSpacing: '4px',
        }}
      >
        Awaken the Warrior Spirit
      </Typography>

      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          color: '#fff',
          marginBottom: '25px',
          fontFamily: 'Arial, sans-serif',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        Master the Art of Combat and Discipline
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: '#e9ecef',
          maxWidth: '700px',
          marginBottom: '50px',
          lineHeight: 1.8,
        }}
      >
        Embark on a journey of self-mastery and strength. Our martial arts training program empowers you to conquer both mind and body, transforming you into a true warrior.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <Button
              variant="contained"
              color="error"
              sx={{
                padding: '15px 35px',
                fontSize: '18px',
                fontWeight: 'bold',
                textTransform: 'none',
                borderRadius: '30px',
                backgroundColor: '#d62828',
                ':hover': {
                  backgroundColor: '#a4161a',
                },
              }}
            >
              Begin Your Journey
            </Button>
          </motion.div>
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
              borderColor: '#d62828',
              color: '#d62828',
              ':hover': {
                backgroundColor: '#d62828',
                color: '#fff',
              },
            }}
          >
            Watch Our Training
          </Button>
        </Grid>
      </Grid>

      <Box
        sx={{
          marginTop: '70px',
          padding: '25px',
          backgroundColor: '#003049',
          borderRadius: '10px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: '#ffb703',
            marginBottom: '15px',
          }}
        >
          Discipline, Strength, Honor
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#fff',
            fontSize: '1.1rem',
          }}
        >
          Suitable for all skill levels, our martial arts programs forge resilience and discipline. Step into the world of martial arts and unlock your true power.
        </Typography>
      </Box>

      {/* Background Image with Motion Animation */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Feuropetaekwondo.org%2Feuropean-games-2023-thrilling-day-of-taekwondo-unfolds-at-krynica-zdroj-arena%2F&psig=AOvVaw2ExL-wHIRx32RVkKtUwTbJ&ust=1731282470461000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICFvfq30IkDFQAAAAAdAAAAABAZ")', // Replace with a martial arts themed image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
          opacity: 0.3,
        }}
      />
    </Box>
  );
};

export default MainCallToAction;
