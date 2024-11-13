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
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function Login() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          flexGrow: 1,
          backgroundImage: "url(https://example.com/Dojang-background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          pt: { xs: 10, md: 12 }, // Added padding-top to create space between navbar and form
          pb: { xs: 8, md: 10 }, // Responsive bottom padding
          mx: { xs: 2, md: 4 }, // Apply equal margin outside the container
          marginTop: { xs: "70px", md: "100px" }, // Ensure the container is pushed down below the navbar
        }}
      >
        <Grid container spacing={2} sx={{ width: "100%", alignItems: "center" }}>
          {/* Left Side - Login Form */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              padding: { xs: 2, md: 4 }, // Equal padding for all screen sizes
            }}
          >
            <Card
              sx={{
                width: "100%",
                maxWidth: 500,
                p: 4,
                boxShadow: 5,
                borderRadius: 2,
                bgcolor: "rgba(0, 0, 0, 0.7)",
                color: "white",
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                  <SportsMartialArtsIcon sx={{ fontSize: 50, color: "#FF0000" }} />
                </Box>

                <Typography variant="h4" component="h1" fontWeight="700" gutterBottom sx={{ color: "#FF0000" }}>
                  Enter the Dojang
                </Typography>
                <Typography variant="body2" color="grey.300" sx={{ mb: 3 }}>
                  Train your mind and body. Log in to continue your journey.
                </Typography>

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
                      borderColor: "#FF0000",
                      color: "#FF0000",
                    },
                  }}
                >
                  Log in with Martial Arts ID
                </Button>

                <Divider sx={{ my: 3, borderColor: "grey.500" }}>or</Divider>

                <Box component="form" noValidate sx={{ mb: 2 }}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ mb: 2, bgcolor: "white", borderRadius: 1 }}
                    InputLabelProps={{ shrink: false }}
                    InputProps={{
                      sx: { color: "black", padding: "12px 14px", height: "56px" },
                      placeholder: "Email",
                    }}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    required
                    sx={{ mb: 1, bgcolor: "white", borderRadius: 1 }}
                    InputLabelProps={{ shrink: false }}
                    InputProps={{
                      sx: { color: "black", padding: "12px 14px", height: "56px" },
                      placeholder: "Password",
                    }}
                  />
                  <Box sx={{ textAlign: "right", mb: 2 }}>
                    <Link href="#" variant="body2" sx={{ color: "#FF0000" }}>
                      Forgot your training password?
                    </Link>
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    py: 1.2,
                    bgcolor: "#FF0000",
                    color: "white",
                    "&:hover": { bgcolor: "#D40000" },
                    mb: 2,
                  }}
                >
                  Enter the Dojang
                </Button>

                <Typography variant="body2" color="grey.300" align="center">
                  New to the Dojang?{" "}
                  <Link href="#" sx={{ color: "#FF0000" }}>
                    Begin your training
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Fixed Footer */}
      <Box sx={{ width: "100vw", bgcolor: "background.paper", mt: 4 }}>
        <Container maxWidth={false} disableGutters>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
}

export default Login;
