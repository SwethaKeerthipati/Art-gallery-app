// components/Layout.js
import React from "react";
import Navigation from "../Navigation/Navigation";

const Layout = ({ children, artPieces }) => {
  return (
    <div>
      <Navigation artPieces={artPieces} />
      {children}
    </div>
  );
};

export default Layout;
