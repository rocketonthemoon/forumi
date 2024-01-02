import React, { useEffect } from "react";
import { GlobalContext } from "../context/Global";

function Register() {
  const { rendered, setRendered } = React.useContext(GlobalContext);
  useEffect(() => {
    setRendered("register");
  }, []);

  return (
    <>
      <h1>Register Page</h1>
    </>
  );
}

export default Register;
