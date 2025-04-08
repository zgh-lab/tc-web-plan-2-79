
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (isLoading) {
      // Start with progress at 0
      setProgress(0);
      
      // Use requestAnimationFrame for smoother animation
      let startTime: number;
      const duration = 2500; // 2.5 seconds to complete
      
      const animateProgress = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsedTime = timestamp - startTime;
        const progressPercent = Math.min((elapsedTime / duration) * 100, 100);
        
        setProgress(progressPercent);
        
        if (progressPercent < 100) {
          requestAnimationFrame(animateProgress);
        } else {
          setTimeout(() => {
            setIsLoading(false);
          }, 400); // Short delay after completion
        }
      };
      
      requestAnimationFrame(animateProgress);
    }
  }, [isLoading]);
  
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 0.6,
              ease: "easeInOut"
            } 
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { 
                duration: 0.4,
                ease: "easeOut"
              }
            }}
            className="w-64"
          >
            <Progress 
              value={progress} 
              className="h-1.5 bg-gray-200" 
              style={{
                '--progress-background': '#222222',
                '--progress-foreground': '#000000'
              } as React.CSSProperties}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
