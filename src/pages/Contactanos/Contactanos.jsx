import React from "react";
import "./Contactanos.css";

const Contactanos = () => {
  return (
    <div className="Contactanos">
      <div className="ubicacion">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14881.469727357056!2d-101.6499236!3d21.177557900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bb91fbc1cf1f1%3A0xf56ed9c8b1481bc9!2sParque%20Zool%C3%B3gico%20de%20Le%C3%B3n!5e0!3m2!1ses-419!2smx!4v1701055443167!5m2!1ses-419!2smx"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </div>

      <div className="InformacionParaContactar">
        <div>
          <h4>Nombre</h4>
          <input type="text" name="" id="" />

          <h4>Email</h4>
          <input type="text" name="" id="" />

          <h4>Mensaje</h4>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <br />
          <br />
          <button className="botonConfirmacion">Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default Contactanos;
