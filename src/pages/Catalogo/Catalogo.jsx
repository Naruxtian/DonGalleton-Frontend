import React, { useEffect, useState } from "react";
import CardCatalogo from "../../components/Cards/CardCatalogo/CardCatalogo";
import "./Catalogo.css";

const Catalogo = () => {
  const [galletas, setGalletas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseGalletas = await fetch(
          "http://localhost:3000/api/galletas/getAll"
        );
        const dataGalletas = await responseGalletas.json();

        if (responseGalletas.ok) {
          const galletasArray = Object.values(dataGalletas.data);
          setGalletas(galletasArray);
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
    <div className="ModuloCatalogo">
      <h2>Catalogo</h2>

      <div className="CatalogoProductos">
        {Array.isArray(galletas) &&
          galletas.map((galleta) => (
            <CardCatalogo
              key={galleta.id}
              id={galleta.id}
              img={galleta.imagen}
              nombre={galleta.nombre}
              descripcion={galleta.descripcion}
              precio={galleta.precio}
            />
          ))}
      </div>
    </div>
  );
};

export default Catalogo;
