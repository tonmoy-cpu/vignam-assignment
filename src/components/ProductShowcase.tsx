import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function ProductShowcase() {
  const [currentCards, setCurrentCards] = useState([0, 1, 2]);
  const [animationKey, setAnimationKey] = useState(0);

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

  // Auto-rotate cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCards(prev => {
        const newCards = [...prev];
        const firstCard = newCards.shift();
        if (firstCard !== undefined) {
          newCards.push((firstCard + 1) % products.length);
        }
        return newCards;
      });
      setAnimationKey(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <section id="products" className="py-20 bg-white relative">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {currentCards.map((productIndex, cardIndex) => {
            const product = products[productIndex];
            
            return (
              <motion.div
                key={`${productIndex}-${animationKey}-${cardIndex}`}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: cardIndex * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                <div className="space-y-2 text-sm text-gray-600 mb-6">
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

                <div className="aspect-square bg-white rounded-lg overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Upload CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-600 rounded-2xl p-8 text-center text-white max-w-md mx-auto"
        >
          <h3 className="text-3xl font-bold mb-6">
            Drag & Drop
            <br />
            Your 3D Design
          </h3>
          
          <div className="w-32 h-32 mx-auto mb-6 border-2 border-white/30 border-dashed rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 border-2 border-white rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div className="text-sm opacity-75">Drop files here</div>
            </div>
          </div>
          
          <p className="text-sm opacity-90 mb-4">SUPPORTED FORMATS</p>
          <p className="font-mono text-lg">IGES / STL / FBX / DXF / STEP</p>
        </motion.div>
      </div>
    </section>
  );
}