import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";

function Layout() {
  return (
    <div className="layout">
      <Nav />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
