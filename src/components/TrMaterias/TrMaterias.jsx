import React from "react";
import { useState } from "react";

const TrMaterias = ({ producto, inventario, unidad, handleRestarInventario, handleMermar }) => {
  const [cantidadARestar, setCantidadARestar] = useState();

  const restarInventario = () => {
    handleRestarInventario(producto, cantidadARestar);
    setCantidadARestar(1);
  };
  
  return (
    <tr>
      <td>{producto}</td>
      <td>{inventario}</td>
      <td>{unidad}</td>
      <td>
        <input type="number" name="restar" id="restar" value={cantidadARestar}
          onChange={(e) => setCantidadARestar(parseInt(e.target.value, 10) || 0)} />
        <button className="botonPeligro" onClick={handleMermar}>Eliminar</button>
      </td>
    </tr>
  );
};

export default TrMaterias;
