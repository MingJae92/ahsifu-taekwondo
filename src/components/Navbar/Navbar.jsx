import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{ width: "100%", top: 0 }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 5 } }}>
        {/* Logo */}
        <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
          DENTON
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {["Home", "About", "Services", "Our Work", "Blog", "Contact"].map(
            (item) => (
              <Button
                key={item}
                color="inherit"
                sx={{ fontSize: "1rem", textTransform: "none" }}
              >
                {item}
              </Button>
            )
          )}
        </Box>

        {/* Sign Up and Log In Buttons */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button variant="outlined" color="primary" sx={{ textTransform: "none" }}>
            Log In
          </Button>
          <Button variant="contained" color="primary" sx={{ textTransform: "none" }}>
            Sign Up
          </Button>
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton edge="start" color="inherit" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            {["Home", "About", "Services", "Our Work", "Blog", "Contact"].map((item) => (
              <MenuItem key={item} onClick={handleMenuClose}>
                {item}
              </MenuItem>
            ))}
            <Divider />
            {/* Mobile Log In and Sign Up Options */}
            <MenuItem onClick={handleMenuClose}>Log In</MenuItem>
            <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
      <Divider />
    </AppBar>
  );
}

export default Navbar;
