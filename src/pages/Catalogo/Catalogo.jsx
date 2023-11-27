import React from "react";
import CardCatalogo from "../../components/Cards/CardCatalogo/CardCatalogo";
import "./Catalogo.css";

const Catalogo = () => {
  return (
    <div className="ModuloCatalogo">
      <h2>Catalogo</h2>

      <div className="CatalogoProductos">
        <CardCatalogo
          img={
            "https://th.bing.com/th/id/OIP.O4JBoGZZeG_sCWvGxLIp0QHaGk?rs=1&pid=ImgDetMain"
          }
          nombre={"Galleta almendras"}
          descripcion={"galleta de almendras"}
          precio={100}
        />
        <CardCatalogo
          img={
            "https://th.bing.com/th/id/OIP.O4JBoGZZeG_sCWvGxLIp0QHaGk?rs=1&pid=ImgDetMain"
          }
          nombre={"Galleta almendras"}
          descripcion={"galleta de almendras"}
          precio={100}
        />
        <CardCatalogo
          img={
            "https://th.bing.com/th/id/OIP.O4JBoGZZeG_sCWvGxLIp0QHaGk?rs=1&pid=ImgDetMain"
          }
          nombre={"Galleta almendras"}
          descripcion={"galleta de almendras"}
          precio={100}
        />
        <CardCatalogo
          img={
            "https://th.bing.com/th/id/OIP.O4JBoGZZeG_sCWvGxLIp0QHaGk?rs=1&pid=ImgDetMain"
          }
          nombre={"Galleta almendras"}
          descripcion={"galleta de almendras"}
          precio={100}
        />
        <CardCatalogo
          img={
            "https://th.bing.com/th/id/OIP.O4JBoGZZeG_sCWvGxLIp0QHaGk?rs=1&pid=ImgDetMain"
          }
          nombre={"Galleta almendras"}
          descripcion={"galleta de almendras"}
          precio={100}
        />
        <CardCatalogo
          img={
            "https://th.bing.com/th/id/OIP.O4JBoGZZeG_sCWvGxLIp0QHaGk?rs=1&pid=ImgDetMain"
          }
          nombre={"Galleta almendras"}
          descripcion={"galleta de almendras"}
          precio={100}
        />
      </div>
    </div>
  );
};

export default Catalogo;
