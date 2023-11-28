import React from "react";

const TrEnviosCancelados = ({
  cliente,
  telefono,
  direccion,
  producto,
  total,
  fecha,
  estatus = "Cancelado",
}) => {
  return (
    <tr>
      <td>{cliente}</td>
      <td>{telefono}</td>
      <td>{direccion}</td>
      <td>{producto}</td>
      <td>${total}</td>

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

export default TrEnviosCancelados;
