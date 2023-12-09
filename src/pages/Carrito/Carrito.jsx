// Carrito.js

import React, { useState, useEffect } from "react";
import "./Carrito.css";
import TrTablaCarrito from "../../components/TRTablaCarrito/TrTablaCarrito";

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("compras")) || [];
    setCarrito(carritoGuardado);
  }, []);

  const calcularTotal = () => {
    return carrito.reduce((precio, producto) => {
      const subtotal = Number(producto.precio * producto.cantidad);
      return isNaN(subtotal) ? precio : precio + subtotal;
    }, 0);
  };

  const handleRealizarPedido = async () => {
    // Construir la estructura de pedido

    const direccionUsuario = JSON.parse(localStorage.getItem("direccion"));
    const idUsuario = JSON.parse(localStorage.getItem("usuario"));

    if (direccionUsuario && idUsuario) {
      const pedido = {
        usuario: idUsuario, // Puedes obtener el usuario de tu aplicación
        fecha: new Date(),
        direccion: direccionUsuario,
        total: calcularTotal(),
        galletas: carrito.map((producto) => ({
          galleta: producto.id,
          cantidad: parseInt(producto.cantidad),
        })),
      };

      try {
        // Realizar la solicitud POST a la API
        const response = await fetch(
          "http://localhost:3000/api/pedidos/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(pedido),
          }
        );

        if (response.ok) {
          // Si la solicitud es exitosa, limpiar el localStorage y actualizar el carrito
          localStorage.removeItem("compras");
          setCarrito([]);
          console.log("Pedido realizado con éxito");
        } else {
          // Manejar errores de la solicitud
          console.error(
            "Error al realizar el pedido:",
            response.status,
            response.statusText
          );
        }
      } catch (error) {
        console.error(
          "Error en la solicitud de realizar pedido:",
          error.message
        );
      }
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <div className="Carrito">
      <div>
        <h2>Carrito</h2>
        <br />
        <table className="table-bordered" border="1">
          <thead>
            <tr>
              <th></th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio $</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((producto, index) => (
              <TrTablaCarrito
                key={index}
                nombre={producto.nombre}
                cantidad={producto.cantidad}
                precio={producto.precio}
                total={producto.precio * producto.cantidad}
              />
            ))}
          </tbody>
        </table>

        <div className="totalPagar">
          <div>
            <h4>Envio: $100 MXN</h4>
          </div>
          <div className="total">
            <h4>Total: ${calcularTotal()} MXN</h4>
          </div>
        </div>
        <p>Direccion de entrega del pedido</p>
        <input type="text" name="" id="" disabled placeholder="Direccion" />
        <br />
        <br />
        <button className="botonConfirmacion" onClick={handleRealizarPedido}>
          Realizar Pedido
        </button>
      </div>
    </div>
  );
};

export default Carrito;
