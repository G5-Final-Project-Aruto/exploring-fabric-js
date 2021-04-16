import React, { useState, useEffect } from "react";
import { fabric } from "fabric";

const App = () => {
  const [canvas, setCanvas] = useState("");
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  const initCanvas = () =>
    new fabric.Canvas("canvas", {
      height: 800,
      width: 800,
      backgroundColor: "pink",
    });

  const addRect = (canvi) => {
    const rect = new fabric.Rect({
      height: 280,
      width: 200,
      fill: "yellow",
    });
    canvi.add(rect);
    canvi.renderAll();
  };

  return (
    <div>
      <h1>Fabric.js on React - fabric.Canvas('...')</h1>
      <button onClick={() => addRect(canvas)}>Rectangle</button>
      <canvas id="canvas" />
    </div>
  );
};

export default App;
