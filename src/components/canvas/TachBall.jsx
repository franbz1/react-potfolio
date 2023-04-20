import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'
import { technologies } from '../../constants'

function Word({ index, children, ...props }) {
  const links = technologies.map((tech) => tech.link)
  const color = new THREE.Color()
  const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
  })
  return (
    <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => window.open(links[index])} {...props} {...fontProps} children={children} />
  )
}

function Cloud({ radius = 20 }) {
  // Create a list of words with spherical distribution
  const words = useMemo(() => {
    const palabras = technologies.map((tech) => tech.name)
    const temp = []
    const numWords = palabras.length // Número de palabras
    // Posicionamiento de las palabras en la esfera
    for (let i = 0; i < numWords; i++) {
      const phi = Math.acos(-1 + (2 * i) / numWords) // Ángulo phi para la palabra
      const theta = Math.sqrt(numWords * Math.PI) * phi // Ángulo theta para la palabra
      const position = new THREE.Vector3().setFromSphericalCoords(radius, phi, theta) // Posición de la palabra en la esfera
      temp.push([position, palabras[i]]) // Agregar la palabra y su posición al arreglo temp
    }
    return temp
  }, [radius])
  return words.map(([pos, word], index) => <Word index={index} key={index} position={pos} children={word} />)
}


export default function TechBallCanvas() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Cloud radius={20} />
      <TrackballControls />
    </Canvas>
  )
}
