import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Avatar,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

// Sample member data with 20 entries
const members = [
  { id: 1, name: 'John Doe', rank: 'Black Belt', avatar: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Jane Smith', rank: 'Brown Belt', avatar: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Jake Lee', rank: 'Green Belt', avatar: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Emily Davis', rank: 'Purple Belt', avatar: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Michael Brown', rank: 'Blue Belt', avatar: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Sara White', rank: 'Yellow Belt', avatar: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Chris Green', rank: 'Orange Belt', avatar: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Anna Black', rank: 'Black Belt', avatar: 'https://via.placeholder.com/150' },
  { id: 9, name: 'Tom Wilson', rank: 'Brown Belt', avatar: 'https://via.placeholder.com/150' },
  { id: 10, name: 'Sophia Kim', rank: 'Green Belt', avatar: 'https://via.placeholder.com/150' },
  { id: 11, name: 'David Martinez', rank: 'Purple Belt', avatar: 'https://via.placeholder.com/150' },
  { id: 12, name: 'Laura Clark', rank: 'Blue Belt', avatar: 'https://via.placeholder.com/150' },
  { id: 13, name: 'James King', rank: 'Yellow Belt', avatar: 'https://via.placeholder.com/150' },
  { id: 14, name: 'Lisa Adams', rank: 'Orange Belt', avatar: 'https://via.placeholder.com/150' },
  { id: 15, name: 'Mark Scott', rank: 'Black Belt', avatar: 'https://via.placeholder.com/150' },
  { id: 16, name: 'Paula Young', rank: 'Brown Belt', avatar: 'https://via.placeholder.com/150' },
  { id: 17, name: 'Brian Thompson', rank: 'Green Belt', avatar: 'https://via.placeholder.com/150' },
  { id: 18, name: 'Jessica Turner', rank: 'Purple Belt', avatar: 'https://via.placeholder.com/150' },
  { id: 19, name: 'Henry Perez', rank: 'Blue Belt', avatar: 'https://via.placeholder.com/150' },
  { id: 20, name: 'Olivia Stewart', rank: 'Yellow Belt', avatar: 'https://via.placeholder.com/150' },
];

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
}));

const Membersonly = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Container
        component="main"
        sx={{ flexGrow: 1, padding: 0 }}  // Remove padding to avoid gaps
      >
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
                  <Avatar src={member.avatar} alt={member.name} sx={{ width: 80, height: 80 }} />
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
      {/* Full-width fixed Footer, flush with the bottom */}
      <Box
        component="footer"
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          py: 2,
          position: 'fixed',
          bottom: 0,
          left: 0,
          zIndex: 1300,  // Ensures it’s above other content
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default Membersonly;
