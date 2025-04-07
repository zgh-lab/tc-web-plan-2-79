import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface VideoProps {
  src: string;
  youtubeId?: string;
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
  youtubeId,
  autoPlay = true,
  controls = true,
  loop = false,
  muted = true,
  className = '',
  poster,
  title
}: VideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // If YouTube ID is provided, render YouTube embed
  if (youtubeId) {
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
          <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=${autoPlay ? 1 : 0}&controls=${controls ? 1 : 0}&loop=${loop ? 1 : 0}&mute=${muted ? 1 : 0}`}
              title={title || "YouTube video player"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </motion.div>
    );
  }
  
  // Otherwise render regular video
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
