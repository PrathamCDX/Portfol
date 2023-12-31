import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { HemisphereLight } from "three";

// import CanvasLoader from "../Loader";

const Globe = () => {
  const earth = useGLTF("./Machine/scene.gltf");

  return (
    <primitive object={earth.scene} scale={1} position-y={0}  />
  );
};

const MachineCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 20]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 1,
        far: 2000,
        position: [100, 100, 100],
      }}
    >
        
        <pointLight position={[100, 100, 100]} intensity={0.2} />
        <ambientLight intensity={0.9} />
        
      
        <OrbitControls
          autoRotateSpeed={0}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Globe />

        <Preload all />
      
    </Canvas>
  );
};

export default MachineCanvas;
