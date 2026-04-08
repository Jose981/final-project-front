import { useState } from "react";

function Conversor({ settings }) {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("USD");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const t = settings.language === "es-ES"
    ? {
        title: "Conversor",
        amount: "Cantidad",
        convert: "Convertir"
      }
    : {
        title: "Converter",
        amount: "Amount",
        convert: "Convert"
      };

  const convertir = async () => {
    if (!amount) return;

    setLoading(true);

    try {
      const res = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${from}`
      );
      const data = await res.json();

      const rate = data.rates[to];
      const conversion = (amount * rate).toFixed(2);

      setResult(conversion);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="conversor">
        <div class="lista-titulo">
      <h2>{t.title}</h2>
      </div>
      <input
        type="number"
        placeholder={t.amount}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className="selects">
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          <option>EUR</option>
          <option>USD</option>
          <option>GBP</option>
        </select>
        <span>→</span>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>
      </div>
      <button onClick={convertir}>
        {loading ? "..." : t.convert}
      </button>
      {result && (
        <p className="resultado">
          {amount} {from} = <strong>{result} {to}</strong>
        </p>
      )}
    </div>
  );
}

export default Conversor;