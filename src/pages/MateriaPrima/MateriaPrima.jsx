import React, { useState } from "react";
import "./MateriaPrima.css";
import TrMaterias from "../../components/TrMaterias/TrMaterias";

const MateriaPrima = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const activarFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const cancelar = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  return (
    <div className="MateriaPrima">
      <h2>Materia prima</h2>

      <br />
      <br />
      <button className="botonConfirmacion" onClick={() => activarFormulario()}>
        + Agregar nueva materia prima
      </button>
      <br />
      <br />

      <div className="contenidoMateria">
        <div
          className={
            mostrarFormulario ? "formatoMateriasFormulario" : "formatoMaterias"
          }
        >
          <div className="tablaMaterias">
            <table border="1">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Inventario</th>
                  <th>Unidad</th>
                  <th>Mermar</th>
                </tr>
              </thead>
              <tbody>
                <TrMaterias
                  producto={"Leche entera"}
                  inventario={"30"}
                  unidad={"KG"}
                />
              </tbody>
            </table>
          </div>

          <div className="formularioMaterias" hidden={!mostrarFormulario}>
            <h1>Nueva materia prima</h1>
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
            <button className="botonConfirmacion">Agregar</button>
            <button className="botonPeligro" onClick={cancelar}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MateriaPrima;
