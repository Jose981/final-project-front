import "./App.css";
import Formulario from "./components/Formulario";
import ListaTransacciones from "./components/ListaTransacciones";
import Balance from "./components/Balance";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>💸 Control de Finanzas</h1>

      <Balance />
      <Formulario />
      <ListaTransacciones />
    </div>
  );
}

export default App;