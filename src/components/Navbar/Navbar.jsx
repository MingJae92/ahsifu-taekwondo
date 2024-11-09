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
      <AppBar position="fixed" color="transparent" elevation={0} sx={{ width: "100%", top: 0 }}>
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 5 } }}>
          {/* Logo */}
          <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
            DENTON
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {["Home", "About", "Reviews", "Contact", "Members Only"].map((item) => (
              <Button key={item} color="inherit" sx={{ fontSize: "1rem", textTransform: "none" }}>
                {item}
              </Button>
            ))}
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
          {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton edge="start" color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              {["Home", "Timetable", "About Us", "Class", "Members Only" ].map((item) => (
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
        <Divider />
      </AppBar>
    </motion.div>
  );
}

export default Navbar;
