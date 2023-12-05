import React from "react";
import "./Ventas.css";
import TrTablaVentas from "../../components/TrTablaVentas/TrTablaVentas";

const Ventas = () => {
  return (
    <div className="ventas">
      <h1>ventas</h1>

      <br />

      <div className="tablaVentas">
        <table border="1">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Total</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            <TrTablaVentas
              nombre={"galleta de chocolate"}
              total={"12"}
              fecha={"12/12/2000"}
            />
            <TrTablaVentas
              nombre={"galleta de vainilla"}
              total={"12"}
              fecha={"12/12/2000"}
            />
            <TrTablaVentas
              nombre={"galleta de mantequilla"}
              total={"12"}
              fecha={"12/12/2000"}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ventas;
