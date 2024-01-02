import React, { useEffect } from "react";
import { GlobalContext } from "../context/Global";

function About() {
  const { rendered, setRendered } = React.useContext(GlobalContext);
  useEffect(() => {
    setRendered("about");
  }, []);

  return (
    <>
      <div>
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          blanditiis, repellat officiis aliquam fugit sequi, sunt aspernatur
          ipsam, eveniet sapiente vero repellendus beatae possimus reiciendis
          illo quos porro at inventore officia rerum magnam quod. Reiciendis,
          quos architecto voluptate dolor magni at nihil similique ipsam veniam
          eius quae, impedit harum atque?
        </p>
      </div>
    </>
  );
}

export default About;
