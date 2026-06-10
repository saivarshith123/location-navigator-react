import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const locations = [
    {
      title: "PG",
      icon: "🏠",
      description: "R3 Hearth Colive",

      // PASTE PG GOOGLE MAPS LINK HERE
      mapLink: "https://maps.app.goo.gl/NQpbkABuVtgg8cKH6",
    },
    {
      title: "Coaching Center",
      icon: "📚",
      description: "V Cube Software Solutions",

      // PASTE COACHING CENTER GOOGLE MAPS LINK HERE
      mapLink: "https://maps.app.goo.gl/sPUKqZPHsqzeWrGz8?g_st=aw",
    },
    {
      title: "Study Room",
      icon: "📖",
      description: "Ramadhani Reading Room",

      // PASTE STUDY ROOM GOOGLE MAPS LINK HERE
      mapLink: "https://maps.app.goo.gl/t6TSw56xzBwChVHS6?g_st=ac",
    },
  ];

  const openMap = (mapLink) => {
    window.open(mapLink, "_blank");
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="container">

        <div className="top-bar">
          <div></div>

          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="header">
          <h1>🧭 Location Navigator</h1>
          <p>Select a destination to start navigation</p>
        </div>

        <div className="nav-buttons">
          {locations.map((location, index) => (
            <button
              key={index}
              className="location-btn"
              onClick={() => openMap(location.mapLink)}
            >
              <span className="btn-icon">{location.icon}</span>

              <div className="btn-content">
                <div className="btn-title">{location.title}</div>
                <div className="btn-desc">{location.description}</div>
              </div>

              <span className="btn-arrow">➜</span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;