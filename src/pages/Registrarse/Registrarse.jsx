import React, { useState, useEffect } from "react";
import "./Registrarse.css";
import swal from "sweetalert";

const Registrarse = () => {
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

  return (
    <div className="LoginDiv">
      <div className="divImagenLogin">
        <img
          src="/src/assets/donGalleto.png"
          alt=""
        />
      </div>
      <div className="formularioLogin">
        <div className="formularioFormato">
          <h2>Registro</h2>
          <div className="formularioRegistro">
            <div className="infoUsuario">
              <input
                className="InputsLogin"
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Ecribe tu Nombre"
              />
              <br />
              <br />
              <input
                className="InputsLogin"
                type="text"
                name="correo"
                id="correo"
                placeholder="Ecribe tu Correo"
              />
              <br />
              <br />
              <input
                className="InputsLogin"
                type="password"
                name="contrasena"
                id="contrasena"
                placeholder="Ecribe tu contraseña"
              />
            </div>

            <div className="infoContacto">
              <input
                className="InputsLogin"
                type="text"
                name="telefono"
                id="telefono"
                maxLength={10}
                placeholder="Ecribe tu Telefono"
              />
              <br />
              <br />
              <textarea
               name="direccion"
               id="direccion" 
               placeholder="Escribe tu direccion"
               />
            </div>
          </div>

          <br />
          <br />

          <br />
          <button className="botonConfirmacion" onClick={handleRegistrarUsuario}>Registrarse</button>
        </div>
      </div>
    </div>
  );
};

export default Registrarse;
