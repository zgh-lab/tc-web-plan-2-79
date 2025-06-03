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
    
    // 增加粒子数量创造更密集的噪点效果
    const particleCount = 3000;
    
    for (let i = 0; i < particleCount; i++) {
      // 创建文字区域的粒子分布 - 更宽的分布区域
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 6;
      const z = (Math.random() - 0.5) * 4;
      
      // 添加噪点扰动
      const noiseScale = 2;
      const noiseX = (Math.random() - 0.5) * noiseScale;
      const noiseY = (Math.random() - 0.5) * noiseScale;
      const noiseZ = (Math.random() - 0.5) * noiseScale;
      
      positions.push(x + noiseX, y + noiseY, z + noiseZ);
      
      // 随机速度用于动态效果
      velocities.push(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      );
      
      // 更亮的颜色变化 - 白色到蓝色渐变
      const intensity = Math.random();
      const colorType = Math.random();
      
      if (colorType < 0.5) {
        // 更亮的白色粒子
        colors.push(
          0.95 + intensity * 0.05,
          0.95 + intensity * 0.05,
          1.0
        );
      } else if (colorType < 0.75) {
        // 更亮的蓝色粒子
        colors.push(
          0.4 + intensity * 0.4,
          0.7 + intensity * 0.3,
          1.0
        );
      } else {
        // 更亮的青色粒子
        colors.push(
          0.2 + intensity * 0.3,
          0.9 + intensity * 0.1,
          1.0
        );
      }
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
      
      // 粒子动态运动 - 噪点扰动效果
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      const { velocities } = particleData;
      
      for (let i = 0; i < positions.length; i += 3) {
        // 基础噪点运动
        positions[i] += velocities[i] * (1 + Math.sin(time + i) * 0.5);
        positions[i + 1] += velocities[i + 1] * (1 + Math.cos(time + i) * 0.5);
        positions[i + 2] += velocities[i + 2] * (1 + Math.sin(time * 0.7 + i) * 0.3);
        
        // 鼠标交互 - 粒子被鼠标吸引/排斥
        const mouseInfluence = 0.1;
        const dx = mouse.x * 10 - positions[i];
        const dy = mouse.y * 10 - positions[i + 1];
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 5) {
          const force = (5 - distance) / 5;
          positions[i] += dx * force * mouseInfluence;
          positions[i + 1] += dy * force * mouseInfluence;
        }
        
        // 边界检查 - 让粒子保持在视野内
        if (positions[i] > 12) positions[i] = -12;
        if (positions[i] < -12) positions[i] = 12;
        if (positions[i + 1] > 4) positions[i + 1] = -4;
        if (positions[i + 1] < -4) positions[i + 1] = 4;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      
      // 整体微旋转和呼吸效果
      pointsRef.current.rotation.z = Math.sin(time * 0.2) * 0.03;
      const scale = 1 + Math.sin(time * 0.5) * 0.05;
      pointsRef.current.scale.setScalar(scale);
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
        size={0.04}
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
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#00d4ff" />
        <pointLight position={[-5, -5, 5]} intensity={1.2} color="#7c3aed" />
        <ParticleText />
      </Canvas>
    </div>
  );
};

export default ParticleTitle;
