import React from "react";

const TrTablasProveedores = ({
  id,
  nombre,
  telefono,
  empresa,
  producto,
  costo,
  direccion,
  correo,
  activarFormulario,
  activarAgregar,
  handleEliminarProveedor,
  handleMostrarPedido
}) => {
  return (
    <tr>
      <td>
        <button className="botonPrimario" onClick={handleMostrarPedido}>
          +
        </button>
      </td>
      <td>{nombre}</td>
      <td>{telefono}</td>

      <td>{empresa}</td>
      <td>{producto}</td>

      <td>${costo}</td>
      <td>{direccion}</td>
      <td>{correo}</td>
      <td>
        <button
          className="botonAdvertencia"
          onClick={() => activarFormulario(id)}
        >
          edit
        </button>
        <button className="botonPeligro" onClick={handleEliminarProveedor}>Eliminar</button>
      </td>
    </tr>
  );
};

export default TrTablasProveedores;
