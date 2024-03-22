import { useState } from "react";

function Edad(props) {
  const { setearEdad } = props;
  const pasoPrevio = () => {
    setearEdad(anios);
  };
  const [anios, setAnios] = useState(0);
  const guardarEdad = (e) => {
    setAnios(e.target.value);
    console.log("Anios:", e.target.value);
  };
  return (
    <>
      <input type="text" onChange={guardarEdad} />
      <button onClick={pasoPrevio}>Setear edad</button>
    </>
  );
}

export default Edad;
