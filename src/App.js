import "./App.css";
import React, { useState, useEffect } from "react";

function TrafficLight() {
  const [light, setLight] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      setLight((prev) =>
        prev === "red" ? "yellow" : prev === "yellow" ? "green" : "red"
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="traffic-light">
      <div className={`light ${light === "red" ? "red" : ""}`} />
      <div className={`light ${light === "yellow" ? "yellow" : ""}`} />
      <div className={`light ${light === "green" ? "green" : ""}`} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TrafficLight />
    </div>
  );
}

export default App;
