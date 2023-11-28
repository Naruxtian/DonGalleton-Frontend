import React from "react";

const TrUsuarios = ({ nombre, email, rol }) => {
  return (
    <tr>
      <td>{nombre}</td>
      <td>{email}</td>
      <td>{rol}</td>

      <td>
        <select name="" id="">
          <option value="Super" selected={rol == "Super" ? true : false}>
            Super admin
          </option>
          <option value="Cocinero" selected={rol == "Cocinero" ? true : false}>
            Cocinero
          </option>
          <option value="Empleado" selected={rol == "Empleado" ? true : false}>
            Empleado
          </option>
          <option value="Cliente" selected={rol == "Cliente" ? true : false}>
            Cliente
          </option>
        </select>
        <button className="botonAdvertencia">Cambiar</button>
      </td>
    </tr>
  );
};

export default TrUsuarios;
