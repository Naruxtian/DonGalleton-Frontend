import React, {useState, useEffect} from "react";
import "./Cocina.css";
import "./../../components/Cards/CardCocina/CardCocina.css";
import CardCocina from "../../components/Cards/CardCocina/CardCocina";
import { Link } from "react-router-dom";

const Cocina = () => {

  const [galletas, setGalletas] = useState([]);
  const [nombresProductos, setNombresProductos] = useState({});
  const [materiasPrimas, setMateriasPrimas] = useState([]);
  const [ingredientesVisible, setIngredientesVisible] = useState(false);
  const [recetaVisible, setRecetaVisible] = useState(false);
  const [galletasState, setGalletasState] = useState([]);
  const [galletasStateR, setGalletasStateR] = useState([]);



  const toggleIngredientes = (index) => {
    setGalletasState((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleReceta = (index) => {
    setGalletasStateR((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const [formularioOrden, setFormularioOrden] = useState({
    cantidadLotes: "",
  });

  const handleAgregarOrden = async (galletaId) => {
    
    if (isNaN(formularioOrden.cantidadLotes)) {
      swal("Error", "Todos los campos de la orden son obligatorios", "error");
      return;
    }

    const requestBody = {
      cantidadLotes: formularioOrden.cantidadLotes,
      id_galleta: galletaId,
    };

    
    try {
      const response = await fetch("http://localhost:3000/api/cocina/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok) {
        swal("Éxito", "Orden solicitada correctamente", "success");
        console.log("Orden creada correctamente", data);

        setFormularioOrden({
          cantidadLotes: "",
        });
      } else {
        console.error("Error al crear el pedido", data);
      }
    } catch (error) {
      console.error("Error en la solicitud de crear el pedido", error);
    }
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseGalletas = await fetch("http://localhost:3000/api/galletas/getAll");
        const dataGalletas = await responseGalletas.json();

        if (responseGalletas.ok) {
          const galletasArray = Object.values(dataGalletas.data);
          setGalletas(galletasArray);

          const responseMateriasPrimas = await fetch("http://localhost:3000/api/materiaPrima/getAll");
          const dataMateriasPrimas = await responseMateriasPrimas.json();

          if(responseMateriasPrimas.ok){
            const materiasPrimasArray = Object.values(dataMateriasPrimas.data);
            const nombresProductosMap = {};

            materiasPrimasArray.forEach((materiaPrima) => {
              nombresProductosMap[materiaPrima.id] = materiaPrima.nombre;
            });
            setMateriasPrimas(materiasPrimasArray);
            setNombresProductos(nombresProductosMap);
          } else {
            console.error("Error al obtener las materias primas", dataMateriasPrimas);
          }
        } else {
          console.error("Error al obtener las galletas", data);
        }
      } catch (error) {
        console.error("Error en la solicitud de obtener galletas", error);
      }
    };
    fetchData();
  }, []); 


  return (
    <div className="cocina">
      <div>
        <h2>Cocina</h2>
        <br />
        <br />
        <Link to={"/ordenes"}>
          <button className="botonPrimario">Ordenes de cocina</button>
        </Link>
        <br />
        <br />

        <div className="todasGalletas">
          {Array.isArray(galletas) &&
            galletas.map((galleta, index) => {
              return (
                <div key={galleta.id} className="CardHover">
                  <div className="CardCocina">
                    <div>
                      <img src={galleta.imagen} alt="" />
                    </div>
                    <div>
                      <h4>{galleta.nombre}</h4>
                      <p>Inventario: {galleta.inventario}</p>
                      <div className="accordion">
                        <div className="accordion-item">
                          <div
                            className="accordion-header"
                            onClick={() => toggleIngredientes(index)}
                          >
                            <div className="accordion-title">
                              Ver Ingredientes
                            </div>
                            <div
                              className={`accordion-icon ${
                                galletasState[index] ? "open" : ""
                              }`}
                            >
                              ▼
                            </div>
                          </div>
                          {galletasState[index] && (
                            <div className="accordion-content">
                              {Array.isArray(galleta.ingredientes) &&
                              galleta.ingredientes.length > 0 ? (
                                <ul>
                                  {galleta.ingredientes.map(
                                    (ingrediente, ingIndex) => (
                                      <li key={ingIndex}>
                                        {materiasPrimas.find(
                                          (mp) =>
                                            mp.id === ingrediente.materiaPrima
                                        )?.nombre}{" "}
                                        - {ingrediente.cantidad}
                                      </li>
                                    )
                                  )}
                                </ul>
                              ) : (
                                <p>Sin ingredientes</p>
                              )}
                            </div>
                          )}
                        </div>{" "}
                        <br />
                        <div className="accordion-item">
                          <div
                            className="accordion-header"
                            onClick={() => toggleReceta(index)}
                          >
                            <div className="accordion-title">Ver Receta</div>
                            <div
                              className={`accordion-icon ${
                                galletasStateR[index] ? "open" : ""
                              }`}
                            >
                              ▼
                            </div>
                          </div>
                          {galletasStateR[index] && (
                            <div className="accordion-content">
                              <p>{galleta.receta}</p>
                            </div>
                          )}
                        </div>{" "}
                        <br />
                        <p>Cantidad a cocinar:</p>
                        <input type="number" name="cocinar" id="cocinar" value={formularioOrden.cantidadLotes} onChange={(e) => setFormularioOrden({...formularioOrden, cantidadLotes: e.target.value})}/>
                        <div>
                          <br /> <br />
                          <button
                            className="botonConfirmacion"
                            onClick={() => handleAgregarOrden(galleta.id)}
                          >
                            {">"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Cocina;
