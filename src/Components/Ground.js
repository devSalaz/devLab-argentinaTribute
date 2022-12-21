import React from "react";
import { MeshReflectorMaterial } from "@react-three/drei";

const Ground = () => {
  return (
    <>
      <mesh
        rotation-x={-Math.PI / 2}
        scale={50}
        position-y={-0.5}
        position-z={24}
      >
        <planeGeometry />
        <MeshReflectorMaterial
          blur={[1024, 1024]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#252525"
          transparent
          opacity={0.8}
          metalness={0.8}
        />
      </mesh>
    </>
  );
};

export default Ground;
