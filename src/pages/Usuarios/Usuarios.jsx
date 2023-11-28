import React from "react";
import "./Usuarios.css";
import TrUsuarios from "../../components/TrUsuarios/TrUsuarios";

const Usuarios = () => {
  return (
    <div className="usuarios">
      <h2>Usuarios</h2>
      <div>
        <div className="tablaUsuarios">
          <table border="1">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Editar rol</th>
              </tr>
            </thead>
            <tbody>
              <TrUsuarios
                nombre={"ejemplo"}
                email={"ejemplo"}
                rol={"Cliente"}
              />
              <TrUsuarios
                nombre={"ejemplo"}
                email={"ejemplo"}
                rol={"Empleado"}
              />
              <TrUsuarios nombre={"ejemplo"} email={"ejemplo"} rol={"Super"} />
              <TrUsuarios
                nombre={"ejemplo"}
                email={"ejemplo"}
                rol={"Cocinero"}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
