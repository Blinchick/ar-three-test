declare module "@google/model-viewer" {
  import React from "react";

  interface ModelViewerProps extends React.HTMLProps<HTMLElement> {
    src: string;
    ar?: boolean;
    alt?: string;
  }

  const ModelViewer: React.FC<ModelViewerProps>;
  export default ModelViewer;
}
