import React from "react";
import "./Envios.css";
import TrEnviosCancelados from "../../components/TrEnvios/TrEnviosCancelados";
import TrEnviosEntregados from "../../components/TrEnvios/TrEnviosEntregados";
import TrEnviosPendiente from "../../components/TrEnvios/TrEnviosPendiente";

const Envios = () => {
  return (
    <div className="envios">
      <br />
      <h2>Envios</h2>
      <div className="tablasEnvios">
        <h4>Pedidos pendientes</h4>
        <div className="enviosPendientes">
          <table border="1">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Telefono</th>
                <th>Direccion de entrega</th>
                <th>Producto</th>
                <th>Total</th>
                <th>Estatus total</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <TrEnviosPendiente
                cliente={"ejemplo"}
                telefono={"ejemplo"}
                direccion={"75777777"}
                producto={"ejemplo"}
                total={"12"}
                estatus={"1000"}
              />
            </tbody>
          </table>
        </div>
        <br />

        <h4>Pedidos entregados</h4>
        <div className="enviosEntregados">
          <table border="1">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Telefono</th>
                <th>Direccion de entrega</th>
                <th>Producto</th>
                <th>Total</th>
                <th>Fecha</th>
                <th>Estatus</th>
              </tr>
            </thead>
            <tbody>
              <TrEnviosEntregados
                cliente={"ejemplo"}
                telefono={"ejemplo"}
                direccion={"75777777"}
                producto={"ejemplo"}
                total={"12"}
                fecha={"12/12/2022"}
              />
            </tbody>
          </table>
        </div>

        <br />

        <h4>Pedidos cancelados</h4>
        <div className="pedidosCancelados">
          <table border="1">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Telefono</th>
                <th>Direccion de entrega</th>
                <th>Producto</th>
                <th>Total</th>
                <th>Fecha</th>
                <th>Estatus</th>
              </tr>
            </thead>
            <tbody>
              <TrEnviosCancelados
                cliente={"ejemplo"}
                telefono={"ejemplo"}
                direccion={"75777777"}
                producto={"ejemplo"}
                total={"12"}
                fecha={"12/12/2022"}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Envios;
