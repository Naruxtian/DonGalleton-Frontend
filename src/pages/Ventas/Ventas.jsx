import React, {useEffect, useState} from "react";
import "./Ventas.css";
import TrTablaVentas from "../../components/TrTablaVentas/TrTablaVentas";

const Ventas = () => {

  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    const getUsuarios = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/pedidos/getAll");
        const data = await response.json();
        if (response.ok) {
          const usuariosArray = Object.values(data.data);
          setVentas(usuariosArray);
        } else {
          console.error("Error al obtener los usuarios", data);
        }
      } catch (error) {
        console.error("Error en la solicitud de obtener los usuarios", error);
      }
    };
    getUsuarios();
  }, []);

  return (
    <div className="ventas">
      <h1>ventas</h1>

      <br />

      <div className="tablaVentas">
        <table border="1">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Total</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            <TrTablaVentas
              nombre={"galleta de chocolate"}
              total={"12"}
              fecha={"12/12/2000"}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ventas;
