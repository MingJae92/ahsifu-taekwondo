import React from 'react';
import { Box, Container, Grid, Typography, Link, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Box
        component="footer"
        sx={{
          bgcolor: '#1C1C1C', // Matching Navbar background color
          color: '#fbc02d', // Matching Navbar text color
          py: 2,
          width: '100%',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="space-evenly">
            {/* About Section */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontFamily: "'Roboto', sans-serif", // Navbar typography
                    fontWeight: 'bold',
                  }}
                >
                  About Ah Sifu Taekwondo
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  We are committed to providing top-notch martial arts in the world!
                </Typography>
              </motion.div>
            </Grid>

            {/* Links Section */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontFamily: "'Roboto', sans-serif", // Navbar typography
                    fontWeight: 'bold',
                  }}
                >
                  Quick Links
                </Typography>
                {["About us", "Careers", "Contact Us", "Privacy Policy"].map((text) => (
                  <Box key={text} sx={{ mb: 1 }}>
                    <Link href="#" color="inherit" underline="hover">
                      {text}
                    </Link>
                  </Box>
                ))}
              </motion.div>
            </Grid>

            {/* Contact Section */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontFamily: "'Roboto', sans-serif", // Navbar typography
                    fontWeight: 'bold',
                  }}
                >
                  Contact Us
                </Typography>
                <Typography variant="body2" sx={{ color: 'white', mb: 1 }}>
                  Email: ahsifu@taekwondo.co.uk
                </Typography>
                <Typography variant="body2" sx={{ color: 'white', mb: 1 }}>
                  Phone: +44 123 456 7890
                </Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                  Address: xxx-xxx-xxx
                </Typography>
              </motion.div>
            </Grid>

            {/* Newsletter Section */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontFamily: "'Roboto', sans-serif", // Navbar typography
                    fontWeight: 'bold',
                  }}
                >
                  Subscribe to Our Newsletter
                </Typography>
                <Typography variant="body2" sx={{ color: 'white', mb: 2 }}>
                  Stay updated with our latest news and offers.
                </Typography>
                <Box
                  component="form"
                  noValidate
                  autoComplete="off"
                  sx={{ display: 'flex', gap: 1 }}
                >
                  <TextField
                    variant="outlined"
                    placeholder="Enter your email"
                    type="email"
                    size="small"
                    sx={{
                      bgcolor: 'white',
                      borderRadius: 1,
                      input: { color: 'black' },
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#fbc02d', // Navbar button color
                      textTransform: 'none',
                      color: 'black', // Text color in the button
                    }}
                  >
                    Subscribe
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          </Grid>

          {/* Footer Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box textAlign="center" pt={2} borderTop={1} borderColor="grey.800">
              <Typography
                variant="body2"
                sx={{
                  color: 'white',
                  fontFamily: "'Roboto', sans-serif", // Navbar typography
                  fontWeight: 'bold',
                }}
              >
                © {new Date().getFullYear()} AH SIFU TAEKWONDO, All rights reserved.
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </motion.footer>
  );
};

export default Footer;
