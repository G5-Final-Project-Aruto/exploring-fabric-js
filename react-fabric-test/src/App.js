import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import tShirt from "./assets/background_tshirt.png";
import domtoimage from "dom-to-image";
import batman from "./assets/batman.png";

const App = () => {
  // const imgUrlBatman =
  //   "https://cdn.ourcodeworld.com/public-media/gallery/gallery-5d5b0e95d294c.png"; || Kena Cors
  const [canvas, setCanvas] = useState("");
  const [tShirtColor, setTshirtColor] = useState("#fff");
  const [refTshirt] = useState(React.createRef());
  const [createdImage, setCreatedImage] = useState("");

  useEffect(() => {
    setCanvas(tShirtCanvas());
  }, []);

  const tShirtCanvas = () =>
    new fabric.Canvas("tshirt-canvas", {
      height: 400,
      width: 200,
    });

  const addMainLogo = (canvi) => {
    fabric.Image.fromURL(batman, function (myImg) {
      myImg.scaleToHeight(200);
      myImg.scaleToWidth(200);
      canvi.centerObject(myImg);
      canvi.add(myImg);
      canvi.renderAll();
    });
  };

  const changeColor = (e) => {
    // console.log(e.target.value);
    setTshirtColor(e.target.value);
  };

  const node = refTshirt.current;

  const saveToImage = (e) => {
    // console.log(e);
    domtoimage
      .toPng(node)
      .then(function (dataUrl) {
        // Print the data URL of the picture in the Console
        console.log(dataUrl);

        // You can for example to test, add the image at the end of the document
        let img = new Image();
        img.src = dataUrl;
        img.crossOrigin = "anonymous";
        setCreatedImage(dataUrl);
        // document.body.appendChild(document.createElement("DIV"));
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <>
      <div
        ref={refTshirt}
        id="tshirt-div"
        style={{ backgroundColor: tShirtColor }}
      >
        <img id="tshirt-backgroundpicture" src={tShirt} alt="..." />
        <div id="drawingArea" className="drawing-area">
          <div className="canvas-container">
            <canvas id="tshirt-canvas"></canvas>
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => addMainLogo(canvas)}>Logo</button>
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
        {/* <label>Upload your own design:</label> */}
        {/* <input type="file" id="tshirt-custompicture" /> */}
        <button onClick={saveToImage}>Save Change</button>
      </div>
      <div>{createdImage ? <img src={createdImage} alt="..." /> : ""}</div>
    </>
  );
};

export default App;
