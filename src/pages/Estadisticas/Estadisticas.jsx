import React from "react";
import "./Estadisticas.css";
import TrEstadisticas from "../../components/TrEstadisticas/TrEstadisticas";

const Estadisticas = () => {
  return (
    <div className="pedidos">
      <h2>Estadisticas</h2>
      <br />
      <div className="tablaPedidos">
        <table border="1">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Lotes cocina</th>
              <th>Total cocinados</th>
              <th>Vendidos</th>
              <th>Ventas</th>
              <th>Insumos</th>
              <th>Utilidad</th>
            </tr>
          </thead>
          <tbody>
            <TrEstadisticas
              producto={"galleta de vainilla"}
              lotes={"12"}
              total={"ejemplo"}
              vendidos={"ejemplo"}
              ventas={"ejemplo"}
              insumos={"ejemplo"}
              utilidad={"ejemplo"}
            />
          </tbody>
        </table>

        <h2>Ganancias Totales</h2>
        <h4>$100000</h4>
      </div>
    </div>
  );
};
export default Estadisticas;
