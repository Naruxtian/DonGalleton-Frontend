import React from "react";
import "./TrTablaPedidos.css";

const TrTablaPedidos = ({ nombre, total, direccion, fecha, estatus }) => {
  return (
    <tr>
      <td>{nombre}</td>
      <td>${total}</td>
      <td>{direccion}</td>
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

export default TrTablaPedidos;
