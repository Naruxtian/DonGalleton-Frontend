import React, { useState, useEffect } from "react";
import "./Proveedores.css";
import TrTablasProveedores from "../../components/TrTablasProveedores/TrTablasProveedores";
import swal from "sweetalert";

const Proveedores = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarFormularioPedido, setMostrarFormularioPedido] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [modoAgregar, setModoAgregar] = useState(false);

  const [proveedores, setProveedores] = useState([]);
  const [nombresProductos, setNombresProductos] = useState({});
  const [materiasPrimas, setMateriasPrimas] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState("0");

  const [idProveedorModificar, setIdProveedorModificar] = useState(null);
  const [idProveedorPedido, setIdProveedorPedido] = useState(null);

  const [actualizando, setActualizando] = useState(false);

  const activarFormulario = (idProveedor) => {
    setIdProveedorModificar(idProveedor);
    setIdProveedorPedido(idProveedor);
    setModoEdicion(true);
    setModoAgregar(false);
    setMostrarFormulario(true);
  };


  const activarAgregar = () => {
    setIdProveedorModificar(null);
    setModoAgregar(true);
    setModoEdicion(false);
    setMostrarFormulario(true);
  };

  const cancelar = () => {
    setMostrarFormulario(false);
    setIdProveedorPedido(null);
    setMostrarFormularioPedido(false);
  };

  const [formularioEdicion, setFormularioEdicion] = useState({
    nombre: "",
    telefono: "",
    empresa: "",
    direccion: "",
    email: "",
    producto: "0",
    costo: "",
    cantidad: "",
  });

  const [formularioPedido, setFormularioPedido] = useState({
    materiaPrima: "0",
    cantidad: "",
    costoTotal: "",
  });

  const cargarDatosEdicion = (proveedor) => {
    const costo = proveedor.producto.costo || 0;
    const cantidad = proveedor.producto.cantidad || 0;
    setFormularioEdicion({
      nombre: proveedor.nombre,
      telefono: proveedor.telefono,
      empresa: proveedor.empresa,
      direccion: proveedor.direccion,
      email: proveedor.email,
      producto: proveedor.producto.producto || "0", 
      costo: proveedor.producto.costo,
      cantidad: proveedor.producto.cantidad,
    });

    const costoTotal = calcularCostoTotal(costo, cantidad);

    setFormularioPedido({
      materiaPrima: proveedor.producto.producto || "0",
      cantidad: cantidad,
      costoTotal: costoTotal,
    });

    setIdProveedorModificar(proveedor.id);
    setModoEdicion(true);
    setModoAgregar(false);
    setMostrarFormulario(true);
    setActualizando(true);
  };

  const calcularCostoTotal = (costo, cantidad) => {
    return costo * cantidad;
  };

  const handleMostrarPedido = (proveedor) => {
    setMostrarFormularioPedido(true);
  };

  const handleAgregarPedido = async () => {
    


    if (!formularioPedido.materiaPrima || isNaN(formularioPedido.cantidad) || isNaN(formularioPedido.costoTotal)) {
      swal("Error", "Todos los campos del pedido son obligatorios", "error");
      return;
    }

    const requestBody = {
      proveedor: idProveedorPedido,
      materiaPrima: formularioPedido.materiaPrima,
      cantidad: formularioPedido.cantidad,
      costoTotal: formularioPedido.costoTotal,
      fechaPedido: new Date(),
      estatus: 1,
    };

    
    try {
      const response = await fetch("http://localhost:3000/api/provisiones/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (response.ok) {
        swal("Éxito", "Provisión solicitada correctamente", "success");
        console.log("Provisión creado correctamente", data);

        // Limpiar el formulario de pedido después de un pedido exitoso
        setFormularioPedido({
          materiaPrima: "0",
          cantidad: "",
          costoTotal: "",
        });
      } else {
        console.error("Error al crear el pedido", data);
      }
    } catch (error) {
      console.error("Error en la solicitud de crear el pedido", error);
    }
  };

  const handleAgregarProveedor = async () => {
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const empresa = document.getElementById("empresa").value;
    const direccion = document.getElementById("direccion").value;
    const email = document.getElementById("email").value;
    const producto = document.getElementById("producto").value;
    const costo = document.getElementById("costo").value;
    const cantidad = document.getElementById("cantidad").value;

    if (!nombre || !telefono || !empresa || !direccion || !email || !producto || isNaN(costo) || isNaN(cantidad)) {
      swal("Error", "Todos los campos son obligatorios", "error");
      return;
    }

    const requestBody = {
      nombre,
      telefono,
      empresa,
      direccion,
      email,
      producto: { producto, costo, cantidad },
      estatus: 1,
      costo,
      cantidad,
    };

    try {
      let url = "http://localhost:3000/api/proveedores/insert";
    let method = "POST";

    if (actualizando) {
      url = `http://localhost:3000/api/proveedores/update/${idProveedorModificar}`;
      method = "PUT";
    }

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    if (response.ok) {
      if (actualizando) {
        swal("Éxito", "Proveedor actualizado correctamente", "success");
      } else {
        swal("Éxito", "Proveedor creado correctamente", "success");
      }

      console.log("Proveedor creado/actualizado correctamente", data);
      setMostrarFormulario(false);
      setActualizando(false);
    } else {
      console.error("Error al crear/actualizar el proveedor", data);
    }
  } catch (error) {
    console.error("Error en la solicitud de crear/actualizar el proveedor", error);
  }
};

