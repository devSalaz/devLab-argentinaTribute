import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import MessiTexture from "../Assets/textures/messiChampion.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PlaneImage = ({ secondRef, thirdRef, fourthRef }) => {
  const planeRef = useRef(null);

  const setupAnimationPlane = () => {
    const t1 = gsap.timeline();

    //Third Section
    t1.fromTo(
      planeRef.current.rotation,
      {
        y: -Math.PI / 2,
      },
      {
        y: 0,
        duration: 4,
        ease: "linear",
        scrollTrigger: {
          trigger: thirdRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );

    //Fourth Section
    t1.fromTo(
      planeRef.current.position,
      {
        y: 0,
      },
      {
        y: 0.5,
        duration: 4,
        ease: "linear",
        scrollTrigger: {
          trigger: fourthRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );

    //Space
  };

  useFrame((state) => {
    if (state.camera.position.z > 2.0) {
      planeRef.current.visible = false;
    } else {
      planeRef.current.visible = true;
    }
  });

  useEffect(() => {
    setupAnimationPlane();
  }, []);
  return (
    <>
      <mesh
        ref={planeRef}
        scale={[0.08, 0.08, 1]}
        position={[0, 0, -1]}
        rotation-y={-Math.PI / 2}
      >
        <meshBasicMaterial
          color={"#ffffff"}
          map={useTexture(MessiTexture)}
          transparent
        />
        <planeGeometry />
      </mesh>
    </>
  );
};

export default PlaneImage;
