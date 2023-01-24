import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

const Offers = () => {
  const offs = [
    {
      img: "./assets/offers1.png",
      title: "Huge savings on flight with trxvl.",
      cat: "Domestic Flights",
      text: "Book domestic flights starting @ just $1459",
    },
    {
      img: "./assets/offers2.png",
      title: "Enjoy upto 20% off on International Hotels",
      cat: "International Hotels",
      text: "Make the most of  this deal on your first booking with trxvl.",
    },
    {
      img: "./assets/offers1.png",
      title: "Huge savings on flight with trxvl.",
      cat: "Domestic Flights",
      text: "Book domestic flights starting @ just $1459",
    },
    {
      img: "./assets/offers2.png",
      title: "Enjoy upto 20% off on International Hotels",
      cat: "International Hotels",
      text: "Make the most of  this deal on your first booking with trxvl.",
    },
    {
      img: "./assets/offers1.png",
      title: "Huge savings on flight with trxvl.",
      cat: "Domestic Flights",
      text: "Book domestic flights starting @ just $1459",
    },
    {
      img: "./assets/offers2.png",
      title: "Enjoy upto 20% off on International Hotels",
      cat: "International Hotels",
      text: "Make the most of  this deal on your first booking with trxvl.",
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
        Offers
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          "&::-webkit-scrollbar": { display: "none" },
          padding: "3% 0",
          gap: "30px",
          paddingLeft: "1%",
        }}
      >
        {offs.map((off) => (
          <Box
            sx={{
              display: "flex",
              borderRadius: "16px",
              width: "650px",
              height: "260px",
              boxShadow: "0px 4px 16px rgba(158, 158, 158, 0.25)",
              gap: "30px",
              padding: "20px",
            }}
          >
            <Box>
              <img
                style={{
                  borderRadius: "16px",
                  width: "310px",
                  height: "218px",
                }}
                src={off.img}
                alt=""
              />
            </Box>
            <Box
              sx={{
                width: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography sx={{ opacity: "0.5" }}>{off.cat}</Typography>
                <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                  {off.title}
                </Typography>
                <Typography sx={{ opacity: "0.5" }}>{off.text}</Typography>
              </Box>
              <Button
                sx={{
                  alignSelf: "start",
                  textTransform: "none",
                  borderRadius: "2rem",
                }}
                variant="contained"
              >
                Book Now
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Offers;
