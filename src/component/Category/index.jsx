import { Box, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const items = [
  { img: "./assets/icon1.svg", title: "2 Flights" },
  { img: "./assets/icon2.svg", title: "1 Hotel" },
  { img: "./assets/icon3.svg", title: "2 Transfers" },
  { img: "./assets/icon4.svg", title: "4 Activities" },
];

const Category = ({ filtered }) => {
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
        {filtered.map((pop) => (
          <Box
            sx={{
              borderRadius: "16px",
              height: "530px",
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
                  width: "315px",
                  height: "200px",
                }}
                src={pop.images}
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
                  {/* {pop.rate} */}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                opacity: "0.5",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              {items.map((item) => (
                <Box sx={{ textAlign: "center" }}>
                  <img src={item.img} alt="" />
                  <Typography sx={{ fontSize: "12px" }}>
                    {item.title}
                  </Typography>
                </Box>
              ))}
            </Box>
            <ul style={{ opacity: "0.5", paddingLeft: "15px" }}>
              <li>Tour combo with return airport transfers</li>
              <li>City Tour</li>
              <li>Curious Corner</li>
            </ul>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ textDecoration: "line-through" }}>
                {pop.price}
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginLeft: "50px",
                }}
              >
                {pop.price}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  opacity: "0.5",
                  marginLeft: "5px",
                  marginTop: "8px",
                }}
              >
                per person
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Category;
