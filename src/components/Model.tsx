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
}

const Model: React.FC<ModelProps> = ({ glbSrc }) => (
  <div>
    <model-viewer
      id="first"
      src={glbSrc}
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
      camera-orbit="0deg 90deg 0deg 8.37364m"
      alt="3D model"
      scale="0.9 0.9 0.9"
    ></model-viewer>
  </div>
);

export default Model;
