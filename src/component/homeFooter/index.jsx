import { Box, Button, Typography, Grid } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const HomeFooter = () => {
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "white",
  }));
  return (
    <Box
      sx={{
        backgroundImage: "url(./assets/homeFooter1.svg)",
        height: "556px",
        backgroundSize: "cover",
        display: { xs: "none", sm: "flex" },
        padding: "90px 10% 0 8%",
      }}
    >
      <Box sx={{ position: "relative", display: { xs: "none", md: "block" } }}>
        <img src="./assets/iphone.svg" alt="" />
        <img
          style={{ position: "absolute", left: "13px", top: "11px" }}
          src="./assets/iphoneScreen.svg"
          alt=""
        />
      </Box>
      <Box
        sx={{
          color: "white",
          paddingLeft: "5%",
        }}
      >
        <Typography
          sx={{ fontSize: { xs: "36px", lg: "48px" }, fontWeight: "bold" }}
        >
          Your all-in-one travel app.
        </Typography>
        <Typography sx={{ fontSize: { xs: "20px", lg: "24px" } }}>
          Book flights, hotels, trains & rental cars anywhere in the world in
          just seconds. Get real-time flight updates, travel info, exclusive
          deals, and 30% more Trip Coins only on the app!
        </Typography>
        <Box
          sx={{
            display: "flex",
            marginTop: "5%",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Button
              sx={{
                margin: "0",
                textTransform: "none",
                fontSize: "20px",
                color: "white",
                padding: "3px 15px",
                borderRadius: "1rem",
                "&:hover": { background: "rgba(255, 255, 255, 0.4)" },
              }}
            >
              Mobile
            </Button>
            <Button
              sx={{
                margin: "0",
                textTransform: "none",
                fontSize: "20px",
                color: "white",
                padding: "3px 15px",
                borderRadius: "1rem",
                "&:hover": { background: "rgba(255, 255, 255, 0.4)" },
              }}
            >
              Email
            </Button>
            <Typography sx={{ fontSize: "14px", margin: "10px 0" }}>
              Enter your phone number to receive a text with a link to download
              the app.
            </Typography>
            <Grid
              container
              sx={{
                alignItems: "center",
                borderRadius: "1rem",
                background: "rgba(255, 255, 255, 0.4)",
                padding: "8px 16px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <StyledInputBase
                sx={{
                  background: "transparent",
                }}
                type="search"
                placeholder="+91 Mobile number"
              />
              <Button
                variant="contained"
                sx={{
                  "&:hover": { color: "white" },
                  color: "#2659C3",
                  backgroundColor: "white",
                  textTransform: "none",
                  fontWeight: "bold",
                  borderRadius: "2rem",
                  boxShadow: "none",
                  width: "150px",
                }}
              >
                Search
              </Button>
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 5%",
            }}
          >
            <Box
              sx={{
                height: "50px",
                borderLeft: "1px solid white",
                opacity: "0.2",
              }}
            ></Box>
            <Box>or</Box>
            <Box
              sx={{
                height: "50px",
                borderLeft: "1px solid white",
                opacity: "0.2",
              }}
            ></Box>
          </Box>
          <Box>
            <img
              style={{ display: "block" }}
              src="./assets/homeFooter2.svg"
              alt=""
            />
            <img src="./assets/homeFooter3.svg" alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeFooter;
