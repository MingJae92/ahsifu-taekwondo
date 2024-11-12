import React from 'react';
import { Container, Box, Typography, Grid, List, ListItem, ListItemText, Card, CardMedia, CardContent, Button } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Aboutus = () => {
  const missionRef = React.useRef(null);
  const storyRef = React.useRef(null);
  const valuesRef = React.useRef(null);
  const isMissionInView = useInView(missionRef, { once: true });
  const isStoryInView = useInView(storyRef, { once: true });
  const isValuesInView = useInView(valuesRef, { once: true });

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 4, mt: 8 }}>
        <Navbar />

        {/* Header Section */}
        <Box textAlign="center" mb={5} component={motion.div} initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Typography variant="h3" color="error" gutterBottom>
            AH SIFU, TAEKWONDO
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Empowering individuals through discipline, respect, and skill.
          </Typography>
        </Box>

        {/* Main Content */}
        <Grid container spacing={4} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box component={motion.img} whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }} src="https://via.placeholder.com/600x400" alt="Martial Arts" sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }} />
            
            {/* Additional Image Placeholder */}
            <Box component={motion.img} mt={2} whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }} src="https://via.placeholder.com/600x300" alt="Martial Arts" sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }} />
          </Grid>

          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <Box component={motion.div} ref={missionRef} initial={{ opacity: 0, y: 30 }} animate={isMissionInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 1 }}>
              <Typography variant="h4" color="error" gutterBottom component={motion.div} whileHover={{ scale: 1.02, color: '#ff5722' }} transition={{ type: 'spring', stiffness: 100 }}>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                At our academy, we strive to empower individuals of all ages to become their best selves through the discipline and philosophy of martial arts. We emphasize respect, perseverance, and continuous improvement.
              </Typography>
            </Box>

            <Box component={motion.div} ref={storyRef} initial={{ opacity: 0, y: 30 }} animate={isStoryInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4, duration: 1 }}>
              <Typography variant="h4" color="error" gutterBottom component={motion.div} whileHover={{ scale: 1.02, color: '#ff5722' }} transition={{ type: 'spring', stiffness: 100 }}>
                Our Story
              </Typography>
              <Typography variant="body1" paragraph>
                Founded by world-class martial artists, our academy has been a beacon of strength and self-defense training for over a decade. We combine traditional techniques with modern approaches to provide comprehensive training for our students.
              </Typography>
            </Box>

            <Box component={motion.div} ref={valuesRef} initial={{ opacity: 0, y: 30 }} animate={isValuesInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6, duration: 1 }}>
              <Typography variant="h4" color="error" gutterBottom component={motion.div} whileHover={{ scale: 1.02, color: '#ff5722' }} transition={{ type: 'spring', stiffness: 100 }}>
                Our Values
              </Typography>
              <List>
                {['Respect', 'Discipline', 'Excellence'].map((value, index) => (
                  <ListItem key={value} component={motion.div} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }} whileHover={{ scale: 1.05, color: '#ff5722' }}>
                    <ListItemText primary={value} secondary={value === 'Respect' ? 'Respect for oneself and others is at the core of everything we do.' : value === 'Discipline' ? "Martial arts is not just about skill; it's about building character and self-control." : 'We pursue excellence in training and encourage our students to aim for their personal best.'} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>

        {/* Instructor Section */}
        <Box mt={8}>
          <Typography variant="h4" color="error" gutterBottom textAlign="center">
            Meet Our Instructors
          </Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((instructor) => (
              <Grid item xs={12} md={4} key={instructor}>
                <Card component={motion.div} whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <CardMedia component="img" height="300" image="https://via.placeholder.com/300x300" alt={`Instructor ${instructor}`} />
                  <CardContent>
                    <Typography variant="h5" color="error">
                      Instructor {instructor}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Specialist in sparring and self-defense with over 15 years of experience.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Taekwondo Information Section */}
        <Box mt={8} textAlign="center">
          <Typography variant="h4" color="error" gutterBottom>
            About Taekwondo
          </Typography>
          <Typography variant="body1" paragraph>
            Taekwondo is a traditional Korean martial art focusing on high, fast kicks and agile footwork. Practitioners learn a mix of defensive and offensive techniques that promote physical fitness, mental discipline, and self-confidence.
          </Typography>
        </Box>

        {/* Video Placeholder Section */}
        <Box mt={8}>
          <Typography variant="h4" color="error" gutterBottom textAlign="center">
            Video Highlights
          </Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((video) => (
              <Grid item xs={12} md={4} key={video}>
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 100 }}
                  sx={{
                    width: '100%',
                    height: '200px',
                    backgroundColor: '#ccc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" color="textSecondary">
                    Video {video} Placeholder
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
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
