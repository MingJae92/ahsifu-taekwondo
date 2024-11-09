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
        backgroundColor: '#222',
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
          color: '#f1faee',
          marginBottom: '10px',
          fontSize: '1.5rem',
          textTransform: 'uppercase',
          letterSpacing: '3px',
        }}
      >
        Ignite Your Power Within
      </Typography>

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

      <Typography
        variant="body1"
        sx={{
          color: '#f1faee',
          maxWidth: '700px',
          marginBottom: '50px',
          lineHeight: 1.7,
        }}
      >
        Step into the dojo of your life and break through all barriers. Our martial arts programs will guide you to physical and mental transformation, unleashing the warrior within.
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
                backgroundColor: '#e63946',
                ':hover': {
                  backgroundColor: '#c0392b',
                },
              }}
            >
              Start Your Training
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

      <Box
        sx={{
          marginTop: '70px',
          padding: '25px',
          backgroundColor: '#1d3557',
          borderRadius: '10px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontWeight: 500,
            color: '#f1faee',
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
          backgroundImage: 'url("https://i.redd.it/zsag68qysmeb1.jpg")', // Placeholder image
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
