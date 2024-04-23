import React from "react";
import { Outlet } from "react-router-dom";
import './styles.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Layout: React.FC = () => {
  return (
    <div>
      <Header/>
      <main className="background-color-layout ">
        <div className="d-flex justify-content-center bg-white">
          <Outlet/>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;