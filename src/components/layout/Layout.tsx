import React from "react";
import { Outlet } from "react-router-dom";

import Nav from "../nav/Nav";
import Header from "Components/header/Header";

function Layout() {
  return (
    <div className="layout" style={{ width: "100vw"}}>

      <Header />
      <Nav />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
