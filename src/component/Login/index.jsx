import React, { useState } from "react";
import Signup from "./signUp";
import Signin from "./signIn";

const Login = ({ handleClose, setUser }) => {
  const [isSignIn, setSignIn] = useState(true);
  return (
    <>
      {isSignIn ? (
        <Signin
          setUser={setUser}
          setSignIn={setSignIn}
          handleClose={handleClose}
        />
      ) : (
        <Signup setSignIn={setSignIn} />
      )}
    </>
  );
};

export default Login;
