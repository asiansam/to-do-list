import React from "react";
import Header from "../header/header";
import "./layout.css";
import { useEffect } from "react";
import { useState } from "react";

function Layout({ children }) {
  console.log(window.location.pathname.substr(1));
  const [state, setState] = useState(
    parseInt(window.location.pathname.substr(1))
  );

  useEffect(() => {
    setState(parseInt(window.location.pathname.substr(1)));
  }, [state]);
  console.log(state);
  if (isNaN(state) === false) return <div>{children}</div>;
  else {
    return (
      <div>
        <Header />
        <div className="layoutStyles">{children}</div>
      </div>
    );
  }
}

export default Layout;
