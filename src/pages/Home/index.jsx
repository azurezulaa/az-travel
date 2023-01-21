import { Box, Button, Grid, InputBase} from "@mui/material";
import React from "react";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import SearchIcon from '@mui/icons-material/Search';
import Typography from "@mui/material/Typography";
import PersonIcon from '@mui/icons-material/Person';
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
        <Typography
        variant="h1"
        component="div"
          sx={{ color: "#fff", fontSize:{xs:"32px", sm:"50px", md:"72px"}, width:"60%", margin: "0", fontWeight:"700" }}
        >
          The whole world awaits.
        </Typography>
        <Grid container sx={{alignItems:"center", borderRadius:"1rem"}}>
          <Grid item xs={12} md={4} sx={{display:"flex", backgroundColor: "rgba(200,200,200, 0.85)",borderRadius:{xs:"2rem", md:"none"}}}>
          <SearchIcon sx={{color:"white", opacity:"0.7", alignSelf:"center"}}/>
          <InputBase sx={{background:"transparent", minWidth:"300px"}} type="search" placeholder="Search destinations, hotels"/>
          </Grid>
          <Grid item xs={12} md={4} sx={{display:"flex", backgroundColor: "rgba(200,200,200, 0.85)",borderRadius:{xs:"2rem", md:"none"}}}>
          <Grid sx={{display:"flex"}}>
          <CalendarTodayOutlinedIcon sx={{color:"white", opacity:"0.7"}} />
          <Typography sx={{color:"white", opacity:"0.7"}}>Check in</Typography>
          </Grid>
          <Grid sx={{display:"flex"}}>
          <CalendarTodayOutlinedIcon sx={{color:"white", opacity:"0.7"}} />
          <Typography sx={{color:"white", opacity:"0.7"}}>Check out</Typography>
          </Grid>
          </Grid>
          <Grid item xs={12} md={2} sx={{display:"flex", backgroundColor: "rgba(200,200,200, 0.85)",borderRadius:{xs:"2rem", md:"none"}}}>
            <PersonIcon sx={{color:"white", opacity:"0.7"}}/>
            <Typography sx={{color:"white", opacity:"0.7"}}>1 room, 2 adults</Typography>
          </Grid>
          <Grid item xs={12} md={2}>
          <Button variant="text" sx={{color:{sm:"#2659C3", xs:"white"},backgroundColor:{sm:"white", xs:"#2659C3"}, textTransform:"none", fontWeight:"bold", borderRadius:"2rem", width:"100%", border:"none"}}>Search</Button>
          </Grid>
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
