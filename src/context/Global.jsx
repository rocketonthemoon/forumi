import React from "react";

export const GlobalContext = React.createContext();

export function GlobalProvider(props) {
  const [rendered, setRendered] = React.useState("");

  return (
    <GlobalContext.Provider value={{ rendered, setRendered }}>
      {props.children}
    </GlobalContext.Provider>
  );
}
