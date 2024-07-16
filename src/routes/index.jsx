import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../component/Navbar";

function AllRoutes() {
  const isAuthenticate = () => false;
  return (
    <BrowserRouter>
      {isAuthenticate() ? "" : <Navbar />}
      <Routes>
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;
