import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log("Usuario logueado correctamente", responseData);

        // Modifica estas líneas para almacenar en localStorage
        localStorage.setItem("usuario", JSON.stringify(responseData.data.id));
        localStorage.setItem(
          "direccion",
          JSON.stringify(responseData.data.direccion)
        );

        // Corrige el redireccionamiento
        window.location.href = "/catalogo";
      } else {
        console.error("Error al iniciar sesión", responseData);
      }
    } catch (error) {
      console.error("Error en la solicitud de inicio de sesión", error);
    }
  };

  return (
    <div className="LoginDiv">
      <div className="divImagenLogin">
        <img src="/src/assets/donGalleto.png" alt="" />
      </div>
      <div className="formularioLogin">
        <div className="formularioFormato">
          <h2>Login</h2>
          <input
            className="InputsLogin"
            type="text"
            name="email"
            id="email"
            value={email}
            placeholder="Escribe tu correo"
            onChange={handleEmailChange}
          />
          <br />
          <br />

          <input
            className="InputsLogin"
            type="password"
            name="password"
            id="password"
            placeholder="Escribe tu contraseña"
            value={password}
            onChange={handlePasswordChange}
          />
          <br />
          <br />

          <br />
          <button className="botonPrimario" onClick={handleLogin}>
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
