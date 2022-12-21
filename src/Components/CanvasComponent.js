import React from "react";
import { Canvas } from "@react-three/fiber";
import ThreeComponent from "./ThreeComponent";
import Loader from "./Loader";

const CanvasComponent = ({
  dataMouse,
  firstRef,
  secondRef,
  thirdRef,
  fourthRef,
  fiveRef,
  sixRef,
  musicMode,
  setLoaded,
}) => {
  return (
    <div className="canvas-container">
      <Canvas camera={{ fov: 20, position: [0, 0, 5] }}>
        <ThreeComponent
          dataMouse={dataMouse}
          firstRef={firstRef}
          secondRef={secondRef}
          thirdRef={thirdRef}
          fourthRef={fourthRef}
          fiveRef={fiveRef}
          sixRef={sixRef}
          musicMode={musicMode}
        />
        <Loader setLoaded={setLoaded} />
      </Canvas>
    </div>
  );
};

export default CanvasComponent;
