import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="barraNavegacion">
      <div className="logoTipo">
        <div className="imagenTitulo">
          <img
            src="https://th.bing.com/th/id/OIP.O4JBoGZZeG_sCWvGxLIp0QHaGk?rs=1&pid=ImgDetMain"
            alt=""
          />
          <h1>El Bollo Central</h1>
        </div>
        <div className="burger-menu" onClick={toggleNav}>
          &#9776;
        </div>
        <div className={showNav ? "nav-links show div" : "nav-links div"}>
          <nav className={showNav ? "nav-links show" : "nav-links"}>
            <a href="/">Inicio</a>
            <a href="/contactanos">Contactanos</a>
            <a href="/login">Iniciar Sesion</a>
            <a href="/registrarse">Registrarse</a>

            <a href="/catalogo">Catalogo</a>
            <a href="/carrito">Carrito</a>
            <a href="/pedidos">Mis Pedidos</a>

            <a href="/ventas">Ventas</a>
            <a href="/proveedores">Proveedores</a>
            <a href="/ventas">Provisiones</a>
            <a href="/ventas">Envios</a>
            <a href="/ventas">Estadisticas</a>

            <a href="/ventas">Panes</a>
            <a href="/ventas">Cocina</a>
            <a href="/ventas">Materia prima</a>

            <a href="/ventas">Usuarios</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
