import "./CardCatalogo.css";

const CardCatalogo = ({ img, nombre, descripcion, precio }) => {
  return (
    <div className="CardHover">
      <div className="CardCatalogo">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h4>{nombre}</h4>
          <p>{descripcion}</p>
          <h6>${precio}</h6>

          <div>
            <input type="number" name="" id="" />
            <button className="botonConfirmacion">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCatalogo;
