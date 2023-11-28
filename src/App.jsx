import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio";
import Navbar from "./components/NavBar/Navbar";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Contactanos from "./pages/Contactanos/Contactanos";
import Registrarse from "./pages/Registrarse/Registrarse";
import Catalogo from "./pages/Catalogo/Catalogo";
import Carrito from "./pages/Carrito/Carrito";
import Pedidos from "./pages/Pedidos/Pedidos";
import Ventas from "./pages/Ventas/Ventas";
import Proveedores from "./pages/Proveedores/Proveedores";
import Provisiones from "./pages/Provisiones/Provisiones";
import Envios from "./pages/Envios/Envios";
import Usuarios from "./pages/Usuarios/Usuarios";
import MateriaPrima from "./pages/MateriaPrima/MateriaPrima";

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <div className="cuerpoContenido">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />

            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/registrarse" element={<Registrarse />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/carrito" element={<Carrito />} />

            <Route path="/pedidos" element={<Pedidos />} />
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/proveedores" element={<Proveedores />} />
            <Route path="/provisiones" element={<Provisiones />} />

            <Route path="/envios" element={<Envios />} />

            <Route path="/materia_prima" element={<MateriaPrima />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
