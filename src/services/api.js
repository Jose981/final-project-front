const API_URL = "http://localhost:3000/transacciones";

export const obtenerTransacciones = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const crearTransaccion = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const eliminarTransaccion = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};

export const obtenerBalance = async () => {
  const res = await fetch(`${API_URL}/balance`);
  return res.json();
};
