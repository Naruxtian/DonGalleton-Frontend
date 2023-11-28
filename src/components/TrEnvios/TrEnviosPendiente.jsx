import React from "react";

const TrEnviosPendiente = ({
  cliente,
  telefono,
  direccion,
  producto,
  total,
  estatus,
}) => {
  return (
    <tr>
      <td>{cliente}</td>
      <td>{telefono}</td>
      <td>{direccion}</td>
      <td>{producto}</td>
      <td>${total}</td>
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
      <td>
        <button className="botonAdvertencia">Procesar</button>
        <button className="botonPeligro">Cancelar</button>
      </td>
    </tr>
  );
};

export default TrEnviosPendiente;
