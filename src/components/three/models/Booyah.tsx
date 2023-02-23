/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --types
Author: FFCN (https://sketchfab.com/anuginethuka)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/neon-blast-bundel-freefire-1st-booyah-pass-c00a045e1ba14ba585b0485667063e97
Title: NEON BLAST BUNDEL FREEFIRE 1ST BOOYAH PASS
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_3: THREE.Mesh;
    Object_4: THREE.Mesh;
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
  };
  materials: {
    mat0: THREE.MeshStandardMaterial;
    ["mat0.001"]: THREE.MeshStandardMaterial;
    ["mat0.002"]: THREE.MeshStandardMaterial;
    ["mat0.003"]: THREE.MeshStandardMaterial;
    ["mat0.004"]: THREE.MeshStandardMaterial;
    ["mat0.005"]: THREE.MeshStandardMaterial;
  };
};

export function Booyah(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "models/booyah/scene.gltf"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.mat0} />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["mat0.001"]}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["mat0.002"]}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials["mat0.003"]}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials["mat0.004"]}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials["mat0.005"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/booyah/scene.gltf");
