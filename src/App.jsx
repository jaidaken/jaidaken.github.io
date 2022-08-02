/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
