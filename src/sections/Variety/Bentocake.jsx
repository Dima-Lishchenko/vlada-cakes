import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export const Bentocake = props => {
    const { nodes, materials } = useGLTF('/bentocake-transformed.glb')
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>
                <group {...props} dispose={null}>
                    <group scale={0.01}>
                        <group
                            position={[-56.67, -6.59, 31.53]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={110.97}
                        >
                            <mesh
                                geometry={nodes['��������������001_Material002_0'].geometry}
                                material={materials['Material.002']}
                            />
                            <mesh
                                geometry={nodes['��������������001_Material002_0_1'].geometry}
                                material={materials['Material.002']}
                            />
                        </group>
                        <group
                            position={[-96.42, 18.96, 72.92]}
                            rotation={[-1.6, 0, 0]}
                            scale={[18.88, 18.88, 13.3]}
                        >
                            <mesh
                                geometry={nodes['����������001_Material001_0'].geometry}
                                material={materials['Material.001']}
                            />
                            <mesh
                                geometry={nodes['����������001_Material001_0_1'].geometry}
                                material={materials['Material.001']}
                            />
                        </group>
                        <group
                            position={[-56.59, -177.75, 31.26]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={200.47}
                        >
                            <mesh
                                geometry={nodes['��������������������_Material004_0'].geometry}
                                material={materials['Material.004']}
                            />
                            <mesh
                                geometry={nodes['��������������������_Material004_0_1'].geometry}
                                material={materials['Material.004']}
                            />
                        </group>
                        <mesh
                            geometry={nodes['��������������_Material003_0'].geometry}
                            material={materials['Material.003']}
                            position={[-56.67, -6.59, 31.53]}
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={110.97}
                        />
                        <mesh
                            geometry={nodes['����������_����������������_0'].geometry}
                            material={materials.material}
                            position={[48.99, 16.23, 24.08]}
                            rotation={[-1.6, 0, 0]}
                            scale={26.86}
                        />
                    </group>
                </group>
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
    )
}

useGLTF.preload('/bentocake-transformed.glb')
