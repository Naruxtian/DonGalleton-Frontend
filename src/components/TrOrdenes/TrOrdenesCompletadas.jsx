import React from "react";

const TrOrdenesCompletadas = ({ pan, lote, panesTotal, fecha, estatus }) => {
  return (
    <tr>
      <td>{pan}</td>
      <td>{lote}</td>
      <td>{panesTotal} Pzs</td>
      <td>{fecha}</td>
      <td
        className={
          estatus == "Cancelado"
            ? "estatusPedido Cancelado"
            : estatus == "Pendiente"
            ? "estatusPedido Pendiente"
            : "estatusPedido Entregado"
        }
      >
        {estatus}
      </td>
    </tr>
  );
};
export default TrOrdenesCompletadas;
