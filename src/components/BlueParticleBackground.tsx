
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function BlueParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.Group>(null);
  
  const particleData = useMemo(() => {
    const positions = [];
    const colors = [];
    const velocities = [];
    
    const particleCount = 300; // 减少粒子数量
    
    for (let i = 0; i < particleCount; i++) {
      // 更分散的随机分布，避免聚集
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 35;
      const z = (Math.random() - 0.5) * 25;
      
      positions.push(x, y, z);
      
      // 更缓慢的随机漂浮速度
      velocities.push(
        (Math.random() - 0.5) * 0.008,
        (Math.random() - 0.5) * 0.006,
        (Math.random() - 0.5) * 0.004
      );
      
      // 蓝色系颜色变化
      const blueVariations = [
        [0.4, 0.8, 1.0],    // 亮蓝色
        [0.3, 0.6, 0.9],    // 深蓝色
        [0.5, 0.85, 1.0],   // 天蓝色
        [0.2, 0.7, 0.85],   // 海蓝色
        [0.6, 0.9, 1.0],    // 浅蓝色
        [0.35, 0.75, 0.95], // 中蓝色
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

  // 创建连线
  const createLines = (positions: Float32Array) => {
    const lines = [];
    const maxDistance = 8; // 连线的最大距离
    const maxConnections = 2; // 每个粒子最多连接数
    
    for (let i = 0; i < positions.length; i += 3) {
      let connections = 0;
      const pos1 = new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]);
      
      for (let j = i + 3; j < positions.length && connections < maxConnections; j += 3) {
        const pos2 = new THREE.Vector3(positions[j], positions[j + 1], positions[j + 2]);
        const distance = pos1.distanceTo(pos2);
        
        if (distance < maxDistance) {
          const geometry = new THREE.BufferGeometry().setFromPoints([pos1, pos2]);
          const material = new THREE.LineBasicMaterial({ 
            color: 0x4A90E2, 
            transparent: true, 
            opacity: Math.max(0.1, (maxDistance - distance) / maxDistance * 0.3)
          });
          const line = new THREE.Line(geometry, material);
          lines.push(line);
          connections++;
        }
      }
    }
    
    return lines;
  };
  
  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime();
      
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      const { velocities } = particleData;
      
      for (let i = 0; i < positions.length; i += 3) {
        // 更缓慢的漂浮动画，避免朝镜头移动
        positions[i] += velocities[i] * (1 + Math.sin(time * 0.2 + i * 0.01) * 0.3);
        positions[i + 1] += velocities[i + 1] * (1 + Math.cos(time * 0.15 + i * 0.01) * 0.2);
        positions[i + 2] += velocities[i + 2] * (1 + Math.sin(time * 0.1 + i * 0.01) * 0.1);
        
        // 边界循环 - 更大的边界避免聚集
        if (positions[i] > 25) positions[i] = -25;
        if (positions[i] < -25) positions[i] = 25;
        if (positions[i + 1] > 17.5) positions[i + 1] = -17.5;
        if (positions[i + 1] < -17.5) positions[i + 1] = 17.5;
        if (positions[i + 2] > 12.5) positions[i + 2] = -12.5;
        if (positions[i + 2] < -12.5) positions[i + 2] = 12.5;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      
      // 更新连线
      if (linesRef.current) {
        // 清除旧连线
        linesRef.current.clear();
        
        // 创建新连线
        const lines = createLines(positions);
        lines.forEach(line => linesRef.current?.add(line));
      }
      
      // 非常轻微的整体旋转
      pointsRef.current.rotation.z = Math.sin(time * 0.02) * 0.008;
      pointsRef.current.rotation.y = time * 0.005;
    }
  });
  
  return (
    <>
      <Points 
        ref={pointsRef} 
        positions={particleData.positions} 
        colors={particleData.colors}
        stride={3}
      >
        <PointMaterial
          transparent
          vertexColors
          size={0.08} // 减小粒子大小
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.7} // 降低透明度
        />
      </Points>
      <group ref={linesRef} />
    </>
  );
}

const BlueParticleBackground = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }} // 调整相机位置和视野
        gl={{ alpha: true, antialias: true }}
        style={{ 
          background: 'transparent',
          width: '100%',
          height: '100%'
        }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[20, 20, 20]} intensity={0.4} color="#4A90E2" />
        <pointLight position={[-20, -20, 15]} intensity={0.3} color="#6BB6FF" />
        <BlueParticles />
      </Canvas>
    </div>
  );
};

export default BlueParticleBackground;
