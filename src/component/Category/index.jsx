import { Box, Typography } from "@mui/material";
import React from "react";
const populars = [
  {
    img: "./assets/popular1.png",
    title: "Swiss Apls",
    price: "$88,952",
    rate: "4.7",
  },
  {
    img: "./assets/popular2.png",
    title: "Hallstatt",
    price: "$88,952",
    rate: "4.9",
  },
  {
    img: "./assets/popular3.png",
    title: "Faroe Island",
    price: "$88,952",
    rate: "4.5",
  },
  {
    img: "./assets/popular1.png",
    title: "Swiss Apls",
    price: "$88,952",
    rate: "4.7",
  },
  {
    img: "./assets/popular2.png",
    title: "Hallstatt",
    price: "$88,952",
    rate: "4.9",
  },
  {
    img: "./assets/popular3.png",
    title: "Faroe Island",
    price: "$88,952",
    rate: "4.5",
  },
];
const items = [
  { img: "./assets/icon1.svg", title: "2 Flights" },
  { img: "./assets/icon2.svg", title: "1 Hotel" },
  { img: "./assets/icon3.svg", title: "2 Transfers" },
  { img: "./assets/icon4.svg", title: "4 Activities" },
];

const Category = () => {
  return (
    <Box sx={{ marginLeft: "9%", marginBottom: "5%" }}>
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#000",
          fontSize: { xs: "28px", md: "32px" },
          marginLeft: "1%",
          marginBottom: "1%",
        }}
      >
        Popular Beach Destinations
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          "&::-webkit-scrollbar": { display: "none" },
          padding: "2% 0 2% 1%",
          gap: "30px",
        }}
      >
        {populars.map((pop) => (
          <Box
            sx={{
              borderRadius: "16px",
              width: "352px",
              height: "342px",
              boxShadow: "0px 4px 16px rgba(158, 158, 158, 0.25)",
              gap: "10px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box>
              <img
                style={{
                  borderRadius: "16px",
                  width: "310px",
                  height: "200px",
                }}
                src={pop.img}
                alt=""
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography sx={{ fontSize: "24px" }}>{pop.title}</Typography>
                <Typography sx={{ opacity: "0.5" }}>3Days 4Nights</Typography>
              </Box>
              <Box>
                <img src="./assets/star.svg" alt="" />
                <Typography
                  sx={{
                    display: "inline-block",
                    fontSize: "24px",
                    marginLeft: "10px",
                  }}
                >
                  {pop.rate}
                </Typography>
              </Box>
            </Box>
            <Box>
              {items.map((item) => {
                <Box></Box>;
              })}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Category;
