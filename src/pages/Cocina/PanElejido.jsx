import React from "react";

const PanElejido = ({}) => {
  return (
    <div className="panSeleccionado">
      <h2>Pan Seleccionado</h2>
      <div className="contenidoPanSel">
        <div className="imagenPanSeleccionado">
          <img
            src="https://th.bing.com/th/id/OIP.O4JBoGZZeG_sCWvGxLIp0QHaGk?rs=1&pid=ImgDetMain"
            alt=""
          />
        </div>

        <div className="infoPanSeleccionado">
          <p>Inventario disponible: 2</p>
          <br />
          <select name="" id="">
            <option value="">pan</option>
            <option value="">leche</option>
            <option value="">huevos</option>
          </select>
          <br />
          <br />

          <textarea name="" id="" cols="30" rows="10"></textarea>

          <br />
          <h4>Cantidad a cocinar:</h4>
          <input type="number" name="" id="" />
          <br />
          <br />
          <button className="botonConfirmacion">Mandar a cocinar</button>
        </div>
      </div>
    </div>
  );
};

export default PanElejido;
