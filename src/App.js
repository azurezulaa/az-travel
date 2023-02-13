import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Stays from "./pages/Stays";
import Flights from "./pages/Flights";
import Packages from "./pages/Pack";
import Footer from "./component/Footer";
import { UserProvider } from "./context";

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Stays" element={<Stays />} />
        <Route path="/Flights" element={<Flights />} />
        <Route path="/Packages" element={<Packages />} />
      </Routes>
      <Footer />
    </UserProvider>
  );
}

export default App;
