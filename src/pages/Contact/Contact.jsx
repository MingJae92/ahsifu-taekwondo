import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Avatar,
  Slide,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Contact Form Section */}
      <Container
        maxWidth="lg"
        sx={{
          flex: "1 0 auto",
          display: "flex",
          justifyContent: "center",
          pt: 10,
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Form Section */}
          <Grid item xs={12} md={6} sx={{ mt: 5, mb: 5 }}>
            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
              <Box
                sx={{
                  backgroundColor: "#181818",
                  color: "#fff",
                  borderRadius: 4,
                  p: 6,
                  py: 7,
                  boxShadow: "0px 8px 30px rgba(0,0,0,0.7)",
                  textAlign: "center",
                }}
              >
                {/* Icon and Title */}
                <Avatar
                  sx={{
                    bgcolor: "#e53935",
                    width: 64,
                    height: 64,
                    m: "0 auto 1.2rem",
                  }}
                >
                  <SportsMartialArtsIcon fontSize="large" />
                </Avatar>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{ fontFamily: "serif", mb: 1 }}
                >
                  Get In Touch
                </Typography>
                <Typography sx={{ color: "#bbbbbb", mb: 3 }}>
                  We're here to answer your questions about training, schedules, and
                  joining our community.
                </Typography>

                {/* Form Fields */}
                <Grid container spacing={3}>
                  {["Full Name", "Email Address", "Phone Number"].map((label, index) => (
                    <Grid item xs={12} key={index}>
                      <TextField
                        fullWidth
                        label={label}
                        variant="filled"
                        InputProps={{
                          style: {
                            backgroundColor: "#2a2a2a",
                            color: "#fff",
                            borderRadius: 4,
                          },
                        }}
                        InputLabelProps={{ style: { color: "#aaaaaa" } }}
                      />
                    </Grid>
                  ))}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      variant="filled"
                      multiline
                      rows={4}
                      InputProps={{
                        style: {
                          backgroundColor: "#2a2a2a",
                          color: "#fff",
                          borderRadius: 4,
                        },
                      }}
                      InputLabelProps={{ style: { color: "#aaaaaa" } }}
                    />
                  </Grid>
                </Grid>

                {/* Submit Button */}
                <Button
                  variant="contained"
                  fullWidth
                  endIcon={<SendIcon />}
                  sx={{
                    mt: 4,
                    backgroundColor: "#e53935",
                    "&:hover": { backgroundColor: "#c62828" },
                    p: 1.5,
                    fontWeight: "bold",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                    transform: "scale(1)",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Slide>
          </Grid>

          {/* Image Placeholder */}
          <Grid item xs={12} md={6} sx={{ mt: 5, mb: 5 }}>
            <Box
              sx={{
                backgroundColor: "#2a2a2a",
                height: "100%",
                borderRadius: 4,
                boxShadow: "0px 8px 30px rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{
                  fontFamily: "serif",
                  color: "#bbbbbb",
                }}
              >
                Image Placeholder
              </Typography>
            </Box>
          </Grid>
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

export default Contact;
