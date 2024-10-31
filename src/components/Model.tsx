import React from "react";

const modelViewerStyles: React.CSSProperties = {
  width: "500px",
  height: "700px",
};

const Model: React.FC<ModelProps> = ({ glbSrc, iosSrc }) => (
  <div>
    <model-viewer
      id="first"
      src={glbSrc}
      ios-src={iosSrc}
      seamless-poster
      environment-image="neutral"
      interaction-prompt-threshold={0}
      shadow-intensity={1}
      ar
      autoplay
      ar-modes="webxr scene-viewer quick-look"
      auto-rotate
      camera-controls
      camera-orbit="0deg 90deg 0deg 90deg"
      alt="3D model"
      scale="0.5 0.5 0.5"
      style={modelViewerStyles as any}
    ></model-viewer>
  </div>
);

export default Model;
