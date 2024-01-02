import React, { useEffect } from "react";
import { GlobalContext } from "../context/Global";

function Login() {
  const { rendered, setRendered } = React.useContext(GlobalContext);
  useEffect(() => {
    setRendered("login");
  }, []);

  return (
    <>
      <h1>Login Page</h1>
    </>
  );
}

export default Login;
