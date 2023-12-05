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
            <a href="/provisiones">Provisiones</a>
            <a href="/envios">Envios</a>
            <a href="/estadisticas">Estadisticas</a>

            <a href="/galletas">Galletas</a>
            <a href="/ingredientes">Panes/ ingredientes</a>
            <a href="/cocina">Cocina</a>

            <a href="/pan-seleccionado">Cocina/ PanSeleccionao</a>
            <a href="/ordenes">Cocina/ ordenesDeCocina</a>
            <a href="/materia_prima">Materia prima</a>

            <a href="/usuarios">Usuarios</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
