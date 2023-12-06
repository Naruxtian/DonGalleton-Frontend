import React, {useEffect, useState} from "react";
import TrProvisionesPendientes from "../../components/TrTablaProvisiones/TrProvisionesPendientes";
import TrProvisionesHistorial from "../../components/TrTablaProvisiones/TrProvisionesHistorial";
import "./provisiones.css";
const Provisiones = () => {
  const [provisiones, setProvisiones] = useState([]);
  const [proveedores, setProveedores] = useState([]);
  const [nombresProveedores, setNombresProveedores] = useState({});
  const [materiasPrimas, setMateriasPrimas] = useState([]);
  const [nombresMateriasPrimas, setNombresMateriasPrimas] = useState({});

  

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
              {
                Array.isArray(provisiones) && provisiones.map((provision) => (
                  <TrProvisionesPendientes
                  key={provision.id}
                  proveedor={nombresProveedores[provision.proveedor]?.nombre || 'Proveedor Desconocido'}
                  empresa={nombresProveedores[provision.proveedor]?.empresa || 'Empresa Desconocida'}
                  telefono={nombresProveedores[provision.proveedor]?.telefono || 'Telefono Desconocido'}
                  materia={nombresMateriasPrimas[provision.materiaPrima]?.nombre || 'Materia Desconocida'}
                  cantidad={provision.cantidad}
                  costo={provision.costoTotal}
                  fecha={provision.fechaPedido}
                  estatus={provision.estatus ? 'Pendiente': 'Entregado'}
                  />
                ))
              }
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
