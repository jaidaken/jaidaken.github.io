/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Bio from "./components/bio/Bio";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Header />} />
          <Route path="/#about" element={<Bio />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
