import React, {useEffect, useState} from "react";

const TrProvisionesPendientes = ({
  proveedor,
  empresa,
  telefono,
  materia,
  cantidad,
  costo,
  fecha,
  estatus,
  handleRecibirPedido
}) => {
  const [fechaFormateada, setFechaFormateada] = useState("");

  useEffect(() => {
    // Convertir fecha de segundos a milisegundos
    const seconds = fecha.seconds;
    const fechaDate = new Date(seconds * 1000);

    // Formatear la fecha como desees
    const options = { year: "numeric", month: "long", day: "numeric" };
    const fechaFormateada = fechaDate.toLocaleDateString("es-MX", options);

    // Actualizar el estado con la fecha formateada
    setFechaFormateada(fechaFormateada);
  }, [fecha]); 

  return (
    <tr>
      <td>{proveedor}</td>
      <td>{empresa}</td>
      <td>{telefono}</td>
      <td>{materia}</td>
      <td>{cantidad}</td>
      <td>$ {costo}</td>
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
        <button className="botonPrimario" onClick={handleRecibirPedido}>Confirmar Recepcion</button>
        <button className="botonPeligro">Cancelar</button>
      </td>
    </tr>
  );
};

export default TrProvisionesPendientes;
