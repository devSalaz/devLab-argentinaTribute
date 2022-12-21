import React, { useRef, useEffect } from "react";

const Frame = ({ dataMouse, musicMode }) => {
  const frameRef = useRef(null);

  const onMouseMoveHandler = (event) => {
    const appBody = document.body;
    const appWidth = appBody.offsetWidth;
    const eventX = (event.clientX / appWidth - 0.5) * 2;
    dataMouse.x = eventX;
  };

  useEffect(() => {
    const iframe = document.getElementById("myIframe");
    let iCanvas = null;
    iframe.onload = () => {
      const iWindow = iframe.contentWindow;
      const iDocument = iWindow.document;
      const iBody = iDocument.getElementsByTagName("body")[0];
      iCanvas = iBody.getElementsByTagName("canvas")[0];
      iCanvas.addEventListener("mousemove", onMouseMoveHandler);
    };

    return () => {
      if (iCanvas) {
        iCanvas.removeEventListener("mousemove", onMouseMoveHandler);
      }
    };
  }, []);

  return (
    <>
      <div className="frame-container">
        <div className={`frame-overlay ${musicMode ? "active" : ""}`}></div>
        <iframe id="myIframe" ref={frameRef} src="./fluids.html"></iframe>
      </div>
    </>
  );
};

export default Frame;
