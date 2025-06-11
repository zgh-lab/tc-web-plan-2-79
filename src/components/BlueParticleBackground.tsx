
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function BlueParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particleData = useMemo(() => {
    const positions = [];
    const colors = [];
    const velocities = [];
    
    const particleCount = 800;
    
    for (let i = 0; i < particleCount; i++) {
      // 随机分布粒子
      const x = (Math.random() - 0.5) * 25;
      const y = (Math.random() - 0.5) * 15;
      const z = (Math.random() - 0.5) * 10;
      
      positions.push(x, y, z);
      
      // 随机速度
      velocities.push(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      );
      
      // 蓝色系颜色变化
      const blueVariations = [
        [0.2, 0.6, 1.0],    // 亮蓝色
        [0.1, 0.4, 0.9],    // 深蓝色
        [0.3, 0.7, 1.0],    // 天蓝色
        [0.0, 0.5, 0.8],    // 海蓝色
        [0.4, 0.8, 1.0],    // 浅蓝色
      ];
      
      const colorIndex = Math.floor(Math.random() * blueVariations.length);
      const selectedColor = blueVariations[colorIndex];
      
      colors.push(selectedColor[0], selectedColor[1], selectedColor[2]);
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
      
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      const { velocities } = particleData;
      
      for (let i = 0; i < positions.length; i += 3) {
        // 缓慢的浮动动画
        positions[i] += velocities[i] * (1 + Math.sin(time * 0.5 + i) * 0.3);
        positions[i + 1] += velocities[i + 1] * (1 + Math.cos(time * 0.3 + i) * 0.2);
        positions[i + 2] += velocities[i + 2] * (1 + Math.sin(time * 0.2 + i) * 0.1);
        
        // 边界循环
        if (positions[i] > 12.5) positions[i] = -12.5;
        if (positions[i] < -12.5) positions[i] = 12.5;
        if (positions[i + 1] > 7.5) positions[i + 1] = -7.5;
        if (positions[i + 1] < -7.5) positions[i + 1] = 7.5;
        if (positions[i + 2] > 5) positions[i + 2] = -5;
        if (positions[i + 2] < -5) positions[i + 2] = 5;
        
        // 鼠标交互效果
        const mouseInfluence = 0.03;
        const dx = mouse.x * 10 - positions[i];
        const dy = mouse.y * 5 - positions[i + 1];
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 4) {
          const force = (4 - distance) / 4;
          positions[i] += dx * force * mouseInfluence;
          positions[i + 1] += dy * force * mouseInfluence;
        }
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      
      // 整体缓慢旋转
      pointsRef.current.rotation.z = Math.sin(time * 0.05) * 0.02;
      pointsRef.current.rotation.y = time * 0.01;
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
        size={0.12}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.8}
      />
    </Points>
  );
}

const BlueParticleBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#4A90E2" />
        <pointLight position={[-10, -10, 5]} intensity={0.3} color="#6BB6FF" />
        <BlueParticles />
      </Canvas>
    </div>
  );
};

export default BlueParticleBackground;
