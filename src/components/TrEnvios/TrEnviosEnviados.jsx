import React from "react";

const TrEnviosEnviados = ({
  cliente,
  telefono,
  direccion,
  producto,
  fecha,
  total,
  estatus = "Enviado",
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
            : estatus == "Procesado"
            ? "estatusPedido Procesado"
            : estatus == "Enviado"
            ? "estatusPedido Enviado"
            : "estatusPedido Entregado"
        }
      >
        {estatus}
      </td>
      <td>
        <button className="botonAdvertencia">Entregar</button>
      </td>
    </tr>
  );
};

export default TrEnviosEnviados;
