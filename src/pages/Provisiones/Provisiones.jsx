import React from "react";
import TrProvisionesPendientes from "../../components/TrTablaProvisiones/TrProvisionesPendientes";
import TrProvisionesHistorial from "../../components/TrTablaProvisiones/TrProvisionesHistorial";
import "./provisiones.css";
const Provisiones = () => {
  return (
    <div className="provisiones">
      <br />
      <h2>Provisiones</h2>
      <div className="tablasProvisiones">
        <h4>Provisiones pendientes</h4>
        <div className="tablaPendientes">
          <table border="1">
            <thead>
              <tr>
                <th>Proveedor</th>
                <th>Empresa</th>
                <th>Telefono</th>
                <th>Materia</th>
                <th>Cantidad</th>
                <th>Costo total</th>
                <th>Fecha pedido</th>
                <th>Estatus</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <TrProvisionesPendientes
                proveedor={"ejemplo"}
                empresa={"ejemplo"}
                telefono={"75777777"}
                materia={"ejemplo"}
                cantidad={"12"}
                costo={"1000"}
                fecha={"12/12/2022"}
                estatus={"Pendiente"}
              />
            </tbody>
          </table>
        </div>
        <br />

        <h4>Historial de Provisiones</h4>
        <div className="tablaHistorial">
          <table border="1">
            <thead>
              <tr>
                <th>Proveedor</th>
                <th>Empresa</th>
                <th>Telefono</th>
                <th>Materia</th>
                <th>Cantidad</th>
                <th>Costo total</th>
                <th>Fecha pedido</th>
                <th>Fecha de recepcion</th>
                <th>Estatus</th>
              </tr>
            </thead>
            <tbody>
              <TrProvisionesHistorial
                proveedor={"ejemplo"}
                empresa={"ejemplo"}
                telefono={"75777777"}
                materia={"ejemplo"}
                cantidad={"12"}
                costo={"1000"}
                fecha={"12/12/2022"}
                fechaRecepcion={"12/12/2022"}
                estatus={"Recibido"}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Provisiones;
