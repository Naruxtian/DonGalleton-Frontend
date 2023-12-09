import React, {useState, useEffect} from "react";
import "./Usuarios.css";
import TrUsuarios from "../../components/TrUsuarios/TrUsuarios";
import swal from "sweetalert";

const Usuarios = () => {

  const [usuarios, setUsuarios] = useState([]);
  const [user, setUser] = useState([]);

  const handleRegistrarUsuario = async () => {
    const email = document.getElementById("correo").value;
    const password = document.getElementById("contrasena").value;
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;


    if (!nombre || !email || !password || !telefono || !direccion ) {
      swal("Error", "Todos los campos son obligatorios", "error");
      return;
    }

    const requestBody = {
      email,
      password,
      nombre,
      rol: "Cliente",
      telefono,
      direccion,
    };

    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Usuario registrado", data);
        const updatedUsuario = [...user, data.data];
        setUser(updatedUsuario);
        swal("Registro exitoso", "", "success");
        document.getElementById("correo").value = "";
        document.getElementById("contrasena").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("direccion").value = "";
        window.location.href = "/login";
      } else {
        console.error("Error al registrar el usuario", data);
      }
    } catch (error) {
      console.error("Error en la solicitud del registro del usuario", error);
    }
  };
  
  
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
      <h2>Usuarios</h2> <br />
      <h3>Clientes</h3>
      <div>
        <div className="tablaUsuarios">
          <table className="table-bordered" border="1">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.isArray(usuarios) && usuarios
                .filter((usuario) => usuario.rol === "Cliente" )
                .map((usuario) => (
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

      <h3>Empleados</h3>
      <div>
        <div className="tablaUsuarios">
          <table className="table-bordered" border="1">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Rol</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.isArray(usuarios) && usuarios
                .filter((usuario) => usuario.rol === "Admin" || usuario.rol === "Cocinero" )
                .map((usuario) => (
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
