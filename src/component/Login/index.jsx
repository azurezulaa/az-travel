import React, { useState } from "react";
import Signup from "./signUp";
import Signin from "./signIn";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  return (
    <>
      {isSignIn ? (
        <Signin setSignIn={setSignIn} />
      ) : (
        <Signup setSignIn={setSignIn} />
      )}
    </>
  );
};

export default Login;
