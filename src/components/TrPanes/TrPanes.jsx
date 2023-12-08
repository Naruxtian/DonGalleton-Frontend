import React, {useEffect, useState} from "react";

const TrPanes = ({
  id,
  nombre,
  inventario,
  precio,
  descripcion,
  img,
  activarFormulario,
  handleEliminarGalleta,
  ingredientes
}) => {

  const [materiasPrimas, setMateriasPrimas] = useState([]);

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
    <tr>
      <td>{nombre}</td>
      <td>{inventario} Pzs</td>
      <td>${precio}</td>
      <td>{descripcion}</td>
      <td>
        <img src={img} alt="" />
      </td>
      <td>
      {Array.isArray(ingredientes) && ingredientes.length > 0 ? (
          <ul>
            {ingredientes.map((ingrediente, index) => (
              <li key={index}>
                {materiasPrimas.find((mp) => mp.id === ingrediente.materiaPrima)?.nombre} - {ingrediente.cantidad}
              </li>
            ))}
          </ul>
        ) : (
          "Sin ingredientes"
        )}
      </td>
      <td>
        <button className="botonPeligro" onClick={handleEliminarGalleta}>delete</button>
        <br />
        <br />
        <button
          className="botonAdvertencia"
          onClick={() => activarFormulario(id)}
        >
          Editar
        </button>
      </td>
    </tr>
  );
};
export default TrPanes;
