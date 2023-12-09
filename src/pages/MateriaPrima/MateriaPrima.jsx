import React, { useState, useEffect } from "react";
import "./MateriaPrima.css";
import TrMaterias from "../../components/TrMaterias/TrMaterias";
import swal from "sweetalert";

const MateriaPrima = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [materiasPrimas, setMateriasPrimas] = useState([]);
  const [mermarmateriasPrimas, setMermarMateriasPrimas] = useState([]);
  const [cantidadMermar, setCantidadMermar] = useState(0);

  const activarFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const cancelar = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const handleAgregar = async () => {
    const nombre = document.getElementById("nombre").value;
    const inventario = document.getElementById("inventario").value;
    const unidad = document.getElementById("unidad").value;

    if (!nombre || !inventario || !unidad) {
      swal("Error", "Todos los campos son obligatorios", "error");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3000/api/materiaPrima/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, inventario, unidad }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("Materia prima creada correctamente", data);
        const updatedMateriasPrimas = [...materiasPrimas, data.data];
        setMateriasPrimas(updatedMateriasPrimas);
        setMostrarFormulario(false);
        swal("Materia prima agregada correctamente", "", "success");
      } else {
        console.error("Error al crear la materia prima", data);
      }
    } catch (error) {
      console.error("Error en la solicitud de agregar materia prima", error);
    }
  };

  const handleMermar = async (id) => {
  
    try {
      const response = await fetch(`http://localhost:3000/api/materiaPrima/mermar/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "cantidad": cantidadMermar }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("Materia prima mermada correctamente", data);
        const mermarMateriasPrimas = [...materiasPrimas, data.data];
        setMermarMateriasPrimas(mermarMateriasPrimas);
        setMostrarFormulario(false);
        swal("Materia prima mermada correctamente", "", "success");
        fetchData();
      } else {
        console.error("Error al mermar la materia prima", data);
      }
    } catch (error) {
      console.error("Error en la solicitud de mermar materia prima", error);
    }
  };
  
  const handleEliminar = async (nombre, cantidadARestar) => {
    const confirmacion = window.confirm("¿Estás seguro de restar inventario a esta materia prima?");
    if (!confirmacion) {
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:3000/api/materiaPrima/restar/${nombre}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cantidadARestar }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("Inventario restado correctamente", data);
        const updatedMateriasPrimas = materiasPrimas.map((materiaPrima) => {
          if (materiaPrima.nombre === nombre) {
            return { ...materiaPrima, inventario: materiaPrima.inventario - 1 };
          }
          return materiaPrima;
        });
  
        setMateriasPrimas(updatedMateriasPrimas);
        swal("Inventario restado correctamente", "", "success");
      } else {
        console.error("Error al restar inventario", data);
      }
    } catch (error) {
      console.error("Error en la solicitud de restar inventario", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/materiaPrima/getAll");
      const data = await response.json();

      if (response.ok) {
        const materiasPrimasArray = Object.values(data.data);
        setMateriasPrimas(materiasPrimasArray);
      } else {
        console.error("Error al obtener las materias primas", data);
      }
    } catch (error) {
      console.error("Error en la solicitud de obtener materias primas", error);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div className="MateriaPrima">
      <h2>Materia prima</h2>

      <br />
      <br />
      <button className="botonConfirmacion" onClick={() => activarFormulario()}>
        + Agregar nueva materia prima
      </button>
      <br />
      <br />

      <div className="contenidoMateria">
        <div
          className={
            mostrarFormulario ? "formatoMateriasFormulario" : "formatoMaterias"
          }
        >
          <div className="tablaMaterias">
            <table border="1">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Inventario</th>
                  <th>Unidad</th>
                  <th>Mermar</th>
                </tr>
              </thead>
              <tbody>
              {Array.isArray(materiasPrimas) && materiasPrimas.map((materiaPrima) => (
                <TrMaterias
                  key={materiaPrima.id}
                  producto={materiaPrima.nombre}
                  inventario={materiaPrima.inventario}
                  unidad={materiaPrima.unidad}
                  handleMermar={() => handleMermar(materiaPrima.id)}
                  cantidadMermar={cantidadMermar}
                  setCantidadMermar={setCantidadMermar}

                />
              ))}
              </tbody>
            </table>
          </div>

          <div className="formularioMaterias" hidden={!mostrarFormulario}>
            <h1>Nueva materia prima</h1>
            <br />
            <input type="text" name="nombre" id="nombre" placeholder="Nombre de la materia prima" />
            <br />
            <br />
            <input type="text" name="inventario" id="inventario" placeholder="Inventario de la materia prima" />
            <br />
            <br />
            <input type="text" name="unidad" id="unidad" placeholder="Unidad de la materia prima" />
            <br />
            <br />
            <button className="botonConfirmacion" onClick={handleAgregar}>Agregar</button>
            <button className="botonPeligro" onClick={cancelar}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MateriaPrima;
