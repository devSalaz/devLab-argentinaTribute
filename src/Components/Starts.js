import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import SoundReactor from "../Classes/SoundReactor";

const Starts = ({ positionStar, musicMode, soundIndex = 0, scaleStar = 4 }) => {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("./models/star.glb");

  useFrame(() => {
    if (musicMode) {
      const soundData = SoundReactor.fdata[scaleStar] / 255;
      const ultimateScale = scaleStar + soundData * 1.5;
      groupRef.current.scale.set(ultimateScale, ultimateScale, ultimateScale);
    }

    const materialOpacity = musicMode ? 1 : 0;

    groupRef.current.children.forEach((element) => {
      element.material.opacity = THREE.MathUtils.lerp(
        element.material.opacity,
        materialOpacity,
        0.05
      );
    });
  });

  return (
    <>
      <group
        ref={groupRef}
        rotation-x={-Math.PI / 2}
        scale={4}
        position={[positionStar.x, positionStar.y, positionStar.z]}
      >
        <mesh
          name="star_0"
          castShadow
          receiveShadow
          geometry={nodes.star_0.geometry}
          material={materials.glassesFrames}
          material-transparent={true}
          material-opacity={0}
        />
        <mesh
          name="star_1"
          castShadow
          receiveShadow
          geometry={nodes.star_1.geometry}
          material={materials.lens}
          material-transparent={true}
          material-opacity={0}
        />
        <mesh
          name="star_2"
          castShadow
          receiveShadow
          geometry={nodes.star_2.geometry}
          material={materials.Star}
          material-roughness={0}
          material-transparent={true}
          material-opacity={0}
        />
      </group>
    </>
  );
};

useGLTF.preload("./models/star.glb");

export default Starts;
