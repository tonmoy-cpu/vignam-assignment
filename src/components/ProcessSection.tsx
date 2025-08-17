import React from "react";
import { motion } from "framer-motion";
import { Upload, DollarSign, Cog, Truck } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Step Files",
      description:
        "Select from a wide range of materials, precision tolerances, and custom finishes to match your exact needs",
    },
    {
      icon: DollarSign,
      title: "Get a quote & checkout",
      description:
        "No waiting—just fast, transparent pricing and control over how soon you want your parts delivered",
    },
    {
      icon: Cog,
      title: "We make your parts",
      description:
        "Once you place an order, our machines get to work immediately—no delays, no bottlenecks",
    },
    {
      icon: Truck,
      title: "Parts are shipped",
      description:
        "Finalized parts are out the door quickly, with delivery typically completed within 48 hours",
    },
  ];

  const images = [
    {
      src: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "CNC Machine 1",
    },
    {
      src: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "CNC Machine 2",
    },
    {
      src: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "CNC Machine 3",
    },
    {
      src: "https://images.pexels.com/photos/1108102/pexels-photo-1108102.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "CNC Machine 4",
    },
  ];

  return (
    <section id="manufacture" className="py-20 bg-gray-50 relative">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-gray-900 mb-4 leading-tight"
          >
            CNC Machining
            <br />
            Made <span className="text-gray-400 italic">Easy</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="aspect-video bg-gray-200 rounded-lg overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
