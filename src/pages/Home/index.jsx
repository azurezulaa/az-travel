import { Box, Grid } from "@mui/material";
import React from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

const Home = () => {
  const items = [
    { img: "./assets/cat1.svg", category: "Beaches" },
    { img: "./assets/cat2.svg", category: "Deserts" },
    { img: "./assets/cat3.svg", category: "Mountains" },
    { img: "./assets/cat4.svg", category: "Iconic Cities" },
    { img: "./assets/cat5.svg", category: "Houseboats" },
    { img: "./assets/cat6.svg", category: "Countryside" },
    { img: "./assets/cat7.svg", category: "Camping" },
    { img: "./assets/cat8.svg", category: "Castles" },
    { img: "./assets/cat9.svg", category: "Skiing" },
    { img: "./assets/cat10.svg", category: "Tropical" },
  ];
  return (
    <Box
      sx={{
        backgroundImage: "url(./assets/headimg.svg)",
        backgroundSize: "cover",
        height: "100vh",
        padding: "10%",
      }}
    >
      <Box>
        <h1
          style={{ color: "#fff", fontSize: "72px", width: "50%", margin: "0" }}
        >
          The whole world awaits.
        </h1>
        <Grid>
          <input type="search" />
          <CalendarTodayOutlinedIcon />
          <CalendarTodayOutlinedIcon />
        </Grid>
        <h4 style={{ color: "#fff", fontSize: "32px" }}>Top categories</h4>

        <Grid
          sx={{
            color: "#fff",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {items.map((item) => (
            <Box>
              <img src={item.img} alt="" />
              <p style={{ opacity: "0.4" }}>{item.category}</p>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
