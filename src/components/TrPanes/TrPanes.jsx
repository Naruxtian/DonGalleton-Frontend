import React from "react";

const TrPanes = ({
  nombre,
  inventario,
  precio,
  descripcion,
  img,
  activarFormulario,
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
        <button className="botonConfirmacion">Ingredientes</button>
      </td>
      <td>
        <button className="botonPeligro">delete</button>
        <br />
        <br />
        <button
          className="botonAdvertencia"
          onClick={() => activarFormulario(true)}
        >
          edit
        </button>
      </td>
    </tr>
  );
};
export default TrPanes;
