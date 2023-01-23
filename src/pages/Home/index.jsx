import { Box, Button, Grid, InputBase } from "@mui/material";
import React from "react";
import Browse from "../../component/browse";
import Connect from "../../component/connect";
import Header from "../../component/Header";
import HomeFooter from "../../component/homeFooter";
import Offers from "../../component/offers";
import Plan from "../../component/plan";
import TopVacation from "../../component/topVac";
const Home = () => {
  return (
    <Box>
      <Header />
      <TopVacation />
      <Offers />
      <Browse />
      <Plan />
      <Connect />
      <HomeFooter />
    </Box>
  );
};

export default Home;