const handleEliminarProveedor = async (idProveedor) => {

  const confirmarEliminacion = await swal({
    title: "¿Estás seguro?",
    text: "Una vez eliminado, no podrás recuperar este proveedor",
    icon: "warning",
    buttons: ["Cancelar", "Eliminar"],
    dangerMode: true,
  });

  if (confirmarEliminacion) {
    try {
      const response = await fetch(`http://localhost:3000/api/proveedores/delete/${idProveedor}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (response.ok) {
        swal("Éxito", "Proveedor eliminado correctamente", "success");
        console.log("Proveedor eliminado correctamente", data);

        const nuevosProveedores = proveedores.filter(proveedor => proveedor.id !== idProveedor);
        setProveedores(nuevosProveedores);
      } else {
        console.error("Error al eliminar el proveedor", data);
      }
    } catch (error) {
      console.error("Error en la solicitud de eliminar el proveedor", error);
    }
  }
};

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseProveedores = await fetch("http://localhost:3000/api/proveedores/getAll");
        const dataProveedores = await responseProveedores.json();

        if (responseProveedores.ok) {
          const proveedoresArray = Object.values(dataProveedores.data);
          setProveedores(proveedoresArray);

          const responseMateriasPrimas = await fetch("http://localhost:3000/api/materiaPrima/getAll");
          const dataMateriasPrimas = await responseMateriasPrimas.json();

          if (responseMateriasPrimas.ok) {
            const materiasPrimasArray = Object.values(dataMateriasPrimas.data);
            const nombresProductosMap = {};
            
            materiasPrimasArray.forEach((materiaPrima) => {
              nombresProductosMap[materiaPrima.id] = materiaPrima.nombre;
            });

            setMateriasPrimas(materiasPrimasArray);
            setNombresProductos(nombresProductosMap);
          } else {
            console.error("Error al obtener las materias primas", dataMateriasPrimas);
          }
        } else {
          console.error("Error al obtener los proveedores", dataProveedores);
        }
      } catch (error) {
        console.error("Error en la solicitud de obtener los proveedores", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="Proveedores">
      <h2>Proveedores</h2>
      <br />
      <button className="botonPrimario" onClick={() => activarAgregar()}>
          + Agregar Proveedor
      </button>
      <div className="contenidoProveedores">
        <div
          className={
            mostrarFormulario
              ? "formatoPRoveedoresFormulario"
              : "formatoPRoveedores"
          }
        >
          <br />
          <div className="tablaProveedores">
            <table border="1">
              <thead>
                <tr>
                  <th>Pedir</th>
                  <th>Nombre</th>
                  <th>Telefono</th>
                  <th>Empresa</th>
                  <th>Producto</th>
                  <th>Costo</th>
                  <th>Direccion</th>
                  <th>Correo</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(proveedores) && proveedores.map((proveedor) => (
                  <TrTablasProveedores
                    key={proveedor.id}
                    nombre={proveedor.nombre}
                    telefono={proveedor.telefono}
                    empresa={proveedor.empresa}
                    producto={proveedor.producto.producto ? nombresProductos[proveedor.producto.producto] : nombresProductos[proveedor.producto]}
                    costo={proveedor.producto.costo || proveedor.costo}
                    direccion={proveedor.direccion}
                    correo={proveedor.email}
                    activarFormulario={() => { cargarDatosEdicion(proveedor); console.log(proveedor); }}
                    activarAgregar={() => activarAgregar(true)}
                    handleEliminarProveedor={() => handleEliminarProveedor(proveedor.id)}
                    handleMostrarPedido={() => handleMostrarPedido(proveedor)}
                  />
                ))
                }
              </tbody>
            </table>
          </div>

          <div className="formularioProveedores" hidden={!mostrarFormulario}>
            <h1 hidden={!modoEdicion}>Editar Proveedor</h1>
            <h1 hidden={!modoAgregar}>Agregar Proveedor</h1>
            <br />
            <input type="text" name="nombre" id="nombre" placeholder="Nombre del proveedor" value={formularioEdicion.nombre} onChange={(e) => setFormularioEdicion({...formularioEdicion, nombre: e.target.value})} />
            <br />
            <br />
            <input type="text" name="telefono" id="telefono" maxLength={10} placeholder="Telefono del proveedor" value={formularioEdicion.telefono}  onChange={(e) => setFormularioEdicion({...formularioEdicion, telefono: e.target.value})}/>
            <br />
            <br />
            <input type="text" name="empresa" id="empresa" placeholder="Empresa del proveedor" value={formularioEdicion.empresa} onChange={(e) => setFormularioEdicion({...formularioEdicion, empresa: e.target.value})} />
            <br />
            <br />
            <textarea name="direccion" id="direccion" cols="30" rows="10" placeholder="Dirección del proveedor" value={formularioEdicion.direccion} onChange={(e) => setFormularioEdicion({...formularioEdicion, direccion: e.target.value})}></textarea>
            <br />
            <br />
            <input type="text" name="email" id="email" placeholder="Correo del proveedor" value={formularioEdicion.email} onChange={(e) => setFormularioEdicion({...formularioEdicion, email: e.target.value})}/>
            <br />
            <br />
            <select
              name="producto"
              id="producto"
              value={formularioEdicion.producto}
              onChange={(e) => setFormularioEdicion({...formularioEdicion, producto: e.target.value})}
            >
              <option value="0">Seleccione un producto</option>
              {materiasPrimas.map((materiaPrima) => (
                <option key={materiaPrima.id} value={materiaPrima.id}>
                  {materiaPrima.nombre}
                </option>
              ))}
            </select>
            <br />
            <br />
            <input type="number" name="costo" id="costo" placeholder="Costo del producto" value={formularioEdicion.costo} onChange={(e) => setFormularioEdicion({ ...formularioEdicion, costo: e.target.value })} />
            <br />
            <br />
            <input type="number" name="cantidad" id="cantidad" placeholder="Cantidad del producto" value={formularioEdicion.cantidad} onChange={(e) => setFormularioEdicion({ ...formularioEdicion, cantidad: e.target.value })} />
            <br />
            <br />
            <button className="botonAdvertencia" hidden={!modoEdicion} onClick={handleAgregarProveedor}>
              Modificar
            </button>
            <button className="botonConfirmacion" hidden={!modoAgregar} onClick={handleAgregarProveedor}>
              Agregar
            </button>

            <button className="botonPeligro" onClick={cancelar}>
              Cancelar
            </button>
          </div>

          <div className="formularioProveedores" hidden={!mostrarFormularioPedido}>
            <h1>Pedir Provision</h1>
            <br />
            <input type="text" name="producto" id="producto" placeholder="Producto escogido" style={{backgroundColor: "lightblue"}} value={formularioPedido.producto} readOnly ={true}/>
            <br />
            <br />
            <input type="number" name="cantidad" id="cantidad" placeholder="Cantidad del producto" value={formularioPedido.cantidad} onChange={(e) => setFormularioPedido({...formularioPedido, cantidad: e.target.value,})} />
            <br />
            <br />
            <input type="number" name="costo" id="costo" placeholder="Costo del producto" style={{backgroundColor: "lightblue"}} value={formularioPedido.costoTotal} onChange={(e) => setFormularioPedido({...formularioPedido, costoTotal: e.target.value,})}  readOnly={true}/>
            <br />
            <br />
            <button className="botonConfirmacion">
              Pedir
            </button>
            <button className="botonPeligro" onClick={cancelar}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proveedores;
