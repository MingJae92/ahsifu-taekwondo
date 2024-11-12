import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Avatar,
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
        maxWidth="md"
        sx={{
          flex: "1 0 auto",
          display: "flex",
          justifyContent: "center",
          mt: 8, // Margin-top for space between Navbar and form
        }}
      >
        <Box
          sx={{
            backgroundColor: "#121212",
            color: "#fff",
            borderRadius: 3,
            p: 5,
            py: 8, // Equal top and bottom padding
            boxShadow: "0px 6px 24px rgba(0,0,0,0.6)",
            maxWidth: 600,
            textAlign: "center",
          }}
        >
          {/* Icon and Title */}
          <Avatar
            sx={{
              bgcolor: "#d32f2f",
              width: 56,
              height: 56,
              m: "0 auto 1rem",
            }}
          >
            <SportsMartialArtsIcon fontSize="large" />
          </Avatar>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ fontFamily: "serif", mb: 1 }}
          >
            Get In Touch
          </Typography>
          <Typography sx={{ color: "#bbbbbb", mb: 3 }}>
            Reach out for any questions about our training, class schedules, or
            how to join our community.
          </Typography>

          {/* Form Fields */}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
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
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
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
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
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
              backgroundColor: "#d32f2f",
              "&:hover": { backgroundColor: "#b71c1c" },
              p: 1.5,
              fontWeight: "bold",
            }}
          >
            Send Message
          </Button>
        </Box>
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
