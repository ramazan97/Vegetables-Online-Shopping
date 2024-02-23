import React, { useState, createContext } from "react";

export const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const [navisOpen, setNavIsOpen] = useState(false);

  const navhandleClose = () => {
    setNavIsOpen(false);
  };

  return (
    <NavbarContext.Provider value={{ navisOpen, setNavIsOpen, navhandleClose }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
