import { useContext, useRef } from "react";
import { FinanzasContext } from "../context/FinanzasContext";

function Formulario({ settings }) {
  const { añadirTransaccion } = useContext(FinanzasContext);

  const tituloRef = useRef();
  const cantidadRef = useRef();
  const categoriaRef = useRef();
  const tipoRef = useRef();

const t = settings.language === "es-ES"
  ? {
      formTitle: "Introduce el gasto",
      title: "Título",
      amount: "Cantidad",
      category: "Categoría",
      expense: "Gasto",
      income: "Ingreso",
      add: "Añadir"
    }
  : {
      formTitle: "Add transaction",
      title: "Title",
      amount: "Amount",
      category: "Category",
      expense: "Expense",
      income: "Income",
      add: "Add"
    };

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
    <>
      <div class="lista-titulo">
      <h2>{t.formTitle}</h2>    
      </div>
      <form onSubmit={handleSubmit}>
      <input placeholder={t.title} ref={tituloRef} />
      <input placeholder={t.amount} ref={cantidadRef} />
      <select ref={tipoRef}>
        <option value="gasto">{t.expense}</option>
        <option value="ingreso">{t.income}</option>
      </select>
      <input placeholder={t.category} ref={categoriaRef} />
      <button type="submit">{t.add}</button>
    </form>
    </>
  );
}

export default Formulario;