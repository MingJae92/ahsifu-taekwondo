import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

function Hero() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        marginTop: '64px', // Offset for fixed navbar height
        position: 'relative', // Keeps it below the fixed navbar
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("https://www.britishtaekwondo.org.uk/wp-content/uploads/2022/07/Sport-Taekwondo-Selection-Competition-Series-Event-1.-Photo-courtesy-of-All-Sports-Photography-290522-2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      />
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" gutterBottom>
          Transforming Workspaces for Tomorrow
        </Typography>
        <Typography variant="h5" paragraph>
          Explore innovative office designs and build environments that inspire creativity and productivity.
        </Typography>
        <Button variant="contained" color="primary" href="#projects">
          View Our Work
        </Button>
      </Container>
    </Box>
  );
}

export default Hero;
