import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Rating,
  Box,
  IconButton,
} from "@mui/material";
import { Star } from "@mui/icons-material";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const reviews = [
  { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/1.jpg", rating: 5, review: "Joining this dojo has been life-changing! The instructors are top-notch." },
  { name: "Jane Smith", avatar: "https://randomuser.me/api/portraits/women/1.jpg", rating: 4, review: "A great place to learn and grow. I love the community here." },
  { name: "Sam Lee", avatar: "https://randomuser.me/api/portraits/men/2.jpg", rating: 5, review: "The best dojo I've ever been to. Highly recommended!" },
  { name: "Ava Brown", avatar: "https://randomuser.me/api/portraits/women/2.jpg", rating: 5, review: "Amazing instructors who really care about their students." },
  { name: "Chris Green", avatar: "https://randomuser.me/api/portraits/men/3.jpg", rating: 4, review: "A wonderful experience every time I come here!" },
  { name: "Olivia White", avatar: "https://randomuser.me/api/portraits/women/3.jpg", rating: 5, review: "I've learned so much and gained confidence." },
  { name: "Liam Harris", avatar: "https://randomuser.me/api/portraits/men/4.jpg", rating: 5, review: "An incredible place to grow both physically and mentally." },
  { name: "Emma Wilson", avatar: "https://randomuser.me/api/portraits/women/4.jpg", rating: 4, review: "Supportive environment and excellent training." },
  { name: "Mason Clark", avatar: "https://randomuser.me/api/portraits/men/5.jpg", rating: 5, review: "A fantastic community and great place to learn martial arts." },
  { name: "Sophia Martinez", avatar: "https://randomuser.me/api/portraits/women/5.jpg", rating: 4, review: "Very professional and dedicated instructors." },
  { name: "James Walker", avatar: "https://randomuser.me/api/portraits/men/6.jpg", rating: 5, review: "A great experience! Highly recommend to anyone interested." },
  { name: "Amelia Hall", avatar: "https://randomuser.me/api/portraits/women/6.jpg", rating: 5, review: "I've never felt more at home in a dojo. Amazing people." },
  { name: "Ethan Young", avatar: "https://randomuser.me/api/portraits/men/7.jpg", rating: 4, review: "Excellent training and a friendly atmosphere." },
  { name: "Mia Hernandez", avatar: "https://randomuser.me/api/portraits/women/7.jpg", rating: 5, review: "Everyone here is like family. I love it!" },
  { name: "Noah King", avatar: "https://randomuser.me/api/portraits/men/8.jpg", rating: 4, review: "Well-organized and highly recommended for martial arts." },
  { name: "Isabella Wright", avatar: "https://randomuser.me/api/portraits/women/8.jpg", rating: 5, review: "An inspiring place to train and improve yourself." },
  { name: "Lucas Scott", avatar: "https://randomuser.me/api/portraits/men/9.jpg", rating: 5, review: "I've gained so much confidence and strength since joining." },
  { name: "Charlotte Adams", avatar: "https://randomuser.me/api/portraits/women/9.jpg", rating: 5, review: "The instructors are incredibly supportive and skilled." },
  { name: "Michael Robinson", avatar: "https://randomuser.me/api/portraits/men/10.jpg", rating: 5, review: "A fantastic place to learn and grow. Highly recommend." },
  { name: "Harper Carter", avatar: "https://randomuser.me/api/portraits/women/10.jpg", rating: 4, review: "Great environment and top-quality training!" },
];

const Reviews = () => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Container maxWidth="md" sx={{ py: 8, pt: 16, flex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
            What Our Students Say
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            Our dojo is not just about learning martial arts; it’s about becoming part of a family. See how our students have transformed.
          </Typography>
        </Box>

        {/* Reviews Grid */}
        <Grid container spacing={4} justifyContent="center">
          {reviews.map((review, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  boxShadow: 3,
                  borderRadius: 2,
                  p: 3,
                  backgroundColor: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  border: "1px solid #ddd",
                }}
              >
                <Avatar
                  src={review.avatar}
                  alt={review.name}
                  sx={{
                    width: 80,
                    height: 80,
                    margin: "auto",
                    mb: 2,
                    border: "3px solid #d32f2f",
                  }}
                />
                <CardContent sx={{ textAlign: "center" }}>
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
                      "& .MuiRating-iconFilled": {
                        color: "#d32f2f",
                      },
                    }}
                  />
                  <Typography variant="body2" color="textSecondary" paragraph>
                    "{review.review}"
                  </Typography>
                  <Box sx={{ position: "absolute", top: -15, left: -15 }}>
                    <IconButton sx={{ color: "#d32f2f", fontSize: 40 }}>
                      <Star />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer outside of the container to be full-width */}
      <Box sx={{ width: '100vw', bgcolor: 'background.paper', mt: 4 }}>
        <Container maxWidth={false} disableGutters>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default Reviews;
