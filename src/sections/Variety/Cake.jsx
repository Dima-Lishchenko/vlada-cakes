import { OrbitControls, Stage, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export const Cake = props => {
    const { nodes, materials } = useGLTF('/cake-transformed.glb')

    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>
                <group {...props} dispose={null}>
                    <group position={[3.32, -1.16, 0.23]} scale={0.3}>
                        <mesh geometry={nodes.Object_6.geometry} material={materials.Cream} />
                        <mesh
                            geometry={nodes.Object_8.geometry}
                            material={materials.Cream}
                            position={[-10.89, 0.05, -13.11]}
                            rotation={[-Math.PI, 1.2, -Math.PI]}
                        />
                        <mesh
                            geometry={nodes.Object_10.geometry}
                            material={materials.Cream}
                            position={[-11.84, 0.31, 11.32]}
                            rotation={[0.14, 0.01, -0.15]}
                        />
                        <mesh
                            geometry={nodes.Object_12.geometry}
                            material={materials.Cream}
                            position={[-23.94, 0, -2.1]}
                            rotation={[-Math.PI, -0.63, -Math.PI]}
                        />
                        <mesh
                            geometry={nodes.Object_14.geometry}
                            material={materials.Cream}
                            position={[-3.37, 0, 6.91]}
                            rotation={[0, 1.45, 0]}
                        />
                        <mesh
                            geometry={nodes.Object_16.geometry}
                            material={materials.Cream}
                            position={[-2.66, 0.23, -8.3]}
                            rotation={[2.73, -0.94, 2.79]}
                        />
                        <mesh
                            geometry={nodes.Object_18.geometry}
                            material={materials.Cream}
                            position={[-20.18, 0, 8.68]}
                            rotation={[0.14, -1.49, 0.15]}
                        />
                        <mesh
                            geometry={nodes.Object_20.geometry}
                            material={materials.Cream}
                            position={[-20.22, 0, -9.73]}
                            rotation={[Math.PI, -1.38, Math.PI]}
                        />
                    </group>
                    <group position={[-0.29, 0, -0.03]} scale={[3.04, 1.21, 3.04]}>
                        <group position={[0.95, 0.44, -0.24]} scale={[0.06, 0.14, 0.06]}>
                            <mesh geometry={nodes.Object_25.geometry} material={materials.Band} />
                            <mesh
                                geometry={nodes.Object_27.geometry}
                                material={materials.Band}
                                position={[-2.77, -3.01, -5.72]}
                            />
                            <mesh
                                geometry={nodes.Object_29.geometry}
                                material={materials.Band}
                                position={[-6.88, 0.14, -9.91]}
                            />
                            <mesh
                                geometry={nodes.Object_31.geometry}
                                material={materials.Band}
                                position={[-17.49, 0.55, -13.4]}
                                rotation={[0, 1.12, 0]}
                            />
                            <mesh
                                geometry={nodes.Object_33.geometry}
                                material={materials.Band}
                                position={[-25.31, -3.27, -11.54]}
                                rotation={[0, 1.12, 0]}
                            />
                            <mesh
                                geometry={nodes.Object_35.geometry}
                                material={materials.Band}
                                position={[-30.4, 0.35, -7.56]}
                                rotation={[0, 1.12, 0]}
                            />
                            <mesh
                                geometry={nodes.Object_37.geometry}
                                material={materials.Band}
                                position={[-11.96, -3.56, -12.13]}
                                rotation={[0, 1.12, 0]}
                            />
                            <mesh
                                geometry={nodes.Object_39.geometry}
                                material={materials.Band}
                                position={[-30.05, -0.35, 16.68]}
                                rotation={[-Math.PI, -0.48, -Math.PI]}
                            />
                            <mesh
                                geometry={nodes.Object_41.geometry}
                                material={materials.Band}
                                position={[-25.02, -3.36, 20.44]}
                                rotation={[-Math.PI, -0.48, -Math.PI]}
                            />
                            <mesh
                                geometry={nodes.Object_43.geometry}
                                material={materials.Band}
                                position={[-19.51, -0.22, 21.92]}
                                rotation={[-Math.PI, -0.48, -Math.PI]}
                            />
                            <mesh
                                geometry={nodes.Object_45.geometry}
                                material={materials.Band}
                                position={[-8.28, 0.11, 19.71]}
                                rotation={[0, -1.54, 0]}
                            />
                            <mesh
                                geometry={nodes.Object_47.geometry}
                                material={materials.Band}
                                position={[-2.92, -3.73, 15.02]}
                                rotation={[0, -1.54, 0]}
                            />
                            <mesh
                                geometry={nodes.Object_49.geometry}
                                material={materials.Band}
                                position={[-0.69, -0.19, 10.84]}
                                rotation={[0, -1.54, 0]}
                            />
                            <mesh
                                geometry={nodes.Object_51.geometry}
                                material={materials.Band}
                                position={[-13.91, -3.92, 21.86]}
                                rotation={[0, -1.54, 0]}
                            />
                            <mesh
                                geometry={nodes.Object_53.geometry}
                                material={materials.Band}
                                position={[0.61, -3.26, 5.45]}
                                rotation={[0, -1.54, 0]}
                            />
                            <mesh
                                geometry={nodes.Object_55.geometry}
                                material={materials.Band}
                                position={[-33.73, -2.67, 10.88]}
                                rotation={[-Math.PI, -0.48, -Math.PI]}
                            />
                            <mesh
                                geometry={nodes.Object_57.geometry}
                                material={materials.Band}
                                position={[-34.99, 0.54, 3.7]}
                                rotation={[-Math.PI, -0.48, -Math.PI]}
                            />
                            <mesh
                                geometry={nodes.Object_59.geometry}
                                material={materials.Band}
                                position={[-33.92, -2.73, -1.8]}
                                rotation={[-Math.PI, -0.48, -Math.PI]}
                            />
                        </group>
                        <mesh geometry={nodes.Object_22.geometry} material={materials.Cake} />
                        <mesh geometry={nodes.Object_23.geometry} material={materials.Band} />
                    </group>
                    <group position={[-0.29, -2.86, -0.03]} scale={[4.37, 1.76, 4.37]}>
                        <mesh geometry={nodes.Object_61.geometry} material={materials.Cake} />
                        <mesh geometry={nodes.Object_62.geometry} material={materials.Band} />
                    </group>
                    <mesh
                        geometry={nodes.Object_4.geometry}
                        material={materials.material_0}
                        position={[-0.76, 1.22, 1.5]}
                        rotation={[-0.02, 1.57, 0]}
                        scale={1.73}
                    />
                </group>
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
    )
}

useGLTF.preload('/cake-transformed.glb')
