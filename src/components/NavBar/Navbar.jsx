import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedRole = JSON.parse(localStorage.getItem("rol"));
    console.log(storedRole);

    if (storedRole) {
      setUserRole(storedRole);
    }

    const usuarioStorage = localStorage.getItem("usuario");
    setIsLoggedIn(!!usuarioStorage);
  }, []);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const handleLogout = () => {
    // Limpiar el localStorage
    localStorage.removeItem("usuario");
    localStorage.removeItem("direccion");
    localStorage.removeItem("rol");
    // Redirigir a la página de inicio
    window.location.href = "/";
  };

  return (
    <div className="barraNavegacion">
      <div className="logoTipo">
        <div className="imagenTitulo">
          <img
            src="/src/assets/donGalleto.png"
            alt=""
          />
          <h1>Don Galleto</h1>
        </div>
        <div className="burger-menu" onClick={toggleNav}>
          &#9776;
        </div>
        <div className={showNav ? "nav-links show div" : "nav-links div"}>
          <nav className={showNav ? "nav-links show" : "nav-links"}>
            <a href="/">Inicio</a>

            <a href="/catalogo">Catalogo</a>
            {
              isLoggedIn  ? (
                <>
                
                
                </>
              ) : (
                <>
                <a href="/contactanos">Contactanos</a>
                <a href="/login">Iniciar Sesion</a>
                <a href="/registrarse">Registrarse</a>
                </>
              )
            }
            {(userRole === 'Cliente') && <a href="/carrito">Carrito</a>}
            {(userRole === 'Cliente') && <a href="/pedidos">Mis Pedidos</a>}

            {userRole === 'Admin' && <a href="/ventas">Ventas</a>}
            {userRole === 'Admin' &&  <a href="/proveedores">Proveedores</a>}
            {userRole === 'Admin' && <a href="/provisiones">Provisiones</a>}
            {userRole === 'Admin' && <a href="/envios">Envios</a>}
            {userRole === 'Admin' && <a href="/estadisticas">Estadisticas</a>}

            {(userRole === 'Admin' || userRole === 'Cocinero') && <a href="/galletas">Galletas</a>}
            {/* <a href="/ingredientes">Panes/ ingredientes</a> */}
            {(userRole === 'Admin' || userRole === 'Cocinero') && <a href="/cocina">Cocina</a>}

            {/* {(userRole === 'Admin' || userRole === 'Cocinero') && <a href="/pan-seleccionado">Cocina/ GalletaSeleccionao</a>} */}
            {(userRole === 'Admin' || userRole === 'Cocinero') && <a href="/ordenes">OrdenesDeCocina</a>}
            {(userRole === 'Admin' || userRole === 'Cocinero') && <a href="/materia_prima">Materia prima</a>}

            {userRole === 'Admin' && <a href="/usuarios">Usuarios</a>}
            {(userRole === 'Admin' || userRole === 'Cocinero' || userRole === 'Cliente') && <a href="#" onClick={handleLogout}>Cerrar Sesión</a>}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
