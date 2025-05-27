
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  // 初始化粒子
  useEffect(() => {
    const initParticles = () => {
      const newParticles: Particle[] = [];
      const particleCount = 80;
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
      setParticles(newParticles);
    };

    initParticles();
    window.addEventListener('resize', initParticles);
    return () => window.removeEventListener('resize', initParticles);
  }, []);

  // 鼠标跟踪
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 动画循环
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // 清除画布
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 更新和绘制粒子
      setParticles(prevParticles => {
        return prevParticles.map(particle => {
          // 更新位置
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;

          // 边界检测
          if (newX < 0 || newX > canvas.width) particle.vx *= -1;
          if (newY < 0 || newY > canvas.height) particle.vy *= -1;

          newX = Math.max(0, Math.min(canvas.width, newX));
          newY = Math.max(0, Math.min(canvas.height, newY));

          // 鼠标吸引效果
          const dx = mousePosition.x - newX;
          const dy = mousePosition.y - newY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const force = (150 - distance) / 150;
            newX += dx * force * 0.01;
            newY += dy * force * 0.01;
          }

          // 绘制粒子
          ctx.beginPath();
          ctx.arc(newX, newY, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
          ctx.fill();

          // 绘制连接线
          prevParticles.forEach(otherParticle => {
            const dx2 = otherParticle.x - newX;
            const dy2 = otherParticle.y - newY;
            const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
            
            if (distance2 < 100) {
              ctx.beginPath();
              ctx.moveTo(newX, newY);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance2 / 100)})`;
              ctx.stroke();
            }
          });

          return { ...particle, x: newX, y: newY };
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition, particles]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 动态渐变背景 */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(59, 130, 246, 0.15) 0%, 
              rgba(147, 51, 234, 0.1) 25%, 
              rgba(0, 0, 0, 0.8) 50%),
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.9) 0%, 
              rgba(15, 23, 42, 0.95) 25%, 
              rgba(30, 41, 59, 0.9) 50%, 
              rgba(15, 23, 42, 0.95) 75%, 
              rgba(0, 0, 0, 0.9) 100%)
          `
        }}
        animate={{
          background: [
            `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(59, 130, 246, 0.15) 0%, 
              rgba(147, 51, 234, 0.1) 25%, 
              rgba(0, 0, 0, 0.8) 50%),
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.9) 0%, 
              rgba(15, 23, 42, 0.95) 25%, 
              rgba(30, 41, 59, 0.9) 50%, 
              rgba(15, 23, 42, 0.95) 75%, 
              rgba(0, 0, 0, 0.9) 100%)`,
            `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(147, 51, 234, 0.15) 0%, 
              rgba(59, 130, 246, 0.1) 25%, 
              rgba(0, 0, 0, 0.8) 50%),
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.9) 0%, 
              rgba(30, 41, 59, 0.95) 25%, 
              rgba(15, 23, 42, 0.9) 50%, 
              rgba(30, 41, 59, 0.95) 75%, 
              rgba(0, 0, 0, 0.9) 100%)`
          ]
        }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* 粒子画布 */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* 额外的光效 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(255, 255, 255, 0.05) 0%, 
            transparent 40%)`
        }}
      />
    </div>
  );
};

export default InteractiveBackground;
