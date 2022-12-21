import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoPenalty = ({ sixRef, sevenRef }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [videoState] = useState({ frame: 1 });
  const [actualFrame, setActualFrame] = useState(1);

  const onUpdateCall = () => {
    const frameRounded = Math.round(videoState.frame);
    setActualFrame(frameRounded);
  };

  const setupAnimation = () => {
    //Six Section
    const t1 = gsap.timeline();
    t1.fromTo(
      containerRef.current,
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
        duration: 4,
        scrollTrigger: {
          trigger: sixRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      }
    );

    //Seven Section
    t1.fromTo(
      videoState,
      {
        frame: 1,
      },
      {
        frame: 157,
        duration: 12,
        scrollTrigger: {
          trigger: sevenRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
          onUpdate: onUpdateCall,
        },
      }
    );
  };

  useEffect(() => {
    setupAnimation();
  }, []);

  return (
    <div className="video-container" ref={containerRef}>
      <img
        ref={videoRef}
        src={`./frames/frame-${actualFrame}.jpg`}
        alt="penalty-kick"
        className="myVideo"
      />
    </div>
  );
};

export default VideoPenalty;
