import React from "react";
import { useState } from "react";

const TrMaterias = ({ producto, inventario, unidad, handleRestarInventario, handleMermar, cantidadMermar, setCantidadMermar }) => {
  
  return (
    <tr>
      <td>{producto}</td>
      <td>{inventario}</td>
      <td>{unidad}</td>
      <td>
        <input type="number" name="restar" id="restar" value={cantidadMermar}
          onChange={(e) => setCantidadMermar(parseInt(e.target.value, 10) || 0)} />
        <button className="botonPeligro" onClick={handleMermar}>Eliminar</button>
      </td>
    </tr>
  );
};

export default TrMaterias;
