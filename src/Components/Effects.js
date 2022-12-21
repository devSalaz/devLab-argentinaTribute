import React from "react";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";

const Effects = () => {
  return (
    <>
      <EffectComposer>
        <Bloom mipmapBlur intensity={0.75} luminanceThreshold={0} />
        <Vignette offset={0.3} darkness={0.9} />
      </EffectComposer>
    </>
  );
};

export default Effects;
