import React from "react";
import "./Carrito.css";
import TrTablaCarrito from "../../components/TRTablaCarrito/TrTablaCarrito";

const Carrito = () => {
  return (
    <div className="Carrito">
      <div>
        <h2>Carrito</h2>
        <br />
        <table border="1">
          <thead>
            <tr>
              <th></th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio $</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <TrTablaCarrito
              nombre={"galleta de chocolate"}
              cantidad={"12"}
              precio={"100"}
              total={"1200"}
            />
            <TrTablaCarrito
              nombre={"galleta de vainilla"}
              cantidad={"12"}
              precio={"100"}
              total={"1200"}
            />
            <TrTablaCarrito
              nombre={"galleta de naranja"}
              cantidad={"12"}
              precio={"100"}
              total={"1200"}
            />
            <TrTablaCarrito
              nombre={"galleta de mantequilla"}
              cantidad={"12"}
              precio={"100"}
              total={"1200"}
            />
          </tbody>
        </table>

        <div className="totalPagar">
          <div>
            <h4>Envio: $100 MXN</h4>
          </div>
          <div className="total">
            <h4>Total: $100 MXN</h4>
          </div>
        </div>
        <p>Direccion de entrega del pedido</p>
        <input type="text" name="" id="" disabled placeholder="Direccion" />
        <br />
        <br />
        <button className="botonConfirmacion">Realiar Pedido</button>
      </div>
    </div>
  );
};

export default Carrito;
