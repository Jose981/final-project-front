import { useEffect, useState } from "react";

function Reloj({ settings }) {
  const [time, setTime] = useState(new Date());

  const timeZone = settings.timezone;
  const language = settings.language;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hora = new Intl.DateTimeFormat(language, {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(time);

  const fecha = new Intl.DateTimeFormat(language, {
    timeZone,
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(time);

  const hourNumber = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    hour12: false,
  }).format(time);

  let saludo = "";

  if (language === "es-ES") {
    if (hourNumber < 12) saludo = "Buenos días";
    else if (hourNumber < 20) saludo = "Buenas tardes";
    else saludo = "Buenas noches";
  } else {
    if (hourNumber < 12) saludo = "Good morning";
    else if (hourNumber < 20) saludo = "Good afternoon";
    else saludo = "Good evening";
  }

  return (
  <div className="reloj">
    <div className="reloj-top">
      <p className="saludo">{saludo}</p>
      <p className="fecha">{fecha}</p>
    </div>
    <div className="reloj-center">
      <h2 className="hora">{hora}</h2>
    </div>
    <div className="reloj-bottom">
      <span className="zona">{timeZone}</span>
    </div>
  </div>
);
}

export default Reloj;