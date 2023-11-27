import React from "react";

const TrTablasProveedores = ({
  nombre,
  telefono,
  empresa,
  producto,
  costo,
  direccion,
  correo,
  activarFormulario,
  activarAgregar,
}) => {
  return (
    <tr>
      <td>
        <button className="botonPrimario" onClick={() => activarAgregar()}>
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
          onClick={() => activarFormulario()}
        >
          edit
        </button>
        <button className="botonPeligro">Eliminar</button>
      </td>
    </tr>
  );
};

export default TrTablasProveedores;
