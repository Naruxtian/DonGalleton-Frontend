import React from "react";

const TrListaMaterias = ({ nombre, id, handleAgregarIngredientes  }) => {
  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <input type="number" name="cantidadIngrediente" id="cantidadIngrediente" placeholder="Cantidad del ingrediente" />
        <button className="botonConfirmacion" onClick={() => handleAgregarIngredientes({ id, nombre })}>Agregar</button>
      </td>
    </tr>
  );
};

export default TrListaMaterias;
