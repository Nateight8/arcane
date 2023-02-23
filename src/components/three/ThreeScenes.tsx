import {
  ContactShadows,
  Environment,
  Lightformer,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { BoxGeometry } from "three";
import Floor from "./Floor";
import { Booyah } from "./models/Booyah";
import { BooyahGirl } from "./models/BooyahGirl";
import { BooyahTwin } from "./models/BooyahTwin";
import SceneLight from "./SceneLight";

type Props = {};

function ThreeScenes({}: Props) {
  return (
    <Suspense fallback={null}>
      <Canvas
        gl={{ logarithmicDepthBuffer: true, antialias: false }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={["#15151a"]} />
        <hemisphereLight intensity={0.5} />
        <ContactShadows
          resolution={1024}
          frames={1}
          position={[0, -1.16, 0]}
          scale={15}
          blur={0.5}
          opacity={1}
          far={20}
        />

        <SceneLight />
        {/* floor design */}
        <group>
          <Booyah position={[0, -1.161, 0]} scale={0.8} />
          <BooyahTwin position={[3, -1.161, 1]} scale={1.28} />
          <Booyah position={[0, -1.161, 2]} scale={0.8} />
          <BooyahGirl position={[2, -1.161, 0]} scale={0.38} />
          <BooyahGirl position={[-3, -1.161, 1]} scale={0.4} />
          <BooyahGirl position={[-2, -1.161, 0]} scale={0.4} />

          <mesh
            scale={4}
            position={[-3, -1.161, -1]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
          >
            <ringGeometry args={[0.9, 1, 3, 1]} />
            <meshStandardMaterial color="white" roughness={0.75} />
          </mesh>
          <mesh
            scale={4}
            position={[3, -1.161, -1.5]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
          >
            <ringGeometry args={[0.9, 1, 4, 1]} />
            <meshStandardMaterial color="white" roughness={0.75} />
          </mesh>
          {/* <Floor /> */}
        </group>

        {/* ze Orbit */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
        />

        <PerspectiveCamera makeDefault fov={25} position={[0, 0, 15]} />
      </Canvas>
    </Suspense>
  );
}

export default ThreeScenes;
