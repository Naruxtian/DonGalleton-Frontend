import React, { useState } from "react";
import "./Proveedores.css";
import TrTablasProveedores from "../../components/TrTablasProveedores/TrTablasProveedores";

const Proveedores = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [modoAgregar, setModoAgregar] = useState(false);

  const activarFormulario = () => {
    if (mostrarFormulario == true) {
      setMostrarFormulario(true);
    } else {
      setMostrarFormulario(!mostrarFormulario);
    }
    setModoEdicion(true);
    setModoAgregar(false);
  };
  const activarAgregar = () => {
    if (mostrarFormulario == true) {
      setMostrarFormulario(true);
    } else {
      setMostrarFormulario(!mostrarFormulario);
    }
    setModoAgregar(true);
    setModoEdicion(false);
  };

  const cancelar = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  return (
    <div className="Proveedores">
      <h2>Proveedores</h2>
      <br />

      <div className="contenidoProveedores">
        <div
          className={
            mostrarFormulario
              ? "formatoPRoveedoresFormulario"
              : "formatoPRoveedores"
          }
        >
          <div className="tablaProveedores">
            <table border="1">
              <thead>
                <tr>
                  <th>Pedir</th>
                  <th>Nombre</th>
                  <th>Telefono</th>
                  <th>Empresa</th>
                  <th>Producto</th>
                  <th>Costo</th>
                  <th>Direccion</th>
                  <th>Correo</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <TrTablasProveedores
                  nombre={"galleta de nuez"}
                  telefono={"12"}
                  empresa={"12/12/2000"}
                  producto={"Leche"}
                  costo={"110"}
                  direccion={"calle de ejemplo colonia de ejemplo"}
                  correo={"ejemplo@gmail.com"}
                  activarFormulario={() => activarFormulario(true)}
                  activarAgregar={() => activarAgregar(true)}
                />

                <TrTablasProveedores
                  nombre={"galleta de nuez"}
                  telefono={"12"}
                  empresa={"12/12/2000"}
                  producto={"Leche"}
                  costo={"110"}
                  direccion={"calle de ejemplo colonia de ejemplo"}
                  correo={"ejemplo@gmail.com"}
                  activarFormulario={() => activarFormulario(true)}
                  activarAgregar={() => activarAgregar(true)}
                />
                <TrTablasProveedores
                  nombre={"galleta de nuez"}
                  telefono={"12"}
                  empresa={"12/12/2000"}
                  producto={"Leche"}
                  costo={"110"}
                  direccion={"calle de ejemplo colonia de ejemplo"}
                  correo={"ejemplo@gmail.com"}
                  activarFormulario={() => activarFormulario(true)}
                  activarAgregar={() => activarAgregar(true)}
                />
                <TrTablasProveedores
                  nombre={"galleta de nuez"}
                  telefono={"12"}
                  empresa={"12/12/2000"}
                  producto={"Leche"}
                  costo={"110"}
                  direccion={"calle de ejemplo colonia de ejemplo"}
                  correo={"ejemplo@gmail.com"}
                  activarFormulario={() => activarFormulario(true)}
                  activarAgregar={() => activarAgregar(true)}
                />

                <TrTablasProveedores
                  nombre={"galleta de nuez"}
                  telefono={"12"}
                  empresa={"12/12/2000"}
                  producto={"Leche"}
                  costo={"110"}
                  direccion={"calle de ejemplo colonia de ejemplo"}
                  correo={"ejemplo@gmail.com"}
                  activarFormulario={() => activarFormulario(true)}
                  activarAgregar={() => activarAgregar(true)}
                />
                <TrTablasProveedores
                  nombre={"galleta de nuez"}
                  telefono={"12"}
                  empresa={"12/12/2000"}
                  producto={"Leche"}
                  costo={"110"}
                  direccion={"calle de ejemplo colonia de ejemplo"}
                  correo={"ejemplo@gmail.com"}
                  activarFormulario={() => activarFormulario(true)}
                  activarAgregar={() => activarAgregar(true)}
                />
                <TrTablasProveedores
                  nombre={"galleta de nuez"}
                  telefono={"12"}
                  empresa={"12/12/2000"}
                  producto={"Leche"}
                  costo={"110"}
                  direccion={"calle de ejemplo colonia de ejemplo"}
                  correo={"ejemplo@gmail.com"}
                  activarFormulario={() => activarFormulario(true)}
                  activarAgregar={() => activarAgregar(true)}
                />
                <TrTablasProveedores
                  nombre={"galleta de nuez"}
                  telefono={"12"}
                  empresa={"12/12/2000"}
                  producto={"Leche"}
                  costo={"110"}
                  direccion={"calle de ejemplo colonia de ejemplo"}
                  correo={"ejemplo@gmail.com"}
                  activarFormulario={() => activarFormulario(true)}
                  activarAgregar={() => activarAgregar(true)}
                />
              </tbody>
            </table>
          </div>

          <div className="formularioProveedores" hidden={!mostrarFormulario}>
            <h1 hidden={!modoEdicion}>Editar Proveedor</h1>
            <h1 hidden={!modoAgregar}>Agregar Proveedor</h1>
            <br />
            <input type="text" name="" id="" />
            <br />
            <br />
            <input type="text" name="" id="" />
            <br />
            <br />
            <input type="text" name="" id="" />
            <br />
            <br />
            <input type="text" name="" id="" />
            <br />
            <br />
            <input type="text" name="" id="" />
            <br />
            <br />
            <input type="text" name="" id="" />
            <br />
            <br />
            <input type="text" name="" id="" />
            <br />
            <br />
            <button className="botonAdvertencia" hidden={!modoEdicion}>
              Modificar
            </button>
            <button className="botonConfirmacion" hidden={!modoAgregar}>
              Agregar
            </button>

            <button className="botonPeligro" onClick={cancelar}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proveedores;
