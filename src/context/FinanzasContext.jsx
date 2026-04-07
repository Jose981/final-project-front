import { createContext, useState, useEffect } from "react";
import {
  obtenerTransacciones,
  crearTransaccion,
  eliminarTransaccion,
  obtenerBalance
} from "../services/api";

export const FinanzasContext = createContext();

export const FinanzasProvider = ({ children }) => {
  const [transacciones, setTransacciones] = useState([]);
  const [balance, setBalance] = useState({
    ingresos: 0,
    gastos: 0,
    balance: 0
  });

  const cargarDatos = async () => {
    const data = await obtenerTransacciones();
    setTransacciones(data);

    const bal = await obtenerBalance();
    setBalance(bal);
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const añadirTransaccion = async (data) => {
    await crearTransaccion(data);
    cargarDatos();
  };

  const borrarTransaccion = async (id) => {
    await eliminarTransaccion(id);
    cargarDatos();
  };

  return (
    <FinanzasContext.Provider
      value={{
        transacciones,
        balance,
        añadirTransaccion,
        borrarTransaccion
      }}
    >
      {children}
    </FinanzasContext.Provider>
  );
};