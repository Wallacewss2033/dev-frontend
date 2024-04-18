import React from "react";
import Button from "../../components/Button";
import "./styles.css";
import CategoryList from "../CategoryList";

const Banner: React.FC = () => {


  return (
    <div className="banner">
        <span className="box-text">
          <CategoryList categories={["Medicina", "Ensino", "Metodologia PBL"]} />
          <h1>
            Como é a Metodologia PBL e como ela faz a diferença no aprendizado
            da Medicina
          </h1>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur. Augue blandit urna cras enim
            ut mattis sit duis eget. Donec vitae hendrerit morbi tincidunt eget
            lorem sed augue. Consequat commodo parturient consectetur tincidunt
            interdum placerat neque non maecenas. Dignissim mauris bibendum diam
            cursus gravida malesuada lacus augue malesuada.
          </p>
          <br />
          <Button btnType="outline-success" radius={25}>
            <span className="d-flex justify-content-center align-items-center text-white mx-3">
              <span className="text-button me-1">Compartilhe</span>
              <i className="bi bi-share-fill" />
            </span>
          </Button>
        </span>
      </div>
  );
};

export default Banner;
