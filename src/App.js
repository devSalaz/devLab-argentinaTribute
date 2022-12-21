import React, { useState, useRef, useEffect } from "react";
import Frame from "./Components/Frame";
import CanvasComponent from "./Components/CanvasComponent";
import SoundReactor from "./Classes/SoundReactor";
import VideoPenalty from "./Components/VideoPenalty";
import MessiSleep from "../src/Assets/textures/messi-sleep.jpg";
import LionelScaloni from "../src/Assets/textures/lionel-scaloni.jpg";
import EnzoFernandez from "../src/Assets/textures/enzo-fernandez.jpg";

import "./App.css";

function App() {
  const [dataMouse] = useState({ x: 0 });
  const [musicMode, setMusicMode] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);
  const fiveRef = useRef(null);
  const sixRef = useRef(null);
  const sevenRef = useRef(null);

  useEffect(() => {
    if (musicMode) {
      playMusic();
    } else {
      pauseMusic();
    }
  }, [musicMode]);

  const playMusic = () => {
    if (!SoundReactor.initFlag) {
      SoundReactor.initFlag = true;
      SoundReactor.init();
    }
    SoundReactor.play();
    SoundReactor.playFlag = true;
  };

  const pauseMusic = () => {
    SoundReactor.pause();
    SoundReactor.playFlag = false;
  };

  return (
    <>
      <div className="App">
        <div className={`loaderContainer ${isLoaded ? "load" : ""}`}>
          <h2>Loading...</h2>
        </div>
        <Frame dataMouse={dataMouse} musicMode={musicMode} />
        <CanvasComponent
          dataMouse={dataMouse}
          firstRef={firstRef}
          secondRef={secondRef}
          thirdRef={thirdRef}
          fourthRef={fourthRef}
          fiveRef={fiveRef}
          sixRef={sixRef}
          musicMode={musicMode}
          setLoaded={setLoaded}
        />
        <div ref={firstRef} className="first-section">
          <div className="content">
            <h2 className="main-title">
              Argentina World Cup Champion Qatar 2022
            </h2>
            <div className="bottom-container">
              <div className="info-container">
                <a
                  className="info-title"
                  target="_blank"
                  href="https://github.com/PavelDoGreat/WebGL-Fluid-Simulation"
                >
                  Github Fluid Simulation{" "}
                </a>
                <a
                  className="info-title"
                  target="_blank"
                  href="https://twitter.com/daviowhite/status/1597222953707798528?s=48&t=DandFsWrlNuSYUE7nOU-6Q"
                >
                  Tweet Reference
                </a>
              </div>
              <button
                className="music-btn"
                onClick={() => {
                  setMusicMode(!musicMode);
                }}
              >
                {!musicMode ? "Click Me" : "Stop"}
              </button>
            </div>
          </div>
        </div>
        <div ref={secondRef} className="second-section"></div>
        <div ref={thirdRef} className="third-section"></div>
        <div ref={fourthRef} className="fourth-section">
          <div className="fourth-content">
            <h2 className="messi-phrase">
              Verified CAMPEONES DEL MUNDO!!!!!!! 🌎🏆
              <br></br>
              <br></br>
              Tantas veces lo soñé, tanto lo deseaba que aún no caigo, no me lo
              puedo creer…… Muchas gracias a mi familia, a todos los que me
              apoyan y también a todos los que creyeron en nosotros. Demostramos
              una vez más que los argentinos cuando luchamos juntos y unidos
              somos capaces de conseguir lo que nos propongamos. El mérito es de
              este grupo, que está por encima de las individualidades, es la
              fuerza de todos peleando por un mismo sueño que también era el de
              todos los argentinos… Lo logramos!!!
              <br></br>
              <br></br>
              VAMOS ARGENTINA CARAJO!!!!! - Leo Messi 🙌🏻🙌🏻
            </h2>
            <img className="messi-sleep" src={MessiSleep} alt="GOAT" />
          </div>
        </div>
        <div ref={fiveRef} className="five-section">
          <div className="five-content">
            <div className="five-left">
              <img
                className="five-img"
                src={LionelScaloni}
                alt="lionel-scaloni"
              />
              <p className="name">Lionel Scaloni - DT</p>
            </div>
            <div className="five-right">
              <img
                className="five-img"
                src={EnzoFernandez}
                alt="lionel-scaloni"
              />
              <p className="name">Enzo Fernandez - Golden Boy</p>
            </div>
          </div>
        </div>
        <div className="six-section" ref={sixRef}>
          <VideoPenalty sixRef={sixRef} sevenRef={sevenRef} />
        </div>
        <div ref={sevenRef} className="seven-section"></div>
      </div>
      <div className="no-load">
        <h2>Sorry this website was made just for big screens :P</h2>
      </div>
    </>
  );
}

export default App;
