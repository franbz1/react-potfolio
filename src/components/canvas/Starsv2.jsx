import * as THREE from 'three';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')

  return (
    <primitive
      object={earth.scene}
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  )
}

function ParticleField() {
  const pointsRef = useRef();

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
    }
  });

  const particles = new THREE.BufferGeometry();
  const particleMaterial = new THREE.PointsMaterial({
    color: '#ffffff',
    size: 2,
    transparent: true,
    opacity: 0.8,
  });

  const positions = new Float32Array(1000 * 3);

  for (let i = 0; i < 1000; i++) {
    const x = Math.random() * 1000 - 500;
    const y = Math.random() * 1000 - 500;
    const z = Math.random() * 1000 - 500;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }

  particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  return (
    <points ref={pointsRef} position={[0, 0, 0]}>
      <pointsMaterial attach="material" {...particleMaterial} />
      <bufferGeometry attach="geometry" {...particles} />
    </points>
  );
}

export default function StarsCanvasv2() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <ParticleField />
    </Canvas>
  );
}

