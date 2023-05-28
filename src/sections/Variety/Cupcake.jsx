import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const Cupcake = (props) => {
  const { nodes, materials } = useGLTF("/cupcake-transformed.glb");

  return (
    <Canvas>
      <Stage environment="city" intensity={0.6} scale={0.2}>
        <group {...props} dispose={null}>
          <group position={[0, -0.11, 5.06]} rotation={[-Math.PI, 0, 0]}>
            <mesh
              geometry={nodes.Object_2.geometry}
              material={materials.material_0}
            />
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials.material_1}
              scale={1.7}
            />
            <mesh
              geometry={nodes.Object_3.geometry}
              material={materials.material_0}
            />
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials.material_1}
            />
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.material_2}
            />
            <mesh
              geometry={nodes.Object_7.geometry}
              material={materials.material_2}
            />
          </group>
        </group>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

useGLTF.preload("/cupcake-transformed.glb");
