import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Home from "./pages/Home";
import { CssBaseline } from "@mui/material";
import Navbar from "./component/Navbar";
import Stays from "./pages/Stays";
import Flights from "./pages/Flights";
import Packages from "./pages/Pack";
import Footer from "./component/Footer";

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Router>
      <CssBaseline />
      <Navbar open={open} handleOpen={handleOpen} handleClose={handleClose} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Stays" element={<Stays />} />
        <Route path="/Flights" element={<Flights />} />
        <Route path="/Packages" element={<Packages />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
