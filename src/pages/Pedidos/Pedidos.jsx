import React, {useEffect, useState} from "react";
import "./Pedidos.css";
import TrTablaPedidos from "../../components/TRTablaPedidos/TrTablaPedidos";
import swal from "sweetalert";

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [galletas, setGalletas] = useState([]);
  const [nombresGalletas, setNombresGalletas] = useState({});

  const storeUsuario = JSON.parse(localStorage.getItem("usuario"));

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/pedidos/getFromUser/${storeUsuario}`);
      const data = await response.json();

      if (response.ok) {
        const materiasPrimasArray = Object.values(data.data);
        setPedidos(materiasPrimasArray);
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
          console.error("Error al obtener las galletas", dataGalletas);
        }
      } else {
        console.error("Error al obtener los pedidos", data);
      }
    } catch (error) {
      console.error("Error en la solicitud de obtener los pedidos", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 
  
  return (
    <div className="pedidos">
      <h2>Mis pedidos</h2>
      <br />
      <div className="tablaPedidos">
        <table className="table-bordered"  border="1">
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
            {
              Array.isArray(pedidos) && pedidos.map((pedido) => (
                <TrTablaPedidos
                  key={pedido.id}
                  nombre={pedido.galletas.map((galleta) => nombresGalletas[galleta.galleta]).join(', ')}
                  total={pedido.total}
                  direccion={pedido.direccion}
                  fecha={pedido.fecha}
                  estatus={pedido.estatus}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pedidos;
