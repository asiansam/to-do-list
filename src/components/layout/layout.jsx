import React from "react";
import Header from "../header/Header";
import "./Layout.css";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname === "/" && <Header />}
      <div className="layoutStyles">{children}</div>
    </div>
  );
}

export default Layout;
