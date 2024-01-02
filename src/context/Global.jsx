import React from "react";

export const GlobalContext = React.createContext();

export function GlobalProvider({ children }) {
  const [rendered, setRendered] = React.useState("");

  return (
    <GlobalContext.Provider value={{ rendered, setRendered }}>
      {children}
    </GlobalContext.Provider>
  );
}
