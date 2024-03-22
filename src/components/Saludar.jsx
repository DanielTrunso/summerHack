import { useState } from "react";

function Saludar(props) {
  const [nombre, setNombre] = useState("");
  const { seteo, txtBtn, alerta, apodo, anios } = props;

  const saludar = (e) => {
    if (nombre == "pepeloco") {
      alerta();
    }
    console.log("hola como estas: ", nombre);
  };

  const handleInput = (e) => {
    setNombre(e.target.value);
    console.log(e.target.value);
    seteo(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={handleInput} />
      <button onClick={saludar}>{txtBtn}</button>
      <p>
        Gracias por visitar la pagina de {apodo} y saludame en mi cumpleaños n{" "}
        {anios}
      </p>
    </>
  );
}

export default Saludar;
