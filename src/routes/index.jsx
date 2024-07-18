import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../component/Navbar";
import Home from "./Home";
import { Box } from "@chakra-ui/react";

function AllRoutes() {
  const isAuthenticate = () => false;
  return (
    <BrowserRouter>
      {isAuthenticate() ? "" : <Navbar />}
      <Box overflow={"auto"} height={"90%"}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default AllRoutes;
