
import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface VideoProps {
  src: string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
  poster?: string;
  title?: string;
}

const Video = ({
  src,
  autoPlay = true,
  controls = true,
  loop = false,
  muted = true,
  className = '',
  poster,
  title
}: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
        {title && (
          <div className="absolute top-0 left-0 right-0 bg-black/70 text-white p-3 z-10">
            <h3 className="text-lg font-medium">{title}</h3>
          </div>
        )}
        <video
          ref={videoRef}
          className={`w-full ${className}`}
          autoPlay={autoPlay}
          controls={controls}
          loop={loop}
          muted={muted}
          playsInline
          poster={poster}
        >
          <source src={src} type={`video/${src.split('.').pop()}`} />
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.div>
  );
};

export default Video;
