import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import Ipad from '../../../public/ipad/Ipad.jsx'

const IpadCanvas = () => {
  return (
    <Canvas
    >
        <Ipad />
      <Preload all />
    </Canvas>
  )
}

export default IpadCanvas
