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
      image: 'https://i.pinimg.com/736x/24/06/01/240601839f80a88fb57fb9ae1956b915.jpg'
    },
    {
      name: 'Mounting Plate',
      material: 'Steel, Aluminum',
      holeDiameter: '6 mm to 12 mm',
      vibrationDamping: 'Rubber Inserts',
      mountingStyle: 'Horizontal, Vertical',
      image: 'https://media.printables.com/media/prints/204147/images/1877670_6314cde1-d470-4db0-9210-4625c36f1635/thumbs/inside/1280x960/jpg/1fbb4bae1db1fbc5faa104c6f6733b3c_display_large_20.webp'
    },
    {
      name: 'Multi-Pin Enclosure',
      material: 'Plastic, Metal',
      pinCount: '2 to 50+ Pins',
      waterproofRating: 'IP65/IP67',
      locking: 'Screw or Clip',
      image: 'https://d1ds8nu9vo9fn9.cloudfront.net/blog-images/formbox-vacuum-forming-3D-printing-3D-printed-electronic-component-tray.jpg'
    },
    {
      name: 'Protective Cap',
      material: 'Steel, Rubber',
      fitType: 'Snap-on, Threaded',
      waterResistance: 'IP54',
      impactResistance: '10 J',
      image: 'https://fbi.cults3d.com/uploaders/16984740/illustration-file/8ff9ec1c-1be7-4e52-8b89-9601ef52e51d/d0064d7cd4e58864d2baa0d97c66e90d.png'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [products.length]);

  const getVisibleProducts = () => {
    return Array.from({ length: 3 }, (_, i) => {
      const index = (currentIndex + i) % products.length;
      return { ...products[index], originalIndex: index };
    });
  };

  const visibleProducts = getVisibleProducts();

  return (
    <section id="products" className="py-20 bg-white relative overflow-hidden">
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
                  type: 'spring',
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
