import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LoadingAnimation = () => {
  // Set isLoading to false to effectively disable the loading animation
  const [isLoading] = useState(false);
  
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 0.8,
              ease: "easeInOut"
            } 
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              transition: { 
                duration: 0.6,
                ease: "easeOut"
              }
            }}
            exit={{ 
              scale: 1.2, 
              opacity: 0,
              transition: { 
                duration: 0.6,
                ease: "easeInOut"
              }
            }}
            className="flex flex-col items-center"
          >
            <motion.img 
              src="/lovable-uploads/7d120ee6-3614-4b75-9c35-716d54490d67.png" 
              alt="WRLDS Technologies Logo" 
              className="h-24 w-auto mb-6"
              style={{ objectFit: 'contain', imageRendering: 'high-quality' }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { 
                  delay: 0.2,
                  duration: 0.6
                }
              }}
            />
            <motion.div 
              className="h-1 bg-blue-600 rounded-full" 
              initial={{ width: 0 }}
              animate={{ 
                width: 180,
                transition: { 
                  delay: 0.4,
                  duration: 1.6,
                  ease: "easeInOut"
                }
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
