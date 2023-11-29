import React from "react";

const TrListaMaterias = ({ nombre }) => {
  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <select name="" id="">
          <option value="">Harina</option>
          <option value="">Leche</option>
          <option value="">Nuez</option>
        </select>
        <button className="botonConfirmacion">Agregar</button>
      </td>
    </tr>
  );
};

export default TrListaMaterias;
