import React, { useState, useEffect } from "react";
import "./Panes.css";
import TrPanes from "../../components/TrPanes/TrPanes";
import TrListaMaterias from "../../components/TrPanes/TrListaMaterias";
import TrIngredientes from "../../components/TrPanes/TrIngredientes";
import { useUpload } from "../../hooks/useUpload";
import swal from "sweetalert";

const Galletas = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [modoAgregar, setModoAgregar] = useState(false);
  const [galletas, setGalletas] = useState([]);
  const {  urlImage, uploadImage } = useUpload();

  const [idGalletaModificar, setIdGalletaModificar] = useState(null);
  const [actualizando, setActualizando] = useState(false);

  const [nombresProductos, setNombresProductos] = useState({});
  const [materiasPrimas, setMateriasPrimas] = useState([]);

  const [mostrarIngredientes, setMostrarIngredientes] = useState(false);
  const [ingredientesGalleta, setIngredientesGalleta] = useState([]);
  const [galletaSeleccionada, setGalletaSeleccionada] = useState({});

  const activarFormulario = (idGalleta) => {
    setIdGalletaModificar(idGalleta);
    setModoEdicion(true);
    setModoAgregar(false);
    setMostrarFormulario(true);
  };

  const activarAgregar = () => {
    setIdGalletaModificar(null);
    setModoAgregar(true);
    setModoEdicion(false);
    setMostrarFormulario(true);
  };

  const cancelar = () => {
    setMostrarFormulario(false);
    setMostrarIngredientes(false);
  };

  const [formularioEdicion, setFormularioEdicion] = useState({
    nombre: "",
    precio: "",
    descripcion: "",
    imagen: "",
    cantidadLote: "",
    receta: "",
  });

  const handleChangeImage = (e) => {
    if(!e.target.files[0]) return;
    uploadImage(e.target.files[0], "galletas");
  }

  const cargarDatosEdicion = (galleta) => {
    setFormularioEdicion({
      nombre: galleta.nombre,
      precio: galleta.precio,
      descripcion: galleta.descripcion,
      imagen: galleta.imagen,
      cantidadLote: galleta.cantidadLote,
      receta: galleta.receta,
    });

    setIdGalletaModificar(galleta.id);
    setModoEdicion(true);
    setModoAgregar(false);
    setMostrarFormulario(true);
    setActualizando(true);
  }

  const handleMostrarIngredientes = (galleta) => {
    setGalletaSeleccionada(galleta);
    setIngredientesGalleta(galleta.ingredientes || []);
    setMostrarIngredientes(true);
  };

  const handleAgregarGalleta = async () => {
    const nombre = document.getElementById("nombre").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const descripcion = document.getElementById("descripcion").value;
    const cantidadLote = parseInt(document.getElementById("cantidadL").value);
    // const imagen = document.getElementById("imagen").value;
    const receta = document.getElementById("receta").value;

    if (!nombre || isNaN(precio) || !descripcion || isNaN(cantidadLote)  || !receta ) {
      swal("Error", "Todos los campos son obligatorios", "error");
      return;
    }

    const requestBody = {
      nombre,
      inventario: 0,
      precio,
      descripcion,
      cantidadLote,
      imagen: urlImage,
      estatus: 1,
      receta,
    }

    try {
      let url = "http://localhost:3000/api/galletas/insert";
      let method = "POST";
      
      if (actualizando) {
        url = `http://localhost:3000/api/galletas/update/${idGalletaModificar}`;
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
        if(actualizando){
          swal("Galleta actualizada correctamente", "", "success");
        } else {
          swal("Galleta agregada correctamente", "", "success");
        }
        console.log("Galleta creada/editada correctamente", data);
        setMostrarFormulario(false);
        setActualizando(false);
        document.getElementById("nombre").value = "";
        document.getElementById("precio").value = "";
        document.getElementById("descripcion").value = "";
        document.getElementById("cantidadL").value = "";
        document.getElementById("imagen").value = "";
        document.getElementById("receta").value = "";
      } else {
        console.error("Error al crear/actualizar la galleta", data);
      }
    } catch (error) {
      console.error("Error en la solicitud de agregar/actualizar galleta", error);
    }
  };
  
  const handleEliminarGalleta = async (idGalleta) => {
    
    const confirmarEliminacion = await swal({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, no podrás recuperar esta galleta!",
      icon: "warning",
      buttons: ["Cancelar", "Eliminar"],
      dangerMode: true,
    });


    if(confirmarEliminacion){
        try{
          const response = await fetch(`http://localhost:3000/api/galletas/delete/${idGalleta}`, {
            method: "DELETE",
        });

        const data = await response.json();

        if (response.ok) {
          swal("Éxito", "Galleta eliminada correctamente", "success");
          console.log("Galleta eliminada correctamente", data);

          const nuevasGalletas = galletas.filter((galleta) => galleta.id !== idGalleta);
          setGalletas(nuevasGalletas);
        } else {
          console.error("Error al eliminar la galleta", data);
        }
      } catch (error) {
        console.error("Error en la solicitud de eliminar galleta", error);
      }
    }
  };

  const addIngredientes = async (idGalleta, nuevosIngredientes) => {
    try {
      const url = `http://localhost:3000/api/galletas/addIngrediente/${idGalleta}`;
      const method = "PUT";
  
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ingredientes: nuevosIngredientes }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        swal("Ingredientes agregados correctamente", "", "success");
        console.log("Ingredientes agregados correctamente", data);
  
        setIngredientesGalleta([...ingredientesGalleta, ...nuevosIngredientes]);
      } else {
        console.error("Error al agregar ingredientes", data);
      }
    } catch (error) {
      console.error("Error en la solicitud de agregar ingredientes", error);
    }
  };

  const handleAgregarIngredientes = (materiaPrima) => {
    const cantidadIngrediente = document.getElementById("cantidadIngrediente").value;
  
    if (!cantidadIngrediente || isNaN(cantidadIngrediente)) {
      swal("Error", "Por favor, ingrese una cantidad válida", "error");
      return;
    }
  
    const nuevoIngrediente = {
      idMateriaPrima: materiaPrima.id,
      cantidad: parseInt(cantidadIngrediente),
    };
  
    addIngredientes(galletaSeleccionada.id, [nuevoIngrediente]);
  };
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseGalletas = await fetch("http://localhost:3000/api/galletas/getAll");
        const dataGalletas = await responseGalletas.json();

        if (responseGalletas.ok) {
          const galletasArray = Object.values(dataGalletas.data);
          setGalletas(galletasArray);

          const responseMateriasPrimas = await fetch("http://localhost:3000/api/materiaPrima/getAll");
          const dataMateriasPrimas = await responseMateriasPrimas.json();

          if(responseMateriasPrimas.ok){
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
          console.error("Error al obtener las galletas", data);
        }
      } catch (error) {
        console.error("Error en la solicitud de obtener galletas", error);
      }
    };
    fetchData();
  }, []); 

  return (
    <div className="panes">
      <h2>Galletas</h2>
      <button className="botonConfirmacion" onClick={() => activarAgregar()}>
        Agregar galleta
      </button>
      <br />
      <br />
      <div>
        <div className="tablaPanes">
          <table border="1">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Inv.</th>
                <th>$</th>
                <th>Descripcion</th>
                <th>Imagen</th>
                <th>Ingredientes</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                Array.isArray(galletas) && galletas.map((galleta) => (
                  <TrPanes
                    key={galleta.id}
                    nombre={galleta.nombre}
                    inventario={galleta.inventario}
                    precio={galleta.precio}
                    descripcion={galleta.descripcion}
                    img={galleta.img}
                    ingredientes={galleta.ingredientes}
                    receta={galleta.receta}
                    activarFormulario={() => {cargarDatosEdicion(galleta)}}
                    handleEliminarGalleta={() => handleEliminarGalleta(galleta.id)}
                    handleMostrarIngredientes={() => handleMostrarIngredientes(galleta)}
                  />
                ))
              }
            </tbody>
          </table>
        </div>

        <div className="formularioProveedores" hidden={!mostrarFormulario}>
          <h1 hidden={!modoEdicion}>Editar Galleta</h1>
          <h1 hidden={!modoAgregar}>Agregar Galleta</h1>
          <br />
          <input type="text" name="nombre" id="nombre" placeholder="Nombre de la galleta" value={formularioEdicion.nombre} onChange={(e) => setFormularioEdicion({...formularioEdicion, nombre: e.target.value})}/>
          <br />
          <br />
          <input type="number" name="precio" id="precio" placeholder="Precio de la galleta" value={formularioEdicion.precio} onChange={(e) => setFormularioEdicion({...formularioEdicion, precio: e.target.value})} />
          <br />
          <br />
          <textarea name="descripcion" id="descripcion" placeholder="Descripcion de la galleta" value={formularioEdicion.descripcion} onChange={(e) => setFormularioEdicion({...formularioEdicion, descripcion: e.target.value})}></textarea>
          <br />
          <br />
          <input accept="image/png, image/jpeg" type="file" name="imagen" id="imagen" onChange={handleChangeImage} />
          <br />
          <br />
          <input type="number" name="cantidadL" id="cantidadL" placeholder="Cantidad por lote" value={formularioEdicion.cantidadLote} onChange={(e) => setFormularioEdicion({...formularioEdicion, cantidadLote: e.target.value})}/>
          <br />
          <br />
          <textarea name="receta" id="receta" placeholder="Receta" value={formularioEdicion.receta} onChange={(e) => setFormularioEdicion({...formularioEdicion, receta: e.target.value})}></textarea>
          <br />
          <br />
          <button className="botonAdvertencia" hidden={!modoEdicion} onClick={handleAgregarGalleta}>
            Modificar
          </button>
          <button className="botonConfirmacion" hidden={!modoAgregar} onClick={handleAgregarGalleta}>
            Agregar
          </button>
          <button className="botonPeligro" onClick={cancelar}>
            Cancelar
          </button>
        </div>

        <div className="" hidden={!mostrarIngredientes}>
            <div>
              <h2>Ingredientes de la galleta</h2>
              <div className="tablasIngredientes">
                <div className="tablaMateriasIngredientes">
                  <table border="1">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Agregar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        Array.isArray(materiasPrimas) && materiasPrimas.map((materiaPrima) => (
                          <TrListaMaterias
                            key={materiaPrima.id}
                            nombre={materiaPrima.nombre}
                            id={materiaPrima.id}
                            handleAgregarIngredientes={handleAgregarIngredientes}
                          />
                        ))
                      }
                    </tbody>
                  </table>
                </div>

                <div className="tablaIngredientesPAn">
                  <table border="1">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        Array.isArray(ingredientesGalleta) && ingredientesGalleta.map((ingrediente, index) => (
                          <TrIngredientes
                            key={index}
                            nombre={ingrediente.idMateriaPrima}
                            cantidad={ingrediente.cantidad}
                          />
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <button className="botonPeligro" onClick={cancelar}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Galletas;
