import { Typography, Box } from "@mui/material";
import React from "react";

const Plan = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(./assets/plan.svg)",
        backgroundSize: "cover",
        height: "395px",
        margin: "5% 10%",
        borderRadius: "18px",
        padding: { lg: "8vh 10vh", xs: "5vh 7vh" },
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: { xs: "42px", md: "56px" },
          fontWeight: "bold",
          lineHeight: "1.2",
          width: { xs: "100%", lg: "70vh" },
        }}
      >
        Plan your trip with travel expert
      </Typography>
      <Typography
        sx={{
          color: "white",
          fontSize: { xs: "24px", md: "32px" },
          marginTop: "2%",
        }}
      >
        Our professional advisors can craft your perfect itinerary
      </Typography>
    </Box>
  );
};

export default Plan;
