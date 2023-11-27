import React from "react";
import "./TrTablaVentas.css";

const TrTablaVentas = ({ nombre, total, fecha }) => {
  return (
    <tr>
      <td>{nombre}</td>
      <td>${total}</td>
      <td>{fecha}</td>
    </tr>
  );
};

export default TrTablaVentas;
