import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
const Browse = () => {
  const vacations = [
    { title: "Hotels", img: "./assets/browse1.png" },
    { title: "Apartments", img: "./assets/browse2.png" },
    { title: "Resorts", img: "./assets/browse3.png" },
    { title: "Villas", img: "./assets/browse4.png" },
    { title: "Hotels", img: "./assets/browse1.png" },
    { title: "Apartments", img: "./assets/browse2.png" },
    { title: "Resorts", img: "./assets/browse3.png" },
    { title: "Villas", img: "./assets/browse4.png" },
    { title: "Hotels", img: "./assets/browse1.png" },
    { title: "Apartments", img: "./assets/browse2.png" },
    { title: "Resorts", img: "./assets/browse3.png" },
    { title: "Villas", img: "./assets/browse4.png" },
  ];
  return (
    <Box
      sx={{
        marginLeft: "10%",
      }}
    >
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "3%",
        }}
      >
        Browse by property type
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

export default Browse;
