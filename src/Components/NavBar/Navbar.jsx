import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Navbar.css";


const Navbar = () => {
  const [activeNav, setActiveNav] = useState("About Me"); // Set default active link

  const handleNavClick = (key) => {
    setActiveNav(key); // Update active link when clicked
  };

  const navItems = [
    { label: "About Me", key: "About Me" },
    { label: "Experiences", key: "Experiences" },
    { label: "Recommended", key: "Recommended" },
  ];

  const contentMap = {
    "About Me": (
      <Typography
        sx={{
          width: "605px",
          height: "20px",
          fontFamily: "Plus Jakarta Sans",
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "30.2px",
          textAlign: "left",
          color: "#969696",
          background: "transparent"
        }}
      >
        Hello! I’m Dave, your sales rep here from Salesforce.
        I’ve been working at this awesome company for 3 years now.<br />
        I was born and raised in Albany, NY & have been living in Santa Carla for the past
        10 years with my wife Tiffany and my 4-year-old twin daughters - Emma and Ella.
        Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
      </Typography>
    ),
    "Experiences": (
      <Typography
        sx={{
          width: "605px",
          height: "175px",
          fontFamily: "Plus Jakarta Sans",
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "30.2px",
          textAlign: "left",
          color: "#969696",
          background: "transparent"
        }}
      >
        {/* Add content for Experiences */}

        I have worked in various roles and gained experience in diverse fields including...
      </Typography>
    ),
    "Recommended": (
      <Typography
        sx={{
          width: "605px",
          height: "160px",
          fontFamily: "Plus Jakarta Sans",
          fontSize: "20px",
          fontWeight: "400",
          lineHeight: "30.2px",
          textAlign: "left",
          color: "#969696",
          background: "transparent"
        }}
      >
        {/* Add content for Recommended */}

        Here are some recommendations based on your interests and preferences...
      </Typography>
    ),
  };

  return (
    <>
      <Box
        sx={{
          width: "616px",
          height: "62px",
          position: "absolute",
          top: "17px",
          left: "55px",
          gap: "0px",
          borderRadius: "23px",
          background: "#171717",
          boxShadow:
            '0px 4.96px 12.4px 10.48px #00000040 inset,' +
            '0px 12px 12.4px 12.48px #00000040',
          display: "flex",
          paddingBottom: "1.5px",
        }}
      >
        {navItems.map((item) => (
          <Box 
            key={item.key}
            
            sx={{
              width: "150px",
              height: "32px",
              padding: "10px 24px",
              gap: "10px",
              borderRadius: "18px",
              marginTop: "5px",
              marginLeft: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              
              cursor: "pointer",
              transition: "background 1.5s ease-in-out", // Adjust transition speed for smooth effect
              background: activeNav === item.key ? "" : "transparent", // Apply background based on active state

              boxShadow: activeNav === item.key
                ? "0px -21px 10px rgba(54, 60, 67, 0.4), 10px 6px 20px black"
                : "",
              zIndex:"1",

              '&:hover': {
                background: activeNav === item.key
                  ? ""
                  : 'linear-gradient(to right, rgba(54, 60, 67, 0.1), rgba(54, 60, 67, 0.4))', // Gradient background fill from left
                
              }
            }}
            onClick={() => handleNavClick(item.key)} // Handles click to set active link
          >
            <Typography 
              sx={{
                width: "300px",
                height: "10px",
                color: activeNav === item.key ? "white" : "#A3ADB2",
                fontFamily: "Poppins",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "16.12px",
                textAlign: "center",
                background: "transparent",
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}

      </Box>

      {/*Content*/}
      <Box sx={{
        width: "605px",
        height: "100px",
        position: "absolute",
        top: "95px",
        left: "63px",
        gap: "0px",
        opacity: "0px",
        background: "transparent",
      }}>
        {contentMap[activeNav]}

      </Box>
    </>
  );
};

export default Navbar;
