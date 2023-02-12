import React, { useState } from "react";
import Signup from "./signUp";
import Signin from "./signIn";
import { useContext } from "react";
import { UserContext } from "../../context";

const Log = ({ handleClose, setUser }) => {
  const {isSignIn}=useContext(UserContext);
  return (
    <>
      {isSignIn ? (
        <Signin
        />
      ) : (
        <Signup/>
      )}
    </>
  );
};

export default Log;
