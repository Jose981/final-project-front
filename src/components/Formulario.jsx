import { useContext, useRef } from "react";
import { FinanzasContext } from "../context/FinanzasContext";

function Formulario() {
  const { añadirTransaccion } = useContext(FinanzasContext);

  const tituloRef = useRef();
  const cantidadRef = useRef();
  const categoriaRef = useRef();
  const tipoRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    añadirTransaccion({
      titulo: tituloRef.current.value,
      cantidad: Number(cantidadRef.current.value),
      tipo: tipoRef.current.value,
      categoria: categoriaRef.current.value
    });

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Título" ref={tituloRef} />
      <input placeholder="Cantidad" ref={cantidadRef} />
      
      <select ref={tipoRef}>
        <option value="gasto">Gasto</option>
        <option value="ingreso">Ingreso</option>
      </select>

      <input placeholder="Categoría" ref={categoriaRef} />

      <button type="submit">Añadir</button>
    </form>
  );
}

export default Formulario;