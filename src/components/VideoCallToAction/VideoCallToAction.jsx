import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

const VideoCallToAction = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Video Background */}
      <Box
        component="video"
        src="./public/Video/adidas.mp4" // Path to the video in the public folder
        autoPlay
        loop
        muted
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          filter: 'brightness(0.6)',
        }}
      />

      {/* CTA Content */}
      <Container
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        maxWidth="sm"
        sx={{
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
            Master Your Strength
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Typography variant="h5" paragraph sx={{ maxWidth: '80%', lineHeight: 1.6 }}>
            Begin your journey in Taekwondo and discover the power of self-discipline and resilience.
          </Typography>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Button
            variant="contained"
            color="error"
            size="large"
            href="#join"
            sx={{ marginTop: '20px', padding: '10px 30px', fontSize: '18px', fontWeight: 'bold' }}
          >
            Start Your Training
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default VideoCallToAction;

