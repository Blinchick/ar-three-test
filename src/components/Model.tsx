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

const Model = () => {
  const glbSrc = "/models/tigress_kung_fu_panda_chi_master.glb";
  const iosSrc = "/models/Tigress_Kung_Fu_Panda_Chi_Master.usdz";

  return (
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
        auto-rotate
        scale="0.5 0.5 0.5"
        camera-controls
        camera-orbit="0deg 90deg 0deg 8.37364m"
        alt="3D model"
      ></model-viewer>
    </div>
  );
};

export default Model;
