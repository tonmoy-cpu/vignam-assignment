import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Upload } from 'lucide-react';

export default function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stackedCards, setStackedCards] = useState([0, 1, 2, 3]);

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
      setStackedCards(prev => {
        const newStack = [...prev];
        const firstCard = newStack.shift();
        if (firstCard !== undefined) {
          newStack.push(firstCard);
        }
        return newStack;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="products" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 md:mb-8">
            Manufacture
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          >
            The Most Popular
            <br />
            <span className="text-gray-400 italic">Details</span> We Produce
          </motion.h2>
        </div>

        {/* Product Cards with Stacking Animation */}
        <div className="relative mb-8 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stackedCards.map((productIndex, stackIndex) => {
              const product = products[productIndex];
              const isTop = stackIndex === 0;
              
              return (
                <motion.div
                  key={`${productIndex}-${stackIndex}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ 
                    opacity: 1, 
                    y: stackIndex * -8,
                    scale: 1 - (stackIndex * 0.02),
                    zIndex: 10 - stackIndex
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: stackIndex * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className={`bg-white rounded-2xl p-4 md:p-6 shadow-lg transition-all duration-300 relative ${
                    isTop ? 'ring-2 ring-blue-600' : ''
                  }`}
                  style={{ 
                    position: stackIndex > 0 ? 'absolute' : 'relative',
                    top: stackIndex > 0 ? 0 : 'auto',
                    left: stackIndex > 0 ? 0 : 'auto',
                    right: stackIndex > 0 ? 0 : 'auto'
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">{product.name}</h3>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>

                  <div className="space-y-2 text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
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

                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
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

          {/* Navigation Arrows */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevProduct}
              className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            </button>
            <button
              onClick={nextProduct}
              className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Upload CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-600 rounded-2xl p-6 md:p-8 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Drag & Drop
            <br />
            Your 3D Design
          </h3>
          
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 border-2 border-white/30 border-dashed rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Upload className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2" />
              <div className="text-xs md:text-sm opacity-75">Drop files here</div>
            </div>
          </div>
          
          <p className="text-xs md:text-sm opacity-90 mb-2 md:mb-4">SUPPORTED FORMATS</p>
          <p className="font-mono text-sm md:text-lg">IGES / STL / FBX / DXF / STEP</p>
        </motion.div>
      </div>
    </section>
  );
}