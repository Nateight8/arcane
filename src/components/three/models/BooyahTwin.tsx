/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf --types
Author: FFCN (https://sketchfab.com/anuginethuka)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hidden-blast-bundle-free-fire-1st-booyah-pass-35878449fad6413fbb0ccafa45530818
Title: HIDDEN BLAST BUNDLE FREE FIRE 1ST BOOYAH PASS
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Mesh_0007rip_mat0_0: THREE.Mesh;
    Mesh_0008rip_mat0001_0: THREE.Mesh;
    Mesh_0009rip_mat0002_0: THREE.Mesh;
    Mesh_0010rip_mat0003_0: THREE.Mesh;
    Mesh_0011rip_mat0004_0: THREE.Mesh;
  };
  materials: {
    mat0: THREE.MeshStandardMaterial;
    ["mat0.001"]: THREE.MeshStandardMaterial;
    ["mat0.002"]: THREE.MeshStandardMaterial;
    ["mat0.003"]: THREE.MeshStandardMaterial;
    ["mat0.004"]: THREE.MeshStandardMaterial;
  };
};

export function BooyahTwin(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "models/hidden/scene.gltf"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.Mesh_0007rip_mat0_0.geometry}
          material={materials.mat0}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-290.36, 290.36, 290.36]}
        />
        <mesh
          geometry={nodes.Mesh_0008rip_mat0001_0.geometry}
          material={materials["mat0.001"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-290.36, 290.36, 290.36]}
        />
        <mesh
          geometry={nodes.Mesh_0009rip_mat0002_0.geometry}
          material={materials["mat0.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-290.36, 290.36, 290.36]}
        />
        <mesh
          geometry={nodes.Mesh_0010rip_mat0003_0.geometry}
          material={materials["mat0.003"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-290.36, 290.36, 290.36]}
        />
        <mesh
          geometry={nodes.Mesh_0011rip_mat0004_0.geometry}
          material={materials["mat0.004"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-290.36, 290.36, 290.36]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/hidden/scene.gltf");
