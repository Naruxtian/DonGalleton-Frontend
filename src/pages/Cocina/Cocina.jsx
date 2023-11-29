import React from "react";
import "./Cocina.css";
import CardCocina from "../../components/Cards/CardCocina/CardCocina";

const Cocina = () => {
  return (
    <div className="cocina">
      <div>
        <h2>Cocina</h2>
        <br />
        <br />
        <button className="botonPrimario">Ordenes de cocina</button>

        <br />
        <br />

        <div className="todasGalletas">
          <CardCocina
            nombre={"galleta de nuez"}
            inventario={"1"}
            img={
              "https://th.bing.com/th/id/OIP.O4JBoGZZeG_sCWvGxLIp0QHaGk?rs=1&pid=ImgDetMain"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Cocina;
