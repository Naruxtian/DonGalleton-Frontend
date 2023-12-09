import React from "react";

const TrEnviosPendiente = ({
  cliente,
  telefono,
  direccion,
  producto,
  fecha,
  total,
  estatus = "Pendiente",
  id,
  handleProcesarEnvio,
  handleCancelarEnvio
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
        <button className="botonAdvertencia" onClick={handleProcesarEnvio}>Procesar</button>
        <button className="botonPeligro" onClick={handleCancelarEnvio}>Cancelar</button>
      </td>
    </tr>
  );
};

export default TrEnviosPendiente;
