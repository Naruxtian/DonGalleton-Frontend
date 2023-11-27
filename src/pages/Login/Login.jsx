import "./Login.css";

const Login = () => {
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
          <h2>Login</h2>
          <input
            className="InputsLogin"
            type="text"
            name=""
            id=""
            placeholder="Ecribe tu correo"
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
          <br />
          <br />

          <div className="recordarme">
            <input type="checkbox" name="" id="" />
            <h4>Recuerdame</h4>
          </div>

          <br />
          <button className="botonPrimario">Iniciar Sesion</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
