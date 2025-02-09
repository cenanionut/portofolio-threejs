import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function Arduino(props) {
  const { nodes, materials } = useGLTF('/models/arduino.glb');
  const group = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.1);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 20, 0.1);
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (props.position[1] + Math.sin(t / 2)) / 2,
      0.1,
    );
  });

  return (
    <group {...props} dispose={null} ref={group}>
      <group position={[-1.535, 0.144, 0]} scale={0.001} rotation={[100, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_id375_Material_218_0.geometry}
          material={materials.Material_218}
          position={[1099.071, -404.524, 265.288]}
          scale={[215.196, 179.531, 193.108]}
        />
        <group position={[0.125, -106.065, 0]}>
          <group position={[1255.705, -285.447, 847.439]} rotation={[Math.PI / 2, Math.PI / 2, 0]}>
            <group position={[-190.822, -961.528, 293.189]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
              <group position={[-35.406, 471.782, 310.819]} rotation={[-Math.PI / 2, -0.296, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.node_id293_Material_258_0.geometry}
                  material={materials.Material_258}
                  rotation={[-Math.PI / 2, 0, 2.848]}
                  scale={[1160.078, 822.754, 580.039]}
                />
              </group>
              <group position={[-490.399, 610.776, 371.874]} rotation={[-Math.PI / 2, -0.296, -Math.PI]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.node_id294_Material_260_0.geometry}
                  material={materials.Material_260}
                  rotation={[Math.PI, 0.293, -Math.PI]}
                  scale={[254.534, 183.69, 207.851]}
                />
              </group>
            </group>
            <group position={[-190.822, -961.528, 293.189]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
              <group position={[383.203, 786.613, 283.742]} rotation={[0, 0, -Math.PI / 2]} scale={0.316}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.node_id170_Material_53_0.geometry}
                  material={materials.Material_53}
                  position={[845.242, 294.943, 200.011]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[1, 0.17, 1]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.node_id170_Material_55_0.geometry}
                  material={materials.Material_55}
                  position={[747.413, 297.872, 200.011]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[1, 0.17, 1]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.node_id170_Material_57_0.geometry}
                  material={materials.Material_57}
                  position={[942.992, 292.038, 200.011]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[1, 0.17, 1]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.node_id170_Material_59_0.geometry}
                  material={materials.Material_59}
                  position={[745.469, 387.866, 200.011]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[1, 0.17, 1]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.node_id170_Material_61_0.geometry}
                  material={materials.Material_61}
                  position={[843.298, 384.937, 200.011]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[1, 0.17, 1]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.node_id170_Material_63_0.geometry}
                  material={materials.Material_63}
                  position={[941.048, 382.032, 200.011]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[1, 0.17, 1]}
                />
              </group>
              <group position={[-513.495, 655.967, 283.742]} scale={0.316}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.node_id184_Material_65_0.geometry}
                  material={materials.Material_65}
                  position={[845.242, 294.943, 200.011]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[1, 0.17, 1]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.node_id184_Material_67_0.geometry}
                  material={materials.Material_67}
                  position={[843.298, 384.937, 200.011]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[1, 0.17, 1]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.node_id184_Material_69_0.geometry}
                  material={materials.Material_69}
                  position={[747.413, 297.872, 200.011]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[1, 0.17, 1]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.node_id184_Material_71_0.geometry}
                  material={materials.Material_71}
                  position={[745.469, 387.866, 200.011]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[1, 0.17, 1]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.node_id184_Material_73_0.geometry}
                  material={materials.Material_73}
                  position={[942.992, 292.038, 200.011]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[1, 0.17, 1]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.node_id184_Material_75_0.geometry}
                  material={materials.Material_75}
                  position={[941.048, 382.032, 200.011]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[1, 0.17, 1]}
                />
              </group>
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.node_id304_Material_234_0.geometry}
              material={materials.Material_234}
              position={[329.735, -579.81, 799.558]}
              rotation={[Math.PI, 0.545, -Math.PI]}
              scale={[0.113, 0.401, 0.154]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.node_id304_Material_236_0.geometry}
              material={materials.Material_236}
              position={[361.045, -579.811, 800.638]}
              rotation={[Math.PI, 0.545, -Math.PI]}
              scale={[0.113, 0.401, 0.154]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.node_id304_Material_238_0.geometry}
              material={materials.Material_238}
              position={[292.432, -579.81, 800.158]}
              rotation={[Math.PI, 0.545, -Math.PI]}
              scale={[0.113, 0.401, 0.154]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.node_id304_Material_240_0.geometry}
              material={materials.Material_240}
              position={[294.929, -579.81, 769.527]}
              rotation={[Math.PI, 0.545, -Math.PI]}
              scale={[0.113, 0.401, 0.154]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.node_id304_Material_242_0.geometry}
              material={materials.Material_242}
              position={[332.232, -579.811, 768.927]}
              rotation={[Math.PI, 0.545, -Math.PI]}
              scale={[0.113, 0.401, 0.154]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.node_id304_Material_244_0.geometry}
              material={materials.Material_244}
              position={[360.291, -579.811, 770.765]}
              rotation={[Math.PI, 0.545, -Math.PI]}
              scale={[0.113, 0.401, 0.154]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.node_id304_Material_246_0.geometry}
              material={materials.Material_246}
              position={[556.46, -579.811, 14.298]}
              rotation={[-Math.PI, 0.545, Math.PI]}
              scale={[0.113, 0.401, 0.154]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.node_id304_Material_248_0.geometry}
              material={materials.Material_248}
              position={[588.373, -579.811, 14.708]}
              rotation={[Math.PI, 0.545, -Math.PI]}
              scale={[0.113, 0.401, 0.154]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.node_id304_Material_250_0.geometry}
              material={materials.Material_250}
              position={[588.321, -579.811, 45.328]}
              rotation={[Math.PI, 0.545, -Math.PI]}
              scale={[0.113, 0.401, 0.154]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.node_id304_Material_252_0.geometry}
              material={materials.Material_252}
              position={[557.887, -579.811, 46.929]}
              rotation={[-Math.PI, 0.545, Math.PI]}
              scale={[0.113, 0.401, 0.154]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.node_id304_Material_254_0.geometry}
              material={materials.Material_254}
              position={[557.376, -579.81, 77.729]}
              rotation={[-Math.PI, 0.545, Math.PI]}
              scale={[0.113, 0.401, 0.154]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.node_id304_Material_256_0.geometry}
              material={materials.Material_256}
              position={[587.952, -579.81, 75.418]}
              rotation={[Math.PI, 0.545, -Math.PI]}
              scale={[0.113, 0.401, 0.154]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.node_id345_Material_230_0.geometry}
            material={materials.Material_230}
            position={[1294.334, -285.418, 238.137]}
            scale={[101.863, 101.813, 17.445]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.node_id345_Material_232_0.geometry}
            material={materials.Material_232}
            position={[1406.61, -281.384, 227.395]}
            scale={[100.322, 98.903, 37.003]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_id364_Material_222_0.geometry}
          material={materials.Material_222}
          position={[1498.347, 256.848, 257.864]}
          scale={[388.989, 42.744, 194.494]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_id364_Material_224_0.geometry}
          material={materials.Material_224}
          position={[1873.731, 261.883, 258.634]}
          scale={[317.208, 42.418, 161.393]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_id364_Material_226_0.geometry}
          material={materials.Material_226}
          position={[1911.097, -476.154, 256.205]}
          rotation={[0, 0, 0.003]}
          scale={[244.838, 42.517, 113.511]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_id364_Material_228_0.geometry}
          material={materials.Material_228}
          position={[1601.093, -475.274, 258.054]}
          scale={[319.464, 43.439, 158.38]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_id375_Material_220_0.geometry}
          material={materials.Material_220}
          position={[1750.574, -271.019, 229.302]}
          scale={[567.283, 137.728, 263.344]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/arduino.glb');
