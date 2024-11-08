import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'black',
        color: 'white',
        py: 5,
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        zIndex: 1300, // Ensures footer stays above other elements
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              About Denton
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              We are committed to providing top-notch legal services worldwide. Our values and expertise define our approach.
            </Typography>
          </Grid>

          {/* Links Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="#" color="inherit" underline="hover">
                Our Services
              </Link>
            </Box>
            <Box>
              <Link href="#" color="inherit" underline="hover">
                Careers
              </Link>
            </Box>
            <Box>
              <Link href="#" color="inherit" underline="hover">
                Contact Us
              </Link>
            </Box>
            <Box>
              <Link href="#" color="inherit" underline="hover">
                Privacy Policy
              </Link>
            </Box>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              Email: contact@denton.co.uk
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              Phone: +44 123 456 7890
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              Address: 123 Denton Lane, London, UK
            </Typography>
          </Grid>
        </Grid>

        {/* Footer Bottom Section */}
        <Box textAlign="center" pt={4} borderTop={1} borderColor="grey.800">
          <Typography variant="body2" sx={{ color: 'white' }}>
            © {new Date().getFullYear()} Denton. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
