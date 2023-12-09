import React from "react";

const TrUsuarios = ({ nombre, email, rol }) => {
  return (
    <tr>
      <td>{nombre}</td>
      <td>{email}</td>
      <td>{rol}</td>
    </tr>
  );
};

export default TrUsuarios;
