/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/models/house/garden_v3.glb
*/

import React, { useRef } from "react";
import { useThree } from "@react-three/fiber";
import useGltfKtx2 from "@/lib/useGltfKtx2";

export default function Garden(props) {
  const { gl } = useThree();

  const { nodes, materials, scene } = useGltfKtx2(
    "/models/house/garden_v3.glb",
    gl,
  );

  return <primitive object={scene} {...props} />;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.地台.geometry}
        material={materials.室外地板}
        position={[0.161, -0.048, -5.085]}
        scale={[4.589, 5.537, 5.537]}
      />
      <mesh
        geometry={nodes.平面006.geometry}
        material={materials.外墙白}
        position={[-0.126, 0.746, -9.151]}
        scale={[5.617, 5.573, 5.617]}
      />
      <mesh
        geometry={nodes.平面008.geometry}
        material={materials["材质.003"]}
        position={[0.096, -0.177, -10.091]}
        scale={4.636}
      />
      <group
        position={[-2.753, 0.374, -3.921]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.411, 0.332, 0.411]}
      >
        <mesh
          geometry={nodes.Bin_Assy016.geometry}
          material={materials.PaletteMaterial003}
        />
        <mesh
          geometry={nodes.Bin_Assy016_1.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.Bin_Assy016_2.geometry}
          material={materials.PaletteMaterial002}
        />
      </group>
      <mesh
        geometry={nodes["Obj3d66-13133296-7-292002"].geometry}
        material={materials["Material #37"]}
        position={[-1.299, 0.848, -8.391]}
        rotation={[0, -0.354, 0]}
        scale={4.345}
      />
      <group position={[-0.36, 1.008, -11.567]} scale={1.923}>
        <mesh
          geometry={nodes.网格003.geometry}
          material={materials.PaletteMaterial004}
        />
        <mesh
          geometry={nodes.网格003_1.geometry}
          material={materials["Material #37.001"]}
        />
      </group>
      <mesh
        geometry={nodes["Obj3d66-16952176-70-775"].geometry}
        material={materials["3d66-Standardmaterial-16952176-005"]}
        position={[0.841, 1.904, -11.67]}
        rotation={[0, 0.906, 0]}
        scale={[1.504, 1.218, 1.504]}
      />
    </group>
  );
}

// useGLTF.preload("/models/house/garden_v3.glb");
