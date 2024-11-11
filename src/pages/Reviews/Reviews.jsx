import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Avatar, Rating, Box, IconButton } from '@mui/material';
import { Star } from '@mui/icons-material';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

// Sample data for reviews (20 reviews)
const reviews = [
  { name: "John Doe", avatar: "/path/to/avatar1.jpg", review: "The best martial arts dojo! My skills have improved tremendously, and the instructors are top-notch.", rating: 5 },
  { name: "Jane Smith", avatar: "/path/to/avatar2.jpg", review: "Amazing experience! Great community and excellent teaching methods.", rating: 4 },
  { name: "Alex Johnson", avatar: "/path/to/avatar3.jpg", review: "I've gained so much confidence and discipline here. Highly recommend!", rating: 5 },
  { name: "Samantha Lee", avatar: "/path/to/avatar4.jpg", review: "Great place to learn and grow. The teachers are very encouraging.", rating: 4 },
  { name: "Chris Evans", avatar: "/path/to/avatar5.jpg", review: "Incredible atmosphere! I love coming to practice every week.", rating: 5 },
  { name: "Emily Davis", avatar: "/path/to/avatar6.jpg", review: "A supportive environment with skilled instructors. I've learned a lot.", rating: 4 },
  { name: "Michael Brown", avatar: "/path/to/avatar7.jpg", review: "Hands down, the best dojo I've been to. My skills have improved significantly.", rating: 5 },
  { name: "Sarah Wilson", avatar: "/path/to/avatar8.jpg", review: "The dojo has a fantastic culture. Everyone is very friendly and helpful.", rating: 5 },
  { name: "David Martinez", avatar: "/path/to/avatar9.jpg", review: "Perfect place to train, learn, and grow. Excellent instructors.", rating: 4 },
  { name: "Olivia Garcia", avatar: "/path/to/avatar10.jpg", review: "Wonderful experience. I feel healthier and more focused.", rating: 5 },
  { name: "Sophia Taylor", avatar: "/path/to/avatar11.jpg", review: "Joining this dojo was one of the best decisions I've made.", rating: 5 },
  { name: "Ethan White", avatar: "/path/to/avatar12.jpg", review: "Great dojo with a great community. Highly recommend.", rating: 4 },
  { name: "Liam Thomas", avatar: "/path/to/avatar13.jpg", review: "Training here has improved my discipline and fitness immensely.", rating: 5 },
  { name: "Isabella Harris", avatar: "/path/to/avatar14.jpg", review: "Fantastic instructors and a welcoming community.", rating: 5 },
  { name: "Mia Clark", avatar: "/path/to/avatar15.jpg", review: "I feel like part of a family here. Great experience overall.", rating: 5 },
];

const Reviews = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8, pt: 16 }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
          What Our Students Say
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Our dojo is not just about learning martial arts, it’s about becoming part of a family. See how our students have transformed.
        </Typography>
      </Box>

      {/* Reviews Grid */}
      <Grid container spacing={4} justifyContent="center">
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                position: 'relative',
                boxShadow: 3,
                borderRadius: 2,
                p: 3,
                backgroundColor: '#fff',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                border: '1px solid #ddd',
              }}
            >
              {/* Decorative Border for Martial Arts Feel */}
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                border: '2px solid #d32f2f',
                borderRadius: 2,
                zIndex: -1,
              }} />

              <Avatar
                src={review.avatar}
                alt={review.name}
                sx={{
                  width: 80,
                  height: 80,
                  margin: 'auto',
                  mb: 2,
                  border: '3px solid #d32f2f', // Martial arts red accent
                }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {review.name}
                </Typography>
                <Rating
                  name="read-only"
                  value={review.rating}
                  readOnly
                  size="large"
                  sx={{
                    mb: 2,
                    '& .MuiRating-iconFilled': {
                      color: '#d32f2f', // Red stars
                    },
                  }}
                />
                <Typography variant="body2" color="textSecondary" paragraph>
                  "{review.review}"
                </Typography>
                {/* Quote icon */}
                <Box sx={{ position: 'absolute', top: -15, left: -15 }}>
                  <IconButton sx={{ color: '#d32f2f', fontSize: 40 }}>
                    <Star />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Call-to-Action Section */}
      <Box
        sx={{
          mt: 5,
          textAlign: 'center',
          py: 6,
          backgroundColor: '#d32f2f',
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" color="#fff" fontWeight="bold" gutterBottom>
          Join Our Martial Arts Family
        </Typography>
        <Typography variant="body1" color="#fff" paragraph>
          Ready to enhance your martial arts skills and be part of an incredible community? Sign up today!
        </Typography>
        <Box>
          <button
            style={{
              padding: '10px 20px',
              fontSize: '18px',
              backgroundColor: '#fff',
              borderRadius: '5px',
              color: '#d32f2f',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Get Started
          </button>
        </Box>
      </Box>

      {/* Fixed Footer */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          bgcolor: 'background.paper',
          boxShadow: 4,
          zIndex: 100,
        }}
      >
        <Container maxWidth={false} disableGutters>
          <Footer />
        </Container>
      </Box>
    </Container>
  );
};

export default Reviews;
