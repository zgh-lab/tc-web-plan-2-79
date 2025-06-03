
import React, { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleText() {
  const pointsRef = useRef<THREE.Points>(null);
  
  // 生成文字形状的粒子
  const particlePositions = useMemo(() => {
    const positions = [];
    const colors = [];
    
    // 创建文字轮廓的粒子点
    // G-bits 技术中心 的大致布局
    const textWidth = 16;
    const textHeight = 4;
    const particleCount = 2000;
    
    for (let i = 0; i < particleCount; i++) {
      // 随机分布但集中在文字区域
      const x = (Math.random() - 0.5) * textWidth;
      const y = (Math.random() - 0.5) * textHeight;
      const z = (Math.random() - 0.5) * 2;
      
      // 增加一些噪点效果
      const noise = Math.random() * 0.5;
      positions.push(x + noise, y + noise, z + noise);
      
      // 颜色渐变 - 白色到蓝色
      const intensity = Math.random();
      colors.push(
        0.8 + intensity * 0.2, // R
        0.8 + intensity * 0.2, // G  
        1.0                     // B
      );
    }
    
    return { positions: new Float32Array(positions), colors: new Float32Array(colors) };
  }, []);
  
  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime();
      
      // 粒子飘动效果
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + i) * 0.001; // Y轴微动
        positions[i] += Math.cos(time + i * 0.1) * 0.0005; // X轴微动
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      
      // 整体微旋转
      pointsRef.current.rotation.z = Math.sin(time * 0.1) * 0.02;
    }
  });
  
  return (
    <Points 
      ref={pointsRef} 
      positions={particlePositions.positions} 
      colors={particlePositions.colors}
      stride={3}
    >
      <PointMaterial
        transparent
        vertexColors
        size={0.02}
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
        camera={{ position: [0, 0, 10], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleText />
      </Canvas>
    </div>
  );
};

export default ParticleTitle;
