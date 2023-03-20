import { Box, Button, Grid, InputBase } from "@mui/material";
import React, { useEffect } from "react";
import Header from "../../component/Header";
import HomeFooter from "../../component/homeFooter";
import Browse from "../../component/browse";
import Connect from "../../component/connect";
import Offers from "../../component/offers";
import Plan from "../../component/plan";
import TopVacation from "../../component/topVac";
import { useState } from "react";
import Category from "../../component/Category";
import axios from "axios";

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

const Home = () => {
  const [category, setCategory] = useState([]);
  const [travels, setTravels] = useState([]);
  const [filtered, setFiltered] = useState(populars);
  const [selectedCat, setSelectedCat] = useState("");

  const filterByCategory = (category) => {
    console.log(category);
    const newFiltered = travels.filter(
      (el) => el.cat_id.toLowerCase() === category.id.toLowerCase()
    );
    setSelectedCat(category.name);
    setFiltered(newFiltered);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/travel")
      .then((res) => {
        console.log("SUCESS", res);
        setTravels(res.data.data);
        setFiltered(res.data.data);
      })
      .catch((err) => {
        console.log("AXIOERR", err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/category")
      .then((res) => {
        console.log("SUCESS", res);
        setTravels(res.data.data);
        setFiltered(res.data.data);
      })
      .catch((err) => {
        console.log("AXIOERR", err);
      });
  }, []);

  return (
    <Box>
      <Header
        clicked={filterByCategory}
        category={category}
        selectedCat={selectedCat}
      />
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
