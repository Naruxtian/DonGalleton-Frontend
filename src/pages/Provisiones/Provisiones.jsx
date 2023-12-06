import React, {useEffect, useState} from "react";
import TrProvisionesPendientes from "../../components/TrTablaProvisiones/TrProvisionesPendientes";
import TrProvisionesHistorial from "../../components/TrTablaProvisiones/TrProvisionesHistorial";
import "./provisiones.css";
import swal from "sweetalert";
import TrProvisionesCanceladas from "../../components/TrTablaProvisiones/TrProvisionesCanceladas";
const Provisiones = () => {
  const [provisiones, setProvisiones] = useState([]);
  const [proveedores, setProveedores] = useState([]);
  const [nombresProveedores, setNombresProveedores] = useState({});
  const [materiasPrimas, setMateriasPrimas] = useState([]);
  const [nombresMateriasPrimas, setNombresMateriasPrimas] = useState({});


  const handleRecibirPedido = async (id) => {

    const confirmarProvision = await swal({
      title: "¿Estás seguro?",
      text: "Una vez recibido el pedido, no se podrá revertir la acción",
      icon: "warning",
      buttons: ["Cancelar", "Aceptar"],
      dangerMode: true,
    });

    if(confirmarProvision){
      try {
        const response = await fetch(`http://localhost:3000/api/provisiones/recibir/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
  
        if (response.ok) {
          const provisionesArray = Object.values(data.data);
          setProvisiones(provisionesArray);
          swal("Pedido recibido", "El pedido ha sido recibido con exito", "success");
        } else {
          console.error("Error al recibir el pedido", data);
        }
      } catch (error) {
        console.error("Error en la solicitud de recibir el pedido", error);
      }
    }

  }
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseProvisiones = await fetch("http://localhost:3000/api/provisiones/getAll");
        const dataProvisiones = await responseProvisiones.json();

        if (responseProvisiones.ok) {
          const provisionesArray = Object.values(dataProvisiones.data);
          setProvisiones(provisionesArray);

          const responseProveedores = await fetch("http://localhost:3000/api/proveedores/getAll");
          const dataProveedores = await responseProveedores.json();

          if(responseProveedores.ok){
            const proveedoresArray = Object.values(dataProveedores.data);
            const nombresProveedores = {};

            proveedoresArray.forEach((proveedor) => {
              nombresProveedores[proveedor.id] = {
                nombre: proveedor.nombre,
                empresa: proveedor.empresa,
                telefono: proveedor.telefono,
              }
            });

            setProveedores(nombresProveedores);
            setNombresProveedores(nombresProveedores);

            const responseMateriasPrimas = await fetch("http://localhost:3000/api/materiaPrima/getAll");
            const dataMateriasPrimas = await responseMateriasPrimas.json();

            if(responseMateriasPrimas.ok){
              const materiasPrimasArray = Object.values(dataMateriasPrimas.data);
              const nombresMateriasPrimas = {};

              materiasPrimasArray.forEach((materiaPrima) => {
                nombresMateriasPrimas[materiaPrima.id] = materiaPrima.nombre;
              })

              setMateriasPrimas(nombresMateriasPrimas);
              setNombresMateriasPrimas(nombresMateriasPrimas);
            }
          }
        } else {
          console.error("Error al obtener las materias primas", dataProvisiones);
        }
      } catch (error) {
        console.error("Error en la solicitud de obtener materias primas", error);
      }
    };

    fetchData();
  }, []); 


  return (
    <div className="provisiones">
      <br />
      <h2>Provisiones</h2>
      <div className="tablasProvisiones">
        <h4>Provisiones pendientes</h4>
        <div className="tablaPendientes">
          <table className="table-bordered" border="1">
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
              {
                Array.isArray(provisiones) && provisiones
                .filter((provision) => provision.estatus === 1)
                .map((provision) => (
                  <TrProvisionesPendientes
                  key={provision.id}
                  proveedor={nombresProveedores[provision.proveedor]?.nombre || 'Proveedor Desconocido'}
                  empresa={nombresProveedores[provision.proveedor]?.empresa || 'Empresa Desconocida'}
                  telefono={nombresProveedores[provision.proveedor]?.telefono || 'Telefono Desconocido'}
                  materia={nombresMateriasPrimas[provision.materiaPrima] || 'Materia Desconocida'}
                  cantidad={provision.cantidad}
                  costo={provision.costoTotal}
                  fecha={provision.fechaPedido}
                  estatus={provision.estatus ? 'Pendiente': 'Entregado'}
                  handleRecibirPedido={() => handleRecibirPedido(provision.id)}
                  />
                ))
              }
            </tbody>
          </table>
        </div>
        <br />

        <h4>Provisiones Recibidas</h4>
        <div className="tablaHistorial">
          <table className="table-bordered" border="1">
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
              {
                Array.isArray(provisiones) && provisiones
                .filter((provision) => provision.estatus === 2)
                .map((provision) => (
                  <TrProvisionesHistorial
                  key={provision.id}
                  proveedor={nombresProveedores[provision.proveedor]?.nombre || 'Proveedor Desconocido'}
                  empresa={nombresProveedores[provision.proveedor]?.empresa || 'Empresa Desconocida'}
                  telefono={nombresProveedores[provision.proveedor]?.telefono || 'Telefono Desconocido'}
                  materia={nombresMateriasPrimas[provision.materiaPrima] || 'Materia Desconocida'}
                  cantidad={provision.cantidad}
                  costo={provision.costoTotal}
                  fecha={provision.fechaPedido}
                  fechaRecepcion={provision.fechaEntrega}
                  estatus={provision.estatus ? 'Entregado': ''}
                  />
                ))
              }
            </tbody>
          </table>
        </div>

        <h4>Provisiones Canceladas</h4>
        <div className="tablaHistorial">
          <table className="table-bordered" border="1">
            <thead>
              <tr>
                <th>Proveedor</th>
                <th>Empresa</th>
                <th>Telefono</th>
                <th>Materia</th>
                <th>Cantidad</th>
                <th>Costo total</th>
                <th>Fecha pedido</th>
                <th>Fecha de cancelacion</th>
                <th>Estatus</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.isArray(provisiones) && provisiones
                .filter((provision) => provision.estatus === 0)
                .map((provision) => (
                  <TrProvisionesCanceladas
                  key={provision.id}
                  proveedor={nombresProveedores[provision.proveedor]?.nombre || 'Proveedor Desconocido'}
                  empresa={nombresProveedores[provision.proveedor]?.empresa || 'Empresa Desconocida'}
                  telefono={nombresProveedores[provision.proveedor]?.telefono || 'Telefono Desconocido'}
                  materia={nombresMateriasPrimas[provision.materiaPrima] || 'Materia Desconocida'}
                  cantidad={provision.cantidad}
                  costo={provision.costoTotal}
                  fecha={provision.fechaPedido}
                  fechaCancelacion={provision.fechaCancelacion}
                  estatus={provision.estatus ? 'Cancelado': 'Cancelado'}
                  />
                ))
              }
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Provisiones;
