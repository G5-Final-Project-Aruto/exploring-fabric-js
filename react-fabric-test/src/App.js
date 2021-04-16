import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import tShirt from "./assets/background_tshirt.png";

const App = () => {
  const imgUrlBatman =
    "https://cdn.ourcodeworld.com/public-media/gallery/gallery-5d5b0e95d294c.png";
  const [canvas, setCanvas] = useState("");
  const [tShirtColor, setTshirtColor] = useState("#fff");

  useEffect(() => {
    setCanvas(tShirtCanvas());
  }, []);

  const tShirtCanvas = () =>
    new fabric.Canvas("tshirt-canvas", {
      height: 400,
      width: 200,
    });

  const addRect = (canvi) => {
    fabric.Image.fromURL(imgUrlBatman, function (myImg) {
      myImg.scaleToHeight(200);
      myImg.scaleToWidth(200);
      canvi.centerObject(myImg);
      canvi.add(myImg);
      canvi.renderAll();
    });
  };

  const changeColor = (e) => {
    console.log(e.target.value);
    setTshirtColor(e.target.value);
  };

  return (
    <>
      <div id="tshirt-div" style={{ backgroundColor: tShirtColor }}>
        <img id="tshirt-backgroundpicture" src={tShirt} alt="..." />
        <button onClick={() => addRect(canvas)}>Logo</button>
        <div id="drawingArea" className="drawing-area">
          <div className="canvas-container">
            <canvas id="tshirt-canvas"></canvas>
          </div>
        </div>
        <div>
          <label>T-Shirt Color:</label>
          <select onChange={changeColor} id="tshirt-color">
            <option value="#fff">White</option>
            <option value="#000">Black</option>
            <option value="#f00">Red</option>
            <option value="#008000">Green</option>
            <option value="#ff0">Yellow</option>
          </select>
        </div>
        <div>
          <label>Upload your own design:</label>
          <input type="file" id="tshirt-custompicture" />
          <button>Save Change</button>
        </div>
      </div>
    </>
  );
};

export default App;
