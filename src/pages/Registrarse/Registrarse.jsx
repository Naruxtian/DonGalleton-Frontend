import "./Registrarse.css";

const Registrarse = () => {
  return (
    <div className="LoginDiv">
      <div className="divImagenLogin">
        <img
          src="https://th.bing.com/th/id/OIP.O4JBoGZZeG_sCWvGxLIp0QHaGk?rs=1&pid=ImgDetMain"
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
                name=""
                id=""
                placeholder="Ecribe tu Nombre"
              />
              <br />
              <br />
              <input
                className="InputsLogin"
                type="text"
                name=""
                id=""
                placeholder="Ecribe tu Correo"
              />
              <br />
              <br />
              <input
                className="InputsLogin"
                type="text"
                name=""
                id=""
                placeholder="Ecribe tu contraseña"
              />
            </div>

            <div className="infoContacto">
              <input
                className="InputsLogin"
                type="number"
                name=""
                id=""
                placeholder="Ecribe tu Telefono"
              />
              <br />
              <br />
              <input
                className="InputsLogin"
                type="text"
                name=""
                id=""
                placeholder="Ecribe tu Direccion"
              />
            </div>
          </div>

          <br />
          <br />

          <br />
          <button className="botonConfirmacion">Registrarse</button>
        </div>
      </div>
    </div>
  );
};

export default Registrarse;
