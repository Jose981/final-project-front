import { useContext } from "react";
import { FinanzasContext } from "../context/FinanzasContext";

function ListaTransacciones() {
  const { transacciones, borrarTransaccion } = useContext(FinanzasContext);

  return (
    <ul>
      {transacciones.map((t) => (
        <li key={t._id}>
          {t.titulo} - €{t.cantidad} ({t.tipo})
          <button onClick={() => borrarTransaccion(t._id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default ListaTransacciones;