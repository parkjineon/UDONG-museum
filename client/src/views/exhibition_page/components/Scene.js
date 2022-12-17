import * as THREE from "three";
import { Center, Html, OrbitControls, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import styled from "styled-components";

// https://codesandbox.io/s/lx2h8?file=/src/App.js
function Cylinder() {
  const cylinderRef = useRef(null);
  useFrame((state) => {});
  return (
    <mesh ref={cylinderRef}>
      <cylinderBufferGeometry attach="geometry" args={[2, 2, 3, 20]} />
      <meshBasicMaterial attach="material" color="beige" />
    </mesh>
  );
}
function Frame({ index, setDesc }) {
  const theta = (Math.PI / 7) * (index + 1);
  const onFrameHover = (e) => {
    const mesh = e.eventObject;
    mesh.scale.set(1.03, 1.03);
  };
  const onFrameOut = (e) => {
    const mesh = e.eventObject;
    mesh.scale.set(1, 1);
  };
  const onFrameClick = (e) => {
    setDesc(e.eventObject.index);
    console.log(e);
  };
  return (
    <>
      <mesh
        position={[Math.sin(theta) * 5, 0, Math.cos(theta) * 5]}
        rotation={[0, theta, 0]}
        onClick={onFrameClick}
        onPointerOver={onFrameHover}
        onPointerOut={onFrameOut}
        index={index}
      >
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          attach="material"
          side={THREE.DoubleSide}
          color="black"
        />
      </mesh>
      <mesh
        position={[Math.sin(theta) * 5, 0, Math.cos(theta) * 5]}
        rotation={[0, theta, 0]}
      >
        <Text
          position={[0.4, -0.55, 0.1]}
          color="black"
          fontSize={0.07}
          anchorX="right"
        >
          Title #{index}
        </Text>

        <Text
          position={[0.4, -0.6, 0.1]}
          color="#B3B3B3"
          fontSize={0.03}
          anchorX="right"
        >
          2022
        </Text>
      </mesh>
    </>
  );
}
function Scene({ setDesc }) {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <CanvasContainer>
      <Canvas
        camera={{
          position: [0, 3, 3],
          fov: 75,
          near: 0.1,
          far: 100,
        }}
      >
        <Cylinder />
        <group>
          {images.map((image, idx) => {
            return (
              <group>
                <Frame key={idx} index={image} setDesc={setDesc} />
              </group>
            );
          })}
        </group>

        <OrbitControls
          target={[0, 0, 0]}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={-Math.PI / 3}
        />
      </Canvas>
    </CanvasContainer>
  );
}
export default Scene;

const CanvasContainer = styled.div`
  /* background-color: black; */
  width: 100%;
  height: 500px;
`;
