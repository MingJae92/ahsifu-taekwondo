import React from 'react';
import { Container, Box, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Aboutus = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ py: 4, mt: 8 }}>
        <Navbar />
        
        {/* Header Section */}
        <Box textAlign="center" mb={5}>
          <Typography variant="h3" color="error" gutterBottom>
            About Our Martial Arts Academy
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Empowering individuals through discipline, respect, and skill.
          </Typography>
        </Box>

        {/* Main Content */}
        <Grid container spacing={4} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://via.placeholder.com/600x400"
              alt="Martial Arts"
              sx={{
                width: '100%',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>

          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" color="error" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              At our academy, we strive to empower individuals of all ages to become their best selves through
              the discipline and philosophy of martial arts. We emphasize respect, perseverance, and continuous
              improvement.
            </Typography>

            <Typography variant="h4" color="error" gutterBottom>
              Our Story
            </Typography>
            <Typography variant="body1" paragraph>
              Founded by world-class martial artists, our academy has been a beacon of strength and self-defense
              training for over a decade. We combine traditional techniques with modern approaches to provide
              comprehensive training for our students.
            </Typography>

            <Typography variant="h4" color="error" gutterBottom>
              Our Values
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Respect"
                  secondary="Respect for oneself and others is at the core of everything we do."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Discipline"
                  secondary="Martial arts is not just about skill; it's about building character and self-control."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Excellence"
                  secondary="We pursue excellence in training and encourage our students to aim for their personal best."
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>

      {/* Full-width Footer */}
      <Box sx={{ width: '100vw', bgcolor: 'background.paper', mt: 4 }}>
        <Container maxWidth={false} disableGutters>
          <Footer />
        </Container>
      </Box>
    </>
  );
};

export default Aboutus;
