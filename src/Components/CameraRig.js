import React, { useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CameraRig = ({ dataMouse, firstRef, secondRef, thirdRef }) => {
  const { camera } = useThree();

  useFrame((state, delta) => {
    const ultimaValX = state.camera.position.z > 4.5 ? dataMouse.x / 2 : 0;

    const lerpedX = THREE.MathUtils.lerp(
      state.camera.position.x,
      ultimaValX,
      0.1
    );

    state.camera.position.x = lerpedX;
    state.camera.lookAt(0, 0, -1);
  });

  const setupAnimationCamera = () => {
    const t1 = gsap.timeline();

    //Second Section
    t1.fromTo(
      camera.position,
      {
        z: 5,
      },
      {
        z: 1.35,
        duration: 4,
        ease: "linear",
        scrollTrigger: {
          trigger: secondRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );

    //Third Section
    t1.fromTo(
      camera.position,
      {
        z: 1.35,
      },
      {
        z: -0.7,
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
    //Space
    camera.position.z = 5;
  };

  useEffect(() => {
    setupAnimationCamera();
  }, []);

  return <></>;
};

export default CameraRig;
