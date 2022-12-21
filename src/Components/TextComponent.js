import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import LetterTexture from "../Assets/textures/textureLetter2.png";
import gsap from "gsap";

const TextComponent = ({ musicMode }) => {
  const { nodes } = useGLTF("./models/letter.glb");
  const materialRef = useRef(null);

  useEffect(() => {
    const darkColor = new THREE.Color().set("#252525");
    const cyanColor = new THREE.Color().set("#54aaf5");

    gsap.to(materialRef.current.color, {
      r: !musicMode ? darkColor.r : cyanColor.r,
      g: !musicMode ? darkColor.g : cyanColor.g,
      b: !musicMode ? darkColor.b : cyanColor.b,
      duration: 1,
      ease: "easeOut",
    });
  }, [musicMode]);

  return (
    <>
      <group dispose={null}>
        <mesh
          scale={[3, 10, 3]}
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <meshPhysicalMaterial
            ref={materialRef}
            color={"#252525"}
            roughness={0.35}
            metalness={0.5}
            emissiveIntensity={1.0}
            emissiveMap={useTexture(LetterTexture)}
            emissive={"#ffffff"}
          />
        </mesh>
      </group>
    </>
  );
};

useGLTF.preload("./models/letter.glb");
export default TextComponent;
