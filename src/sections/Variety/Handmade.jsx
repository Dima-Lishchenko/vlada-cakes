import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Handmade = (props) => {
  const { nodes, materials } = useGLTF("/handmade-transformed.glb");

  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <group {...props} dispose={null}>
          <group position={[2.24, 57.32, 18.8]}>
            <group position={[-2.24, -57.32, -18.8]}>
              <group
                position={[-119.01, 117.47, 37.54]}
                rotation={[0.33, 0.29, -0.1]}
              >
                <mesh
                  geometry={nodes.Extrude_2_White_2_0.geometry}
                  material={materials.White_2}
                />
                <mesh
                  geometry={nodes.Cap_1_White_2_0.geometry}
                  material={materials.White_2}
                />
                <mesh
                  geometry={nodes.Cap_2_White_2_0.geometry}
                  material={materials.White_2}
                />
              </group>
              <group
                position={[41.8, 117.47, 47.53]}
                rotation={[0, 0.49, -0.37]}
              >
                <mesh
                  geometry={nodes.Extrude_White_2_0.geometry}
                  material={materials.White_2}
                />
                <mesh
                  geometry={nodes.Cap_1_2_White_2_0.geometry}
                  material={materials.White_2}
                />
                <mesh
                  geometry={nodes.Cap_2_2_White_2_0.geometry}
                  material={materials.White_2}
                />
              </group>
              <group position={[-72.58, 29.71, 41.35]} rotation={[0, 1.17, 0]}>
                <mesh
                  geometry={nodes.Extrude_1_White_2_0.geometry}
                  material={materials.White_2}
                />
                <mesh
                  geometry={nodes.Cap_1_3_White_2_0.geometry}
                  material={materials.White_2}
                />
                <mesh
                  geometry={nodes.Cap_2_3_White_2_0.geometry}
                  material={materials.White_2}
                />
              </group>
            </group>
            <group position={[-2.24, -57.32, -18.8]}>
              <group
                position={[37.25, 127.86, -38.24]}
                rotation={[-0.36, 0.87, 0.06]}
              >
                <mesh
                  geometry={nodes.Extrude_3_White_0.geometry}
                  material={materials.White}
                />
                <mesh
                  geometry={nodes.Cap_1_4_White_0.geometry}
                  material={materials.White}
                />
                <mesh
                  geometry={nodes.Cap_2_4_White_0.geometry}
                  material={materials.White}
                />
              </group>
              <group position={[-38.3, 45.62, 44.42]} rotation={[0, -0.23, 0]}>
                <mesh
                  geometry={nodes.Extrude_2_2_White_0.geometry}
                  material={materials.White}
                />
                <mesh
                  geometry={nodes.Cap_1_5_White_0.geometry}
                  material={materials.White}
                />
                <mesh
                  geometry={nodes.Cap_2_5_White_0.geometry}
                  material={materials.White}
                />
              </group>
              <group position={[13.79, 66.84, 0]} rotation={[-0.19, 0, 0]}>
                <mesh
                  geometry={nodes.Extrude_2_3_White_0.geometry}
                  material={materials.White}
                />
                <mesh
                  geometry={nodes.Cap_1_6_White_0.geometry}
                  material={materials.White}
                />
                <mesh
                  geometry={nodes.Cap_2_6_White_0.geometry}
                  material={materials.White}
                />
              </group>
              <group
                position={[57.77, 45.62, -4.12]}
                rotation={[Math.PI, 1.03, 2.69]}
              >
                <mesh
                  geometry={nodes.Extrude_1_2_White_0.geometry}
                  material={materials.White}
                />
                <mesh
                  geometry={nodes.Cap_1_7_White_0.geometry}
                  material={materials.White}
                />
                <mesh
                  geometry={nodes.Cap_2_7_White_0.geometry}
                  material={materials.White}
                />
              </group>
              <group
                position={[-109.71, 36.21, 53.66]}
                rotation={[0.15, 0.41, 0.22]}
              >
                <mesh
                  geometry={nodes.Extrude_4_White_0.geometry}
                  material={materials.White}
                />
                <mesh
                  geometry={nodes.Cap_1_8_White_0.geometry}
                  material={materials.White}
                />
                <mesh
                  geometry={nodes.Cap_2_8_White_0.geometry}
                  material={materials.White}
                />
              </group>
              <group
                position={[-30.92, 0.49, 118.85]}
                rotation={[-Math.PI / 2, 0, -0.23]}
              >
                <mesh
                  geometry={nodes.Extrude_5_White_0.geometry}
                  material={materials.White}
                />
                <mesh
                  geometry={nodes.Cap_1_9_White_0.geometry}
                  material={materials.White}
                />
                <mesh
                  geometry={nodes.Cap_2_9_White_0.geometry}
                  material={materials.White}
                />
              </group>
            </group>
            <group position={[-0.53, 0.84, 6.33]}>
              <mesh
                geometry={nodes.Sphere_10_White_0.geometry}
                material={materials.White}
                position={[-11.1, 42.61, -57.8]}
              />
              <mesh
                geometry={nodes.Sphere_9_Red2_0.geometry}
                material={materials.Red2}
                position={[-2.63, 43.74, -44.43]}
              />
              <mesh
                geometry={nodes.Sphere_8_Ye2_0.geometry}
                material={materials.material}
                position={[-38.07, 41.4, -2.46]}
              />
              <mesh
                geometry={nodes.Sphere_7_White_0.geometry}
                material={materials.White}
                position={[-31.17, 42.47, 8.14]}
              />
              <mesh
                geometry={nodes.Sphere_6_Red3_0.geometry}
                material={materials.Red3}
                position={[-27.9, 46.22, -57.67]}
              />
              <mesh
                geometry={nodes.Sphere_5_White_0.geometry}
                material={materials.White}
                position={[46.59, -33.74, 4.71]}
              />
              <mesh
                geometry={nodes.Sphere_4_Ye1_0.geometry}
                material={materials.material_6}
                position={[21.33, -34.1, 32]}
              />
              <mesh
                geometry={nodes.Sphere_3_Red2_0.geometry}
                material={materials.Red2}
                position={[37.92, -32.86, 23.6]}
              />
              <mesh
                geometry={nodes.Sphere_2_Ye2_0.geometry}
                material={materials.material}
                position={[8.16, -36.82, 25.16]}
              />
              <mesh
                geometry={nodes.Sphere_1_White_0.geometry}
                material={materials.White}
                position={[8.16, -35.59, 38.74]}
              />
              <mesh
                geometry={nodes.Sphere_Red3_0.geometry}
                material={materials.Red3}
                position={[-8.42, -32.33, 35.62]}
              />
              <mesh
                geometry={nodes.Sphere_11_White_4_0.geometry}
                material={materials.White_4}
                position={[9.49, 37.08, 10.79]}
              />
              <mesh
                geometry={nodes.Sphere_12_White_2_0.geometry}
                material={materials.White_2}
                position={[-0.56, 37.08, -2.1]}
              />
              <mesh
                geometry={nodes.Sphere_13_White_4_0.geometry}
                material={materials.White_4}
                position={[-0.56, 37.2, 5.65]}
              />
              <mesh
                geometry={nodes.Sphere_14_White_4_0.geometry}
                material={materials.White_4}
                position={[-16.37, 36.66, 5.65]}
              />
              <mesh
                geometry={nodes.Sphere_15_White_4_0.geometry}
                material={materials.White_4}
                position={[-2.38, 36.5, 13.2]}
              />
              <mesh
                geometry={nodes.Sphere_16_White_0.geometry}
                material={materials.White}
                position={[12.48, 37.08, -4.1]}
              />
              <mesh
                geometry={nodes.Sphere_17_White_4_0.geometry}
                material={materials.White_4}
                position={[8.23, 37.08, -20.94]}
              />
              <mesh
                geometry={nodes.Sphere_18_Red1_0.geometry}
                material={materials.Red1}
                position={[13.9, 37.08, -18.3]}
              />
              <mesh
                geometry={nodes.Sphere_19_White_4_0.geometry}
                material={materials.White_4}
                position={[11.86, 37.08, -11.5]}
              />
              <mesh
                geometry={nodes.Sphere_20_White_0.geometry}
                material={materials.White}
                position={[29.29, 37.08, -12.7]}
              />
              <mesh
                geometry={nodes.Sphere_21_White_4_0.geometry}
                material={materials.White_4}
                position={[21.03, 37.08, -24.11]}
              />
              <mesh
                geometry={nodes.Sphere_22_White_0.geometry}
                material={materials.White}
                position={[18.41, 37.23, -28.7]}
              />
              <mesh
                geometry={nodes.Sphere_23_White_4_0.geometry}
                material={materials.White_4}
                position={[24.27, 37.08, -32.11]}
              />
              <mesh
                geometry={nodes.Sphere_24_White_0.geometry}
                material={materials.White}
                position={[24.27, 37.44, -25.5]}
              />
              <mesh
                geometry={nodes.Sphere_25_White_4_0.geometry}
                material={materials.White_4}
                position={[8.26, 37.08, -43.63]}
              />
              <mesh
                geometry={nodes.Sphere_26_White_0.geometry}
                material={materials.White}
                position={[12.4, 37.08, -31.14]}
              />
              <mesh
                geometry={nodes.Sphere_27_White_0.geometry}
                material={materials.White}
                position={[14.3, 37.08, -61.46]}
              />
              <mesh
                geometry={nodes.Sphere_28_White_4_0.geometry}
                material={materials.White_4}
                position={[5.14, 37.08, -55.47]}
              />
              <mesh
                geometry={nodes.Sphere_29_White_4_0.geometry}
                material={materials.White_4}
                position={[-2.7, 37.08, -64.04]}
              />
              <mesh
                geometry={nodes.Sphere_30_White_4_0.geometry}
                material={materials.White_4}
                position={[10, 37.08, -48.95]}
              />
              <mesh
                geometry={nodes.Sphere_31_White_4_0.geometry}
                material={materials.White_4}
                position={[17.58, 37.39, -39.97]}
              />
              <mesh
                geometry={nodes.Sphere_32_White_4_0.geometry}
                material={materials.White_4}
                position={[22.64, 36.78, -39.97]}
              />
              <mesh
                geometry={nodes.Sphere_33_White_0.geometry}
                material={materials.White}
                position={[20.63, 36.69, -49.62]}
              />
              <mesh
                geometry={nodes.Sphere_34_White_4_0.geometry}
                material={materials.White_4}
                position={[33.23, 37.08, -49.62]}
              />
              <mesh
                geometry={nodes.Sphere_35_White_4_0.geometry}
                material={materials.White_4}
                position={[26.99, 37.37, -52.27]}
              />
              <mesh
                geometry={nodes.Sphere_36_White_4_0.geometry}
                material={materials.White_4}
                position={[19.31, 37.08, -58.64]}
              />
              <mesh
                geometry={nodes.Sphere_37_White_0.geometry}
                material={materials.White}
                position={[31.57, 36.68, -33.14]}
              />
              <mesh
                geometry={nodes.Sphere_38_White_4_0.geometry}
                material={materials.White_4}
                position={[27.73, 37.08, -41.03]}
              />
              <mesh
                geometry={nodes.Sphere_39_Red1_0.geometry}
                material={materials.Red1}
                position={[38.67, 36.63, -41.03]}
              />
              <mesh
                geometry={nodes.Sphere_40_White_4_0.geometry}
                material={materials.White_4}
                position={[38.67, 37.08, -26.25]}
              />
              <mesh
                geometry={nodes.Sphere_41_White_4_0.geometry}
                material={materials.White_4}
                position={[32.58, 37.08, -21.7]}
              />
              <mesh
                geometry={nodes.Sphere_42_White_2_0.geometry}
                material={materials.White_2}
                position={[32.58, 37.08, 5.13]}
              />
              <mesh
                geometry={nodes.Sphere_43_Red1_0.geometry}
                material={materials.Red1}
                position={[24.5, 37.08, 0.07]}
              />
              <mesh
                geometry={nodes.Sphere_44_White_4_0.geometry}
                material={materials.White_4}
                position={[21.45, 37.5, -5.09]}
              />
              <mesh
                geometry={nodes.Sphere_45_White_4_0.geometry}
                material={materials.White_4}
                position={[15.76, 36.75, 2.15]}
              />
              <mesh
                geometry={nodes.Sphere_46_White_4_0.geometry}
                material={materials.White_4}
                position={[7.72, 37.08, 2.15]}
              />
              <mesh
                geometry={nodes.Sphere_47_White_0.geometry}
                material={materials.White}
                position={[7.72, 37.28, 6.81]}
              />
              <mesh
                geometry={nodes.Sphere_48_White_4_0.geometry}
                material={materials.White_4}
                position={[-6.21, 36.77, 6.81]}
              />
              <mesh
                geometry={nodes.Sphere_49_Red1_0.geometry}
                material={materials.Red1}
                position={[-11.38, 37.08, 12.84]}
              />
              <mesh
                geometry={nodes.Sphere_50_White_4_0.geometry}
                material={materials.White_4}
                position={[-19.2, 37.54, 10.99]}
              />
              <mesh
                geometry={nodes.Sphere_51_White_2_0.geometry}
                material={materials.White_2}
                position={[-16.56, 36.63, 15.51]}
              />
              <mesh
                geometry={nodes.Sphere_52_White_4_0.geometry}
                material={materials.White_4}
                position={[0.62, 37.17, 18.87]}
              />
              <mesh
                geometry={nodes.Sphere_53_White_4_0.geometry}
                material={materials.White_4}
                position={[6.61, 36.57, 19.11]}
              />
              <mesh
                geometry={nodes.Sphere_54_White_4_0.geometry}
                material={materials.White_4}
                position={[-16.25, 38.12, 0.68]}
              />
              <mesh
                geometry={nodes.Sphere_55_White_4_0.geometry}
                material={materials.White_4}
                position={[-14.28, 38.1, -1.65]}
              />
              <mesh
                geometry={nodes.Sphere_56_White_4_0.geometry}
                material={materials.White_4}
                position={[-12.11, 38.1, -4.13]}
              />
              <mesh
                geometry={nodes.Sphere_57_White_4_0.geometry}
                material={materials.White_4}
                position={[-10.14, 38.08, -6.5]}
              />
              <mesh
                geometry={nodes.Sphere_58_White_4_0.geometry}
                material={materials.White_4}
                position={[-2.58, 38.08, -15.35]}
              />
              <mesh
                geometry={nodes.Sphere_59_White_4_0.geometry}
                material={materials.White_4}
                position={[-0.47, 38.08, -17.79]}
              />
              <mesh
                geometry={nodes.Sphere_60_White_4_0.geometry}
                material={materials.White_4}
                position={[1.41, 38.08, -20.02]}
              />
              <mesh
                geometry={nodes.Sphere_61_White_4_0.geometry}
                material={materials.White_4}
                position={[2.8, 38.08, -21.6]}
              />
              <mesh
                geometry={nodes.Sphere_62_White_4_0.geometry}
                material={materials.White_4}
                position={[-13.79, 55.19, -2.32]}
              />
              <mesh
                geometry={nodes.Sphere_63_White_4_0.geometry}
                material={materials.White_4}
                position={[-12.44, 55.22, -3.83]}
              />
              <mesh
                geometry={nodes.Sphere_64_White_4_0.geometry}
                material={materials.White_4}
                position={[-10.76, 55.22, -5.76]}
              />
              <mesh
                geometry={nodes.Sphere_65_White_4_0.geometry}
                material={materials.White_4}
                position={[-9.18, 55.22, -7.6]}
              />
              <mesh
                geometry={nodes.Sphere_66_White_4_0.geometry}
                material={materials.White_4}
                position={[-7.11, 55.22, -10.02]}
              />
              <mesh
                geometry={nodes.Sphere_67_White_4_0.geometry}
                material={materials.White_4}
                position={[-5.39, 55.24, -12.03]}
              />
              <mesh
                geometry={nodes.Sphere_68_White_4_0.geometry}
                material={materials.White_4}
                position={[-3.29, 55.26, -14.52]}
              />
              <mesh
                geometry={nodes.Sphere_69_White_4_0.geometry}
                material={materials.White_4}
                position={[-1.6, 55.26, -16.52]}
              />
              <mesh
                geometry={nodes.Sphere_70_White_4_0.geometry}
                material={materials.White_4}
                position={[-0.09, 55.34, -18.18]}
              />
              <mesh
                geometry={nodes.Sphere_71_White_2_0.geometry}
                material={materials.White_2}
                position={[-1.56, 43.08, -8.83]}
              />
            </group>
            <group position={[17.2, -11.7, 31.1]} rotation={[0, 0.32, 0]}>
              <mesh
                geometry={nodes.Extrude_1_3_White_0.geometry}
                material={materials.White}
              />
              <mesh
                geometry={nodes.Cap_1_10_White_0.geometry}
                material={materials.White}
                position={[-90.99, 0, 0]}
              />
              <mesh
                geometry={nodes.Cap_2_10_White_0.geometry}
                material={materials.White}
                position={[-90.99, 0, 0]}
              />
            </group>
            <group position={[16.94, -12.26, 30.3]} rotation={[0, 0.32, 0]}>
              <mesh
                geometry={nodes.Extrude_3_2_Ye2_0.geometry}
                material={materials.material}
              />
              <mesh
                geometry={nodes.Cap_1_11_Ye2_0.geometry}
                material={materials.material}
                position={[-107.27, 0, 0]}
              />
              <mesh
                geometry={nodes.Cap_2_11_Ye2_0.geometry}
                material={materials.material}
                position={[-107.27, 0, 0]}
              />
            </group>
            <group position={[-17.53, 53.39, -16.73]} rotation={[0, 0.86, 0]}>
              <group position={[-2.7, -5.12, 14.97]} rotation={[0, 0.02, 0]}>
                <group position={[9.37, 0, 0.12]}>
                  <mesh
                    geometry={nodes.Cube_3_White_0.geometry}
                    material={materials.White}
                  />
                  <mesh
                    geometry={nodes.Cube_3_Ye2_0.geometry}
                    material={materials.material}
                  />
                </group>
                <group position={[-9.37, 0, -0.12]}>
                  <mesh
                    geometry={nodes.Cube_2_White_0.geometry}
                    material={materials.White}
                  />
                  <mesh
                    geometry={nodes.Cube_2_Ye2_0.geometry}
                    material={materials.material}
                  />
                </group>
              </group>
              <group position={[8.23, 9.82, -1.05]} rotation={[0, 0, 0.62]}>
                <mesh
                  geometry={nodes.Cube_8_White_3_0.geometry}
                  material={materials.White_3}
                  position={[-17.21, 13.1, 0]}
                  rotation={[0, 0, -1.25]}
                />
                <mesh
                  geometry={nodes.Cube_6_White_3_0.geometry}
                  material={materials.White_3}
                  position={[-0.04, 0.84, 0]}
                />
              </group>
              <group position={[-2.93, -8.08, -1.25]}>
                <group
                  position={[15.62, 0, 0]}
                  rotation={[Math.PI, 0, Math.PI]}
                >
                  <mesh
                    geometry={nodes.Cube_5_2_Ye2_0.geometry}
                    material={materials.material}
                  />
                  <mesh
                    geometry={nodes.Cube_5_2_Red2_0.geometry}
                    material={materials.Red2}
                  />
                </group>
                <group position={[-15.51, 0, 0]}>
                  <mesh
                    geometry={nodes.Cube_Ye2_0.geometry}
                    material={materials.material}
                  />
                  <mesh
                    geometry={nodes.Cube_Red2_0.geometry}
                    material={materials.Red2}
                  />
                </group>
              </group>
              <group
                position={[-2.9, 3.4, -16.23]}
                rotation={[Math.PI, 0, Math.PI]}
              >
                <mesh
                  geometry={nodes.Cube_2_2_Ye2_0.geometry}
                  material={materials.material}
                />
                <mesh
                  geometry={nodes.Cube_2_2_Red2_0.geometry}
                  material={materials.Red2}
                />
              </group>
              <group position={[-2.4, -5.14, 18.54]}>
                <group position={[0.25, -4.27, 2.46]}>
                  <group position={[-0.76, 12.81, -7.38]}>
                    <mesh
                      geometry={nodes.Cube_1_2_Ye2_0.geometry}
                      material={materials.material}
                    />
                    <mesh
                      geometry={nodes.Cube_1_2_Red2_0.geometry}
                      material={materials.Red2}
                    />
                  </group>
                  <mesh
                    geometry={nodes.Cube_3_3__0.geometry}
                    material={materials.Cube_3_3__0}
                    position={[0, -0.41, -6.96]}
                  />
                </group>
                <mesh
                  geometry={nodes.Cube_5_3_Red2_0.geometry}
                  material={materials.Red2}
                  position={[-0.76, -4.27, -0.75]}
                  rotation={[0, -0.68, 0]}
                />
              </group>
            </group>
            <group position={[-2.24, -27.08, -18.8]}>
              <group position={[0, 23.73, 0]}>
                <mesh
                  geometry={nodes.Cylinder_1_White_3_0.geometry}
                  material={materials.White_3}
                />
                <mesh
                  geometry={nodes.Cylinder_1_White_0.geometry}
                  material={materials.White}
                />
              </group>
              <group position={[0, -23.73, 0]}>
                <mesh
                  geometry={nodes.Cylinder_Ye3_0.geometry}
                  material={materials.material_10}
                />
                <mesh
                  geometry={nodes.Cylinder_White_3_0.geometry}
                  material={materials.White_3}
                />
              </group>
            </group>
            <mesh
              geometry={nodes.Cube_5_Red3_0.geometry}
              material={materials.Red3}
              position={[-7.11, 55.02, -4.38]}
              rotation={[0, 0.86, 0]}
            />
          </group>
        </group>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

useGLTF.preload("/handmade-transformed.glb");

export default Handmade;
