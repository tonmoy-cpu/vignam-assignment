import React from 'react';
import { motion } from 'framer-motion';
import { Upload, DollarSign, Cog, Truck } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      icon: Upload,
      title: 'Upload Step Files',
      description: 'Select from a wide range of materials, precision tolerances, and custom finishes to match your exact needs'
    },
    {
      icon: DollarSign,
      title: 'Get a quote & checkout',
      description: 'No waiting—just fast, transparent pricing and control over how soon you want your parts delivered'
    },
    {
      icon: Cog,
      title: 'We make your parts',
      description: 'Once you place an order, our machines get to work immediately—no delays, no bottlenecks'
    },
    {
      icon: Truck,
      title: 'Parts are shipped',
      description: 'Finalized parts are out the door quickly, with delivery typically completed within 48 hours'
    }
  ];

  return (
    <section id="manufacture" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
          >
            CNC Machining
            <br />
            Made <span className="text-gray-400 italic">Easy</span>
          </motion.h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Manufacturing Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="aspect-video bg-gray-200 rounded-lg overflow-hidden"
          >
            <img 
              src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="CNC Machine 1"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="aspect-video bg-gray-200 rounded-lg overflow-hidden"
          >
            <img 
              src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="CNC Machine 2"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="aspect-video bg-gray-200 rounded-lg overflow-hidden"
          >
            <img 
              src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="CNC Machine 3"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="aspect-video bg-gray-200 rounded-lg overflow-hidden"
          >
            <img 
              src="https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="CNC Machine 4"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}