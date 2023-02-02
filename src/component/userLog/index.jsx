import React, { useState } from "react";
import Signup from "./signUp";
import Signin from "./signIn";

const Log = ({ handleClose, setUser }) => {
  const [isSignIn, setSignIn] = useState(true);
  return (
    <>
      {isSignIn ? (
        <Signin
          setSignIn={setSignIn}
          setUser={setUser}
          handleClose={handleClose}
        />
      ) : (
        <Signup setSignIn={setSignIn} setUser={setUser} />
      )}
    </>
  );
};

export default Log;
