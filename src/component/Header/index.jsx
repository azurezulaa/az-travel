import { Box, Button, Grid, InputBase } from "@mui/material";
import React from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import { styled } from "@mui/material/styles";
const Header = ({ clicked, category }) => {
  const items = [
    {
      img: "./assets/all.svg",
      category: "ALL",
    },
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
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "white",
  }));
  return (
    <Box
      sx={{
        backgroundImage: "url(./assets/headimg.svg)",
        backgroundSize: "cover",
        minHeight: { xs: "80vh", md: "90vh" },
        padding: "10%",
        boxShadow: "inset 0 -120px 60px -50px rgb(255,255,255)",
      }}
    >
      <Box sx={{ height: "fit-content" }}>
        <Typography
          variant="h1"
          component="div"
          sx={{
            color: "#fff",
            fontSize: { xs: "32px", sm: "50px", md: "72px" },
            width: "65%",
            margin: { md: "1% 0", xs: "3% 0" },
            fontWeight: "700",
          }}
        >
          The whole world awaits.
        </Typography>
        <Grid
          container
          sx={{
            alignItems: "center",
            borderRadius: "1rem",
            backgroundColor: { md: "rgba(255, 255, 255, 0.4)", xs: "none" },
            padding: { xs: "8px 0", md: "8px 16px" },
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              minHeight: "36px",
              margin: { xs: "5px 0", md: "0" },
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              backgroundColor: {
                xs: "rgba(255, 255, 255, 0.4)",
                md: "transparent",
              },
              borderRadius: { xs: "2rem", md: "none" },
            }}
          >
            <SearchIcon
              sx={{ color: "white", opacity: "0.7", alignSelf: "center" }}
            />
            <StyledInputBase
              sx={{
                background: "transparent",
                minWidth: "300px",
              }}
              type="search"
              placeholder="Search destinations, hotels"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              minHeight: "36px",
              margin: { xs: "5px 0", md: "0" },
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: {
                xs: "rgba(255, 255, 255, 0.4)",
                md: "transparent",
              },
              borderRadius: { xs: "2rem", md: "none" },
            }}
          >
            <Grid sx={{ display: "flex", alignItems: "center" }}>
              <CalendarTodayOutlinedIcon
                sx={{ color: "white", opacity: "0.7" }}
              />
              <Typography sx={{ color: "white", opacity: "0.7" }}>
                Check in
              </Typography>
            </Grid>
            <Box
              sx={{
                fontSize: "20px",
                fontWeight: "lighter",
                color: "white",
                opacity: "0.7",
                display: { xs: "block", md: "none" },
              }}
            >
              &#124;
            </Box>
            <Grid sx={{ display: "flex", alignItems: "center" }}>
              <CalendarTodayOutlinedIcon
                sx={{ color: "white", opacity: "0.7" }}
              />
              <Typography sx={{ color: "white", opacity: "0.7" }}>
                Check out
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              minHeight: "36px",
              margin: { xs: "5px 0", md: "0" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: {
                xs: "rgba(255, 255, 255, 0.4)",
                md: "transparent",
              },
              borderRadius: { xs: "2rem", md: "none" },
            }}
          >
            <PersonIcon sx={{ color: "white", opacity: "0.7" }} />
            <Typography
              sx={{ lineHeight: "1rem", color: "white", opacity: "0.7" }}
            >
              1 room, 2 adults
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={2}
            sx={{ minHeight: "36px", margin: { xs: "5px 0", md: "0" } }}
          >
            <Button
              variant="contained"
              sx={{
                "&:hover": { color: "white" },
                color: "#2659C3",
                backgroundColor: "white",
                textTransform: "none",
                fontWeight: "bold",
                borderRadius: "2rem",
                width: "100%",
                boxShadow: "none",
              }}
            >
              Search
            </Button>
          </Grid>
        </Grid>
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#fff",
            fontSize: { xs: "28px", md: "32px" },
            margin: "3% 0",
          }}
        >
          Top categories
        </Typography>

        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            overflowX: "auto",
          }}
        >
          {items.map((item, i) => (
            <Box sx={{ margin: "0 5px" }}>
              <button
                style={{ background: "transparent", border: "none" }}
                onClick={() => clicked(item.category)}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img src={item.img} alt="" />
                </div>
                <p
                  style={{
                    opacity: item.category === category ? 1 : "0.4",
                    color: "white",
                    fontSize: "16px",
                    borderBottom:
                      item.category === category ? "2px solid white" : "none",
                    paddingBottom: "10px",
                  }}
                >
                  {item.category}
                </p>
              </button>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;
