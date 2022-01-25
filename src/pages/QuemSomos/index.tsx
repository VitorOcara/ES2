import React from "react";
import PageHeader from "../../components/PageHeader";
import paradise from "../../assets/images/Paradise.png";
import bandeira from "../../assets/images/bandeira.png";
import visao from "../../assets/images/visao.png";
import valores from "../../assets/images/valores.png";

import "./styles.css";

function QuemSomos() {
  return (
    <div className="container">
      <PageHeader />
      <div className="body">
        <div className="box">
          <div className="intro">
            <img src={paradise} alt="paradise" />
            <div className="text">
              <h1>Quem Somos</h1>
              <h3>
                A Funerária Santa Luzia tem como principal foco servir bem aos
                nossos clientes estando sempre presentes mesmo nesses momentos
                tão difíceis, oferecendo serviços funerários de qualidade que se
                adequam à necessidade de cada um, tendo sempre a esperança de
                minimizar a dor da perda sofrida por nossos clientes e seus
                familiares através do cuidado oferecido por nossa empresa.
              </h3>
            </div>
          </div>
          <div className="cards">
            <div className="contentCard">
              <img className="picture" src={bandeira} alt="bandeiras" />
              <div className="cardText">
                Nossa missão: é ser uma empresa de referência no atendimento do
                nosso segmento e reconhecida pela satisfação completa de nossos
                clientes.
              </div>
            </div>

            <div className="contentCard">
              <img className="picture" src={visao} alt="bandeiras" />
              <div className="cardText">
                Nossa visão: antecipar-se a suprir as necessidades do mercado,
                tendo como objetivo ser referência nos serviços que
                disponibilizamos à sociedade.
              </div>
            </div>

            <div className="contentCard">
              <img className="picture" src={valores} alt="bandeiras" />
              <div className="cardText">
                Nossos valores: fé em Deus, ética e trabalho como agente do
                progresso e bem-estar social.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuemSomos;
