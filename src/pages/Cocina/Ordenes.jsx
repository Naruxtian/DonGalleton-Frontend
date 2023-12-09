import React, {useEffect, useState} from "react";
import TrOrdenes from "../../components/TrOrdenes/TrOrdenes";
import TrOrdenesCompletadas from "../../components/TrOrdenes/TrOrdenesCompletadas";
import swal from "sweetalert";
import TrOrdenesCocinando from "../../components/TrOrdenes/TrCocinando";
import TrOrdenesCancelado from "../../components/TrOrdenes/TrCancelado";

const Ordenes = () => {

  const [ordenes, setOrdenes] = useState([]);
  const [galletas, setGalletas] = useState([]);
  const [nombresGalletas, setNombresGalletas] = useState({});
  const [cocinarOrden, setCocinarOrden] = useState([]);
  const [completarOrden, setCompletarOrden] = useState([]);
  const [cancelarOrden, setCancelarOrden] = useState([]);

  const handleCocinarOrden = async (id) => {

    const confirmarProvision = await swal({
      title: "¿Estás seguro?",
      text: "Una vez cocinada la orden, no se podrá revertir la acción",
      icon: "warning",
      buttons: ["Cancelar", "Aceptar"],
      dangerMode: true,
    });

    const requestBody = {
      id: id,
    };

    if(confirmarProvision){
      try {
        const response = await fetch(`http://localhost:3000/api/cocina/cocinar`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });
        const data = await response.json();
  
        if (response.ok) {
          const cocinaArray = Object.values(data.data);
          setCocinarOrden(cocinaArray);
          swal("Orden cocinada", "La orden ha sido cocinada con exito", "success");
          fetchData();
        } else {
          console.error("Error al recibir el pedido", data);
          swal("Error", "Error al cocinar la orden", "error");
        }
      } catch (error) {
        console.error("Error en la solicitud de recibir el pedido", error);
      }
    }
  }

  const handleCompletarOrden = async (id) => {

    const confirmarProvision = await swal({
      title: "¿Estás seguro?",
      text: "Una vez completada la orden, no se podrá revertir la acción",
      icon: "warning",
      buttons: ["Cancelar", "Aceptar"],
      dangerMode: true,
    });

    const requestBody = {
      id: id,
    };

    if(confirmarProvision){
      try {
        const response = await fetch(`http://localhost:3000/api/cocina/completar`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });
        const data = await response.json();
  
        if (response.ok) {
          const completarArray = Object.values(data.data);
          setCompletarOrden(completarArray);
          swal("Orden Completada", "La orden ha sido completada con exito", "success");
          fetchData();
        } else {
          console.error("Error al recibir el pedido", data);
          swal("Error", "Error al completar la orden", "error");
        }
      } catch (error) {
        console.error("Error en la solicitud de recibir el pedido", error);
      }
    }
  }

  const handleCancelarOrden = async (id) => {

    const confirmarProvision = await swal({
      title: "¿Estás seguro?",
      text: "Una vez cancelada la orden, no se podrá revertir la acción",
      icon: "warning",
      buttons: ["Cancelar", "Aceptar"],
      dangerMode: true,
    });

    const requestBody = {
      id: id,
    };

    if(confirmarProvision){
      try {
        const response = await fetch(`http://localhost:3000/api/cocina/cancelar`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });
        const data = await response.json();
  
        if (response.ok) {
          const cancelarArray = Object.values(data.data);
          setCompletarOrden(cancelarArray);
          swal("Orden Cancelada", "La orden ha sido cancelada con exito", "success");
          fetchData();
        } else {
          console.error("Error al recibir el pedido", data);
          swal("Error", "Error al cancelar la orden", "error");
        }
      } catch (error) {
        console.error("Error en la solicitud de recibir el pedido", error);
      }
    }
  }


  const fetchData = async () => {
    try {
      const responseOrdenes = await fetch("http://localhost:3000/api/cocina/getAll");
      const dataOrdenes = await responseOrdenes.json();

      if (responseOrdenes.ok) {
        const ordenesArray = Object.values(dataOrdenes.data);
        setOrdenes(ordenesArray);

        const responseGalletas = await fetch("http://localhost:3000/api/galletas/getAll");
        const dataGalletas = await responseGalletas.json();

        if(responseGalletas.ok){
          const galletasArray = Object.values(dataGalletas.data);
          const nombresGalletas = {};

          galletasArray.forEach((galleta) => {
            nombresGalletas[galleta.id] = galleta.nombre;
          });
          setGalletas(nombresGalletas);
          setNombresGalletas(nombresGalletas);
        } else {
          console.error("Error al obtener las materias primas", dataGalletas);
        }
      } else {
        console.error("Error al obtener las galletas", data);
      }
    } catch (error) {
      console.error("Error en la solicitud de obtener galletas", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 


  return (
    <div className="pedidos">
      <h2>Ordenes de cocina</h2>
      <br />

      <h4>ordenes pendientes</h4>
      <div className="tablaOrdenes">
        <table className="table-bordered" border="1">
          <thead>
            <tr>
              <th>Galleta</th>
              <th>Lote</th>
              <th>Fecha</th>
              <th>Estatus</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
                Array.isArray(ordenes) && ordenes
                .filter((orden) => orden.estatus === 1)
                .map((orden) => (
                  <TrOrdenes
                    key={orden.id}
                    pan={nombresGalletas[orden.id_galleta] || 'Nombre no disponible'}
                    lote={orden.cantidadLotes}
                    fecha={orden.fecha}
                    estatus={orden.estatus ? "Pendiente" : "Entregado"}
                    handleCocinarOrden={() => handleCocinarOrden(orden.id)}
                    handleCancelarOrden={() => handleCancelarOrden(orden.id)}
                    id={orden.id}
                  />
                ))
            }
          </tbody>
        </table>
      </div> <br />

      <h4>ordenes Cocinando</h4>
      <div className="tablaOrdenes">
        <table className="table-bordered" border="1">
          <thead>
            <tr>
              <th>Galleta</th>
              <th>Lote</th>
              <th>Fecha</th>
              <th>Estatus</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              Array.isArray(ordenes) && ordenes
              .filter((orden) => orden.estatus === 2)
              .map((orden) => (
                <TrOrdenesCocinando
                  key={orden.id}
                  pan={nombresGalletas[orden.id_galleta] || 'Nombre no disponible'}
                  lote={orden.cantidadLotes}
                  fecha={orden.fecha}
                  estatus={orden.estatus ? "Cocinando" : "Procesado"}
                  id={orden.id}
                  handleCompletarOrden={() => handleCompletarOrden(orden.id)}
                />
              ))
            }
          </tbody>
        </table>
      </div> <br />

      <h4>ordenes completadas</h4>
      <div className="tablaOrdenes">
        <table className="table-bordered" border="1">
          <thead>
            <tr>
              <th>Pan</th>
              <th>Lote</th>
              <th>Fecha</th>
              <th>Estatus</th>
            </tr>
          </thead>
          <tbody>
          {
              Array.isArray(ordenes) && ordenes
              .filter((orden) => orden.estatus === 3)
              .map((orden) => (
                <TrOrdenesCompletadas
                  key={orden.id}
                  pan={nombresGalletas[orden.id_galleta] || 'Nombre no disponible'}
                  lote={orden.cantidadLotes}
                  fecha={orden.fecha}
                  estatus={orden.estatus ? "Entregado" : "Entregado"}
                />
              ))
            }
          </tbody>
        </table>
      </div> <br />

      <h4>ordenes canceladas</h4>
      <div className="tablaOrdenes">
        <table className="table-bordered" border="1">
          <thead>
            <tr>
              <th>Pan</th>
              <th>Lote</th>
              <th>Panes en total</th>
              <th>Fecha</th>
              <th>Estatus</th>
            </tr>
          </thead>
          <tbody>
          {
              Array.isArray(ordenes) && ordenes
              .filter((orden) => orden.estatus === 0)
              .map((orden) => (
                <TrOrdenesCancelado
                  key={orden.id_galleta}
                  pan={nombresGalletas[orden.id_galleta] || 'Nombre no disponible'}
                  lote={orden.cantidadLotes}
                  fecha={orden.fecha}
                  estatus={orden.estatus ? "Cancelado" : "Cancelado"}
                />
              ))
            }
          </tbody>
        </table>
      </div> <br />

    </div>
  );
};

export default Ordenes;
