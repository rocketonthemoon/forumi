import React, { useEffect } from "react";
import { GlobalContext } from "../context/Global";

function Contact() {
  const { rendered, setRendered } = React.useContext(GlobalContext);
  useEffect(() => {
    setRendered("contact");
  }, []);

  return (
    <>
      <h1>Contact Me</h1>
    </>
  );
}

export default Contact;
