import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mac(props) {
    const { nodes, materials } = useGLTF('/models/mac2.glb')
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.Body.geometry} material={materials.metallicMaterial} position={[0, 0, 1.032]} />
            <mesh geometry={nodes.innerPorts.geometry} material={materials.innerPortsMaterial} position={[0, 0, 1.032]} />
            <mesh geometry={nodes.Keys.geometry} material={materials.keysMaterial} position={[0, 0, 1.032]} />
            <mesh geometry={nodes.KeysBackPlate.geometry} material={materials.keysBackMaterial} position={[0, 0, 1.032]} />
            <mesh geometry={nodes.Legs.geometry} material={materials.legsMaterial} position={[0, 0, 1.032]} />
            <mesh geometry={nodes.PinPorts.geometry} material={materials.pinPortsMaterial} position={[0, 0, 1.032]} />
            <mesh geometry={nodes['Ref-keyText'].geometry} material={materials.keysTextMaterial} position={[0, 0, 1.032]} />
            <mesh geometry={nodes.SidePorts.geometry} material={materials.sidePortsMaterial} position={[0, 0, 1.032]} />
            <mesh geometry={nodes.LowerScreen.geometry} material={materials.lowerScreenMaterial} position={[0, 0.1, 0.02]} />
            <mesh geometry={nodes['Ref-HinchScreen'].geometry} material={materials['screen.HinchMaterial']} position={[0, 0.1, 0.02]} />
            <mesh geometry={nodes['Ref-logo'].geometry} material={materials.logoMaterial} position={[0, 0.1, 0.02]} />
        </group>
    )
}

useGLTF.preload('/models/mac2.glb')