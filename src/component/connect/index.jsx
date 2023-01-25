import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

const Connect = () => {
  const connects = [
    {
      img: "./assets/connect1.png",
      title: "India",
      text: "155,073",
    },
    {
      img: "./assets/connect2.png",
      title: "Travel Talk",
      text: "155,073",
    },
    {
      img: "./assets/connect3.png",
      title: "Beach",
      text: "155,073",
    },
    {
      img: "./assets/connect4.png",
      title: "Mountains",
      text: "155,073",
    },
    {
      img: "./assets/connect1.png",
      title: "India",
      text: "155,073",
    },
    {
      img: "./assets/connect1.png",
      title: "Travel Talk",
      text: "155,073",
    },
    {
      img: "./assets/connect1.png",
      title: "Beach",
      text: "155,073",
    },
    {
      img: "./assets/connect1.png",
      title: "Mountains",
      text: "155,073",
    },
    {
      img: "./assets/connect1.png",
      title: "Beach",
      text: "155,073",
    },
    {
      img: "./assets/connect1.png",
      title: "Mountains",
      text: "155,073",
    },
  ];
  return (
    <Box sx={{ marginLeft: "9%" }}>
      <Typography
        sx={{
          fontWeight: "bold",
          color: "#000",
          fontSize: { xs: "28px", md: "32px" },
          marginTop: "3%",
          marginLeft: "1%",
        }}
      >
        Connect with other travelers in our community
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          "&::-webkit-scrollbar": { display: "none" },
          padding: "2% 0 2% 1%",
          gap: "30px",
          marginBottom: "10vh",
        }}
      >
        {connects.map((connect) => (
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
                src={connect.img}
                alt=""
              />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "24px" }}>{connect.title}</Typography>
              <Typography sx={{ opacity: "0.5" }}>Travel community</Typography>
              <Typography sx={{ opacity: "0.5" }}>
                {connect.text + " travelers"}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Connect;
