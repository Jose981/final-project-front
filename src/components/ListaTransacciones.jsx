import { useContext } from "react";
import { FinanzasContext } from "../context/FinanzasContext";

function ListaTransacciones({ settings }) {
  const { transacciones, borrarTransaccion } = useContext(FinanzasContext);
  const t = settings.language === "es-ES"
    ? {
        title: "Movimientos",
        empty: "No hay transacciones todavía",
        income: "Ingreso",
        expense: "Gasto"
      }
    : {
        title: "Transactions",
        empty: "No transactions yet",
        income: "Income",
        expense: "Expense"
      };

  return (
    <div className="lista">
      <div class="lista-titulo">
      <h2>{t.title}</h2>
      </div>
      {transacciones.length === 0 ? (
        <p className="empty">{t.empty}</p>
      ) : (
        transacciones.map((tItem) => (
          <div
            key={tItem._id}
            className={`item ${
              tItem.tipo === "ingreso" ? "ingreso" : "gasto"
            }`}
          >
            <div className="info">
              <span className="titulo">{tItem.titulo}</span>
              <span className="tipo">
                {tItem.tipo === "ingreso" ? t.income : t.expense}
              </span>
            </div>
            <div className="right">
              <span className="cantidad">
                {tItem.tipo === "ingreso" ? "+" : "-"}€{tItem.cantidad}
              </span>
              <button onClick={() => borrarTransaccion(tItem._id)}>
                ❌
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ListaTransacciones;