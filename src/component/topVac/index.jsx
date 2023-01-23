import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
const TopVacation = () => {
  const vacations = [
    { title: "Bali, Indonesia", img: "./assets/topvac1.png" },
    { title: "Kerry, Ireland", img: "./assets/topvac2.png" },
    { title: "Sydney, Australia", img: "./assets/topvac3.png" },
    { title: "Paris, France", img: "./assets/topvac4.png" },
    { title: "Bali, Indonesia", img: "./assets/topvac1.png" },
    { title: "Kerry, Ireland", img: "./assets/topvac2.png" },
    { title: "Sydney, Australia", img: "./assets/topvac3.png" },
    { title: "Paris, France", img: "./assets/topvac4.png" },
    { title: "Bali, Indonesia", img: "./assets/topvac1.png" },
    { title: "Kerry, Ireland", img: "./assets/topvac2.png" },
    { title: "Sydney, Australia", img: "./assets/topvac3.png" },
    { title: "Paris, France", img: "./assets/topvac4.png" },
  ];
  return (
    <Box
      sx={{
        marginLeft: "10%",
        marginTop: { xs: "-200px", sm: "-265px", md: "-300px", lg: "-350px" },
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#fff",
          fontSize: { xs: "28px", md: "32px" },
          margin: "3% 0",
        }}
      >
        Top categories
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: "20px",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {vacations.map((vac) => (
          <Box
            sx={{
              position: "relative",
              width: { sm: "310px", xs: "230px" },
              height: { sm: "200px", xs: "150px" },
            }}
          >
            <img style={{ borderRadius: "8px" }} src={vac.img} alt="" />
            <Typography
              sx={{
                position: "absolute",
                bottom: "5%",
                left: "7%",
                color: "white",
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              {vac.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TopVacation;
