import React, { useEffect, useState } from "react";
import "./CardCocina.css";

const CardCocina = ({ img, nombre, inventario, ingredientes, receta, handleAgregarOrden, value, onChange }) => {
  const [materiasPrimas, setMateriasPrimas] = useState([]);
  const [ingredientesVisible, setIngredientesVisible] = useState(false);
  const [recetaVisible, setRecetaVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/materiaPrima/getAll"
        );
        const data = await response.json();

        if (response.ok) {
          const materiasPrimasArray = Object.values(data.data);
          setMateriasPrimas(materiasPrimasArray);
        } else {
          console.error("Error al obtener las materias primas", data);
        }
      } catch (error) {
        console.error(
          "Error en la solicitud de obtener materias primas",
          error
        );
      }
    };

    fetchData();
  }, []);

  const toggleIngredientes = () => {
    setIngredientesVisible(!ingredientesVisible);
    setRecetaVisible(false);
  };

  const toggleReceta = () => {
    setRecetaVisible(!recetaVisible);
    setIngredientesVisible(false);
  };

  return (
    <div className="CardHover">
      <div className="CardCocina">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h4>{nombre}</h4>
          <p>Inventario: {inventario}</p>
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-header" onClick={toggleIngredientes}>
                <div className="accordion-title">Ver Ingredientes</div>
                <div
                  className={`accordion-icon ${
                    ingredientesVisible ? "open" : ""
                  }`}
                >
                  ▼
                </div>
              </div>
              {ingredientesVisible && (
                <div className="accordion-content">
                  {Array.isArray(ingredientes) && ingredientes.length > 0 ? (
                    <ul>
                      {ingredientes.map((ingrediente, index) => (
                        <li key={index}>
                          {
                            materiasPrimas.find(
                              (mp) => mp.id === ingrediente.materiaPrima
                            )?.nombre
                          }{" "}
                          - {ingrediente.cantidad}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>Sin ingredientes</p>
                  )}
                </div>
              )}
            </div> <br />
            <div className="accordion-item">
              <div className="accordion-header" onClick={toggleReceta}>
                <div className="accordion-title">Ver Receta</div>
                <div
                  className={`accordion-icon ${recetaVisible ? "open" : ""}`}
                >
                  ▼
                </div>
              </div>
              {recetaVisible && (
                <div className="accordion-content">
                  <p>{receta}</p>
                </div>
              )}
            </div> <br />
            <p>Cantidad a cocinar:</p>
            <input type="number" name="cocinar" id="cocinar"/>
            <div>
              <br /> <br />
              <button className="botonConfirmacion" onClick={handleAgregarOrden}>{">"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCocina;
