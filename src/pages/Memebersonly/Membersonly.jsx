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
    avatar: "https://picsum.photos/150?random=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    rank: "Red Belt",
    avatar: "https://picsum.photos/150?random=2",
  },
  {
    id: 3,
    name: "Tom Brown",
    rank: "Blue Belt",
    avatar: "https://picsum.photos/150?random=3",
  },
  {
    id: 4,
    name: "Emily Davis",
    rank: "Green Belt",
    avatar: "https://picsum.photos/150?random=4",
  },
  {
    id: 5,
    name: "James Wilson",
    rank: "Black Belt",
    avatar: "https://picsum.photos/150?random=5",
  },
  {
    id: 6,
    name: "Olivia Johnson",
    rank: "Purple Belt",
    avatar: "https://picsum.photos/150?random=6",
  },
  {
    id: 7,
    name: "Liam Martinez",
    rank: "Brown Belt",
    avatar: "https://picsum.photos/150?random=7",
  },
  {
    id: 8,
    name: "Sophia Anderson",
    rank: "Yellow Belt",
    avatar: "https://picsum.photos/150?random=8",
  },
  {
    id: 9,
    name: "Mason Thompson",
    rank: "Orange Belt",
    avatar: "https://picsum.photos/150?random=9",
  },
  {
    id: 10,
    name: "Isabella Garcia",
    rank: "Red Belt",
    avatar: "https://picsum.photos/150?random=10",
  },
  {
    id: 11,
    name: "Ethan Harris",
    rank: "Black Belt",
    avatar: "https://picsum.photos/150?random=11",
  },
  {
    id: 12,
    name: "Ava Clark",
    rank: "Green Belt",
    avatar: "https://picsum.photos/150?random=12",
  },
  {
    id: 13,
    name: "Alexander Lewis",
    rank: "Blue Belt",
    avatar: "https://picsum.photos/150?random=13",
  },
  {
    id: 14,
    name: "Mia Walker",
    rank: "Purple Belt",
    avatar: "https://picsum.photos/150?random=14",
  },
  {
    id: 15,
    name: "Charlotte Hall",
    rank: "Yellow Belt",
    avatar: "https://picsum.photos/150?random=15",
  },
  {
    id: 16,
    name: "Lucas Young",
    rank: "Orange Belt",
    avatar: "https://picsum.photos/150?random=16",
  },
  {
    id: 17,
    name: "Amelia King",
    rank: "Black Belt",
    avatar: "https://picsum.photos/150?random=17",
  },
  {
    id: 18,
    name: "Benjamin Wright",
    rank: "Red Belt",
    avatar: "https://picsum.photos/150?random=18",
  },
  {
    id: 19,
    name: "Ella Scott",
    rank: "Green Belt",
    avatar: "https://picsum.photos/150?random=19",
  },
  {
    id: 20,
    name: "Henry Adams",
    rank: "Blue Belt",
    avatar: "https://picsum.photos/150?random=20",
  },
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
      image: "https://images.unsplash.com/photo-1605715946577-0d35a5b7e9a4",
      caption: "Martial Arts Training 1",
    },
    {
      id: 2,
      name: "Jane Smith",
      rank: "Red Belt",
      avatar: "https://via.placeholder.com/150",
      image: "https://images.unsplash.com/photo-1554477668-87ba6a9f6f3c",
      caption: "Martial Arts Training 2",
    },
    {
      id: 3,
      name: "Tom Brown",
      rank: "Blue Belt",
      avatar: "https://via.placeholder.com/150",
      image: "https://images.unsplash.com/photo-1524961251135-b013465f4604",
      caption: "Martial Arts Training 3",
    },
    {
      id: 4,
      name: "Emily Davis",
      rank: "Green Belt",
      avatar: "https://via.placeholder.com/150",
      image: "https://images.unsplash.com/photo-1613463758087-b91b0b8f4a50",
      caption: "Martial Arts Training 4",
    },
    {
      id: 5,
      name: "James Wilson",
      rank: "Black Belt",
      avatar: "https://via.placeholder.com/150",
      image: "https://images.unsplash.com/photo-1569870663-b0c31ac92ad3",
      caption: "Martial Arts Training 5",
    },
    {
      id: 6,
      name: "Olivia Johnson",
      rank: "Purple Belt",
      avatar: "https://via.placeholder.com/150",
      image: "https://images.unsplash.com/photo-1531247011961-4771074ed50b",
      caption: "Martial Arts Training 6",
    },
    {
      id: 7,
      name: "Liam Martinez",
      rank: "Brown Belt",
      avatar: "https://via.placeholder.com/150",
      image: "https://images.unsplash.com/photo-1519703103078-6f4017e0c20d",
      caption: "Martial Arts Training 7",
    },
    {
      id: 8,
      name: "Sophia Anderson",
      rank: "Yellow Belt",
      avatar: "https://via.placeholder.com/150",
      image: "https://images.unsplash.com/photo-1560277531-5bc06bfcf26a",
      caption: "Martial Arts Training 8",
    },
    {
      id: 9,
      name: "Mason Thompson",
      rank: "Orange Belt",
      avatar: "https://via.placeholder.com/150",
      image: "https://images.unsplash.com/photo-1568367944-9268e1a4ed17",
      caption: "Martial Arts Training 9",
    },
    {
      id: 10,
      name: "Isabella Garcia",
      rank: "Red Belt",
      avatar: "https://via.placeholder.com/150",
      image: "https://images.unsplash.com/photo-1554151223-0745f587c83b",
      caption: "Martial Arts Training 10",
    },
    {
      id: 11,
      name: "Ethan Harris",
      rank: "Black Belt",
      avatar: "https://via.placeholder.com/150",
      image: "https://images.unsplash.com/photo-1532491340972-e421568c7b8f",
      caption: "Martial Arts Training 11",
    },
    {
      id: 12,
      name: "Ava Clark",
      rank: "Green Belt",
      avatar: "https://via.placeholder.com/150",
      image: "https://images.unsplash.com/photo-1571115779178-56d5e8581408",
      caption: "Martial Arts Training 12",
    },
    {
      id: 13,
      name: "Alexander Lewis",
      rank: "Blue Belt",
      avatar: "https://via.placeholder.com/150",
      image: "https://images.unsplash.com/photo-1535003203641-3bb3c348bc80",
      caption: "Martial Arts Training 13",
    },
    {
      id: 14,
      name: "Mia Walker",
      rank: "Purple Belt",
      avatar: "https://via.placeholder.com/150",
      image: "https://images.unsplash.com/photo-1605066151483-d1c44d98f415",
      caption: "Martial Arts Training 14",
    },
    {
      id: 15,
      name: "Charlotte Hall",
      rank: "Yellow Belt",
      avatar: "https://via.placeholder.com/150",
      image: "https://images.unsplash.com/photo-1529638505781-d1c810a9ab0c",
      caption: "Martial Arts Training 15",
    },
    {
      id: 16,
      name: "Lucas Young",
      rank: "Orange Belt",
      avatar: "https://via.placeholder.com/150",
      image: "https://images.unsplash.com/photo-1603728924130-6ca68e1a0503",
      caption: "Martial Arts Training 16",
    },
    {
      id: 17,
      name: "Amelia King",
      rank: "Black Belt",
      avatar: "https://via.placeholder.com/150",
      image: "https://images.unsplash.com/photo-1585377392493-d1919f29b0a6",
      caption: "Martial Arts Training 17",
    },
    {
      id: 18,
      name: "Benjamin Wright",
      rank: "Red Belt",
      avatar: "https://via.placeholder.com/150",
      image: "https://images.unsplash.com/photo-1582725006976-54025a4db42b",
      caption: "Martial Arts Training 18",
    },
    {
      id: 19,
      name: "Ella Scott",
      rank: "Green Belt",
      avatar: "https://via.placeholder.com/150",
      image: "https://images.unsplash.com/photo-1603728924130-6ca68e1a0503",
      caption: "Martial Arts Training 19",
    },
    {
      id: 20,
      name: "Henry Adams",
      rank: "Blue Belt",
      avatar: "https://via.placeholder.com/150",
      image: "https://images.unsplash.com/photo-1594252155674-26c09a0c68c5",
      caption: "Martial Arts Training 20",
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
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" gutterBottom>
            Meet Our Team Members
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {members.map((member) => (
              <Grid item key={member.id} xs={12} sm={6} md={4} lg={3}>
                <StyledCard>
                  <Avatar
                    src={member.avatar}
                    alt={member.name}
                    sx={{ width: 56, height: 56, marginRight: 2 }}
                  />
                  <CardContent>
                    <Typography variant="h5">{member.name}</Typography>
                    <Typography color="textSecondary">{member.rank}</Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Video Placeholder */}
        <Box sx={{ my: 6 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Watch Our Training Video!!!
          </Typography>
          <Box
            sx={{
              height: 400,
              backgroundColor: "gray",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography color="white">Video Placeholder</Typography>
          </Box>
        </Box>

        {/* Image Placeholder */}
        <img src="https://static.wixstatic.com/media/a92c51_0d19ea9aa6444e6a8a08e0df691f61c6.jpg/v1/fill/w_540,h_384,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/a92c51_0d19ea9aa6444e6a8a08e0df691f61c6.jpg"/>
      </Container>
      <Box sx={{ width: "100vw", bgcolor: "#1c1c1c", mt: 4 }}>
        <Container maxWidth={false} disableGutters>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default Membersonly;
