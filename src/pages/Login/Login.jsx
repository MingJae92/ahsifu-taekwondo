import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Card,
  CardContent,
  Divider,
  Grid,
} from "@mui/material";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts"; // Martial arts icon
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function Login() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Navbar stays at the top */}
      <Navbar />

      {/* Main Content */}
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column", // Stack the form vertically
          flexGrow: 1, // Take the remaining space, ensuring it doesn't overlap with the footer
          backgroundImage: "url(https://example.com/Dojang-background.jpg)", // replace with actual Dojang image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingBottom: "60px", // Make space for the fixed footer
        }}
      >
        <Grid container spacing={2} sx={{ width: "100%" }}>
          {/* Left Side - Login Form */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              sx={{
                width: "100%",
                p: 4,
                boxShadow: 5,
                borderRadius: 2,
                bgcolor: "rgba(0, 0, 0, 0.7)", // semi-transparent dark background
                color: "white", // white text for contrast
                display: "flex",
                flexDirection: "column", // Ensure form elements stack properly
                justifyContent: "space-between", // Space out content to prevent overlap
              }}
            >
              <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                {/* Martial Arts Icon */}
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  <SportsMartialArtsIcon
                    sx={{ fontSize: 50, color: "#FF0000" }}
                  />
                </Box>

                {/* Title */}
                <Typography
                  variant="h4"
                  component="h1"
                  fontWeight="700"
                  gutterBottom
                  sx={{ color: "#FF0000" }}
                >
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
                    textTransform: "none",
                    mb: 2,
                    borderColor: "grey.400",
                    color: "white",
                    "&:hover": {
                      borderColor: "#FF0000", // use hex red color
                      color: "#FF0000",
                    },
                  }}
                >
                  Log in with Martial Arts ID
                </Button>

                {/* Divider */}
                <Divider sx={{ my: 3, borderColor: "grey.500" }}>or</Divider>

                {/* Email and Password fields */}
                <Box component="form" noValidate sx={{ mb: 2 }}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ mb: 2, bgcolor: "white", borderRadius: 1 }}
                    InputLabelProps={{
                      shrink: false, // Prevent label from floating
                    }}
                    InputProps={{
                      sx: {
                        color: "black",
                        padding: "12px 14px",
                        height: "56px", // Uniform height for inputs
                      },
                      placeholder: "Email", // This will show inside the input as a placeholder
                    }}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ mb: 1, bgcolor: "white", borderRadius: 1 }}
                    InputLabelProps={{
                      shrink: false, // Prevent label from floating
                    }}
                    InputProps={{
                      sx: {
                        color: "black",
                        padding: "12px 14px",
                        height: "56px", // Uniform height for inputs
                      },
                      placeholder: "Password", // This will show inside the input as a placeholder
                    }}
                  />
                  <Box sx={{ textAlign: "right", mb: 2 }}>
                    <Link href="#" variant="body2" sx={{ color: "#FF0000" }}>
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
                    textTransform: "none",
                    fontWeight: 600,
                    py: 1.2,
                    bgcolor: "#FF0000", // use hex red color
                    color: "white",
                    "&:hover": {
                      bgcolor: "#D40000", // darker red on hover
                    },
                    mb: 2,
                  }}
                >
                  Enter the Dojang
                </Button>

                {/* Sign Up Link */}
                <Typography variant="body2" color="grey.300" align="center">
                  New to the Dojang?{" "}
                  <Link href="#" sx={{ color: "#FF0000" }}>
                    Begin your training
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Side - Image Placeholder */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: "url(https://example.com/your-image.jpg)", // Placeholder image URL
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "100vh",
            }}
          />
        </Grid>
      </Container>

      {/* Fixed Footer */}
      <Box
        sx={{
          position: "relative",
          bottom: 0,
          left: 0,
          width: "100%",
          bgcolor: "background.paper",
          zIndex: 1, // To make sure the footer is above other content
        }}
      >
         <Box sx={{ width: "100vw", bgcolor: "background.paper", mt: 4 }}>
          <Container maxWidth={false} disableGutters>
            <Footer />
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
