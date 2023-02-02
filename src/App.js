import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Stays from "./pages/Stays";
import Flights from "./pages/Flights";
import Packages from "./pages/Pack";
import Footer from "./component/Footer";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("user"));

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <Navbar
        user={user}
        setUser={setUser}
        openModal={openModal}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Stays" element={<Stays />} />
        <Route path="/Flights" element={<Flights />} />
        <Route path="/Packages" element={<Packages />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
