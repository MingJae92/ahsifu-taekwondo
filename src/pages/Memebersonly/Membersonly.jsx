import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Avatar,
  Box,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Carousel from "react-material-ui-carousel";

// Sample member data
const members = [
  {
    id: 1,
    name: "John Doe",
    rank: "Black Belt",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    rank: "Red Belt",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Tom Brown",
    rank: "Blue Belt",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Emily Davis",
    rank: "Green Belt",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "James Wilson",
    rank: "Black Belt",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Olivia Johnson",
    rank: "Purple Belt",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Liam Martinez",
    rank: "Brown Belt",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Sophia Anderson",
    rank: "Yellow Belt",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "Mason Thompson",
    rank: "Orange Belt",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Isabella Garcia",
    rank: "Red Belt",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 11,
    name: "Ethan Harris",
    rank: "Black Belt",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    name: "Ava Clark",
    rank: "Green Belt",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 13,
    name: "Alexander Lewis",
    rank: "Blue Belt",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 14,
    name: "Mia Walker",
    rank: "Purple Belt",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 15,
    name: "Charlotte Hall",
    rank: "Yellow Belt",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 16,
    name: "Lucas Young",
    rank: "Orange Belt",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 17,
    name: "Amelia King",
    rank: "Black Belt",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 18,
    name: "Benjamin Wright",
    rank: "Red Belt",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 19,
    name: "Ella Scott",
    rank: "Green Belt",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 20,
    name: "Henry Adams",
    rank: "Blue Belt",
    avatar: "https://via.placeholder.com/150",
  },
  {
    id: 21,
    name: "Ah Sifu",
    rank: "Black Belt 4th Dan!!!",
    avatar: "https://via.placeholder.com/150",
  },
  // Add more members as needed
];

// Hero section with background image
const HeroSection = styled(Box)(({ theme }) => ({
  height: "50vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: "url(https://via.placeholder.com/1200x600)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: theme.palette.common.white,
}));

// Styled card for team members
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
}));

const Membersonly = () => {
  const carouselItems = [
    {
      id: 1,
      name: "John Doe",
      rank: "Black Belt",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Jane Smith",
      rank: "Red Belt",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Tom Brown",
      rank: "Blue Belt",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Emily Davis",
      rank: "Green Belt",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "James Wilson",
      rank: "Black Belt",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Olivia Johnson",
      rank: "Purple Belt",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Liam Martinez",
      rank: "Brown Belt",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Sophia Anderson",
      rank: "Yellow Belt",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      name: "Mason Thompson",
      rank: "Orange Belt",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      name: "Isabella Garcia",
      rank: "Red Belt",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 11,
      name: "Ethan Harris",
      rank: "Black Belt",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 12,
      name: "Ava Clark",
      rank: "Green Belt",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 13,
      name: "Alexander Lewis",
      rank: "Blue Belt",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 14,
      name: "Mia Walker",
      rank: "Purple Belt",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 15,
      name: "Charlotte Hall",
      rank: "Yellow Belt",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 16,
      name: "Lucas Young",
      rank: "Orange Belt",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 17,
      name: "Amelia King",
      rank: "Black Belt",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 18,
      name: "Benjamin Wright",
      rank: "Red Belt",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 19,
      name: "Ella Scott",
      rank: "Green Belt",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 20,
      name: "Henry Adams",
      rank: "Blue Belt",
      avatar: "https://via.placeholder.com/150",
    },
  ];

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />

      {/* Hero Section */}
      <HeroSection>
        <Typography variant="h2" align="center">
          Welcome to Our Martial Arts Community
        </Typography>
      </HeroSection>

      {/* Carousel Section */}
      <Container sx={{ py: 4 }}>
        <Carousel>
          {carouselItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                height: "30vh",
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                color="common.white"
                align="center"
                sx={{ bgcolor: "rgba(0, 0, 0, 0.6)", p: 2 }}
              >
                {item.caption}
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Container>

      {/* Main Content - Members Section */}
      <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
        <Box textAlign="center" my={4}>
          <Typography variant="h3" component="h1" gutterBottom>
            Martial Arts Members
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Meet the team and their respective ranks
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {members.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <StyledCard>
                <CardMedia>
                  <Avatar
                    src={member.avatar}
                    alt={member.name}
                    sx={{ width: 80, height: 80 }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rank: {member.rank}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ width: "100vw", bgcolor: "background.paper", mt: 4 }}>
        <Container maxWidth={false} disableGutters>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default Membersonly;
