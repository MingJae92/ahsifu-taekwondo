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
      
    </Box>
  );
};

export default VideoCallToAction;

