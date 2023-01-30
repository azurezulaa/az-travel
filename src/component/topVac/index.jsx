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
        // marginTop: { xs: "-215px", sm: "-215px", md: "-250px" },
      }}
    >
      <Typography
        sx={{
          color: "black",
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "3%",
        }}
      >
        Top Vacations
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
          <Box sx={{ position: "relative" }}>
            <img
              style={{ width: "300px", borderRadius: "8px", height: "200px" }}
              src={vac.img}
              alt=""
            />
            <Typography
              sx={{
                position: "absolute",
                bottom: "7%",
                left: "5%",
                color: "white",
                fontSize: "24px",
                fontWeight: "bold",
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
