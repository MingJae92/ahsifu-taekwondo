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
import { motion } from "framer-motion"; // Import Framer Motion

const reviews = [
  { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/1.jpg", rating: 5, review: "Joining this dojo has been life-changing! The instructors are top-notch.", trainingDuration: "2 years" },
  { name: "Jane Smith", avatar: "https://randomuser.me/api/portraits/women/1.jpg", rating: 4, review: "A great place to learn and grow. I love the community here.", trainingDuration: "1 year" },
  { name: "Sam Lee", avatar: "https://randomuser.me/api/portraits/men/2.jpg", rating: 5, review: "The best dojo I've ever been to. Highly recommended!", trainingDuration: "3 years" },
  { name: "Ava Brown", avatar: "https://randomuser.me/api/portraits/women/2.jpg", rating: 5, review: "Amazing instructors who really care about their students.", trainingDuration: "2 years" },
  { name: "Chris Green", avatar: "https://randomuser.me/api/portraits/men/3.jpg", rating: 4, review: "A wonderful experience every time I come here!", trainingDuration: "1 year" },
  { name: "Olivia White", avatar: "https://randomuser.me/api/portraits/women/3.jpg", rating: 5, review: "I've learned so much and gained confidence.", trainingDuration: "2.5 years" },
  { name: "Liam Harris", avatar: "https://randomuser.me/api/portraits/men/4.jpg", rating: 5, review: "An incredible place to grow both physically and mentally.", trainingDuration: "4 years" },
  { name: "Emma Wilson", avatar: "https://randomuser.me/api/portraits/women/4.jpg", rating: 4, review: "Supportive environment and excellent training.", trainingDuration: "1.5 years" },
  { name: "Mason Clark", avatar: "https://randomuser.me/api/portraits/men/5.jpg", rating: 5, review: "A fantastic community and great place to learn martial arts.", trainingDuration: "2 years" },
  { name: "Sophia Martinez", avatar: "https://randomuser.me/api/portraits/women/5.jpg", rating: 4, review: "Very professional and dedicated instructors.", trainingDuration: "1 year" },
  { name: "James Walker", avatar: "https://randomuser.me/api/portraits/men/6.jpg", rating: 5, review: "A great experience! Highly recommend to anyone interested.", trainingDuration: "3 years" },
  { name: "Amelia Hall", avatar: "https://randomuser.me/api/portraits/women/6.jpg", rating: 5, review: "I've never felt more at home in a dojo. Amazing people.", trainingDuration: "2 years" },
  { name: "Ethan Young", avatar: "https://randomuser.me/api/portraits/men/7.jpg", rating: 4, review: "Excellent training and a friendly atmosphere.", trainingDuration: "1 year" },
  { name: "Mia Hernandez", avatar: "https://randomuser.me/api/portraits/women/7.jpg", rating: 5, review: "Everyone here is like family. I love it!", trainingDuration: "2 years" },
  { name: "Noah King", avatar: "https://randomuser.me/api/portraits/men/8.jpg", rating: 4, review: "Well-organized and highly recommended for martial arts.", trainingDuration: "2 years" },
  { name: "Isabella Wright", avatar: "https://randomuser.me/api/portraits/women/8.jpg", rating: 5, review: "An inspiring place to train and improve yourself.", trainingDuration: "3 years" },
  { name: "Lucas Scott", avatar: "https://randomuser.me/api/portraits/men/9.jpg", rating: 5, review: "I've gained so much confidence and strength since joining.", trainingDuration: "4 years" },
  { name: "Charlotte Adams", avatar: "https://randomuser.me/api/portraits/women/9.jpg", rating: 5, review: "The instructors are incredibly supportive and skilled.", trainingDuration: "2.5 years" },
  { name: "Michael Robinson", avatar: "https://randomuser.me/api/portraits/men/10.jpg", rating: 5, review: "A fantastic place to learn and grow. Highly recommend.", trainingDuration: "2 years" },
  { name: "Harper Carter", avatar: "https://randomuser.me/api/portraits/women/10.jpg", rating: 4, review: "Great environment and top-quality training!", trainingDuration: "1.5 years" },
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
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              >
                <Card
                  sx={{
                    boxShadow: 3,
                    borderRadius: "16px", // Rounded corners
                    height: 300, // Fixed height
                    width: "100%", // Ensure width is 100% of the grid item
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    overflow: "hidden", // Prevents overflow
                    textAlign: "center",
                    position: "relative", // Allows absolute positioning of the star
                    "&:hover": {
                      transform: "scale(1.05)", // Scale up on hover
                      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)", // Add a shadow on hover
                    },
                  }}
                  component={motion.div}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Smooth hover scale animation
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
                  <CardContent sx={{ flex: 1 }}>
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
                    <Typography variant="body2" color="textSecondary" paragraph>
                      Training Duration: {review.trainingDuration}
                    </Typography>
                  </CardContent>

                  {/* Star Icon on top-left corner */}
                  <Box sx={{ position: "absolute", top: -15, left: -15 }}>
                    <IconButton sx={{ color: "#d32f2f", fontSize: 40 }}>
                      <Star />
                    </IconButton>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ width: '100vw', bgcolor: 'background.paper', mt: 4 }}>
        <Container maxWidth={false} disableGutters>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default Reviews;
