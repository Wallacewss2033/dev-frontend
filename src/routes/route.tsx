import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "../page/Layout";
import Home from "../page/Home";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
