import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Menu, MenuItem, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <AppBar position="fixed" color="primary" elevation={4} sx={{ width: "100%", top: 0, bgcolor: "#212121" }}>
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 5 } }}>
          {/* Logo */}
          <Typography variant="h6" color="white" sx={{ fontWeight: "bold", fontFamily: "'Roboto', sans-serif" }}>
            AH SIFU, TAEKWONDO
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {["Home", "About", "Reviews", "Contact", "Members Only"].map((item) => (
              <Button key={item} color="inherit" sx={{ fontSize: "1rem", textTransform: "uppercase", fontWeight: "600" }}>
                {item}
              </Button>
            ))}
          </Box>

          {/* Sign Up and Log In Buttons */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button variant="outlined" color="secondary" sx={{ textTransform: "none", borderColor: "#fbc02d", color: "#fbc02d" }}>
              Log In
            </Button>
            <Button variant="contained" color="secondary" sx={{ textTransform: "none", backgroundColor: "#fbc02d" }}>
              Sign Up
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton edge="start" color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              {["Home", "Timetable", "About Us", "Class", "Members Only"].map((item) => (
                <MenuItem key={item} onClick={handleMenuClose}>
                  {item}
                </MenuItem>
              ))}
              <Divider />
              <MenuItem onClick={handleMenuClose}>Log In</MenuItem>
              <MenuItem onClick={handleMenuClose}>Sign Up</MenuItem>
            </Menu>
          </Box> */}
        </Toolbar>
        <Divider sx={{ bgcolor: "#fbc02d" }} />
      </AppBar>
    </motion.div>
  );
}

export default Navbar;
