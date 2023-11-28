import React from "react";

const TrEstadisticas = ({
  producto,
  lotes,
  total,
  vendidos,
  ventas,
  insumos,
  utilidad,
}) => {
  return (
    <tr>
      <td>{producto}</td>
      <td>{lotes}</td>
      <td>{total}</td>
      <td>{vendidos}</td>
      <td>{ventas}</td>
      <td>{insumos}</td>
      <td>{utilidad}</td>
    </tr>
  );
};

export default TrEstadisticas;
