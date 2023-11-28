import React from "react";

const TrProvisionesHistorial = ({
  proveedor,
  empresa,
  telefono,
  materia,
  cantidad,
  costo,
  fecha,
  fechaRecepcion,
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

      <td>{fechaRecepcion}</td>
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

export default TrProvisionesHistorial;
