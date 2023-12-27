import { CameraControls, Environment, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useState, useRef } from 'react'
import * as Objetos from './objects'
export function MainScene(props) {
    const [isHover, setHover] = useState(false)
    const [size, setSize] = useState(1)

    const model = useGLTF('/models/MicrosoftStudio.glb')
    const meshRef = useRef(null)
    useFrame(({ }) => {
        if (isHover)
            meshRef.current.rotation.x += .01
    })
    const increaseSize = () => {
        setSize(prevSize => prevSize + .1)
        console.log(size)
    }
    return (
        <>
            <Environment preset="city"></Environment>
            <CameraControls></CameraControls>
            <primitive object={model.scene} ></primitive>
            <Objetos.TV2 ></Objetos.TV2>
            <mesh position={[3, 0, 0]}
                scale={size}
                ref={meshRef}
                onClick={increaseSize}
                onPointerEnter={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <boxGeometry ></boxGeometry>
                <meshPhysicalMaterial metalness={1} roughness={0}></meshPhysicalMaterial>
            </mesh>
        </>
    )
}

