import React from "react";

const TrProvisionesPendientes = ({
  proveedor,
  empresa,
  telefono,
  materia,
  cantidad,
  costo,
  fecha,
  estatus,
}) => {
  return (
    <tr>
      <td>{proveedor}</td>
      <td>{empresa}</td>
      <td>{telefono}</td>
      <td>{materia}</td>
      <td>{cantidad}</td>
      <td>{costo}</td>
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
      <td>
        <button className="botonPrimario">Confirmar Recepcion</button>
      </td>
    </tr>
  );
};

export default TrProvisionesPendientes;
