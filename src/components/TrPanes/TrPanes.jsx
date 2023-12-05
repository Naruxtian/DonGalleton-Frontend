import React from "react";

const TrPanes = ({
  id,
  nombre,
  inventario,
  precio,
  descripcion,
  img,
  activarFormulario,
  handleEliminarGalleta,
  handleMostrarIngredientes
}) => {
  return (
    <tr>
      <td>{nombre}</td>
      <td>{inventario}</td>
      <td>{precio} Pzs</td>
      <td>{descripcion}</td>
      <td>
        <img src={img} alt="" />
      </td>
      <td>
        <button className="botonConfirmacion" onClick={handleMostrarIngredientes}>Ingredientes</button>
      </td>
      <td>
        <button className="botonPeligro" onClick={handleEliminarGalleta}>delete</button>
        <br />
        <br />
        <button
          className="botonAdvertencia"
          onClick={() => activarFormulario(id)}
        >
          Editar
        </button>
      </td>
    </tr>
  );
};
export default TrPanes;
