import React from "react";
import "@google/model-viewer/lib/model-viewer";
import type { ModelViewerElement } from "@google/model-viewer/dist/model-viewer";

declare global {
  /* eslint-disable @typescript-eslint/no-namespace */
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<ModelViewerElement>,
        ModelViewerElement
      > & {
        id?: string;
        src?: string;
        "ios-src": string;
        seamlessPoster?: boolean;
        environmentImage?: string;
        interactionPromptThreshold?: string;
        shadowIntensity?: string;
        ar?: boolean;
        autoplay?: boolean;
        arModes?: string;
        arScale?: string;
        autoRotate?: boolean;
        cameraControls?: boolean;
        cameraOrbit?: string;
        alt?: string;
        scale?: string;
        children?: React.ReactNode;
      };
    }
  }
}

interface ModelProps {
  glbSrc: string;
  iosSrc: string;
}

const Model = React.forwardRef<ModelViewerElement, ModelProps>(function Model(
  { glbSrc, iosSrc },
  ref
) {
  return (
    <div>
      <model-viewer
        ref={ref}
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
      >
        <button slot="ar-button" id="ar-button">
          View in your space
        </button>
        <div id="ar-prompt">
          <img src="../../assets/hand.png" />
        </div>
        <button id="ar-failure">AR is not tracking!</button>
      </model-viewer>
    </div>
  );
});

export default Model;
