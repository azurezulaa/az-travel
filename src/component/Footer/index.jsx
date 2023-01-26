import {
  Box,
  Button,
  Grid,
  iconButtonClasses,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const mobileIcons = [
  { img: "./assets/App1.svg", title: "Home" },
  { img: "./assets/App2.svg", title: "Packages" },
  { img: "./assets/App3.svg", title: "Stays" },
  { img: "./assets/App4.svg", title: "Flights" },
];
const Footer = () => {
  const [index, setIndex] = useState(0);
  const clicked = (i) => {
    setIndex(i);
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Grid
        container
        sx={{
          background: "#141414",
          color: "#808080",
          padding: "25px 10%",
          display: { xs: "none", sm: "flex" },
        }}
      >
        <Grid
          item
          xs={3}
          sx={{ fontSize: "32px", color: "white", fontWeight: "bold" }}
        >
          Trxvl.
        </Grid>
        <Grid item xs={9}>
          <Grid container>
            <Grid
              xs={12}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid sx={{ fontSize: "13px" }}>
                <p>Seslendirme ve Alt Jazz</p>
                <p>Media Market</p>
                <p>Gillie</p>
                <p>Size Last</p>
              </Grid>
              <Grid sx={{ fontSize: "13px" }}>
                <p>Self Betimes</p>
                <p>Yatırımcı İlişkileri</p>
                <p>Basal Himmler</p>
              </Grid>
              <Grid sx={{ fontSize: "13px" }}>
                <p>Yard Market</p>
                <p>Is İmkanları</p>
                <p>Car Tercihleri</p>
              </Grid>
              <Grid sx={{ fontSize: "13px" }}>
                <p>Hedge Karla</p>
                <p>Mullein Koşulları</p>
                <p>Autumnal Bulgier</p>
              </Grid>
            </Grid>
            <Grid
              xs={12}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid>
                <button
                  style={{
                    background: "none",
                    color: "#808080",
                    border: "solid 1px #808080",
                    padding: "10px 15px",
                  }}
                >
                  Helmet KOD
                </button>
                <p style={{ fontSize: "11px" }}>
                  © 1997-2021 Netflix, Inc. (i-062d573a0ee099242)
                </p>
              </Grid>
              <Box sx={{ width: "200px" }}>
                <img src="./assets/footer1.svg" alt="" />
                <img
                  style={{ marginLeft: "16px" }}
                  src="./assets/footer2.svg"
                  alt=""
                />
                <img
                  style={{ marginLeft: "16px" }}
                  src="./assets/footer3.svg"
                  alt=""
                />
                <img
                  style={{ marginLeft: "16px" }}
                  src="./assets/footer4.svg"
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        sx={{
          display: { xs: "flex", sm: "none" },
          justifyContent: "space-between",
          position: "fixed",
          bottom: "0",
          backgroundColor: "white",
          width: "100%",
          padding: "0 10%",
          paddingTop: "5px",
        }}
      >
        {mobileIcons.map((icon, i) => (
          <Button
            onClick={() => clicked(i)}
            sx={{
              textTransform: "none",
              display: "flex",
              flexDirection: "column",
              opacity: i === index ? "1" : "0.5",
              "&:hover": { backgroundColor: "white" },
            }}
          >
            <img src={icon.img} alt="" />
            <p style={{ margin: "0" }}>{icon.title}</p>
          </Button>
        ))}
      </Grid>
    </Box>
  );
};

export default Footer;
