import React from "react";
import "./styles.css";
import NavItem from "../NavItem";
import Button from "../Button";
import logoWhite from "../../assets/logo-branco.png";

const Footer: React.FC = () => {
  const colOne = [
    { text: "Ensino" },
    { text: "Metodologia PBL" },
    { text: "Matriz Curricular de Medicina" },
    { text: "Diferenciais" },
    { text: "Corpo Docente" },
    { text: "Conheça nossa estrutura" },
    { text: "Financiamento do curso de Medicina" },
    { text: "Depoimentos" },
    { text: "Inscreva-se" },
  ];

  const colTwo = [
    { text: "Tudo sobre o curso de Medicina" },
    { text: "Calculadora FIES para Medicina" },
    { text: "Matrícula" },
    { text: "Resultados" },
    { text: "Editais, manuais e regulamentos" },
    { text: "Visite o site da UNEX" },
  ];
  const colTree = [
    { text: "Conheça nossa estrutura" },
    { text: "Medicina em Feira de Santana" },
    { text: "Medicina em Itabuna" },
  ];

  return (
    <footer className="card-footer bg-primary col">
      <div className="container-fluid bg-primary d-flex justify-content-center align-items-center">
        <div className="box-center-footer d-flex justify-content-between">
          <div className="box-items">
            <div className="box-items-title">Medicina UNEX</div>
            <div className="items-text">
              <ul>
                {colOne.map((item, index) => {
                  return <NavItem key={index} text={item.text} />;
                })}
              </ul>
            </div>
          </div>
          <div className="box-items">
            <div className="box-items-title">Links úteis</div>
            <div className="items-text">
              <ul>
                {colTwo.map((item, index) => {
                  return <NavItem key={index} text={item.text} />;
                })}
              </ul>
            </div>
          </div>
          <div className="box-items">
            <div className="box-items-title">Nossas Unidades</div>
            <div className="items-text">
              <ul>
                {colTree.map((item, index) => {
                  return <NavItem key={index} text={item.text} />;
                })}
              </ul>
              Siga-nos
              <ul>
                <span>
                  <i className="social-media-icon bi bi-facebook icon" />
                  <NavItem text="Facebook" />
                </span>
                <span>
                  <i className="social-media-icon bi bi-instagram icon" />
                  <NavItem text="Instagram" />
                </span>
                <span>
                  <i className="social-media-icon bi bi-youtube icon" />
                  <NavItem text="Youtube" />
                </span>
              </ul>
            </div>
          </div>
          <div className="box-items">
            <div className="box-items-title">Entre em contato</div>
            <div className="items-text">
              <div className="box-buttons">
                <Button btnType="outline-white" radius={25}>
                  <span className="mx-2">Fale pelo WhatsApp</span>
                  <i className="bi bi-whatsapp"></i>
                </Button>

                <Button btnType="outline-white" radius={25}>
                  <i className="mx-1 bi bi-telephone-fill" />
                  <i className="mx-1 bi bi-messenger" />
                  <i className="mx-1 bi bi-envelope" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer container-fluid d-flex justify-content-center align-items-center">
        <div className="box-center-footer">
          <div className="box-sub-footer d-flex row-cols-3 align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-center">
              <p className="box-info-footer">
                IMES - Instituto Mantenedor de Ensino Superior da Bahia Ltda
                CNPJ 04.670.333/0001-89
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <img alt="log-white" src={logoWhite} />
            </div>
            <div className="d-flex align-items-center justify-content-end">
              <p className="box-info-footer">Visite o site da UNEX</p>
            </div>
          </div>
          <div className="box-sub-footer d-flex align-items-center justify-content-center">
            <p className="box-info-footer">
              FTC Itabuna * Alteração de denominação da instituição protocolada
              conforme processo e-MEC 202322549 em 02/08/2023.
            </p>
          </div>
          <div className="box-tree">
            <div className="box-sub-footer d-flex row-cols-4">
              <p className="box-info-footer d-flex align-items-center justify-content-center">Política de Privacidade</p>
              <p className="box-info-footer d-flex align-items-center justify-content-center">Política de Cookies</p>
              <p className="box-info-footer d-flex align-items-center justify-content-center">Solicitação do titular de dados</p>
              <p className="box-info-footer d-flex align-items-center justify-content-center">Notificação de Incidente</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
