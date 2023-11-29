import React from "react";
import "./CardCocina.css";

const CardCocina = ({ img, nombre, inventario }) => {
  return (
    <div className="CardHover">
      <div className="CardCocina">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h4>{nombre}</h4>
          <p>{inventario}</p>
          <div>
            <button className="botonConfirmacion" href="/pan-seleccionado">
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCocina;
