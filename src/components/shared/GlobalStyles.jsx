import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function GlobalStyles({ children }) {
  return (
    <div className="container max-w-full bg-beams bg-center bg-cover ">
      <div className="max-w-screen-2xl mx-auto p-3 bg-gray-200 bg-opacity-20 backdrop-blur-md">
        <Header />
        <div className="my-5 p-3">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default GlobalStyles;
