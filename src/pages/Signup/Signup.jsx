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
          justifyContent: "center", // Vertically centers
          alignItems: "center", // Horizontally centers
          minHeight: "100vh", // Takes up full viewport height
          pt: 15,
          pb: 4, // Equal padding at the bottom
          bgcolor: "#1c1c1c",
        }}
      >
        {/* Main Content Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "#ffffff",
            boxShadow: 5,
            p: 6,
            borderRadius: "12px",
            width: "100%",
            maxWidth: "md", // Limits the overall width for centering effect
            mx: "auto", // Center the box horizontally
            minHeight: "400px", // Ensures the box has a minimum height to stay centered
          }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* Signup Form Section */}
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "center", p: 3, pt: 5 }}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    color: "#d32f2f",
                    fontFamily: "'Roboto Condensed', sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  Sign Up
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  mb={3}
                  sx={{ fontFamily: "'Roboto Slab', serif" }}
                >
                  Begin your journey to mastery.
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

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mb: 2,
                      bgcolor: "#d32f2f",
                      "&:hover": {
                        bgcolor: "#b71c1c",
                      },
                    }}
                  >
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
              {/* Image or additional content can be placed here */}
            </Grid>
          </Grid>
        </Box>

        {/* Footer */}
        <Box sx={{ width: "100vw", bgcolor: "#1c1c1c", mt: 4 }}>
          <Container maxWidth={false} disableGutters>
            <Footer />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Signup;
