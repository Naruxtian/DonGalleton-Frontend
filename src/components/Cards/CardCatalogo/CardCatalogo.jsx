import React, { useState } from "react";
import "./CardCatalogo.css";

const CardCatalogo = ({ id, img, nombre, descripcion, precio }) => {
  const [cantidad, setCantidad] = useState(1); // Estado para la cantidad

  const handleCompraClick = () => {
    // Obtener los datos necesarios
    const compra = {
      id,
      nombre,
      precio,
      cantidad,
    };

    // Obtener compras actuales del localStorage (si existen)
    const comprasActuales = JSON.parse(localStorage.getItem("compras")) || [];

    // Agregar la nueva compra al array de compras
    comprasActuales.push(compra);

    // Guardar el array actualizado en localStorage
    localStorage.setItem("compras", JSON.stringify(comprasActuales));

    // Puedes mostrar algún mensaje de confirmación aquí si lo deseas
    console.log("Compra realizada:", compra);
  };

  return (
    <div className="CardHover">
      <div className="CardCatalogo">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <div className="infoGalletaCatalogo">
            <h4>{nombre}</h4>
            <p>{descripcion}</p>
            <h6>${precio}</h6>
          </div>

          <div className="opcionesDeCompra">
            <input
              type="number"
              name=""
              id=""
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
            />
            <button className="botonConfirmacion" onClick={handleCompraClick}>
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCatalogo;
