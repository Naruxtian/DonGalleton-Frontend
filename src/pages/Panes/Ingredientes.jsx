import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Ingredientes.css";
import TrListaMaterias from "../../components/TrPanes/TrListaMaterias";
import TrIngredientes from "../../components/TrPanes/TrIngredientes";
import swal from "sweetalert";

const Ingredientes = () => {
  const { id, ingredientes } = useParams();
  const [materiasPrimas, setMateriasPrimas] = useState([]);

  const ingredientesObj = ingredientes ? JSON.parse(decodeURIComponent(ingredientes)) : {};


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/materiaPrima/getAll");
        const data = await response.json();

        if (response.ok) {
          const materiasPrimasArray = Object.values(data.data);
          setMateriasPrimas(materiasPrimasArray);
        } else {
          console.error("Error al obtener las materias primas", data);
        }
      } catch (error) {
        console.error("Error en la solicitud de obtener materias primas", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="ingredientes">
      <h2>Ingredientes por lote de pan</h2>
      <div className="tablasIngredientes">
        <div className="tablaMateriasIngredientes">
          <table className="table-bordered" border="1">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Agregar</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.isArray(materiasPrimas) && materiasPrimas.map((materiaPrima) => (
                  <TrListaMaterias
                    key={materiaPrima.id}
                    nombre={materiaPrima.nombre}
                  />
                ))
              }
            </tbody>
          </table>
        </div>

        <div className="tablaIngredientesPAn">
          <table className="table-bordered" border="1">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <TrIngredientes nombre={"galleta de vainilla"} cantidad={"12"} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ingredientes;
