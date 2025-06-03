
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleText() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particleData = useMemo(() => {
    const positions = [];
    const colors = [];
    const velocities = [];
    
    // 创建文字形状的粒子分布
    const particleCount = 2000;
    
    // 定义文字区域的粒子分布
    for (let i = 0; i < particleCount; i++) {
      let x, y, z;
      
      // 70%的粒子形成文字形状区域
      if (i < particleCount * 0.7) {
        // G-bits区域 (左侧)
        if (i < particleCount * 0.35) {
          x = -6 + (Math.random() - 0.5) * 8;
          y = -1 + Math.random() * 2;
        } 
        // 技术中心区域 (右侧)
        else {
          x = 2 + (Math.random() - 0.5) * 8;
          y = -1 + Math.random() * 2;
        }
        z = (Math.random() - 0.5) * 2;
      }
      // 30%的粒子作为背景装饰
      else {
        x = (Math.random() - 0.5) * 20;
        y = (Math.random() - 0.5) * 6;
        z = (Math.random() - 0.5) * 4;
      }
      
      positions.push(x, y, z);
      
      // 随机速度
      velocities.push(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01
      );
      
      // 灰度色彩 - 白色到灰色的渐变
      const grayLevel = 0.6 + Math.random() * 0.4; // 0.6-1.0的灰度值
      colors.push(grayLevel, grayLevel, grayLevel);
    }
    
    return { 
      positions: new Float32Array(positions), 
      colors: new Float32Array(colors),
      velocities: new Float32Array(velocities)
    };
  }, []);
  
  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime();
      const { mouse } = state;
      
      // 粒子微动效果
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      const { velocities } = particleData;
      
      for (let i = 0; i < positions.length; i += 3) {
        // 轻微的浮动动画
        positions[i] += velocities[i] * (1 + Math.sin(time + i) * 0.3);
        positions[i + 1] += velocities[i + 1] * (1 + Math.cos(time + i) * 0.3);
        positions[i + 2] += velocities[i + 2] * (1 + Math.sin(time * 0.5 + i) * 0.2);
        
        // 鼠标交互 - 轻微的吸引效果
        const mouseInfluence = 0.05;
        const dx = mouse.x * 8 - positions[i];
        const dy = mouse.y * 4 - positions[i + 1];
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 3) {
          const force = (3 - distance) / 3;
          positions[i] += dx * force * mouseInfluence;
          positions[i + 1] += dy * force * mouseInfluence;
        }
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      
      // 整体轻微旋转
      pointsRef.current.rotation.z = Math.sin(time * 0.1) * 0.01;
    }
  });
  
  return (
    <Points 
      ref={pointsRef} 
      positions={particleData.positions} 
      colors={particleData.colors}
      stride={3}
    >
      <PointMaterial
        transparent
        vertexColors
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

const ParticleTitle = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-5, -5, 5]} intensity={0.6} color="#cccccc" />
        <ParticleText />
      </Canvas>
    </div>
  );
};

export default ParticleTitle;

