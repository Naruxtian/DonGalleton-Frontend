import React, {useState, useEffect} from "react";
import "./Envios.css";
import TrEnviosCancelados from "../../components/TrEnvios/TrEnviosCancelados";
import TrEnviosEntregados from "../../components/TrEnvios/TrEnviosEntregados";
import TrEnviosPendiente from "../../components/TrEnvios/TrEnviosPendiente";
import swal from "sweetalert";
import TrEnviosProcesados from "../../components/TrEnvios/TrEnviosProcesados";
import TrEnviosEnviados from "../../components/TrEnvios/TrEnviosEnviados";

const Envios = () => {
  const [envios, setEnvios] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [nombresUsuarios, setNombresUsuarios] = useState({});
  const [galletas, setGalletas] = useState([]);
  const [nombresGalletas, setNombresGalletas] = useState({});
  const [procesarEnvio, setProcesarEnvio] = useState([]);
  const [EnviarEnvio, setEnviarEnvio] = useState([]);
  const [EntregarEnvio, setEntregarEnvio] = useState([]);
  const [CancelarEnvio, setCancelarEnvio] = useState([]);
  
  const handleProcesarEnvio = async (id) => {

    const confirmarEnvio = await swal({
      title: "¿Estás seguro?",
      text: "Una vez procesado el envio , no se podrá revertir la acción",
      icon: "warning",
      buttons: ["Cancelar", "Aceptar"],
      dangerMode: true,
    });

    if(confirmarEnvio){
      try {
        const response = await fetch(`http://localhost:3000/api/pedidos/procesar/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          }
        });
        const data = await response.json();
  
        if (response.ok) {
          const envioArray = Object.values(data.data);
          setProcesarEnvio(envioArray);
          swal("Envio procesadp", "El envio ha sido procesado con exito", "success");
          fetchData();
        } else {
          console.error("Error al recibir el pedido", data);
        }
      } catch (error) {
        console.error("Error en la solicitud de recibir el pedido", error);
      }
    }
  }

  const handleEnviarEnvio = async (id) => {

    const confirmarEnvio = await swal({
      title: "¿Estás seguro?",
      text: "Una vez enviado el envio , no se podrá revertir la acción",
      icon: "warning",
      buttons: ["Cancelar", "Aceptar"],
      dangerMode: true,
    });

    if(confirmarEnvio){
      try {
        const response = await fetch(`http://localhost:3000/api/pedidos/enviar/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          }
        });
        const data = await response.json();
  
        if (response.ok) {
          const enviarArray = Object.values(data.data);
          setEnviarEnvio(enviarArray);
          swal("Envio Enviado", "El envio ha sido enviado con exito", "success");
          fetchData();
        } else {
          console.error("Error al recibir el pedido", data);
        }
      } catch (error) {
        console.error("Error en la solicitud de recibir el pedido", error);
      }
    }
  }

  const handleEntregarEnvio = async (id) => {

    const confirmarEnvio = await swal({
      title: "¿Estás seguro?",
      text: "Una vez entregado el envio , no se podrá revertir la acción",
      icon: "warning",
      buttons: ["Cancelar", "Aceptar"],
      dangerMode: true,
    });

    if(confirmarEnvio){
      try {
        const response = await fetch(`http://localhost:3000/api/pedidos/completar/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          }
        });
        const data = await response.json();
  
        if (response.ok) {
          const entregarArray = Object.values(data.data);
          setEntregarEnvio(entregarArray);
          swal("Envio Entregado", "El envio ha sido entregado con exito", "success");
          fetchData();
        } else {
          console.error("Error al recibir el pedido", data);
        }
      } catch (error) {
        console.error("Error en la solicitud de recibir el pedido", error);
      }
    }
  }

  const handleCancelarEnvio = async (id) => {

    const confirmarEnvio = await swal({
      title: "¿Estás seguro?",
      text: "Una vez cancelada el envio , no se podrá revertir la acción",
      icon: "warning",
      buttons: ["Cancelar", "Aceptar"],
      dangerMode: true,
    });

    if(confirmarEnvio){
      try {
        const response = await fetch(`http://localhost:3000/api/pedidos/cancelar/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          }
        });
        const data = await response.json();
  
        if (response.ok) {
          const cancelarArray = Object.values(data.data);
          setCancelarEnvio(cancelarArray);
          swal("Envio Cancelado", "El envio ha sido cancelada con exito", "success");
          fetchData();
        } else {
          console.error("Error al recibir el pedido", data);
        }
      } catch (error) {
        console.error("Error en la solicitud de recibir el pedido", error);
      }
    }
  }

  const fetchData = async () => {
    try {
      const responseEnvios = await fetch("http://localhost:3000/api/pedidos/getAll");
      const dataEnvios = await responseEnvios.json();

      if (responseEnvios.ok) {
        const provisionesArray = Object.values(dataEnvios.data);
        setEnvios(provisionesArray);

        const responseUsuarios = await fetch("http://localhost:3000/api/users/getAll");
        const dataUsuarios = await responseUsuarios.json();

        if(responseUsuarios.ok){
          const UsuariosArray = Object.values(dataUsuarios.data);
          const nombresUsuarios = {};

          UsuariosArray.forEach((usuarios) => {
            nombresUsuarios[usuarios.id] = {
              nombre: usuarios.nombre,  
              telefono: usuarios.telefono,
              direccion: usuarios.direccion,
            }
          });

          setUsuarios(nombresUsuarios);
          setNombresUsuarios(nombresUsuarios);

          const responseGalletas = await fetch("http://localhost:3000/api/galletas/getAll");
          const dataGalletas = await responseGalletas.json();

          if(responseGalletas.ok){
            const galletasArray = Object.values(dataGalletas.data);
            const nombresGalletas = {};

            galletasArray.forEach((galleta) => {
              nombresGalletas[galleta.id] = galleta.nombre;
            })

            setGalletas(nombresGalletas);
            setNombresGalletas(nombresGalletas);
          }
        }
      } else {
        console.error("Error al obtener las materias primas", dataEnvios);
      }
    } catch (error) {
      console.error("Error en la solicitud de obtener materias primas", error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div className="envios">
      <br />
      <h2>Envios</h2>
      <div className="tablasEnvios">
        <h4>Pedidos pendientes</h4>
        <div className="enviosPendientes">
          <table className="table-bordered" border="1">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Telefono</th>
                <th>Direccion de entrega</th>
                <th>Producto</th>
                <th>Total</th>
                <th>Fecha</th>
                <th>Estatus</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
            {
              Array.isArray(envios) &&
              envios
                .filter((envio) => envio.estatus === 1)
                .map((envio) => {
                  const fechaDate = new Date(envio.fecha);
                  const options = { year: "numeric", month: "long", day: "numeric"};
                  const fechaFormateada = fechaDate.toLocaleDateString("es-MX", options);

                  return (
                    <TrEnviosPendiente
                      key={envio.id}
                      cliente={nombresUsuarios[envio.usuario]?.nombre}
                      telefono={nombresUsuarios[envio.usuario]?.telefono}
                      direccion={nombresUsuarios[envio.usuario]?.direccion}
                      producto={
                        envio.galletas.map((galleta) => nombresGalletas[galleta.galleta] || 'Galleta Desconocida').join(', ')
                      }
                      total={envio.total}
                      fecha={fechaFormateada}
                      id={envio.id}
                      handleProcesarEnvio={() => handleProcesarEnvio(envio.id)}
                      handleCancelarEnvio={() => handleCancelarEnvio(envio.id)}
                    />
                  );
                })
            }
            </tbody>
          </table>
        </div>
        <br />

        <h4>Pedidos Procesados</h4>
        <div className="enviosProcesando">
          <table className="table-bordered" border="1">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Telefono</th>
                <th>Direccion de entrega</th>
                <th>Producto</th>
                <th>Total</th>
                <th>Fecha</th>
                <th>Estatus</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
            {
              Array.isArray(envios) &&
              envios
                .filter((envio) => envio.estatus === 2)
                .map((envio) => {
                  const fechaDate = new Date(envio.fecha);
                  const options = { year: "numeric", month: "long", day: "numeric"};
                  const fechaFormateada = fechaDate.toLocaleDateString("es-MX", options);

                  return (
                    <TrEnviosProcesados
                      key={envio.id}
                      cliente={nombresUsuarios[envio.usuario]?.nombre}
                      telefono={nombresUsuarios[envio.usuario]?.telefono}
                      direccion={nombresUsuarios[envio.usuario]?.direccion}
                      producto={
                        envio.galletas.map((galleta) => nombresGalletas[galleta.galleta] || 'Galleta Desconocida').join(', ')
                      }
                      total={envio.total}
                      fecha={fechaFormateada}
                      id={envio.id}
                      handleEnviarEnvio={() => handleEnviarEnvio(envio.id)}
                    />
                  );
                })
            }
            </tbody>
          </table>
        </div>

        <br />

        <h4>Pedidos Enviados</h4>
        <div className="enviosEnviados">
          <table className="table-bordered" border="1">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Telefono</th>
                <th>Direccion de entrega</th>
                <th>Producto</th>
                <th>Total</th>
                <th>Fecha</th>
                <th>Estatus</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
            {
              Array.isArray(envios) &&
              envios
                .filter((envio) => envio.estatus === 3)
                .map((envio) => {
                  const fechaDate = new Date(envio.fecha);
                  const options = { year: "numeric", month: "long", day: "numeric"};
                  const fechaFormateada = fechaDate.toLocaleDateString("es-MX", options);

                  return (
                    <TrEnviosEnviados
                      key={envio.id}
                      cliente={nombresUsuarios[envio.usuario]?.nombre}
                      telefono={nombresUsuarios[envio.usuario]?.telefono}
                      direccion={nombresUsuarios[envio.usuario]?.direccion}
                      producto={
                        envio.galletas.map((galleta) => nombresGalletas[galleta.galleta] || 'Galleta Desconocida').join(', ')
                      }
                      total={envio.total}
                      fecha={fechaFormateada}
                      id={envio.id}
                      handleEntregarEnvio={() => handleEntregarEnvio(envio.id)}
                    />
                  );
                })
            }
            </tbody>
          </table>
        </div>

        <br />

        <h4>Pedidos entregados</h4>
        <div className="enviosEntregados">
          <table className="table-bordered" border="1">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Telefono</th>
                <th>Direccion de entrega</th>
                <th>Producto</th>
                <th>Total</th>
                <th>Fecha</th>
                <th>Estatus</th>
              </tr>
            </thead>
            <tbody>
            {
              Array.isArray(envios) &&
              envios
                .filter((envio) => envio.estatus === 4)
                .map((envio) => {
                  const fechaDate = new Date(envio.fecha);
                  const options = { year: "numeric", month: "long", day: "numeric"};
                  const fechaFormateada = fechaDate.toLocaleDateString("es-MX", options);

                  return (
                    <TrEnviosEntregados
                      key={envio.id}
                      cliente={nombresUsuarios[envio.usuario]?.nombre}
                      telefono={nombresUsuarios[envio.usuario]?.telefono}
                      direccion={nombresUsuarios[envio.usuario]?.direccion}
                      producto={
                        envio.galletas.map((galleta) => nombresGalletas[galleta.galleta] || 'Galleta Desconocida').join(', ')
                      }
                      total={envio.total}
                      fecha={fechaFormateada}
                    />
                  );
                })
            }
            </tbody>
          </table>
        </div>

        <br />

        <h4>Pedidos cancelados</h4>
        <div className="pedidosCancelados">
          <table className="table-bordered" border="1">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Telefono</th>
                <th>Direccion de entrega</th>
                <th>Producto</th>
                <th>Total</th>
                <th>Fecha</th>
                <th>Estatus</th>
              </tr>
            </thead>
            <tbody>
            {
              Array.isArray(envios) &&
              envios
                .filter((envio) => envio.estatus === 0)
                .map((envio) => {
                  const fechaDate = new Date(envio.fecha);
                  const options = { year: "numeric", month: "long", day: "numeric"};
                  const fechaFormateada = fechaDate.toLocaleDateString("es-MX", options);

                  return (
                    <TrEnviosCancelados
                      key={envio.id}
                      cliente={nombresUsuarios[envio.usuario]?.nombre}
                      telefono={nombresUsuarios[envio.usuario]?.telefono}
                      direccion={nombresUsuarios[envio.usuario]?.direccion}
                      producto={
                        envio.galletas.map((galleta) => nombresGalletas[galleta.galleta] || 'Galleta Desconocida').join(', ')
                      }
                      total={envio.total}
                      fecha={fechaFormateada}
                    />
                  );
                })
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Envios;
