import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
import Tunnel from "./Tunnel";

type Props = {};

function InfinityTunnel({}: Props) {
  return (
    <Canvas>
      <ambientLight />
      {/* <Tunnel /> */}
    </Canvas>
  );
}

export default InfinityTunnel;
