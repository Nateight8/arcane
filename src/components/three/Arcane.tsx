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

function Arcane({}: Props) {
  const model = useRef<any>();

  useLayoutEffect(() => {
    // gsap.to(model.current.rotation, { y: "+=1" });
  }, []);

  return (
    <group ref={model} scale={0.8} position={[0, -0.5, 0]}>
      <color attach="background" args={["#15151a"]} />
      <hemisphereLight intensity={0.5} />

      <SceneLight />

      <Booyah position={[0, -1.161, 2]} scale={0.8} />

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
    </group>
  );
}

export default Arcane;
