import { Box, Button, Grid, InputBase } from "@mui/material";
import React from "react";
import Header from "../../component/Header";
import HomeFooter from "../../component/homeFooter";
import Browse from "../../component/browse";
import Connect from "../../component/connect";
import Offers from "../../component/offers";
import Plan from "../../component/plan";
import TopVacation from "../../component/topVac";
import { useState } from "react";
import Category from "../../component/Category";

const Home = () => {
  const [index, setIndex] = useState(0);
  const clicked = (i) => {
    setIndex(i);
  };
  return (
    <Box>
      <Header clicked={clicked} index={index} />
      {index === 0 ? (
        <>
          <TopVacation />
          <Offers />
          <Browse />
          <Plan />
          <Connect />
        </>
      ) : (
        <Category />
      )}
      <HomeFooter />
    </Box>
  );
};

export default Home;
