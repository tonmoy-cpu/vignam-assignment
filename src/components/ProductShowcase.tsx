import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDragDrop, setShowDragDrop] = useState(false);

  const products = [
    {
      name: 'Spherical Joint',
      material: 'Steel, Stainless Steel',
      loadCapacity: 'Up to 10,000 N',
      thread: 'M8 to M30',
      bearingType: 'Ball or Plain',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Mounting Plate',
      material: 'Steel, Aluminum',
      holeDiameter: '6 mm to 12 mm',
      vibrationDamping: 'Rubber Inserts',
      mountingStyle: 'Horizontal, Vertical',
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Multi-Pin Enclosure',
      material: 'Plastic, Metal',
      pinCount: '2 to 50+ Pins',
      waterproofRating: 'IP65/IP67',
      locking: 'Screw or Clip',
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Protective Cap',
      material: 'Steel, Rubber',
      fitType: 'Snap-on, Threaded',
      waterResistance: 'IP54',
      impactResistance: '10 J',
      image: 'https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    }
  ];

  // Auto-rotate cards every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const nextIndex = (prev + 1) % products.length;
        // Show drag & drop after first slide (when index becomes 1)
        if (nextIndex === 1) {
          setShowDragDrop(true);
        }
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [products.length]);

  const getVisibleProducts = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % products.length;
      visible.push({ ...products[index], originalIndex: index });
    }
    return visible;
  };

  const visibleProducts = getVisibleProducts();

  return (
    <section id="products" className="py-20 bg-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            Manufacture
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-gray-900 leading-tight"
          >
            The Most Popular
            <br />
            <span className="text-gray-400 italic">Details</span> We Produce
          </motion.h2>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative h-[600px]">
          <AnimatePresence mode="wait">
            {visibleProducts.map((product, cardIndex) => (
              <motion.div
                key={`${product.originalIndex}-${currentIndex}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: cardIndex * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="absolute w-full md:w-[calc(33.333%-1rem)] bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
                style={{ 
                  left: cardIndex === 0 ? '0%' : cardIndex === 1 ? '33.333%' : '66.666%',
                  transform: cardIndex > 0 ? `translateX(${cardIndex * 1}rem)` : 'none'
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>

                <div className="space-y-2 text-xs text-gray-600 mb-6">
                  <div className="flex justify-between">
                    <span className="font-medium">Material:</span>
                    <span className="text-right">{product.material}</span>
                  </div>
                  {product.loadCapacity && (
                    <div className="flex justify-between">
                      <span className="font-medium">Load Capacity:</span>
                      <span className="text-right">{product.loadCapacity}</span>
                    </div>
                  )}
                  {product.thread && (
                    <div className="flex justify-between">
                      <span className="font-medium">Thread:</span>
                      <span className="text-right">{product.thread}</span>
                    </div>
                  )}
                  {product.bearingType && (
                    <div className="flex justify-between">
                      <span className="font-medium">Bearing Type:</span>
                      <span className="text-right">{product.bearingType}</span>
                    </div>
                  )}
                  {product.holeDiameter && (
                    <div className="flex justify-between">
                      <span className="font-medium">Hole Diameter:</span>
                      <span className="text-right">{product.holeDiameter}</span>
                    </div>
                  )}
                  {product.vibrationDamping && (
                    <div className="flex justify-between">
                      <span className="font-medium">Vibration Damping:</span>
                      <span className="text-right">{product.vibrationDamping}</span>
                    </div>
                  )}
                  {product.mountingStyle && (
                    <div className="flex justify-between">
                      <span className="font-medium">Mounting Style:</span>
                      <span className="text-right">{product.mountingStyle}</span>
                    </div>
                  )}
                  {product.pinCount && (
                    <div className="flex justify-between">
                      <span className="font-medium">Pin Count:</span>
                      <span className="text-right">{product.pinCount}</span>
                    </div>
                  )}
                  {product.waterproofRating && (
                    <div className="flex justify-between">
                      <span className="font-medium">Waterproof Rating:</span>
                      <span className="text-right">{product.waterproofRating}</span>
                    </div>
                  )}
                  {product.locking && (
                    <div className="flex justify-between">
                      <span className="font-medium">Locking:</span>
                      <span className="text-right">{product.locking}</span>
                    </div>
                  )}
                  {product.fitType && (
                    <div className="flex justify-between">
                      <span className="font-medium">Fit Type:</span>
                      <span className="text-right">{product.fitType}</span>
                    </div>
                  )}
                  {product.waterResistance && (
                    <div className="flex justify-between">
                      <span className="font-medium">Water Resistance:</span>
                      <span className="text-right">{product.waterResistance}</span>
                    </div>
                  )}
                  {product.impactResistance && (
                    <div className="flex justify-between">
                      <span className="font-medium">Impact Resistance:</span>
                      <span className="text-right">{product.impactResistance}</span>
                    </div>
                  )}
                </div>

                <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Drag & Drop Card - Shows as third card after first slide */}
          <AnimatePresence>
            {showDragDrop && (
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="absolute w-full md:w-[calc(33.333%-1rem)] bg-blue-600 rounded-lg p-8 text-center text-white"
                style={{ 
                  left: '66.666%',
                  transform: 'translateX(2rem)'
                }}
              >
                <h3 className="text-2xl font-bold mb-6">
                  Drag & Drop
                  <br />
                  Your 3D Design
                </h3>
                
                <div className="w-24 h-24 mx-auto mb-6 border-2 border-white/30 border-dashed rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-8 h-8 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <div className="text-xs opacity-75">Drop files here</div>
                  </div>
                </div>
                
                <p className="text-xs opacity-90 mb-2">SUPPORTED FORMATS</p>
                <p className="font-mono text-sm">IGES / STL / FBX / DXF / STEP</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}