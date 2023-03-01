import {
  ContactShadows,
  Environment,
  Html,
  Lightformer,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  useScroll,
} from "@react-three/drei";

import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useLayoutEffect, useRef } from "react";
import { Booyah } from "./models/Booyah";
import { BooyahGirl } from "./models/BooyahGirl";
import { BooyahTwin } from "./models/BooyahTwin";
import SceneLight from "./SceneLight";

const { gsap } = require("gsap/dist/gsap");
const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");

gsap.registerPlugin(ScrollTrigger);

type Props = {};

function ArcaneIntro({}: Props) {
  const model = useRef<any>();

  // useFrame((state, delta) => {
  //   model.current.rotation.y += 0.1 * delta;
  // });

  useLayoutEffect(() => {
    gsap.to(model.current.rotation, { y: Math.PI * 2 });
  }, []);

  return (
    <group ref={model}>
      <color attach="background" args={["#15151a"]} />
      <hemisphereLight intensity={0.5} />

      <SceneLight />
      {/* floor design */}

      {/* <group> */}
      {/* <Booyah position={[0, -1.161, 0]} scale={0.8} />
      <BooyahTwin position={[3, -1.161, 1]} scale={1.29} /> */}
      <Booyah position={[0, -1.161, 2]} scale={0.8} />
      {/* <BooyahGirl position={[2, -1.161, 0]} scale={0.39} />
      <BooyahGirl position={[-3, -1.161, 1]} scale={0.4} />
      <BooyahGirl position={[-2, -1.161, 0]} scale={0.4} /> */}

      <mesh
        scale={2}
        position={[-3, -1.161, -1]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
      >
        <ringGeometry args={[0.9, 1, 3, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
        {/* <ambientLight intensity={1.5} color="red" /> */}
      </mesh>
      <mesh
        scale={2}
        position={[3, -1.161, -1.5]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}
      >
        <ringGeometry args={[0.9, 1, 4, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh>
      {/* <Floor /> */}
      {/* </group> */}

      {/* ze Orbit */}

      {/* <OrbitControls
        enableRotate={true}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
      /> */}

      {/* <PerspectiveCamera makeDefault fov={25} position={[0, 0, 15]} /> */}
    </group>
  );
}

export default ArcaneIntro;
