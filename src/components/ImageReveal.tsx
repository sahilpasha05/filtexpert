import React from 'react';
import { motion } from 'motion/react';

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  badge?: string;
  priority?: boolean;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-4/3',
  badge,
  priority = false
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden group ${aspectRatio} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106 will-change-transform"
      />
      
      {/* Subtle industrial cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/70 via-transparent to-transparent pointer-events-none opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

      {badge && (
        <div className="absolute bottom-3 left-3 bg-[#0B1F33]/90 text-white border border-white/10 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded backdrop-blur-md">
          {badge}
        </div>
      )}
    </motion.div>
  );
};
