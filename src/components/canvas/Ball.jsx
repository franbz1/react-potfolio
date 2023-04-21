import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal,
  Float,
  Html,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei'

import CanvasLoader from '../Loader'
import { technologies } from '../../constants'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <mesh
      position={props.position}
      castShadow
      receiveShadow
    >
      <Html>
        <p className='text-white text-[16px] font-semibold'>{props.name}</p>
      </Html>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color='#fff8eb'
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1}
        map={decal}
        flatShading
      />
    </mesh>
  )
}

const BallCanvas = () => {
  return (
    <>
      <Canvas
        camera={{ fov: 75 }}
        frameloop='always'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        {technologies.map((technology) => (
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Ball
              name={technology.name}
              position={technology.position}
              imgUrl={technology.icon}
            />
          </Suspense>
        ))}
        <Preload all />
      </Canvas>
    </>
  )
}

export default BallCanvas
