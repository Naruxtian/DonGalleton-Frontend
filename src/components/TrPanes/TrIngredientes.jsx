import React from "react";

const TrIngredientes = ({ nombre, cantidad }) => {
  return (
    <tr>
      <td>{nombre}</td>
      <td>{cantidad}</td>
      <td>
        <button className="botonPeligro">x</button>
      </td>
    </tr>
  );
};

export default TrIngredientes;
