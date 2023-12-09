import React, {useEffect, useState} from "react";
import "./Ventas.css";
import TrTablaVentas from "../../components/TrTablaVentas/TrTablaVentas";

const Ventas = () => {

  const [ventas, setVentas] = useState([]);
  const [galletas, setGalletas] = useState([]);
  const [nombresGalletas, setNombresGalletas] = useState({});
  const [totalVentas, setTotalVentas] = useState(0);

  useEffect(() => {
    const getVentas = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/pedidos/getAll");
        const data = await response.json();
        if (response.ok) {
          const usuariosArray = Object.values(data.data);
          setVentas(usuariosArray);

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
          console.error("Error al obtener los usuarios", data);
        }
      } catch (error) {
        console.error("Error en la solicitud de obtener los usuarios", error);
      }
    };
    getVentas();
  }, []);

  useEffect(() => {
    const total = ventas
      .filter((venta) => venta.estatus === 4)
      .reduce((acc, venta) => acc + venta.total, 0);
    setTotalVentas(total);
  }, [ventas]);

  return (
    <div className="ventas">
      <h1>ventas</h1>
      <br />

      <div className="tablaVentas">
        <table className="table-bordered" border="1">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Total</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            {
              Array.isArray(ventas) && ventas
              .filter((venta) => venta.estatus === 4)
              .map((venta) => {
                const fechaDate = new Date(venta.fecha);
                  const options = { year: "numeric", month: "long", day: "numeric"};
                  const fechaFormateada = fechaDate.toLocaleDateString("es-MX", options);
                return (
                  <TrTablaVentas
                  key={venta.id}
                  nombre={venta.galletas.map((galleta) => nombresGalletas[galleta.galleta]).join(', ')}
                  total={venta.total}
                  fecha={fechaFormateada}
                  />
                )
              })
            }
          </tbody>
        </table>
      </div> <br />
      <h1 className="text-danger">Total de Ventas: ${totalVentas}</h1>
    </div>
  );
};

export default Ventas;
