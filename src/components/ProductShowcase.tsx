import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      name: 'Spherical Joint',
      material: 'Steel, Stainless Steel',
      loadCapacity: 'Up to 10,000 N',
      thread: 'M8 to M30',
      bearingType: 'Ball or Plain',
<<<<<<< HEAD
      image: 'https://i.pinimg.com/736x/24/06/01/240601839f80a88fb57fb9ae1956b915.jpg'
=======
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
>>>>>>> 68593bc16af48ea1f1be7b037931094760703e83
    },
    {
      name: 'Mounting Plate',
      material: 'Steel, Aluminum',
      holeDiameter: '6 mm to 12 mm',
      vibrationDamping: 'Rubber Inserts',
      mountingStyle: 'Horizontal, Vertical',
<<<<<<< HEAD
      image: 'https://media.printables.com/media/prints/204147/images/1877670_6314cde1-d470-4db0-9210-4625c36f1635/thumbs/inside/1280x960/jpg/1fbb4bae1db1fbc5faa104c6f6733b3c_display_large_20.webp'
=======
      image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
>>>>>>> 68593bc16af48ea1f1be7b037931094760703e83
    },
    {
      name: 'Multi-Pin Enclosure',
      material: 'Plastic, Metal',
      pinCount: '2 to 50+ Pins',
      waterproofRating: 'IP65/IP67',
      locking: 'Screw or Clip',
<<<<<<< HEAD
      image: 'https://d1ds8nu9vo9fn9.cloudfront.net/blog-images/formbox-vacuum-forming-3D-printing-3D-printed-electronic-component-tray.jpg'
=======
      image: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
>>>>>>> 68593bc16af48ea1f1be7b037931094760703e83
    },
    {
      name: 'Protective Cap',
      material: 'Steel, Rubber',
      fitType: 'Snap-on, Threaded',
      waterResistance: 'IP54',
      impactResistance: '10 J',
      image: 'https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

<<<<<<< HEAD
=======
  const dragDropCard = {
    name: 'Drag & Drop',
    subtitle: 'Your 3D Design',
    supportedFormats: 'IGES / STL / FBX / DXF / STEP',
    isDragDrop: true
  };

  // Auto-rotate cards every 4 seconds
>>>>>>> 68593bc16af48ea1f1be7b037931094760703e83
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [products.length]);

  const getVisibleProducts = () => {
    return Array.from({ length: 3 }, (_, i) => {
      const index = (currentIndex + i) % products.length;
<<<<<<< HEAD
      return { ...products[index], originalIndex: index };
    });
=======
      if (i === 2 && showDragDrop) {
        visible.push({ ...dragDropCard, originalIndex: -1 });
      } else {
        visible.push({ ...products[index], originalIndex: index });
      }
    }
    return visible;
>>>>>>> 68593bc16af48ea1f1be7b037931094760703e83
  };

  const visibleProducts = getVisibleProducts();

  return (
    <section id="products" className="py-20 bg-white relative overflow-hidden">
<<<<<<< HEAD
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        />
=======
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}></div>
>>>>>>> 68593bc16af48ea1f1be7b037931094760703e83
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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

<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative h-[600px]">
=======
        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative min-h-[600px]">
>>>>>>> 68593bc16af48ea1f1be7b037931094760703e83
          <AnimatePresence mode="wait">
            {visibleProducts.map((product, cardIndex) => (
              <motion.div
                key={`${product.originalIndex}-${currentIndex}-${cardIndex}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{
                  duration: 0.8,
                  delay: cardIndex * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
<<<<<<< HEAD
                className="absolute w-full md:w-[calc(33.333%-1rem)] bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
                style={{
                  left: cardIndex === 0 ? '0%' : cardIndex === 1 ? '33.333%' : '66.666%',
                  transform: cardIndex > 0 ? `translateX(${cardIndex * 1}rem)` : 'none'
                }}
=======
                className={`bg-white rounded-lg border border-gray-200 p-6 shadow-sm ${
                  product.isDragDrop ? 'bg-blue-600 text-white border-blue-600' : ''
                }`}
>>>>>>> 68593bc16af48ea1f1be7b037931094760703e83
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-lg font-semibold ${product.isDragDrop ? 'text-white' : 'text-gray-900'}`}>
                    {product.name}
                  </h3>
                  <ChevronRight className={`w-4 h-4 ${product.isDragDrop ? 'text-white' : 'text-gray-400'}`} />
                </div>

<<<<<<< HEAD
                <div className="space-y-2 text-xs text-gray-600 mb-6">
                  {Object.entries(product).map(([key, value]) =>
                    key !== 'name' && key !== 'image' ? (
                      <div className="flex justify-between" key={key}>
                        <span className="font-medium">{key.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="text-right">{value}</span>
                      </div>
                    ) : null
                  )}
                </div>

                <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
=======
                {product.isDragDrop ? (
                  <div className="text-center py-8">
                    <div className="text-2xl font-bold mb-2">{product.subtitle}</div>
                    <div className="mb-8">
                      {/* 3D Design Icon */}
                      <div className="w-24 h-24 mx-auto mb-4 border-2 border-white rounded-lg flex items-center justify-center">
                        <div className="w-16 h-16 border border-white rounded transform rotate-12"></div>
                      </div>
                    </div>
                    <div className="text-sm opacity-75">
                      <div className="mb-1">SUPPORTED FORMATS</div>
                      <div className="font-mono">{product.supportedFormats}</div>
                    </div>
                  </div>
                ) : (
                  <>
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
                  </>
                )}
>>>>>>> 68593bc16af48ea1f1be7b037931094760703e83
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
