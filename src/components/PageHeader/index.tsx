import React from "react";
import "./styles.css";
import wpp from "../../assets/images/icon-wpp.png";
import phone from "../../assets/images/phone.png";
import face from "../../assets/images/face.png";
import insta from "../../assets/images/insta.png";
import linkedin from "../../assets/images/linkedin.png";
import logo from "../../assets/images/logo-img.png";
import logoTxt from "../../assets/images/logo-txt.png";
import { Link } from "react-router-dom";

const PageHeader: React.FC = () => {
  return (
    <header className="pageHeader">
      <div className="head">
        <div className="topBar">
          <div className="contact">
            <div className="box1">
              <img className="figure" src={wpp} alt="whatsapp" /> (88)9
              9845-5236
            </div>
            <div className="box2">
              <img className="figure" src={phone} alt="phone" /> (88)9 9845-5236
            </div>
          </div>
          <div className="social">
            <img src={face} alt="whatsapp" />
            <img className="figure" src={insta} alt="face" />
            <img className="figure" src={linkedin} alt="linkedin" />
          </div>
        </div>
      </div>
      <div className="bottomBar">
        <div className="boxLogo">
          <img src={logo} className="logo" alt="Logo" />
          <img src={logoTxt} className="logo2" alt="texto" />
        </div>
        <div className="navigation">
          <Link className="links" to="/">
            <h3 >HOME</h3>
          </Link>

          <Link className="links" to="/quemSomos">
              <h3 >QUEM SOMOS</h3>
          </Link>

          <Link className="links" to="/services">
            <h3 >SERVIÇOS</h3>
          </Link>

          <Link className="links" to="/planos">
            <h3 >PLANOS</h3>
          </Link>

          <Link className="links" to="/pagamentos">
            <h3 >PAGAMENTOS</h3>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
