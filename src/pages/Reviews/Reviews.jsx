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

// Martial Arts themed reviews
const reviews = [
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
    review:
      "Joining this dojo has been life-changing! The instructors are top-notch.",
    trainingDuration: "2 years",
  },
  {
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 4,
    review: "A great place to learn and grow. I love the community here.",
    trainingDuration: "1 year",
  },
  {
    name: "Sam Lee",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    review: "The best dojo I've ever been to. Highly recommended!",
    trainingDuration: "3 years",
  },
  {
    name: "Ava Brown",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
    review: "Amazing instructors who really care about their students.",
    trainingDuration: "2 years",
  },
  {
    name: "Michael Johnson",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    rating: 4,
    review: "Great dojo with a strong focus on discipline.",
    trainingDuration: "1.5 years",
  },
  {
    name: "Lily Chen",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 4,
    review: "I feel like I'm improving every day here!",
    trainingDuration: "6 months",
  },
  {
    name: "David Kim",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 5,
    review: "Excellent training, friendly atmosphere.",
    trainingDuration: "2.5 years",
  },
  {
    name: "Sophia Lee",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    rating: 5,
    review: "A family-friendly dojo that encourages growth.",
    trainingDuration: "3 years",
  },
  {
    name: "Ethan Clark",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    rating: 4,
    review: "The dojo teaches discipline and respect, I appreciate that.",
    trainingDuration: "1 year",
  },
  {
    name: "Olivia Wilson",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    rating: 5,
    review: "Every session is a learning experience. Truly a fantastic place.",
    trainingDuration: "2 years",
  },
  {
    name: "James Moore",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    rating: 4,
    review: "Great facility and equipment. The classes are well-organized.",
    trainingDuration: "1 year",
  },
  {
    name: "Charlotte Harris",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    rating: 5,
    review: "I love the sense of community and respect in this dojo.",
    trainingDuration: "1.5 years",
  },
  {
    name: "Liam Young",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    rating: 5,
    review: "I’ve learned so much here. It’s the best decision I made!",
    trainingDuration: "3 years",
  },
  {
    name: "Emma Walker",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    rating: 5,
    review: "The instructors are very professional and patient with beginners.",
    trainingDuration: "2 years",
  },
  {
    name: "Lucas Allen",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    rating: 4,
    review: "I have learned a lot and improved my skills. It’s a solid dojo.",
    trainingDuration: "1 year",
  },
  {
    name: "Mia Adams",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    rating: 5,
    review:
      "I feel more confident and strong after each class. Great place to train.",
    trainingDuration: "2 years",
  },
  {
    name: "William Scott",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    rating: 5,
    review:
      "The training is top-notch. My fitness and skills have improved drastically.",
    trainingDuration: "3 years",
  },
  {
    name: "Chloe King",
    avatar: "https://randomuser.me/api/portraits/women/9.jpg",
    rating: 4,
    review:
      "I love the atmosphere of this dojo. It’s a perfect balance of discipline and fun.",
    trainingDuration: "1.5 years",
  },
  {
    name: "Benjamin Wright",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    rating: 5,
    review: "Every session helps me push my limits. The instructors are great.",
    trainingDuration: "2 years",
  },
  {
    name: "Amelia Lopez",
    avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    rating: 4,
    review:
      "Great learning environment with challenging yet rewarding training.",
    trainingDuration: "1 year",
  },
  {
    name: "Henry Davis",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: 5,
    review:
      "I’ve gained a lot of confidence here. The instructors push you to be your best.",
    trainingDuration: "2 years",
  },
];

const Reviews = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background:
          "url('https://your-dojo-image-link.com/dojo-background.jpg') no-repeat center center fixed", // Add a martial arts dojo background
        backgroundSize: "cover",
        color: "#fff",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Container maxWidth="md" sx={{ py: 8, pt: 16, flex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color="secondary" // You can use "secondary" for a martial arts color like red or gold
            gutterBottom
            sx={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "3rem",
              color: "#D32F2F", // Red color typically associated with martial arts
              textTransform: "uppercase", // Adding a bold, impactful look
              letterSpacing: "0.05rem", // Slight spacing for a stronger feel
            }}
          >
            What Our Students Say
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            paragraph
            sx={{
              fontSize: "1.2rem",
              fontFamily: "'Roboto', sans-serif",
              lineHeight: "1.6",
            }}
          >
            Our dojang is not just about learning martial arts; it’s about
            becoming part of a family. See how our students have transformed.
          </Typography>
        </Box>

        {/* Reviews Grid */}
        <Grid container spacing={4} justifyContent="center">
          {reviews.map((review, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <Card
                  sx={{
                    boxShadow: 5,
                    borderRadius: "16px", // Rounded corners
                    height: 320, // Fixed height for uniformity
                    width: "100%", // Ensure width is 100% of the grid item
                    backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark, transparent background for dojo vibe
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "16px", // Equal padding around content
                  }}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <Avatar
                      alt={review.name}
                      src={review.avatar}
                      sx={{
                        width: 64,
                        height: 64,
                        mx: "auto",
                        mb: 2,
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        color: "#FFD700", // Gold color to make the name pop
                      }}
                    >
                      {review.name}
                    </Typography>
                    <Rating
                      value={review.rating}
                      readOnly
                      precision={0.5}
                      icon={<Star sx={{ color: "#FFD700" }} />}
                      sx={{ mb: 2 }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "'Roboto', sans-serif",
                        color: "#fff",
                        mb: 2,
                        fontSize: "0.9rem",
                      }}
                    >
                      {review.review}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: "'Roboto', sans-serif",
                        color: "#B0BEC5",
                        fontSize: "0.8rem",
                      }}
                    >
                      Training for {review.trainingDuration}
                    </Typography>
                  </CardContent>
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
