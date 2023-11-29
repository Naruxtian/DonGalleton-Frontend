import React from "react";
import TrOrdenes from "../../components/TrOrdenes/TrOrdenes";
import TrOrdenesCompletadas from "../../components/TrOrdenes/TrOrdenesCompletadas";

const Ordenes = () => {
  return (
    <div className="pedidos">
      <h2>Mis pedidos</h2>
      <br />

      <h4>ordenes pendientes</h4>
      <div className="tablaOrdenes">
        <table border="1">
          <thead>
            <tr>
              <th>Pan</th>
              <th>Lote</th>
              <th>Panes en total</th>
              <th>Fecha</th>
              <th>Estatus</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <TrOrdenes
              pan={"galleta de nuez"}
              lote={"12"}
              panesTotal={"12"}
              fecha={"12/12/2000"}
              estatus={"Pendiente"}
            />
          </tbody>
        </table>
      </div>

      <h4>ordenes completadas</h4>
      <div className="tablaOrdenes">
        <table border="1">
          <thead>
            <tr>
              <th>Pan</th>
              <th>Lote</th>
              <th>Panes en total</th>
              <th>Fecha</th>
              <th>Estatus</th>
            </tr>
          </thead>
          <tbody>
            <TrOrdenesCompletadas
              pan={"galleta de nuez"}
              lote={"12"}
              panesTotal={"12"}
              fecha={"12/12/2000"}
              estatus={"Entregado"}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ordenes;
