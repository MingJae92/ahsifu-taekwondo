import React from "react";
import {
  TextField,
  Button,
  Container,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Signup = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // Ensure the container takes full height
        }}
      >
        {/* Main Content Section */}
        <Box
          sx={{
            flex: 1, // This makes sure the content takes the remaining space
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "background.paper",
            boxShadow: 3,
            p: 4,
            borderRadius: "12px",
            pb: 10, // Padding to avoid form overlap with footer
          }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* Signup Form Section */}
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h4" gutterBottom>
                  Sign Up
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={3}>
                  Create your account to get started.
                </Typography>

                <form noValidate>
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ mb: 3 }}
                  />

                  <Button variant="contained" fullWidth sx={{ mb: 2 }}>
                    Sign Up
                  </Button>

                  <Grid container justifyContent="center">
                    <Grid item>
                      <Typography variant="body2" color="text.secondary">
                        Already have an account? <a href="/login">Login</a>
                      </Typography>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Grid>

            {/* Image Placeholder Section */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  bgcolor: "grey.300",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 2,
                }}
              >
                <Typography variant="h6" color="text.secondary">
                  Image Placeholder
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Footer */}
        
          <Box sx={{ width: "100vw", bgcolor: "background.paper", mt: 4 }}>
            <Container maxWidth={false} disableGutters>
              <Footer />
            </Container>
          </Box>
        </Box>
    
    </>
  );
};

export default Signup;
