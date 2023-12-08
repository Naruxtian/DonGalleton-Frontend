import React, {useEffect, useState} from "react";

const TrOrdenes = ({ pan, lote, fecha, estatus, handleCocinarOrden, id, handleCancelarOrden}) => {
  const [fechaFormateada, setFechaFormateada] = useState("");
  const [galletas, setGalletas] = useState([]);
  const [nombresGalletas, setNombresGalletas] = useState({});
  const [cantidadCocina, setCantidadCocina] = useState(0);
  

  const fetchData = async () => {
    try {

        const responseGalletas = await fetch("http://localhost:3000/api/galletas/getAll");
        const dataGalletas = await responseGalletas.json();
        console.log(dataGalletas.data);

        if(responseGalletas.ok){
          const galletasArray = Object.values(dataGalletas.data);
          const nombresGalletas = {};

          galletasArray.forEach((galleta) => {
            nombresGalletas[galleta.id] = galleta.nombre;
          });
          setGalletas(nombresGalletas);
          setNombresGalletas(nombresGalletas);
          setCantidadCocina(dataGalletas.data.cantidadLote || 0);
        } else {
        console.error("Error al obtener las galletas", data);
      }
    } catch (error) {
      console.error("Error en la solicitud de obtener galletas", error);
    }
  };



  useEffect(() => {
    if (fecha && fecha.seconds) {
      // Convertir fecha de segundos a milisegundos
      const seconds = fecha.seconds;
      const fechaDate = new Date(seconds * 1000);

      // Formatear la fecha como desees
      const options = { year: "numeric", month: "long", day: "numeric" };
      const fechaFormateada = fechaDate.toLocaleDateString("es-MX", options);

      // Actualizar el estado con la fecha formateada
      setFechaFormateada(fechaFormateada);
      fetchData();
    }
  }, [fecha]);

  const loteOrdenNumero = parseInt(lote, 10);
  console.log(loteOrdenNumero);
  const cantidadTotal = isNaN(loteOrdenNumero) ? "No disponible" : loteOrdenNumero * (cantidadCocina || 0);
  console.log(cantidadTotal);


  return (
    <tr>
      <td>{pan}</td>
      <td>{lote}</td>
      <td> {cantidadTotal} Pzs</td>
      <td>{fechaFormateada}</td>
      <td
        className={
          estatus == "Cancelado"
            ? "estatusPedido Cancelado"
            : estatus == "Pendiente"
            ? "estatusPedido Pendiente"
            : "estatusPedido Entregado"
        }
      >
        {estatus}
      </td>
      <td>
        <button className="botonAdvertencia" onClick={handleCocinarOrden}>Cocinar</button>
        <button className="botonPeligro" onClick={handleCancelarOrden}>Cancelar</button>
      </td>
    </tr>
  );
};
export default TrOrdenes;
