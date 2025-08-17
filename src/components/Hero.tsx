import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function CNCPart({ position, rotation, scale = 1 }: { position: [number, number, number], rotation: [number, number, number], scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <cylinderGeometry args={[0.3, 0.3, 0.8, 8]} />
        <meshStandardMaterial 
          color="#8B9DC3" 
          metalness={0.9} 
          roughness={0.1}
          envMapIntensity={1}
        />
        <mesh position={[0, 0, 0]} scale={[0.8, 0.2, 0.8]}>
          <cylinderGeometry args={[0.25, 0.25, 0.1, 8]} />
          <meshStandardMaterial color="#4F46E5" metalness={0.8} roughness={0.2} />
        </mesh>
      </mesh>
    </Float>
  );
}

function MotorModel() {
  try {
    const { scene } = useGLTF('/landing_page_motor.glb');
    const meshRef = useRef<THREE.Group>(null);
    
    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.005;
      }
    });

    return <primitive ref={meshRef} object={scene} scale={1.5} position={[0, 0, 0]} />;
  } catch (error) {
    return (
      <mesh>
        <boxGeometry args={[1.5, 0.8, 1.5]} />
        <meshStandardMaterial color="#8B9DC3" metalness={0.9} roughness={0.1} />
      </mesh>
    );
  }
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Precision <span className="text-gray-400 italic">CNC</span> Parts
            <br />
            Shipped as Fast as
            <br />
            Tomorrow
          </h1>
          
          {/* 3D Cube Model */}
          <div className="flex justify-center my-30">
            <div className="w-70 h-70 relative">
              <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <Suspense fallback={null}>
                  <Environment files="/forest.exr" />
                  <ambientLight intensity={0.6} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  
                  <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                    <mesh>
                      <boxGeometry args={[1.5, 1.5, 1.5]} />
                      <meshStandardMaterial 
                        color="#8B9DC3" 
                        metalness={0.9} 
                        roughness={0.1}
                        envMapIntensity={1}
                      />
                      {/* Blue accent bands */}
                      <mesh position={[0, 0.6, 0]} scale={[1.1, 0.1, 1.1]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color="#4F46E5" metalness={0.8} roughness={0.2} />
                      </mesh>
                      <mesh position={[0, -0.6, 0]} scale={[1.1, 0.1, 1.1]}>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color="#4F46E5" metalness={0.8} roughness={0.2} />
                      </mesh>
                    </mesh>
                  </Float>
                  
                  <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
                </Suspense>
              </Canvas>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Upload your CAD file, and we'll take care
            <br />
            of machining, finishing, and shipping—accurate
            <br />
            parts delivered fast, no stress
          </p>
          
          <motion.button 
            whileHover={{ scale: 0.71 }}
            whileTap={{ scale: 0.68 }}
            className="bg-blue-600 text-white px-8 py-1 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span>UPLOAD YOUR DESIGN</span>
          </motion.button>
        </motion.div>
        <br />
        <br />
        <br />

        {/* Bottom Stats */}
        <div className="absolute bottom-8 left-6 text-xs text-gray-500">
          <div>12+ YEARS OF DELIVERING</div>
          <div>PERFECT DETAILS</div>
        </div>
        
        <div className="absolute bottom-8 right-6 text-xs text-gray-500 text-right">
          <div>OVER 100,000 PARTS</div>
          <div>MANUFACTURED ANNUALLY</div>
        </div>
      </div>

      {/* 3D Scene - Positioned around text */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 1, 8], fov: 50 }}>
          <Suspense fallback={null}>
            <Environment files="/forest.exr" />
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            
            {/* Positioned CNC Parts around the text */}
            <CNCPart position={[-6, 3, -2]} rotation={[0.2, 0, 0.1]} scale={0.5} />
            <CNCPart position={[-4, -3, 1]} rotation={[0.1, 0.3, 0]} scale={0.5} />
            <CNCPart position={[5, 2, -1]} rotation={[0, 0.5, 0.2]} scale={0.6} />
            <CNCPart position={[6, -2, 0]} rotation={[0.3, 0, 0]} scale={0.5} />
            <CNCPart position={[1, 4, -3]} rotation={[0, 0.8, 0.1]} scale={0.6} />
            <CNCPart position={[-1, -4, -2]} rotation={[0.4, 0.2, 0]} scale={0.6} />
            
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}