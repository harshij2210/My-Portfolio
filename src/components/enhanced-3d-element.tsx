"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, Sphere, Text3D, Trail, Sparkles } from "@react-three/drei"
import type * as THREE from "three"

function AnimatedSphere({
  position,
  color,
  scale = 1,
}: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 2
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Trail width={2} length={8} color={color} attenuation={(t) => t * t}>
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={meshRef} position={position} scale={scale}>
          <meshPhysicalMaterial
            color={color}
            transparent
            opacity={0.9}
            roughness={0.1}
            metalness={0.3}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.2}
            thickness={1}
            emissive={color}
            emissiveIntensity={0.1}
          />
        </Sphere>
      </Float>
    </Trail>
  )
}

function FloatingTechIcons() {
  const icons = [
    { text: "React", position: [-8, 4, -6] as [number, number, number], color: "#3b82f6" },
    { text: "Node", position: [8, -2, -8] as [number, number, number], color: "#06b6d4" },
    { text: "JS", position: [-6, -6, -4] as [number, number, number], color: "#1e40af" },
    { text: "CSS", position: [6, 6, -10] as [number, number, number], color: "#0ea5e9" },
  ]

  return (
    <>
      {icons.map((icon, index) => (
        <Float key={index} speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Text3D font="/fonts/Inter_Bold.json" size={0.5} height={0.1} position={icon.position} curveSegments={12}>
            {icon.text}
            <meshPhysicalMaterial
              color={icon.color}
              roughness={0.1}
              metalness={0.8}
              clearcoat={1}
              clearcoatRoughness={0.1}
              emissive={icon.color}
              emissiveIntensity={0.2}
            />
          </Text3D>
        </Float>
      ))}
    </>
  )
}

export default function Enhanced3DElements() {
  return (
    <>
      {/* Animated Spheres with Trails */}
      <AnimatedSphere position={[-10, 5, -8]} color="#3b82f6" scale={0.8} />
      <AnimatedSphere position={[10, -5, -12]} color="#06b6d4" scale={1.2} />
      <AnimatedSphere position={[0, 8, -6]} color="#1e40af" scale={0.6} />
      <AnimatedSphere position={[-12, -3, -10]} color="#0ea5e9" scale={1.0} />

      {/* Floating Tech Icons */}
      <FloatingTechIcons />

      {/* Enhanced Sparkles */}
      <Sparkles count={200} scale={[30, 30, 30]} size={3} speed={0.4} color="#3b82f6" />
      <Sparkles count={150} scale={[25, 25, 25]} size={2} speed={0.6} color="#06b6d4" />
    </>
  )
}
