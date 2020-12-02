import React from "react";
import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [mostrar, setMostrar] = useState(true);
  return (
    <div>
      <button class="btn btn-outline-warning" onClick={() => setMostrar(false)}>
        Dejar de mostrar
      </button>
      {mostrar ? <MouseColor /> : null}
    </div>
  );
}

function MouseColor() {
  const [color, setColor] = useState("orange");

  useEffect(() => {
    function onMouseMove(evento) {
      if (evento.clientX < window.innerWidth / 2) {
        setColor("orange");
      } else {
        setColor("blue");
      }
    }

    window.addEventListener("mousemove", onMouseMove);
  }, []);
  console.log("tenemos un render");
  return <div style={{ height: "85vh", background: color }} />;
}
