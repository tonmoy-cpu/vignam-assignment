import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, useAnimations } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function MotorModel() {
  const group = useRef();
  const { scene, animations } = useGLTF("/landing_page_motor.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        if (action) {
          action.setLoop(THREE.LoopRepeat, Infinity);
          action.play();
        }
      });
    }
  }, [actions]);

  return (
    <group ref={group} scale={[2.5, 2.5, 2.5]} position={[0, -0.5, 0]}>
      <primitive object={scene} />
    </group>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden flex flex-col justify-center items-center text-center px-6">
      {/* === Background Grid === */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "10px 10px",
          }}
        />
      </div>

      {/* === Motor Model Canvas in Background === */}
      <div className="absolute inset-0 z-0 h-[300px] sm:h-[400px] md:h-[500px] lg:h-full">
        <Canvas camera={{ position: [0, 0, 8], fov: 120 }}>
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

      {/* === Foreground Content === */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-5xl mx-auto pt-20 md:pt-24">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            hero-title 
            text-4xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 
            font-bold 
            mb-20 md:mb-32 lg:mb-64 xl:mb-72 
            leading-tight 
            text-gray-900
          "
        >
          Precision <span className="italic">CNC</span> Parts
          <br />
          Shipped as Fast as
          <br />
          Tomorrow
        </motion.h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 max-w-xl px-2">
          Upload your CAD file, and we'll take care of machining, finishing, and shipping—accurate
          parts delivered fast, no stress.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>UPLOAD YOUR DESIGN</span>
        </motion.button>
      </div>

      {/* === Footer Info === */}
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-[10px] sm:text-xs md:text-sm text-gray-500 text-left">
        <div>12+ YEARS OF DELIVERING</div>
        <div>PERFECT DETAILS</div>
      </div>

      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-[10px] sm:text-xs md:text-sm text-gray-500 text-right">
        <div>OVER 100,000 PARTS</div>
        <div>MANUFACTURED ANNUALLY</div>
      </div>
    </section>
  );
}
