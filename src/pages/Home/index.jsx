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
        minHeight: {md:"120vh", xs:"80vh"},
        padding: "10%",
      }}
    >
      <Box>
        <Typography
        variant="h1"
        component="div"
          sx={{ color: "#fff", fontSize:{xs:"32px", sm:"50px", md:"72px"}, width:"65%", margin: {md:"1% 0", xs:"3% 0"}, fontWeight:"700"}}
        >
          The whole world awaits.
        </Typography>
        <Grid container sx={{alignItems:"center", borderRadius:"1rem", backgroundColor: {md:"rgba(200,200,200, 0.8)", xs:"none"}, padding:{xs:"8px 0", md:"8px 16px"}}}>
          <Grid item xs={12} md={4} sx={{minHeight:"36px", margin:{xs:"5px 0",md:"0"}, display:"flex", justifyContent:{xs:"center", md:"flex-start"},backgroundColor:{xs:"rgba(200,200,200, 0.8)", md:"transparent"},borderRadius:{xs:"2rem", md:"none"}}}>
          <SearchIcon sx={{color:"white", opacity:"0.7", alignSelf:"center"}}/>
          <InputBase sx={{background:"transparent", minWidth:"300px"}} type="search" placeholder="Search destinations, hotels"/>
          </Grid>
          <Grid item xs={12} md={4} sx={{minHeight:"36px", margin:{xs:"5px 0",md:"0"}, display:"flex", justifyContent:"space-around", backgroundColor:{xs:"rgba(200,200,200, 0.8)", md:"transparent"},borderRadius:{xs:"2rem", md:"none"}}}>
          <Grid sx={{display:"flex", alignItems:"center"}}>
          <CalendarTodayOutlinedIcon sx={{color:"white", opacity:"0.7"}} />
          <Typography sx={{color:"white", opacity:"0.7"}}>Check in</Typography>
          </Grid>
          <Grid sx={{display:"flex", alignItems:"center"}}>
          <CalendarTodayOutlinedIcon sx={{color:"white", opacity:"0.7"}} />
          <Typography sx={{color:"white", opacity:"0.7"}}>Check out</Typography>
          </Grid>
          </Grid>
          <Grid item xs={12} md={2} sx={{ minHeight:"36px", margin:{xs:"5px 0",md:"0"}, display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:{xs:"rgba(200,200,200, 0.8)", md:"transparent"},borderRadius:{xs:"2rem", md:"none"}}}>
            <PersonIcon sx={{color:"white", opacity:"0.7"}}/>
            <Typography sx={{lineHeight:"1rem", color:"white", opacity:"0.7"}}>1 room, 2 adults</Typography>
          </Grid>
          <Grid item xs={12} md={2} sx={{minHeight:"36px", margin:{xs:"5px 0",md:"0"}}}>
          <Button variant="text" sx={{color:{sm:"#2659C3", xs:"white"},backgroundColor:{sm:"white", xs:"#2659C3"}, textTransform:"none", fontWeight:"bold", borderRadius:"2rem", width:"100%", border:"none"}}>Search</Button>
          </Grid>
        </Grid>
        <Typography sx={{fontWeight:"bold", color: "#fff", fontSize: {xs:"28px", md:"32px"}, margin:"3% 0" }}>Top categories</Typography>

        <Grid
          sx={{
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {items.map((item) => (
            <Box>
              <div style={{display:"flex", justifyContent:"center"}}>
              <img src={item.img} alt="" />
              </div>
              <p style={{ opacity: "0.4" }}>{item.category}</p>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
