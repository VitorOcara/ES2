import React from "react";
import PageHeader from "../../components/PageHeader";
import "./styles.css";
import quadrocinza from "../../assets/images/cinza.png";

function Servicos() {
  return (
    <div className="container">
      <PageHeader />

      <div className="body">
        <div className="box">
          <h1>Conheça os Nossos Serviços</h1>

          <div className="card_Meta">
            <div className="card">
              <img src={quadrocinza} alt="imagem" />
              <h3>Serviços Funerários </h3>
              <p>
                Urna Mortuária de Luxo (para todos os tamanhos e peso);
                Assistência ao Cerimonial Fúnebre 24 horas; Remoção e translado
                nacional e internacional; Veículos para cortejo diferenciados;
                Necromaquiagem, preparação, higienização, tanatopraxia e
                embalsamamento; Montagem completa da câmara ardente de acordo
                com o credo religioso; Atendimento humano e profissionalizado;
                Estrutura física completa.
              </p>
            </div>

            <div className="card">
              <img src={quadrocinza} alt="imagem" />
              <h3>Cremação</h3>
              <p>
                A cremação é o processo que incenera de formna rápida e
                higiênica o corpo do falecido juntamento com a urna funerária
                (caixão). Esse processo contribui com a redução da necessidade
                de ampliação de novos espaços fisícos.
              </p>
            </div>

            <div className="card">
              <img src={quadrocinza} alt="imagem" />
              <h3>Centros de Velório</h3>
              <p>
                Os Centros de velórios da Funerária Snta Luzia contam com
                estrutura moderna e confortavel para prestar as melhores
                homenagens. Além de bem localizados, os Centros de Velórios
                estão sempre disponíveis para darem o melhor suporte e apoio nos
                momentos mais sensíveis, com atendimento e assistência 24 horas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicos;
