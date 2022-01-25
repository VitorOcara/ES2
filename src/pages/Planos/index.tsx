import { Button } from "antd";
import React from "react";
import Footer2 from "../../components/Footer";
import PageHeader from "../../components/PageHeader";
// import { getDatabase, ref, set, push, child } from "firebase/database";

import "./styles.css";

// function createCliente1() {
//   const database = getDatabase();
//   const uid = push(child(ref(database), "posts")).key;
//   console.log(uid);
//   const name = "joao";
//   set(ref(database, "users/" + uid), {
//     name: name,
//     uid: uid,
//   });
// }

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
                <Button>Saiba Mais</Button>
              </div>
            </div>

            <div className="contentCardPlano">
              <div className="cardTextPlano">
                <strong style={{ alignSelf: "start" }}>
                  <p>PLANO PREVENTIVO</p>
                </strong>
                <p>Assistencia 24 horas</p>
                <p>6 à 11 dependentes</p>
                <p>Ornamentação</p>
                <p>Translado</p>
                <p>Urna Clássica</p>
                <p>Desconto na sala de Velório</p>
                <p>Desconto no cerimonial</p>
                <Button>Saiba Mais</Button>
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
