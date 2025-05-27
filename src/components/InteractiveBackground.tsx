
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const animationFrameRef = useRef<number>();
  const mouseTrailRef = useRef<{x: number, y: number}[]>([]);

  // 颜色数组 - 更酷的科技感配色
  const colors = ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981', '#F59E0B', '#EF4444'];

  // 初始化粒子
  useEffect(() => {
    const initParticles = () => {
      const newParticles: Particle[] = [];
      const particleCount = 120; // 增加粒子数量
      
      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 1.5, // 增加速度
          vy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          life: Math.random() * 100 + 50,
          maxLife: Math.random() * 100 + 50
        });
      }
      setParticles(newParticles);
    };

    initParticles();
    window.addEventListener('resize', initParticles);
    return () => window.removeEventListener('resize', initParticles);
  }, []);

  // 鼠标跟踪和轨迹
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMouseMoving(true);
      
      // 添加鼠标轨迹点
      mouseTrailRef.current.push({ x: e.clientX, y: e.clientY });
      if (mouseTrailRef.current.length > 10) {
        mouseTrailRef.current.shift();
      }
      
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsMouseMoving(false);
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
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

      // 绘制鼠标轨迹
      if (isMouseMoving && mouseTrailRef.current.length > 1) {
        ctx.beginPath();
        ctx.moveTo(mouseTrailRef.current[0].x, mouseTrailRef.current[0].y);
        
        for (let i = 1; i < mouseTrailRef.current.length; i++) {
          const alpha = i / mouseTrailRef.current.length;
          ctx.globalAlpha = alpha * 0.5;
          ctx.lineTo(mouseTrailRef.current[i].x, mouseTrailRef.current[i].y);
        }
        
        ctx.strokeStyle = '#3B82F6';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      // 更新和绘制粒子
      setParticles(prevParticles => {
        return prevParticles.map(particle => {
          // 更新生命周期
          particle.life -= 1;
          if (particle.life <= 0) {
            // 重生粒子
            particle.x = Math.random() * canvas.width;
            particle.y = Math.random() * canvas.height;
            particle.life = particle.maxLife;
            particle.color = colors[Math.floor(Math.random() * colors.length)];
          }

          // 更新位置
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;

          // 边界检测和反弹
          if (newX < 0 || newX > canvas.width) {
            particle.vx *= -0.8; // 添加能量损失
            newX = Math.max(0, Math.min(canvas.width, newX));
          }
          if (newY < 0 || newY > canvas.height) {
            particle.vy *= -0.8;
            newY = Math.max(0, Math.min(canvas.height, newY));
          }

          // 鼠标强力吸引效果
          const dx = mousePosition.x - newX;
          const dy = mousePosition.y - newY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            const force = (200 - distance) / 200;
            const attraction = isMouseMoving ? 0.03 : 0.015;
            newX += dx * force * attraction;
            newY += dy * force * attraction;
            
            // 鼠标附近的粒子变大变亮
            particle.size = Math.min(particle.size * (1 + force * 0.5), 8);
            particle.opacity = Math.min(particle.opacity * (1 + force), 1);
          } else {
            // 恢复原始大小
            particle.size = Math.max(particle.size * 0.98, 1);
            particle.opacity = Math.max(particle.opacity * 0.99, 0.2);
          }

          // 绘制粒子光晕效果
          const gradient = ctx.createRadialGradient(newX, newY, 0, newX, newY, particle.size * 3);
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(0.3, particle.color + '80');
          gradient.addColorStop(1, 'transparent');
          
          ctx.globalAlpha = particle.opacity * 0.3;
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(newX, newY, particle.size * 3, 0, Math.PI * 2);
          ctx.fill();

          // 绘制粒子核心
          ctx.globalAlpha = particle.opacity;
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(newX, newY, particle.size, 0, Math.PI * 2);
          ctx.fill();

          // 绘制动态连接线
          prevParticles.forEach(otherParticle => {
            const dx2 = otherParticle.x - newX;
            const dy2 = otherParticle.y - newY;
            const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
            
            if (distance2 < 120) {
              const lineOpacity = (1 - distance2 / 120) * 0.4;
              
              // 创建渐变连接线
              const lineGradient = ctx.createLinearGradient(newX, newY, otherParticle.x, otherParticle.y);
              lineGradient.addColorStop(0, particle.color + Math.floor(lineOpacity * 255).toString(16).padStart(2, '0'));
              lineGradient.addColorStop(1, otherParticle.color + Math.floor(lineOpacity * 255).toString(16).padStart(2, '0'));
              
              ctx.globalAlpha = lineOpacity;
              ctx.beginPath();
              ctx.moveTo(newX, newY);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = lineGradient;
              ctx.lineWidth = 1.5;
              ctx.stroke();
            }
          });

          ctx.globalAlpha = 1;
          return { ...particle, x: newX, y: newY };
        });
      });

      // 绘制鼠标周围的能量圈
      if (isMouseMoving) {
        for (let i = 1; i <= 3; i++) {
          ctx.globalAlpha = 0.1 / i;
          ctx.strokeStyle = '#3B82F6';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(mousePosition.x, mousePosition.y, 50 * i, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition, isMouseMoving, particles]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 动态多层渐变背景 */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(59, 130, 246, 0.2) 0%, 
              rgba(139, 92, 246, 0.15) 20%,
              rgba(6, 182, 212, 0.1) 40%,
              rgba(0, 0, 0, 0.85) 60%),
            conic-gradient(from ${mousePosition.x / 10}deg at 50% 50%, 
              rgba(59, 130, 246, 0.1) 0deg,
              rgba(139, 92, 246, 0.1) 120deg,
              rgba(6, 182, 212, 0.1) 240deg,
              rgba(59, 130, 246, 0.1) 360deg),
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.95) 0%, 
              rgba(15, 23, 42, 0.9) 25%, 
              rgba(30, 41, 59, 0.85) 50%, 
              rgba(15, 23, 42, 0.9) 75%, 
              rgba(0, 0, 0, 0.95) 100%)
          `
        }}
        animate={{
          filter: [
            'brightness(1) contrast(1.1)',
            'brightness(1.1) contrast(1.2)',
            'brightness(1) contrast(1.1)'
          ]
        }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* 粒子画布 */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* 鼠标跟随光效 */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          width: 200,
          height: 200,
          background: `radial-gradient(circle, 
            rgba(59, 130, 246, 0.15) 0%, 
            rgba(139, 92, 246, 0.1) 30%,
            transparent 70%)`
        }}
        animate={{
          scale: isMouseMoving ? [1, 1.2, 1] : 1,
          opacity: isMouseMoving ? [0.8, 1, 0.8] : 0.5
        }}
        transition={{ duration: 0.5 }}
      />

      {/* 额外的动态光点 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(255, 255, 255, 0.08) 0%, 
            transparent 50%)`
        }}
        animate={{
          opacity: isMouseMoving ? [0.3, 0.6, 0.3] : 0.2
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </div>
  );
};

export default InteractiveBackground;
