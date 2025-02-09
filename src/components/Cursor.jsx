import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Cursor(props) {
  const { nodes, materials } = useGLTF('/models/cursor.glb');
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 10]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Material003_0.geometry}
            material={materials['Material.003']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Material004_0.geometry}
            material={materials['Material.004']}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/cursor.glb');

export default Cursor;
