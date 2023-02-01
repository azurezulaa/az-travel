import React, { useState } from "react";
import Signup from "./signUp";
import Signin from "./signIn";

const Log = ({ handleClose, login }) => {
  const [isSignIn, setSignIn] = useState(true);
  return (
    <>
      {isSignIn ? (
        <Signin
          setSignIn={setSignIn}
          login={login}
        />
      ) : (
        <Signup setSignIn={setSignIn} />
      )}
    </>
  );
};

export default Log;
