import React, {useEffect, useState} from "react";

const TrOrdenesCancelado = ({ pan, lote, fecha, estatus }) => {
  const [fechaFormateada, setFechaFormateada] = useState("");

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
    }
  }, [fecha]);

  return (
    <tr>
      <td>{pan}</td>
      <td>{lote}</td>
      <td> Pzs</td>
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
    </tr>
  );
};
export default TrOrdenesCancelado;
