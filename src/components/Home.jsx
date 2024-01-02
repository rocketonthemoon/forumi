import React, { useEffect } from "react";
import { GlobalContext } from "../context/Global";

function Home() {
  const { rendered, setRendered } = React.useContext(GlobalContext);
  useEffect(() => {
    setRendered("home");
  }, []);

  return (
    <>
      <h1>This is a Forum</h1>
    </>
  );
}

export default Home;
