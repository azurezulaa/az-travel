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
const populars = [
  {
    img: "./assets/popular1.png",
    title: "Swiss Apls",
    price: "$88,952",
    rate: "4.7",
    category: "beaches",
  },
  {
    img: "./assets/popular2.png",
    title: "Hallstatt",
    price: "$88,952",
    rate: "4.9",
    category: "beaches",
  },
  {
    img: "./assets/popular3.png",
    title: "Faroe Island",
    price: "$88,952",
    rate: "4.5",
    category: "beaches",
  },
  {
    img: "./assets/popular1.png",
    title: "Swiss Apls",
    price: "$88,952",
    rate: "4.7",
    category: "beaches",
  },
  {
    img: "./assets/popular2.png",
    title: "Hallstatt",
    price: "$88,952",
    rate: "4.9",
    category: "beaches",
  },
  {
    img: "./assets/popular3.png",
    title: "Faroe Island",
    price: "$88,952",
    rate: "4.5",
    category: "deserts",
  },
  {
    img: "./assets/popular3.png",
    title: "Faroe Island",
    price: "$88,952",
    rate: "4.5",
    category: "mountains",
  },
  {
    img: "./assets/popular1.png",
    title: "Swiss Apls",
    price: "$88,952",
    rate: "4.7",
    category: "beaches",
  },
  {
    img: "./assets/popular2.png",
    title: "Hallstatt",
    price: "$88,952",
    rate: "4.9",
    category: "deserts",
  },
  {
    img: "./assets/popular3.png",
    title: "Faroe Island",
    price: "$88,952",
    rate: "4.5",
    category: "beaches",
  },
];

const Home = () => {
  const [category, setCategory] = useState(null);
  const [filtered, setFiltered] = useState(populars);

  const filterByCategory = (category) => {
    const newFiltered = populars.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );
    setCategory(category);
    setFiltered(newFiltered);
    // filterByCategory(category);
  };
  return (
    <Box>
      <Header clicked={filterByCategory} category={category} />
      {!category ? (
        <>
          <TopVacation />
          <Offers />
          <Browse />
          <Plan />
          <Connect />
        </>
      ) : (
        <Category filtered={filtered} />
      )}
      <HomeFooter />
    </Box>
  );
};

export default Home;
