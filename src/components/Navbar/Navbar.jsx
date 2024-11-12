import React, { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu"; // Include the menu icon for mobile

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Scroll listener to toggle Navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // User is scrolling down
      } else {
        setIsVisible(true); // User is scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <AppBar
      position="fixed"
      color="primary"
      elevation={4}
      sx={{ width: "100%", top: 0, bgcolor: "#1C1C1C", display: isVisible ? 'block' : 'none' }}
    >
      <Toolbar
        sx={{ justifyContent: "space-between", px: { xs: 3, md: 6 }, py: 2 }}
      >
        {/* Logo with Martial Arts Icon */}
        <Box display="flex" alignItems="center" gap={1}>
          <Typography
            variant="h6"
            color="#fbc02d"
            sx={{ fontWeight: "bold", fontFamily: "'Roboto', sans-serif" }}
          >
            AH SIFU, TAEKWONDO
          </Typography>
        </Box>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          <Link to="/" style={{ color: "#fbc02d", textDecoration: "none" }}>
            Home
          </Link>
          <Link
            to="/aboutus"
            style={{ color: "#fbc02d", textDecoration: "none" }}
          >
            About Us
          </Link>
          <Link
            to="/reviews"
            style={{ color: "#fbc02d", textDecoration: "none" }}
          >
            Reviews
          </Link>
          <Link
            to="/contact"
            style={{ color: "#fbc02d", textDecoration: "none" }}
          >
            Contact
          </Link>
          <Link
            to="/membersonly"
            style={{ color: "#fbc02d", textDecoration: "none" }}
          >
            Members Only
          </Link>
        </Box>

        {/* Sign Up and Log In Buttons */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Link to="/login">
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                borderColor: "#fbc02d",
                color: "#fbc02d",
              }}
            >
              Log In
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              variant="contained"
              sx={{ textTransform: "none", backgroundColor: "#fbc02d" }}
            >
              Sign Up
            </Button>
          </Link>
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton edge="start" color="inherit" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {["Home", "About Us", "Reviews", "Contact", "Members Only"].map(
              (item) => (
                <MenuItem
                  key={item}
                  onClick={handleMenuClose}
                  sx={{ color: "#212121" }}
                >
                  <Link
                    to={`/${item.replace(" ", "").toLowerCase()}`}
                    style={{ color: "#212121", textDecoration: "none" }}
                  >
                    {item}
                  </Link>
                </MenuItem>
              )
            )}
            <Divider />
            <MenuItem onClick={handleMenuClose}>Log In</MenuItem>
            <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
      <Divider sx={{ bgcolor: "#fbc02d" }} />
    </AppBar>
  );
}

export default Navbar;
