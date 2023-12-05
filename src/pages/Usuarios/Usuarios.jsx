import React, {useState, useEffect} from "react";
import "./Usuarios.css";
import TrUsuarios from "../../components/TrUsuarios/TrUsuarios";
import swal from "sweetalert";

const Usuarios = () => {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const getUsuarios = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/users/getAll");
        const data = await response.json();
        if (response.ok) {
          const usuariosArray = Object.values(data.data);
          setUsuarios(usuariosArray);
        } else {
          console.error("Error al obtener los usuarios", data);
        }
      } catch (error) {
        console.error("Error en la solicitud de obtener los usuarios", error);
      }
    };
    getUsuarios();
  }, [])

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
              {
                Array.isArray(usuarios) && usuarios.map((usuario) => (
                  <TrUsuarios
                    key={usuario.id}
                    nombre={usuario.nombre}
                    email={usuario.email}
                    rol={usuario.rol}
                  />
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
