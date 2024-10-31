import React from "react";
import "@google/model-viewer/lib/model-viewer";
import type { ModelViewerElement } from "@google/model-viewer/dist/model-viewer";

declare global {
  /* eslint-disable @typescript-eslint/no-namespace */
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": Partial<ModelViewerElement> &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

interface ModelProps {
  glbSrc: string;
  iosSrc: string;
}

// const modelViewerStyles: React.CSSProperties = {
//   width: "500px",
//   height: "700px",
// };

const Model: React.FC<ModelProps> = ({ glbSrc, iosSrc }) => (
  <div>
    <model-viewer
      id="first"
      src={glbSrc}
      ios-src={iosSrc}
      seamless-poster
      environment-image="neutral"
      interaction-prompt-threshold="0"
      shadow-intensity="1"
      ar
      autoplay
      ar-modes="webxr scene-viewer quick-look"
      ar-scale="0.2 0.2 0.2"
      auto-rotate
      camera-controls
      camera-orbit="0deg 90deg 0deg 90deg"
      alt="3D model"
      scale="0.5 0.5 0.5"
      /* eslint-disable @typescript-eslint/no-explicit-any */
      // style={modelViewerStyles as any}
    ></model-viewer>
  </div>
);

export default Model;
