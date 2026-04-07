import { useContext } from "react";
import { FinanzasContext } from "../context/FinanzasContext";

function Balance() {
  const { balance } = useContext(FinanzasContext);

  return (
<div className="balance">      
    <h2>Balance</h2>
      <p>Ingresos: €{balance.ingresos}</p>
      <p>Gastos: €{balance.gastos}</p>
      <p><strong>Total: €{balance.balance}</strong></p>
    </div>
  );
}

export default Balance;