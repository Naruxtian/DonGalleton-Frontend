import React, {useEffect, useState} from "react";

const TrProvisionesCanceladas = ({
  proveedor,
  empresa,
  telefono,
  materia,
  cantidad,
  costo,
  fecha,
  fechaCancelacion,
  estatus,
}) => {
  const [fechaFormateada, setFechaFormateada] = useState("");
  const [fechaFormateadaR, setFechaFormateadaR] = useState("");

  useEffect(() => {
    // Convertir fecha de segundos a milisegundos
    const seconds = fecha.seconds;
    const secondsRecepcion = fechaCancelacion.seconds;
    const fechaDate = new Date(seconds * 1000);
    const fechaRecepcionDate = new Date(secondsRecepcion * 1000);

    // Formatear la fecha como desees
    const options = { year: "numeric", month: "long", day: "numeric" };
    const fechaFormateada = fechaDate.toLocaleDateString("es-MX", options);
    const fechaRecepcionFormateada = fechaRecepcionDate.toLocaleDateString("es-MX", options);

    // Actualizar el estado con la fecha formateada
    setFechaFormateada(fechaFormateada);
    setFechaFormateadaR(fechaRecepcionFormateada);
  }, [fecha, fechaCancelacion]);

  return (
    <tr>
      <td>{proveedor}</td>
      <td>{empresa}</td>
      <td>{telefono}</td>
      <td>{materia}</td>
      <td>{cantidad}</td>
      <td>$ {costo}</td>
      <td>{fechaFormateada}</td>

      <td>{fechaFormateadaR}</td>
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

export default TrProvisionesCanceladas;
