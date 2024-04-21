import React from "react";
import Logo from "../../assets/logo.png";
import NavItem from "../NavItem";
import "./styles.css";
import Button from "../Button";


const Header: React.FC = () => {
  const navItems = [
    { text: "Inicio", drop: false },
    { text: "Ensino", drop: true },
    { text: "Estrutura", drop: true },
    { text: "Financeiro", drop: false },
    { text: "Depoimentos", drop: false },
  ];

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary hy-100">
        <div className="container-fluid">
          <div className="m-4">
            <img className="logo" src={Logo} alt="Logo" />
          </div>
          <div
            className="collapse navbar-collapse ms-5 text-white"
            id="navbarText"
          >
            <span className="navbar-text me-5">
              <ul className="navbar-nav">
                {navItems.map((item, index) => {
                  return <NavItem key={index} text={item.text} drop={item.drop} />;
                })}
              </ul>
            </span>
            <div className="d-flex justify-content-end w-100">
                <div className="navbar-nav mx-1">
                  <Button btnType="outline-white" radius={25}>
                    <span className="mx-2">Fale pelo WhatsApp</span>
                    <i className="bi bi-whatsapp"></i>
                  </Button>
                </div>
                <div className="navbar-nav mx-1">
                  <Button btnType="outline-white" radius={25}>
                    <i className="mx-1 bi bi-telephone-fill" />
                    <i className="mx-1 bi bi-messenger" />
                    <i className="mx-1 bi bi-envelope" />
                  </Button>
                </div>
                <div className="navbar-nav mx-1">
                  <Button btnType="white" radius={25}>
                    <span style={{ fontWeight: 600 }} className="text-primary">
                      Inscreva-se
                    </span>
                  </Button>
                </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
