import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "../page/Layout";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
