import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const services = [
    {
      number: '01',
      name: 'Custom Brackets',
      icon: '🔧',
    },
    {
      number: '02',
      name: 'Steel Adapters',
      icon: '⚙️',
    },
    {
      number: '03',
      name: 'Motor Mounts',
      icon: '🏭',
    },
    {
      number: '04',
      name: 'Enclosures',
      icon: '📦',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
            backgroundSize: '24px 24px',
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              About
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl font-bold text-gray-900 mb-8 leading-tight"
            >
              Revolutionizing
              <br />
              Manufacturing with
              <br />
              Speed and <span className="text-gray-400 italic">Precision</span>
            </motion.h2>

            {/* Services List */}
            <div className="space-y-6 mb-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4 group cursor-pointer py-2"
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    setCurrentImage(index);
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.span
                    className="text-gray-400 font-mono text-sm min-w-[24px]"
                    animate={{
                      opacity: hoveredIndex === index ? 0 : 1,
                      x: hoveredIndex === index ? -10 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {hoveredIndex === index ? '' : service.number}
                  </motion.span>

                  <motion.div
                    className="absolute"
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      x: hoveredIndex === index ? 7 : 5,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-7 h-4 text-blue-600" />
                  </motion.div>

                  <span className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors ml-6">
                    {service.name}
                  </span>
                  <div className="flex-1 border-b border-gray-200"></div>
                  <span className="text-2xl">{service.icon}</span>
                </motion.div>
              ))}
            </div>

            {/* Blue Panel with 3D Parts */}
            <motion.div
              className="w-full aspect-[16/10] bg-blue-600 rounded-lg overflow-hidden relative"
              key={currentImage}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center space-x-8">
                  {/* 3D Part Models */}
                  <div className="w-16 h-16 bg-yellow-400 rounded transform rotate-12"></div>
                  <div className="w-12 h-16 bg-blue-800 rounded-lg"></div>
                  <div className="w-14 h-14 bg-yellow-500 rounded-full"></div>
                  <div className="w-16 h-12 bg-yellow-600 rounded transform -rotate-12"></div>
                  <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Testimonial */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
                alt="Ayrton Senna"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-900">Ayrton Senna</h3>
                <p className="text-gray-600 text-sm">
                  CEO & Senior Partner at Forge
                </p>
              </div>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At Forge, we believe that getting custom CNC parts should be
                fast, reliable, and effortless. That's why we built a fully
                streamlined platform that turns your CAD files into
                production-ready parts—delivered in as fast as one day. Whether
                you're prototyping or scaling, we remove the friction from
                manufacturing so you can focus on building what matters.
              </p>

              <p>
                We operate high-performance CNC machines backed by in-house
                automation and a trusted network of suppliers. From one-off
                prototypes to small production runs, our system is built to
                deliver precise, high-quality parts with speed. You can also
                reserve your own dedicated CNC machine through our RM (Reserved
                Machines) offering—your own production line, without the
                overhead.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                EVERY DETAIL MATTERS — WE CRAFT EACH PART WITH CARE, ACCURACY,
                AND A FINISH THAT FEELS JUST RIGHT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}