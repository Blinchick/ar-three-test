import React, { useRef } from "react";
import { Canvas, ThreeEvent, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

type ModelProps = {
  position: [number, number, number];
  onPlaneClick: (event: ThreeEvent<MouseEvent>) => void;
};

const Model: React.FC<ModelProps> = ({ position, onPlaneClick }) => {
  const gltf = useGLTF("/models/deer.glb");
  const modelRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.position.set(...position);
    }
  });

  return (
    <primitive ref={modelRef} object={gltf.scene} onClick={onPlaneClick} />
  );
};

type ARSceneProps = {
  modelVisible: boolean;
  modelPosition: [number, number, number];
  onPlaneClick: (event: ThreeEvent<MouseEvent>) => void;
};

const ARScene: React.FC<ARSceneProps> = ({
  modelVisible,
  modelPosition,
  onPlaneClick,
}) => {
  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{ position: [0, 1.6, 2], fov: 50 }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {/* Render model only if visible */}
      {modelVisible && (
        <Model position={modelPosition} onPlaneClick={onPlaneClick} />
      )}

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ARScene;
