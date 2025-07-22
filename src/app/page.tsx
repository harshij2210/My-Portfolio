"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { OrbitControls, Environment } from "@react-three/drei"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import Scene3D from "@/components/scene-3d"
import styles from "./page.module.css"

export default function Portfolio() {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <Navigation />

      {/* Subtle 3D Scene Background */}
      <div className={styles.sceneContainer}>
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <Suspense fallback={null}>
            <Scene3D />
            <Environment preset="night" />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </div>
  )
}
