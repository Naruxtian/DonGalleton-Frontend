import React from "react";

const TrMaterias = ({ producto, inventario, unidad }) => {
  return (
    <tr>
      <td>{producto}</td>
      <td>{inventario}</td>
      <td>{unidad}</td>
      <td>
        <input type="number" name="" id="" />
        <button className="botonPeligro">Eliminar</button>
      </td>
    </tr>
  );
};

export default TrMaterias;
