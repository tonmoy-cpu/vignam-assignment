import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Environment, useGLTF, useAnimations } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

function MotorModel() {
  const group = useRef()
  const { scene, animations } = useGLTF('/landing_page_motor.glb')
  const { actions } = useAnimations(animations, group)

  React.useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        if (action) {
          action.setLoop(THREE.LoopRepeat, Infinity)
          action.play()
        }
      })
    }
  }, [actions])

  return (
    <group ref={group} scale={[2.5, 2.5, 2.5]} position={[0, -0.5, 0]}>
      <primitive object={scene} />
    </group>
  )
}

function CNCPart({
  position,
  rotation,
  scale = 1
}: {
  position: [number, number, number]
  rotation: [number, number, number]
  scale?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.05
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <cylinderGeometry args={[0.3, 0.3, 0.8, 8]} />
        <meshStandardMaterial color="#8B9DC3" metalness={0.9} roughness={0.1} envMapIntensity={1} />
        <mesh position={[0, 0, 0]} scale={[0.8, 0.2, 0.8]}>
          <cylinderGeometry args={[0.25, 0.25, 0.1, 8]} />
          <meshStandardMaterial color="#4F46E5" metalness={0.8} roughness={0.2} />
        </mesh>
      </mesh>
    </Float>
  )
}

export default function Hero() {
  return (
    <section className="relative h-screen bg-white overflow-hidden flex flex-col justify-center items-center text-center px-6">
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '10px 10px'
          }}
        />
      </div>

      {/* === Motor Model in Background === */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 110 }}>
          <Suspense fallback={null}>
            <Environment files="/forest.exr" />
            <ambientLight intensity={0.7} />
            <directionalLight position={[10, 10, 5]} intensity={0.8} />
            <pointLight position={[-10, -10, -5]} intensity={0.3} />
            <MotorModel />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* === Foreground Text === */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-5xl mx-auto pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight hero-title"
        >
          Precision <span className="text-gray-400 italic">CNC</span> Parts
          <br />
          Shipped as Fast as
          <br />
          Tomorrow
        </motion.h1>

        <p className="text-base md:text-lg text-gray-600 mb-2 max-w-xl">
          Upload your CAD file, and we'll take care of machining, finishing, and shipping—accurate parts delivered fast, no stress.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-6 md:px-8 py-3 rounded-lg font-semibold text-base md:text-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>UPLOAD YOUR DESIGN</span>
        </motion.button>
      </div>
      <br />
      <div className="absolute bottom-6 left-6 text-xs md:text-sm text-gray-500 text-left">
        <div>12+ YEARS OF DELIVERING</div>
        <div>PERFECT DETAILS</div>
      </div>

      <div className="absolute bottom-6 right-6 text-xs md:text-sm text-gray-500 text-right">
        <div>OVER 100,000 PARTS</div>
        <div>MANUFACTURED ANNUALLY</div>
      </div>
    </section>
  )
}
