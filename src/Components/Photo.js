import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { NodeToyMaterial } from "@nodetoy/react-nodetoy";
import SoundReactor from "../Classes/SoundReactor";
import * as THREE from "three";

const Photo = ({
  musicMode,
  positionPhoto,
  scalePhoto,
  texturePhoto,
  indexSound = 0,
}) => {
  const materialRef = useRef(null);
  const planeRef = useRef(null);

  useFrame((state, delta) => {
    //Sound Animation
    if (SoundReactor.playFlag) {
      const scaledValue = (SoundReactor.fdata[indexSound] / 255) * 0.1;

      planeRef.current.scale.set(
        scalePhoto.x + scaledValue,
        scalePhoto.y + scaledValue,
        1.0
      );
    }

    //Lerped value
    const currentStep = musicMode ? 1.0 : 0.0;
    if (materialRef.current.uniforms.uStep) {
      materialRef.current.uniforms.uStep.value = THREE.MathUtils.lerp(
        materialRef.current.uniforms.uStep.value,
        currentStep,
        0.05
      );
    }

    //Animated Values
    if (materialRef.current.uniforms.uNoiseAngle) {
      materialRef.current.uniforms.uNoiseAngle.value = state.clock.elapsedTime;
    }
    if (materialRef.current.uniforms.uTexture) {
      materialRef.current.uniforms.uTexture.value = texturePhoto;
    }
  });

  return (
    <>
      <mesh
        ref={planeRef}
        scale={[scalePhoto.x, scalePhoto.y, scalePhoto.z]}
        position={[positionPhoto.x, positionPhoto.y, positionPhoto.z]}
      >
        <planeGeometry />
        <NodeToyMaterial
          ref={materialRef}
          url={"https://draft.nodetoy.co/fk9Q833m7uX5uuAH"}
        />
      </mesh>
    </>
  );
};

export default Photo;
