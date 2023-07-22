import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

const Globe = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={3} position-y={0}  />
  );
};

const GlobeCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 20]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
        position: [0, 0, 0],
      }}
    >
      
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Globe />

        <Preload all />
      
    </Canvas>
  );
};

export default GlobeCanvas;
