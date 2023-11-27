import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="MensajePaginaNoEncontrada">
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.O4JBoGZZeG_sCWvGxLIp0QHaGk?rs=1&pid=ImgDetMain"
          alt=""
        />
      </div>

      <div className="divMensaje">
        <h1>Pagina no encontrada</h1>
        <h3>Intenta accediendo al link correcto</h3>
      </div>
    </div>
  );
};

export default NotFound;
