import React from "react";
import image from "../../assets/Vector.png";
import Banner from "../../components/Banner";
import "./styles.css";

const Home: React.FC = () => {
  
  return (
    <div>
      <Banner />
      <img className="image-designer" src={image} />
      <div className="d-flex justify-content-center">
        <div className="container-info"></div>
      </div>
    </div>
  );
};

export default Home;
