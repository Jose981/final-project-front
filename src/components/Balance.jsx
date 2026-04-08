import { useContext } from "react";
import { FinanzasContext } from "../context/FinanzasContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function Balance({ settings }) {
  const { balance } = useContext(FinanzasContext);

  const t = settings.language === "es-ES"
    ? {
        balance: "Balance",
        income: "Ingresos",
        expenses: "Gastos",
        total: "Total"
      }
    : {
        balance: "Balance",
        income: "Income",
        expenses: "Expenses",
        total: "Total"
      };

  const data = [
    { name: t.income, value: balance.ingresos },
    { name: t.expenses, value: balance.gastos },
  ];

  const COLORS = ["#00c49f", "#ff4d4f"];

  return (
    <div className="balance">
      <h2>{t.balance}</h2>
      <p style={{ color: "green" }}>
        {t.income}: €{balance.ingresos}
      </p>
      <p style={{ color: "red" }}>
        {t.expenses}: €{balance.gastos}
      </p>
      <p>
        <strong>{t.total}: €{balance.balance}</strong>
      </p>
      <div className="grafica">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

export default Balance;