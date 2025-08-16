import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="py-0 bg-white">
      <div className="w-full">
        <div className="relative aspect-video bg-gray-900 overflow-hidden">
          {!isPlaying ? (
            <div className="relative w-full h-full">
              {/* Video Thumbnail */}
              <img 
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
                alt="CNC Manufacturing Process"
                className="w-full h-full object-cover"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePlayVideo}
                  className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl"
                >
                  <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
                </motion.button>
              </div>

              {/* Video Info */}
              <div className="absolute top-4 left-4 text-white">
                <div className="text-sm opacity-75">SOUND ON</div>
              </div>
              
              <div className="absolute top-4 right-4">
                <button className="text-white text-sm border border-white/30 px-3 py-1 rounded hover:bg-white/10 transition-colors">
                  CHECK ON YOUTUBE →
                </button>
              </div>

              {/* Video Duration */}
              <div className="absolute bottom-4 left-4 text-white text-sm">
                00:07
              </div>
              
              <div className="absolute bottom-4 right-4 text-white text-sm">
                01:58
              </div>
            </div>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/E1czmX6bjFA?autoplay=1&start=10"
              title="Vignam Text to Simulations"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}