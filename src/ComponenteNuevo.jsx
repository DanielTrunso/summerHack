import style from "./componenteNuevo.module.css";
import ComponenteHijo from "./ComponenteHijo";

function ComponenteNuevo() {
  return (
    <>
      <h1
        style={{ borderBottom: "solid 1px black", color: "red" }}
        className={style.fondo}
      >
        Componente Nuevo Subido a la red hermosa
      </h1>
      <ComponenteHijo></ComponenteHijo>
    </>
  );
}

export default ComponenteNuevo;
