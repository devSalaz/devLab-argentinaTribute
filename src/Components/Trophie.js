import React, { useRef, useEffect } from "react";
import { useGLTF, Float } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Trophie = ({ fourthRef, fiveRef, sixRef }) => {
  const { nodes, materials } = useGLTF("./models/worldCup.glb");
  const trophieRef = useRef(null);
  const refMat1 = useRef(null);
  const refMat2 = useRef(null);

  const setupAnimation = () => {
    const t1 = gsap.timeline();

    //Fourth Section
    t1.fromTo(
      trophieRef.current.position,
      {
        x: 1,
      },
      {
        x: 0,
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

    t1.fromTo(
      trophieRef.current.rotation,
      {
        x: 0,
      },
      {
        x: -Math.PI / 2,
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

    t1.fromTo(
      refMat1.current.material,
      {
        opacity: 0,
      },
      {
        opacity: 1,
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

    t1.fromTo(
      refMat2.current.material,
      {
        opacity: 0,
      },
      {
        opacity: 1,
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
  };

  useEffect(() => {
    setupAnimation();
  }, []);

  return (
    <>
      <group ref={trophieRef} scale={0.07} position-y={-0.175} position-z={-2}>
        <Float floatIntensity={20}>
          <mesh
            ref={refMat1}
            castShadow
            receiveShadow
            geometry={nodes.wctrophy_globe_low_globe_0.geometry}
            material={materials.globe}
            material-transparent={true}
          />
          <mesh
            ref={refMat2}
            castShadow
            receiveShadow
            geometry={nodes.wctrophy_body_low_body_0.geometry}
            material={materials.body}
            material-transparent={true}
          />
        </Float>
      </group>
    </>
  );
};

useGLTF.preload("./models/worldCup.glb");

export default Trophie;
