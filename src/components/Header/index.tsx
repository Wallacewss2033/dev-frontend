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
      <nav className="navbar navbar-expand-lg bg-primary hy-100" data-bs-theme="dark">
        <div className="container-fluid bg-primary">
          <div className="m-4">
            <img className="logo" src={Logo} alt="Logo" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse text-white"
            id="navbarToggleExternalContent"
          >
            <span className="nav-items navbar-text me-5">
              <ul className="navbar-nav">
                {navItems.map((item, index) => {
                  return (
                    <NavItem key={index} text={item.text} drop={item.drop} />
                  );
                })}
              </ul>
            </span>
            <div className="nav-buttons d-flex">
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
