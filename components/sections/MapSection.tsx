'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import FuzzyText from '@/components/FuzzyText';

export default function MapSection() {
  return (
    <section className="relative w-full overflow-visible bg-white pb-20">
      {/* Top Shadow Overlay for Text - Long Fog Style */}
      <div className="absolute top-0 left-0 right-0 h-64 md:h-80 lg:h-96 z-10 pointer-events-none" 
           style={{
             background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 30%, rgba(255, 255, 255, 0.6) 60%, transparent 100%)'
           }} 
      />
      
      {/* Header */}
      <div className="relative z-20 py-12 md:py-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center justify-center"
        >
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 flex flex-col items-center gap-4">
            <div className="overflow-visible">
              <FuzzyText 
                fontSize="clamp(2rem, 5vw, 4rem)"
                fontWeight={700}
                color="#111827"
                enableHover={false}
                baseIntensity={0.15}
              >
                Reaching new heights...
              </FuzzyText>
            </div>
            <div className="mt-2 flex items-center gap-2 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 flex-wrap justify-center">
              <span>from</span>
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Egypt</span>
              <span>to the Middle East</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Map Background Container */}
      <div className="relative w-full">
        {/* Shadow overlay on top of map to blend with text area */}
        <div className="absolute top-0 left-0 right-0 h-48 md:h-64 lg:h-80 z-10 pointer-events-none"
             style={{
               background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 20%, rgba(255, 255, 255, 0.4) 40%, transparent 100%)'
             }}
        />
        
        {/* Map Image - Full Width Background */}
        <div className="relative w-full min-h-[600px] md:min-h-[800px] lg:min-h-[1000px]">
          <Image
            src="/Map.png"
            alt="Middle East Map showing Vondera's reach"
            fill
            className="object-cover object-center w-full"
            priority
          />
        </div>

        {/* Bottom Shadow Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
