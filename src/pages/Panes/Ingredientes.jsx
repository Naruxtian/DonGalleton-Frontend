import React from "react";
import "./Ingredientes.css";
import TrListaMaterias from "../../components/TrPanes/TrListaMaterias";
import TrIngredientes from "../../components/TrPanes/TrIngredientes";

const Ingredientes = () => {
  return (
    <div className="ingredientes">
      <h2>Ingredientes por lote de pan</h2>
      <div className="tablasIngredientes">
        <div className="tablaMateriasIngredientes">
          <table border="1">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Agregar</th>
              </tr>
            </thead>
            <tbody>
              <TrListaMaterias nombre={"galleta de nuez"} />
            </tbody>
          </table>
        </div>

        <div className="tablaIngredientesPAn">
          <table border="1">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <TrIngredientes nombre={"galleta de nuez"} cantidad={"12"} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ingredientes;
