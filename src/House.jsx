import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function HouseModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./green.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Circle007"
          geometry={nodes.Circle007.geometry}
          material={materials.Grey}
          position={[-2.378, 0.349, -2.185]}
          rotation={[0, -1.084, 0]}
        >
          <mesh
            name="Circle004"
            geometry={nodes.Circle004.geometry}
            material={materials.White}
          >
            <mesh
              name="Circle005"
              geometry={nodes.Circle005.geometry}
              material={materials.White}
              position={[0, 3.836, 0]}
            >
              <mesh
                name="Circle006"
                geometry={nodes.Circle006.geometry}
                material={materials.Grey}
                position={[0, 0, 0.711]}
              >
                <group name="Plane002" position={[0, 0, 0.074]}>
                  <mesh
                    name="Plane"
                    geometry={nodes.Plane.geometry}
                    material={materials.White}
                  />
                  <mesh
                    name="Plane_1"
                    geometry={nodes.Plane_1.geometry}
                    material={materials.Accent}
                  />
                </group>
              </mesh>
            </mesh>
          </mesh>
        </mesh>
        <mesh
          name="Grass"
          geometry={nodes.Grass.geometry}
          material={materials["Material.004"]}
        >
          <mesh
            name="Cylinder"
            geometry={nodes.Cylinder.geometry}
            material={materials["Material.004"]}
            position={[-1.66, 0.466, 2.45]}
            rotation={[0, 1.34, 0]}
            scale={1.822}
          />
          <mesh
            name="Cylinder001"
            geometry={nodes.Cylinder001.geometry}
            material={materials["Material.004"]}
            position={[-2.929, 0.466, 0.807]}
            rotation={[0, 1.306, 0]}
            scale={1.739}
          />
          <mesh
            name="Cylinder002"
            geometry={nodes.Cylinder002.geometry}
            material={materials["Material.004"]}
            position={[-1.622, 0.466, -0.838]}
            rotation={[0, -1.34, 0]}
            scale={1.841}
          />
          <mesh
            name="Cylinder003"
            geometry={nodes.Cylinder003.geometry}
            material={materials["Material.004"]}
            position={[-3.375, 0.466, -3.415]}
            rotation={[0, -0.872, 0]}
            scale={1.476}
          />
          <mesh
            name="Cylinder004"
            geometry={nodes.Cylinder004.geometry}
            material={materials["Material.004"]}
            position={[-1.973, 0.466, 3.184]}
            rotation={[0, 1.227, 0]}
            scale={1.318}
          />
          <mesh
            name="Cylinder005"
            geometry={nodes.Cylinder005.geometry}
            material={materials["Material.004"]}
            position={[-2.975, 0.466, 0.198]}
            scale={1.159}
          />
        </mesh>
        <mesh
          name="Ground"
          geometry={nodes.Ground.geometry}
          material={materials["Material.003"]}
        />
        <group name="House" position={[1.548, 0.2, -1.124]} scale={1.016}>
          <mesh
            name="Plane004_1"
            geometry={nodes.Plane004_1.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            name="Plane004_2"
            geometry={nodes.Plane004_2.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            name="Plane004"
            geometry={nodes.Plane004.geometry}
            material={materials["Material.007"]}
            position={[0.039, 3.634, 0]}
            rotation={[0, 0, -0.32]}
            scale={0.949}
          >
            <mesh
              name="Plane005"
              geometry={nodes.Plane005.geometry}
              material={materials["Material.009"]}
              position={[0, 0.117, 0]}
            />
          </mesh>
        </group>
        <mesh
          name="Hydrant"
          geometry={nodes.Hydrant.geometry}
          material={materials["Material.006"]}
          position={[2.806, 0.202, 2.988]}
          scale={1.162}
        />
        <mesh
          name="Sidewalk"
          geometry={nodes.Sidewalk.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          name="Tree"
          geometry={nodes.Tree.geometry}
          material={materials["Material.003"]}
          position={[-2.591, 0.35, 2.757]}
          scale={1.539}
        >
          <mesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials["Material.004"]}
            position={[0, 1.749, 0]}
            rotation={[0.543, 0.522, -0.924]}
            scale={1.13}
          />
          <mesh
            name="Cube001"
            geometry={nodes.Cube001.geometry}
            material={materials["Material.004"]}
            position={[-0.154, 1.233, 0.424]}
            rotation={[0.543, 0.522, -0.924]}
            scale={1.13}
          />
          <mesh
            name="Cube003"
            geometry={nodes.Cube003.geometry}
            material={materials["Material.004"]}
            position={[0.007, 1.239, -0.47]}
            rotation={[0.543, 0.522, -0.924]}
            scale={1.13}
          />
          <mesh
            name="Cube004"
            geometry={nodes.Cube004.geometry}
            material={materials["Material.004"]}
            position={[0.466, 1.364, 0.149]}
            rotation={[0.543, 0.522, -0.924]}
            scale={1.13}
          />
          <mesh
            name="Cube005"
            geometry={nodes.Cube005.geometry}
            material={materials["Material.004"]}
            position={[-0.449, 1.426, 0.04]}
            rotation={[0.543, 0.522, -0.924]}
            scale={1.13}
          />
          <mesh
            name="Cube006"
            geometry={nodes.Cube006.geometry}
            material={materials["Material.004"]}
            position={[-0.104, 1.891, -0.507]}
            rotation={[0.543, 0.522, -0.924]}
            scale={1.13}
          />
          <mesh
            name="Cube007"
            geometry={nodes.Cube007.geometry}
            material={materials["Material.004"]}
            position={[-0.369, 2.179, -0.119]}
            rotation={[0.543, 0.522, -0.924]}
            scale={1.13}
          />
          <mesh
            name="Cube008"
            geometry={nodes.Cube008.geometry}
            material={materials["Material.004"]}
            position={[-0.217, 2.035, 0.462]}
            rotation={[0.543, 0.522, -0.924]}
            scale={1.13}
          />
          <mesh
            name="Cube009"
            geometry={nodes.Cube009.geometry}
            material={materials["Material.004"]}
            position={[0.681, 1.888, -0.079]}
            rotation={[0.543, 0.522, -0.924]}
            scale={1.13}
          />
          <mesh
            name="Cube010"
            geometry={nodes.Cube010.geometry}
            material={materials["Material.004"]}
            position={[0.326, 2.221, 0.288]}
            rotation={[0.543, 0.522, -0.924]}
            scale={1.13}
          />
          <mesh
            name="Cube011"
            geometry={nodes.Cube011.geometry}
            material={materials["Material.004"]}
            position={[-0.663, 1.59, -0.419]}
            rotation={[0.543, 0.522, -0.924]}
            scale={1.13}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("./green.glb");