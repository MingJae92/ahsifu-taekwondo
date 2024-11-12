import React from 'react';
import { Container, Box, Typography, TextField, Button, Link, Card, CardContent, Divider, Grid } from '@mui/material';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts'; // Martial arts icon

function Login() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url(https://example.com/Dojang-background.jpg)', // replace with actual Dojang image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Grid container spacing={0} sx={{ height: '100%' }}>
        {/* Left Side - Login Form */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Card
            sx={{
              width: '100%',
              p: 4,
              boxShadow: 5,
              borderRadius: 2,
              bgcolor: 'rgba(0, 0, 0, 0.7)', // semi-transparent dark background
              color: 'white', // white text for contrast
              display: 'flex',
              flexDirection: 'column', // Ensure form elements stack properly
              justifyContent: 'space-between', // Space out content to prevent overlap
            }}
          >
            <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
              {/* Martial Arts Icon */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                <SportsMartialArtsIcon sx={{ fontSize: 50, color: '#FF0000' }} />
              </Box>

              {/* Title */}
              <Typography variant="h4" component="h1" fontWeight="700" gutterBottom sx={{ color: '#FF0000' }}>
                Enter the Dojang
              </Typography>
              <Typography variant="body2" color="grey.300" sx={{ mb: 3 }}>
                Train your mind and body. Log in to continue your journey.
              </Typography>

              {/* Martial Arts Social Login Button */}
              <Button
                variant="outlined"
                fullWidth
                startIcon={<SportsMartialArtsIcon />}
                sx={{
                  textTransform: 'none',
                  mb: 2,
                  borderColor: 'grey.400',
                  color: 'white',
                  '&:hover': {
                    borderColor: '#FF0000', // use hex red color
                    color: '#FF0000',
                  },
                }}
              >
                Log in with Martial Arts ID
              </Button>

              {/* Divider */}
              <Divider sx={{ my: 3, borderColor: 'grey.500' }}>or</Divider>

              {/* Email and Password fields */}
              <Box component="form" noValidate sx={{ mb: 2 }}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ mb: 2, bgcolor: 'white', borderRadius: 1 }}
                  InputLabelProps={{
                    shrink: false, // Prevent label from floating
                  }}
                  InputProps={{
                    sx: { 
                      color: 'black', 
                      padding: '12px 14px', 
                      height: '56px', // Uniform height for inputs
                    },
                    placeholder: 'Email', // This will show inside the input as a placeholder
                  }}
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ mb: 1, bgcolor: 'white', borderRadius: 1 }}
                  InputLabelProps={{
                    shrink: false, // Prevent label from floating
                  }}
                  InputProps={{
                    sx: { 
                      color: 'black', 
                      padding: '12px 14px', 
                      height: '56px', // Uniform height for inputs
                    },
                    placeholder: 'Password', // This will show inside the input as a placeholder
                  }}
                />
                <Box sx={{ textAlign: 'right', mb: 2 }}>
                  <Link href="#" variant="body2" sx={{ color: '#FF0000' }}>
                    Forgot your training password?
                  </Link>
                </Box>
              </Box>

              {/* Login Button */}
              <Button
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  textTransform: 'none',
                  fontWeight: 600,
                  py: 1.2,
                  bgcolor: '#FF0000', // use hex red color
                  color: 'white',
                  '&:hover': {
                    bgcolor: '#D40000', // darker red on hover
                  },
                  mb: 2,
                }}
              >
                Enter the Dojang
              </Button>

              {/* Sign Up Link */}
              <Typography variant="body2" color="grey.300" align="center">
                New to the Dojang?{' '}
                <Link href="#" sx={{ color: '#FF0000' }}>
                  Begin your training
                </Link>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Side - Video Placeholder */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <Box
            sx={{
              width: '80%',
              height: '80%',
              backgroundColor: 'black',
              borderRadius: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <video
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              style={{
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            >
              <source src="https://www.example.com/path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
