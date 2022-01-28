import { Button, Form, Input } from "antd";
import Swal from "sweetalert2";
import React, { useState } from "react";
import Footer2 from "../../../components/Footer";
import { database } from "../../../config/firebase";
import PageHeader from "../../../components/PageHeader/";
import "./styles.css";
import { child, push, ref, set } from "firebase/database";

const PlanoPersonalizado: React.FC = () => {
  const [Nome, setNome] = useState("");
  const [DataNascimento, setDataNascimento] = useState(Date);
  const [Cpf, setCpf] = useState("");
  const [Rua, setRua] = useState("");
  const [Bairro, setBairro] = useState("");
  const [Associados, setAssociados] = useState("");
  const [Ornamentacao, setOrnamentacao] = useState("");
  const [Translado, setTranslado] = useState("");
  const [Urna, setUrna] = useState("");
  const [Cerimonia, setCerimonia] = useState("");

  function submitForm() {
    const uid = push(child(ref(database), "posts")).key;
    console.log(uid);
    Swal.showLoading();

    set(ref(database, "clientes/" + uid), {
      Nome,
      Cpf,
      DataNascimento,
      Associados,
      Ornamentacao,
      Translado,
      Urna,
      Cerimonia,
    });
    set(ref(database, "clientes/" + uid + "/endereco"), {
      Rua,
      Bairro,
    });
    
    Swal.close();

  }

  return (
    <div className="container">
      <PageHeader />
      <div className="body">
        <div className="box">
          <h1>Plano personalizado</h1>
          <Form onFinish={() => submitForm()}>
            <div className="FormContent">
              <div className="FormCliente">
                <strong>
                  <p>Inforções pessoais</p>
                </strong>
                <label htmlFor="Nome">Nome Completo</label>
                <Form.Item
                  className="input"
                  name="Nome"
                  rules={[{ required: true, message: "CAMPO OBRIGATÓRIO!!" }]}
                >
                  <Input
                    name="Nome"
                    type="text"
                    onChange={(e) => {
                      setNome(e.target.value);
                    }}
                  />
                </Form.Item>
                <label htmlFor="DataNascimento">Data de Nascimento</label>
                <Form.Item
                  name="DataNascimento"
                  className="input"
                  rules={[{ required: true, message: "CAMPO OBRIGATÓRIO!!" }]}
                >
                  <Input
                    name="DataNascimento"
                    type="date"
                    onChange={(e) => {
                      setDataNascimento(e.target.value);
                    }}
                  />
                </Form.Item>

                <label htmlFor="Cpf">CPF</label>
                <Form.Item
                  name="Cpf"
                  className="input"
                  rules={[{ required: true, message: "CAMPO OBRIGATÓRIO" }]}
                >
                  <Input
                    name="Cpf"
                    type="text"
                    onChange={(e) => {
                      setCpf(e.target.value);
                    }}
                  />
                </Form.Item>
                <div className="endereco">
                  <strong>
                    <p>ENDEREÇO</p>
                  </strong>
                  <div className="label">
                    <div>
                      <label htmlFor="rua">Rua</label>
                      <Form.Item
                        className="input"
                        name="Rua"
                        rules={[
                          { required: true, message: "CAMPO OBRIGATÓRIO" },
                        ]}
                      >
                        <Input
                          required={true}
                          name="Rua"
                          type="text"
                          onChange={(e) => {
                            setRua(e.target.value);
                          }}
                        />
                      </Form.Item>
                    </div>

                    <div>
                      <label htmlFor="bairro">Bairro</label>
                      <Form.Item
                        className="input"
                        name="Bairro"
                        rules={[
                          { required: true, message: "CAMPO OBRIGATÓRIO" },
                        ]}
                      >
                        <Input
                          name="Bairro"
                          type="text"
                          onChange={(e) => {
                            setBairro(e.target.value);
                          }}
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{ paddingLeft: "1rem", border: "0" }}
                className="FormCliente"
              >
                <strong>
                  <p>Personalize seu Plano</p>
                </strong>
                <strong>
                  <p>Número de Associados</p>
                </strong>
                <div className="radio">
                  <div className="textContent">
                    <input
                      name="associados"
                      onChange={() => {
                        setAssociados("5");
                      }}
                      type="radio"
                      style={{ width: "20px" }}
                    />
                    <span>Até 5 associados</span>
                  </div>
                  <div className="textContent">
                    <input
                      name="associados"
                      onChange={() => {
                        setAssociados("10");
                      }}
                      type="radio"
                      style={{ width: "20px" }}
                    />
                    <span>Até 10 associados</span>
                  </div>
                  <div className="textContent">
                    <input
                      onChange={() => {
                        setAssociados("+10");
                      }}
                      name="associados"
                      type="radio"
                      style={{ width: "20px" }}
                    />
                    <span>Mais de 10 associados</span>
                  </div>
                </div>

                <strong>
                  <p>Ornamentação</p>
                </strong>
                <div className="radio">
                  <div className="textContent">
                    <input
                      value="simples"
                      onChange={() => {
                        setOrnamentacao("simples");
                      }}
                      name="ornamentação"
                      type="radio"
                      style={{ width: "20px" }}
                    />
                    <span>Simples</span>
                  </div>
                  <div className="textContent">
                    <input
                      value="classica"
                      onChange={() => {
                        setOrnamentacao("classica");
                      }}
                      name="ornamentação"
                      type="radio"
                      style={{ width: "20px" }}
                    />
                    <span>Clássica</span>
                  </div>
                  <div className="textContent">
                    <input
                      onChange={() => {
                        setOrnamentacao("luxuosa");
                      }}
                      value="luxuosa"
                      name="ornamentação"
                      type="radio"
                      style={{ width: "20px" }}
                    />
                    <span>Luxuosa</span>
                  </div>
                </div>

                <strong>
                  <p>Translado</p>
                </strong>
                <div className="radio">
                  <div className="textContent">
                    <input
                      onChange={() => {
                        setTranslado("rodoviario");
                      }}
                      name="translado"
                      type="radio"
                      style={{ width: "20px" }}
                    />
                    <span>Rodoviário</span>
                  </div>
                  <div className="textContent">
                    <input
                      onChange={() => {
                        setTranslado("aereo");
                      }}
                      name="translado"
                      type="radio"
                      style={{ width: "20px" }}
                    />
                    <span>Aéreo</span>
                  </div>
                  <div className="textContent">
                    <input
                      onChange={() => {
                        setTranslado("maritimo");
                      }}
                      name="translado"
                      type="radio"
                      style={{ width: "20px" }}
                    />
                    <span>Marítimo</span>
                  </div>
                </div>

                <strong>
                  <p>Urna</p>
                </strong>
                <div className="radio">
                  <div className="textContent">
                    <input
                      value="simples"
                      onChange={() => {
                        setUrna("simples");
                      }}
                      name="urna"
                      type="radio"
                      style={{ width: "20px" }}
                    />
                    <span>Simples</span>
                  </div>
                  <div className="textContent">
                    <input
                      value="classica"
                      onChange={() => {
                        setUrna("classica");
                      }}
                      name="urna"
                      type="radio"
                      style={{ width: "20px" }}
                    />
                    <span>Clássica</span>
                  </div>
                  <div className="textContent">
                    <input
                      onChange={() => {
                        setUrna("luxuosa");
                      }}
                      value="luxuosa"
                      name="urna"
                      type="radio"
                      style={{ width: "20px" }}
                    />
                    <span>Luxuosa</span>
                  </div>
                </div>
                <strong>
                  <p>Cerimônia</p>
                </strong>
                <div className="radio">
                  <div className="textContent">
                    <input
                      value="simples"
                      onChange={() => {
                        setCerimonia("sepultamento");
                      }}
                      name="cerimonia"
                      type="radio"
                      style={{ width: "20px" }}
                    />
                    <span>Sepultamento</span>
                  </div>
                  <div className="textContent" style={{ width: "70%" }}>
                    <input
                      value="classica"
                      onChange={() => {
                        setCerimonia("cremacao");
                      }}
                      name="cerimonia"
                      type="radio"
                      style={{ width: "20px" }}
                    />
                    <span>Cremação</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "1rem",
                width: "100%",
              }}
            >
              <Button className="Button" type="primary" htmlType="submit">
                CADASTRAR-SE
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default PlanoPersonalizado;
