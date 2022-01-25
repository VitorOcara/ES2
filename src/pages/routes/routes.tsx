import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Pagamentos from "../Pagamentos";
import Planos from "../Planos";
import PlanoPersonalizado from "../Planos/PlanoPersonalizado";
import QuemSomos from "../QuemSomos";
import Services from "../Servicos";

function RoutesPath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/quemSomos" element={<QuemSomos />} />
      <Route path="/pagamentos" element={<Pagamentos />} />
      <Route path="/planos" element={<Planos />} />
      <Route path="/planoPersonalizado" element={<PlanoPersonalizado />} />

    </Routes>   
  );
}
export default RoutesPath;
