import React from "react";
import "./TrTablaPedidos.css";

const estatusDescripcion  = {
  "1": "Pendiente",
  "2": "Procesado",
  "3": "Enviado",
  "4": "Cancelado",
  "5": "Entregado",
};

const TrTablaPedidos = ({ nombre, total, direccion, fecha, estatus }) => {
  const estatusTexto = estatusDescripcion[estatus] || "Desconocido";

  return (
    <tr>
      <td>{nombre}</td>
      <td>${total}</td>
      <td>{direccion}</td>
      <td>{fecha}</td>
      <td className={`estatusPedido ${estatusTexto.replace(" ", "")}`}>
        {estatusTexto}
      </td>
    </tr>
  );
};

export default TrTablaPedidos;
