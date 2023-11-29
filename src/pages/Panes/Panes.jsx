import React, { useState } from "react";
import "./Panes.css";
import TrPanes from "../../components/TrPanes/TrPanes";

const Panes = () => {
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
    <div className="panes">
      <h2>Panes</h2>
      <button className="botonConfirmacion" onClick={() => activarAgregar()}>
        Agregar Pan
      </button>
      <br />
      <br />
      <div>
        <div className="tablaPanes">
          <table border="1">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Inv.</th>
                <th>$</th>
                <th>Descripcion</th>
                <th>Imagen</th>
                <th>Ingredientes</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <TrPanes
                nombre={"galleta de nuez"}
                inventario={"12"}
                descripcion={"ejemplo ejemplo ejemplo"}
                img={
                  "https://th.bing.com/th/id/OIP.O4JBoGZZeG_sCWvGxLIp0QHaGk?rs=1&pid=ImgDetMain"
                }
                activarFormulario={() => activarFormulario(true)}
              />
            </tbody>
          </table>
        </div>

        <div className="formularioProveedores" hidden={!mostrarFormulario}>
          <h1 hidden={!modoEdicion}>Editar Pan</h1>
          <h1 hidden={!modoAgregar}>Agregar Pan</h1>
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
          <textarea name="" id="" cols="30" rows="10"></textarea>
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
  );
};

export default Panes;
