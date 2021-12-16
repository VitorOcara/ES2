import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Services from "../Services";

function RoutesPath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
    </Routes>   
  );
}
export default RoutesPath;
