import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
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
        <Button
          sx={{
            textTransform: "none",
            display: "flex",
            flexDirection: "column",
            opacity: "0.4",
            "&:hover": { backgroundColor: "white", opacity: "1" },
          }}
        >
          <img src="./assets/App1.svg" alt="" />
          <p style={{ margin: "0" }}>Home</p>
        </Button>
        <Button
          sx={{
            display: "flex",
            flexDirection: "column",
            textTransform: "none",
            opacity: "0.4",
            "&:hover": { backgroundColor: "white", opacity: "1" },
          }}
        >
          <img src="./assets/App2.svg" alt="" />
          <p style={{ margin: "0" }}>Packages</p>
        </Button>
        <Button
          sx={{
            display: "flex",
            flexDirection: "column",
            textTransform: "none",
            opacity: "0.4",
            "&:hover": { backgroundColor: "white", opacity: "1" },
          }}
        >
          <img src="./assets/App3.svg" alt="" />
          <p style={{ margin: "0" }}>Stays</p>
        </Button>
        <Button
          sx={{
            display: "flex",
            flexDirection: "column",
            textTransform: "none",
            opacity: "0.4",
            "&:hover": { backgroundColor: "white", opacity: "1" },
          }}
        >
          <img src="./assets/App4.svg" alt="" />
          <p style={{ margin: "0" }}>Flights</p>
        </Button>
      </Grid>
    </Box>
  );
};

export default Footer;
