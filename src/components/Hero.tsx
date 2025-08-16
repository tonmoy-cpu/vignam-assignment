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
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-4 md:px-6 py-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 text-blue-600">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="text-xl font-bold">Forge</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-1 text-sm text-gray-600">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span>Canada, Montreal</span>
        </div>

        <div className="flex items-center space-x-3 md:space-x-6 text-sm">
          <button 
            onClick={() => scrollToSection('manufacture')}
            className="text-gray-600 hover:text-gray-900 underline transition-colors"
          >
            Manufacture
          </button>
          <button 
            onClick={() => scrollToSection('products')}
            className="text-gray-600 hover:text-gray-900 underline transition-colors"
          >
            Tool library
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-600 hover:text-gray-900 underline transition-colors"
          >
            Get in touch
          </button>
          <div className="hidden md:flex items-center space-x-2 text-gray-500">
            <span>Eng</span>
            <span>/</span>
            <span>Fra</span>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pt-8 md:pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
            Precision <span className="text-gray-400 italic">CNC</span> Parts
            <br />
            Shipped as Fast as
            <br />
            Tomorrow
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Upload your CAD file, and we'll take care
            <br className="hidden md:block" />
            of machining, finishing, and shipping—accurate
            <br className="hidden md:block" />
            parts delivered fast, no stress
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span>UPLOAD YOUR DESIGN</span>
          </motion.button>
        </motion.div>

        {/* Bottom Stats */}
        <div className="absolute bottom-4 md:bottom-8 left-4 md:left-6 text-xs text-gray-500">
          <div>12+ YEARS OF DELIVERING</div>
          <div>PERFECT DETAILS</div>
        </div>
        
        <div className="absolute bottom-4 md:bottom-8 right-4 md:right-6 text-xs text-gray-500 text-right">
          <div>OVER 100,000 PARTS</div>
          <div>MANUFACTURED ANNUALLY</div>
        </div>
      </div>

      {/* 3D Scene - Positioned to not overlap with text */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <Suspense fallback={null}>
            <Environment files="/forest.exr" />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            
            {/* Positioned CNC Parts to avoid text overlap */}
            <CNCPart position={[-4, 2, -2]} rotation={[0.2, 0, 0.1]} scale={0.6} />
            <CNCPart position={[-2, -2, 1]} rotation={[0.1, 0.3, 0]} scale={0.8} />
            <CNCPart position={[3, 1.5, -1]} rotation={[0, 0.5, 0.2]} scale={0.7} />
            <CNCPart position={[4, -1.5, 0]} rotation={[0.3, 0, 0]} scale={0.6} />
            <CNCPart position={[0, 3, -3]} rotation={[0, 0.8, 0.1]} scale={0.5} />
            
            {/* Main Motor Model - positioned to not interfere with text */}
            <group position={[0, -1, 0]}>
              <MotorModel />
            </group>
            
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}