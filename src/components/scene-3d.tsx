"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Sphere } from "@react-three/drei"
import type * as THREE from "three"

function MinimalSphere({
  position,
  color,
  scale = 1,
}: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} position={position} scale={scale}>
        <meshStandardMaterial color={color} transparent opacity={0.4} />
      </Sphere>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8b5cf6" />

      {/* Minimal floating spheres with gradient colors */}
      <MinimalSphere position={[-8, 4, -5]} color="#8b5cf6" scale={0.8} />
      <MinimalSphere position={[8, -4, -8]} color="#ec4899" scale={1.0} />
      <MinimalSphere position={[-6, -6, -3]} color="#3b82f6" scale={0.6} />
      <MinimalSphere position={[6, 6, -6]} color="#06b6d4" scale={0.9} />
    </>
  )
}
