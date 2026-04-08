import "./App.css";
import { useState, useEffect } from "react";

import Formulario from "./components/Formulario";
import ListaTransacciones from "./components/ListaTransacciones";
import Balance from "./components/Balance";
import Reloj from "./components/Reloj";
import Conversor from "./components/Conversor";

function App() {
  const [vista, setVista] = useState("home");
  const [settingsOpen, setSettingsOpen] = useState(false);

  const [settings, setSettings] = useState({
    background: "fondo1",
    timezone: "Europe/Madrid",
    language: "es-ES"
  });

  const [settingsTemp, setSettingsTemp] = useState(settings);

  const texts = {
    "es-ES": {
      title: "Control de Finanzas",
      add: "Añadir",
      back: "Volver",
      config: "Personalización",
      background: "Fondos",
      timezone: "Zona horaria",
      language: "Idioma",
      save: "Guardar cambios"
    },
    "en-US": {
      title: "Finance Tracker",
      add: "Add",
      back: "Back",
      config: "Settings",
      background: "Background",
      timezone: "Timezone",
      language: "Language",
      save: "Save changes"
    }
  };

  const t = texts[settings.language];

  useEffect(() => {
    const saved = localStorage.getItem("settings");
    if (saved) {
      const parsed = JSON.parse(saved);
      setSettings(parsed);
      setSettingsTemp(parsed);
    }
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest(".settings") && !e.target.closest(".inicio")) {
        setSettingsOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const handleSave = () => {
    setSettings(settingsTemp);
    localStorage.setItem("settings", JSON.stringify(settingsTemp));
    setSettingsOpen(false);
  };

  return (
    <div
      className="container"
      lang={settings.language}
      style={{
        backgroundImage: `url(/fondos/${settings.background}.jpeg)`
      }}
    >
      <div className="inicio">
        <h1>{t.title}</h1>
        <div className="acciones">
          <button className="add" onClick={() => setVista("formulario")}>
             {t.add}
          </button>
          <button onClick={() => setSettingsOpen(!settingsOpen)}>
            Config.
          </button>
        </div>
      </div>

      {settingsOpen && (
        <div className="settings">
          <h3>{t.config}</h3>
          <div className="section">
            <p>{t.background}</p>
            <div className="fondos-grid">
              {[1, 2, 3, 4, 5].map((num) => (
                <img
                  key={num}
                  src={`/fondos/fondo${num}.jpeg`}
                  alt=""
                  className={
                    settingsTemp.background === `fondo${num}` ? "activo" : ""
                  }
                  onClick={() =>
                    setSettingsTemp({
                      ...settingsTemp,
                      background: `fondo${num}`
                    })
                  }
                />
              ))}
            </div>
          </div>

          <div className="section">
            <p>{t.timezone}</p>
            <select
              value={settingsTemp.timezone}
              onChange={(e) =>
                setSettingsTemp({
                  ...settingsTemp,
                  timezone: e.target.value
                })
              }
            >
              <option value="Europe/Madrid">España</option>
              <option value="America/New_York">Nueva York</option>
              <option value="Asia/Tokyo">Tokio</option>
            </select>
          </div>

          <div className="section">
            <p>{t.language}</p>
            <select
              value={settingsTemp.language}
              onChange={(e) =>
                setSettingsTemp({
                  ...settingsTemp,
                  language: e.target.value
                })
              }
            >
              <option value="es-ES">Español</option>
              <option value="en-US">English</option>
            </select>
          </div>
          <button className="guardar" onClick={handleSave}>
            {t.save}
          </button>
        </div>
      )}

      {vista === "home" && (
        <div className="dashboard">
          <div className="sidebar">
            <div className="card">
              <Reloj settings={settings} />
            </div>

            <div className="card">
              <Conversor settings={settings} />
            </div>
          </div>
          <div className="main">
            <div className="card">
              <Balance settings={settings} />
            </div>
            <div className="card">
              <ListaTransacciones settings={settings} />
            </div>
          </div>
        </div>
      )}

      {vista === "formulario" && (
        <div className="card">
          <Formulario settings={settings} />
          <br />
          <div className="volver">
          <button onClick={() => setVista("home")}>
             {t.back}
          </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;