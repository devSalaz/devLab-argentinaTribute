import React from "react";
import { useProgress } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Loader = ({ setLoaded }) => {
  const { loaded, total } = useProgress();

  useFrame(() => {
    const loadedProgress = Math.floor((loaded / total) * 100);
    setLoaded(loadedProgress == 100);
  });
  return <></>;
};

export default Loader;
