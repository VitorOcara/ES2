import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Footer2 from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
// import { getDatabase, ref, set, push, child } from "firebase/database";

import "./styles.css";

function Planos() {
  return (
    <div className="container">
      <PageHeader />
      <div className="body">
        <div className="box">
          <h1>Nossos Planos</h1>
          <div className="separator">
            <div className="contentCardPlano">
              <div className="cardTextPlano">
                <strong style={{ alignSelf: "start" }}>
                  <p>PLANO BASE</p>
                </strong>
                <p>Assistencia 24 horas</p>
                <p>1 à 5 dependentes</p>
                <p>Ornamentação</p>
                <p>Translado</p>
                <p>Urna Clássica</p>
                <p>Desconto na sala de Velório</p>
                <p>Desconto no cerimonial</p>
                <p>.</p>

                <Button>Saiba Mais</Button>
              </div>
            </div>

            <div className="contentCardPlano">
              <div className="cardTextPlano">
                <strong style={{ alignSelf: "start" }}>
                  <p>PLANO ESSENCIAL</p>
                </strong>
                <p>Assistencia 24 horas</p>
                <p>1 à 11 dependentes</p>
                <p>Ornamentação</p>
                <p>Translado</p>
                <p>Urna Luxo</p>
                <p>Sala de Velório</p>
                <p>Cremação</p>
                <p>.</p>
                <Button>Saiba Mais</Button>
              </div>
            </div>

            <div className="contentCardPlano">
              <div className="cardTextPlano">
                <strong style={{ alignSelf: "start" }}>
                  <p>PLANO PERSONALIZADO</p>
                </strong>
                <p>Assistencia 24 horas</p>
                <p>Escolher qtd. de Dependentes</p>
                <p>Ornamentação de sua escolha</p>
                <p>Translado</p>
                <p>Urna de sua escolha</p>
                <p>Sala de velorio de sua escolha</p>
                <p>Cremação ou sepultamento</p>
                <p>.</p>
                <Link to="/planoPersonalizado">
                  <Button>Saiba Mais</Button>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Planos;
