import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function GlobalStyles({ children }) {
  return (
    <div className="container max-w-full bg-beams h-screen w-screen bg-center">
      <div className="max-w-screen-2xl mx-auto p-3">
        <Header />
        <div className="rounded-lg bg-gray-200 bg-opacity-20 backdrop-blur-md h-[80vh] shadow-md my-5 p-3">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default GlobalStyles;
