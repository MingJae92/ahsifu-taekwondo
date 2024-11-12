import React from 'react';
import { TextField, Button, Container, Box, Typography, Grid } from '@mui/material';

const Signup = () => {
  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: 'background.paper',
        borderRadius: '12px',
        boxShadow: 3,
        p: 4,
      }}
    >
      <Box sx={{ mb: 3, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Create your account to get started.
        </Typography>
      </Box>

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
    </Container>
  );
};

export default Signup;
