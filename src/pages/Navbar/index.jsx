import React from "react";
import { Button, Modal } from "@mui/material";
import Login from "../Login";

const Navbar = ({ open, handleOpen, handleClose }) => {
  return (
    <div>
      <Button onClick={handleOpen}>НЭВТРЭХ</Button>
      <Modal open={open} onClose={handleClose}>
        <Login />
      </Modal>
    </div>
  );
};

export default Navbar;
