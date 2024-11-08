import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

function Hero() {
  return (
    <Box
      sx={{
        height: 'calc(100vh - 128px)', // Adjust based on the combined height of navbar and footer
        width: '100%',
        backgroundImage: 'url("https://www.britishtaekwondo.org.uk/wp-content/uploads/2022/07/Sport-Taekwondo-Selection-Competition-Series-Event-1.-Photo-courtesy-of-All-Sports-Photography-290522-2.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        marginTop: '64px', // Adjust based on navbar height
        zIndex: -1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
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
