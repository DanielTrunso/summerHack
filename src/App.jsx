import "./App.css";
import ComponenteNuevo from "./ComponenteNuevo";
import { useState, useEffect } from "react";
import Saludar from "./components/Saludar";
import Edad from "./components/Edad";

function App() {
  /*const [cantidad, setCantidad] = useState(0); //entre parentis seteo como quiero que se inicialice la variable
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    if (e.target.getAttribute("name") == "a4") console.log("Soy el 4");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.value == "pepeloco") alert("Sos Crack");
  };

  const contarOvejas = (e) => {
    setCantidad(cantidad + 1);
    console.log(cantidad);
  };*/

  const [nombre, setNombre] = useState("Perrito");
  const [edad, setEdad] = useState(0);
  const usuario = { apodo: "Puchi", anios: 32 };
  useEffect(() => {
    console.log("Soy el useEffect y me ejecuto");
  }, [edad]);
  const alerta = () => {
    alert("DALE LO ENTENDISTE?");
  };

  return (
    /*<>
      <h1 className="app-titulo">Hola Mundo desde React</h1>
      <p>Te queremos Vite y React</p>
      <ComponenteNuevo></ComponenteNuevo>
      <button onClick={handleClick} name="a1">
        Apretame
      </button>
      <input type="text" onChange={handleChange} />
      <br></br>
      <button onClick={contarOvejas}>Contar</button>
      <h1>Tengo {cantidad} ovejas</h1>
    </>*/
    <>
      <nav>
        <button onClick={alerta}>Alerta</button>
      </nav>
      <h1>
        Hola {nombre}
        {edad}
      </h1>
      <Saludar
        seteo={setNombre}
        txtBtn={"Saludame Papi"}
        alerta={alerta}
        {...usuario}
      ></Saludar>
      <Edad setearEdad={setEdad}></Edad>
    </>
  );
}

export default App;
