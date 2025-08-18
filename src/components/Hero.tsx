import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Environment } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

function MotorModel() {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={meshRef} scale={[2, 2, 2]} position={[0, 0, 0]}>
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh>
          <cylinderGeometry args={[1.2, 1.2, 2, 16]} />
          <meshStandardMaterial color="#2563eb" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 1.2, 0]}>
          <cylinderGeometry args={[0.8, 0.8, 0.4, 16]} />
          <meshStandardMaterial color="#1e40af" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, -1.2, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 0.3, 16]} />
          <meshStandardMaterial color="#1d4ed8" metalness={0.7} roughness={0.3} />
        </mesh>
      </Float>
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
    <group ref={group} scale={[2.5, 2.5, 2.5]} position={[0, -0.5, 0]}>
      <primitive object={scene} />
    </group>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex flex-col justify-center items-center text-center px-4 sm:px-6">
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '8px 8px'
          }}
        />
      </div>

      {/* === Motor Model in Background === */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen max-w-6xl mx-auto py-20 sm:py-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight text-center px-2"
          style={{ textShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px, rgba(0, 0, 0, 0.06) 0px 1px 2px' }}
        >
          Precision <span className="italic">CNC</span> Parts
          <br />
          <span className="block sm:inline">Shipped as Fast as</span>
          <br />
          Tomorrow
        </motion.h1>

        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-6 sm:mb-8">
          <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
            <Suspense fallback={null}>
              <Environment files="/forest.exr" />
              <ambientLight intensity={0.6} />
              <directionalLight position={[10, 10, 5]} intensity={1} />

              <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh scale={[0.8, 0.8, 0.8]}>
                  <boxGeometry args={[1.2, 1.2, 1.2]} />
                  <meshStandardMaterial color="#8B9DC3" metalness={0.9} roughness={0.1} envMapIntensity={1} />
                  <mesh position={[0, 0.5, 0]} scale={[1.2, 0.1, 1.0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#4F46E5" metalness={0.8} roughness={0.2} />
                  </mesh>
                  <mesh position={[0, -0.5, 0]} scale={[1.0, 0.1, 1.0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="#4F46E5" metalness={0.8} roughness={0.2} />
                  </mesh>
                </mesh>
              </Float>

              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
            </Suspense>
          </Canvas>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl px-4 text-center">
          Upload your CAD file, and we'll take care of machining, finishing, and shipping—accurate parts delivered fast, no stress.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xs sm:text-sm md:text-base">UPLOAD YOUR DESIGN</span>
        </motion.button>
      </div>
      
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-xs sm:text-sm text-gray-500 text-left">
        <div>12+ YEARS OF DELIVERING</div>
        <div>PERFECT DETAILS</div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-xs sm:text-sm text-gray-500 text-right">
        <div>OVER 100,000 PARTS</div>
        <div>MANUFACTURED ANNUALLY</div>
      </div>
    </section>
  );
}
