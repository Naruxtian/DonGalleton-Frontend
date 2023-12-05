import React from "react";
import "./Pedidos.css";
import TrTablaPedidos from "../../components/TRTablaPedidos/TrTablaPedidos";
import swal from "sweetalert";

const Pedidos = () => {
  
  return (
    <div className="pedidos">
      <h2>Mis pedidos</h2>
      <br />
      <div className="tablaPedidos">
        <table border="1">
          <thead>
            <tr>
              <th>Productos</th>
              <th>Total</th>
              <th>Direccion de Entrega</th>
              <th>Fecha</th>
              <th>Estatus</th>
            </tr>
          </thead>
          <tbody>
            <TrTablaPedidos
              nombre={"galleta de chocolate"}
              total={"12"}
              direccion={"Calle de ejemplo colonia de ejemplo"}
              fecha={"12/12/2000"}
              estatus={"Pendiente"}
            />
            <TrTablaPedidos
              nombre={"galleta de vainilla"}
              total={"12"}
              direccion={"Calle de ejemplo colonia de ejemplo"}
              fecha={"12/12/2000"}
              estatus={"Entregado"}
            />
            <TrTablaPedidos
              nombre={"galleta de naranja"}
              total={"12"}
              direccion={"Calle de ejemplo colonia de ejemplo"}
              fecha={"12/12/2000"}
              estatus={"Cancelado"}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pedidos;
