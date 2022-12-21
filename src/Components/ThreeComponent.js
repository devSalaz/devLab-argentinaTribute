import React from "react";
import TextComponent from "./TextComponent";
import { useTexture } from "@react-three/drei";
import Lighting from "./Lighting";
import Ground from "./Ground";
import Effects from "./Effects";
import CameraRig from "./CameraRig";
import PlaneImage from "./PlaneImage";
import Trophie from "./Trophie";
import Starts from "./Starts";
import Photo from "./Photo";
import MessiCup from "../Assets/textures/messi-cup.jpg";
import MaradonaCup from "../Assets/textures/maradona-cup.jpg";
import KempesCup from "../Assets/textures/kempes-cup.jpg";

const ThreeComponent = ({
  dataMouse,
  firstRef,
  secondRef,
  thirdRef,
  fourthRef,
  fiveRef,
  sixRef,
  musicMode,
}) => {
  return (
    <>
      <CameraRig
        dataMouse={dataMouse}
        firstRef={firstRef}
        secondRef={secondRef}
        thirdRef={thirdRef}
      />
      <Effects />
      <Lighting />
      <Ground musicMode={musicMode} />
      <PlaneImage
        firstRef={firstRef}
        secondRef={secondRef}
        thirdRef={thirdRef}
        fourthRef={fourthRef}
      />
      <Trophie fourthRef={fourthRef} fiveRef={fiveRef} sixRef={sixRef} />
      <TextComponent musicMode={musicMode} />
      <Starts
        positionStar={{ x: -0.15, y: 0.5, z: -0.125 }}
        musicMode={musicMode}
        soundIndex={0}
      />
      <Starts
        positionStar={{ x: 0, y: 0.5, z: 0 }}
        musicMode={musicMode}
        soundIndex={1}
      />
      <Starts
        positionStar={{ x: 0.15, y: 0.5, z: -0.125 }}
        musicMode={musicMode}
        soundIndex={3}
      />
      <Photo
        musicMode={musicMode}
        scalePhoto={{ x: 0.45, y: 0.45, z: 1 }}
        positionPhoto={{ x: -1.15, y: 0, z: -0.1 }}
        texturePhoto={useTexture(MessiCup)}
        indexSound={22}
      />

      <Photo
        musicMode={musicMode}
        scalePhoto={{ x: 0.45, y: 0.45, z: 1 }}
        positionPhoto={{ x: 0.75, y: 0.5, z: 0 }}
        texturePhoto={useTexture(MaradonaCup)}
        indexSound={86}
      />
      <Photo
        musicMode={musicMode}
        scalePhoto={{ x: 0.45, y: 0.45, z: 1 }}
        positionPhoto={{ x: 1.35, y: -0.115, z: 0 }}
        texturePhoto={useTexture(KempesCup)}
        indexSound={78}
      />
    </>
  );
};

export default ThreeComponent;
