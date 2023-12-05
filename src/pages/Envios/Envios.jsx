import React, {useState, useEffect} from "react";
import "./Envios.css";
import TrEnviosCancelados from "../../components/TrEnvios/TrEnviosCancelados";
import TrEnviosEntregados from "../../components/TrEnvios/TrEnviosEntregados";
import TrEnviosPendiente from "../../components/TrEnvios/TrEnviosPendiente";
import swal from "sweetalert";
import TrEnviosProcesados from "../../components/TrEnvios/TrEnviosProcesados";
import TrEnviosEnviados from "../../components/TrEnvios/TrEnviosEnviados";

const Envios = () => {
  const [envios, setEnvios] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/pedidos/getAll");
        const data = await response.json();

        if (response.ok) {
          const enviosArray = Object.values(data.data);
          setEnvios(enviosArray);
        } else {
          console.error("Error al obtener los pedidos", data);
        }
      } catch (error) {
        console.error("Error en la solicitud de obtener los envios", error);
      }
    };

    fetchData();
  }, []); 

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
                <th>Fecha</th>
                <th>Estatus</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <TrEnviosPendiente
                cliente={"ejemplo"}
                telefono={"ejemplo"}
                direccion={"75777777"}
                fecha={"12/12/2022"}
                producto={"ejemplo"}
                total={"12"}
              />
            </tbody>
          </table>
        </div>
        <br />

        <h4>Pedidos Procesados</h4>
        <div className="enviosProcesando">
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
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <TrEnviosProcesados
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

        <h4>Pedidos Enviados</h4>
        <div className="enviosEnviados">
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
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <TrEnviosEnviados
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
