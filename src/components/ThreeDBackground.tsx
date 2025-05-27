
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 3D星空粒子系统 - 优化性能和视觉效果
function StarField({ count = 3000 }) {
  const mesh = useRef<THREE.Points>(null);
  const light = useRef<THREE.PointLight>(null);
  
  // 生成随机粒子位置 - 优化颜色渐变
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // 创建球形分布的粒子
      const radius = Math.random() * 30 + 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // 更丰富的色彩渐变：蓝紫色调
      const colorVariation = Math.random();
      if (colorVariation < 0.3) {
        // 深蓝色
        colors[i * 3] = 0.2 + Math.random() * 0.3; // R
        colors[i * 3 + 1] = 0.4 + Math.random() * 0.4; // G
        colors[i * 3 + 2] = 1; // B
      } else if (colorVariation < 0.6) {
        // 紫色
        colors[i * 3] = 0.6 + Math.random() * 0.4; // R
        colors[i * 3 + 1] = 0.2 + Math.random() * 0.3; // G
        colors[i * 3 + 2] = 1; // B
      } else {
        // 青色
        colors[i * 3] = 0.1 + Math.random() * 0.2; // R
        colors[i * 3 + 1] = 0.8 + Math.random() * 0.2; // G
        colors[i * 3 + 2] = 1; // B
      }
    }
    
    return [positions, colors];
  }, [count]);
  
  useFrame((state) => {
    const { clock, mouse } = state;
    
    if (mesh.current) {
      // 更缓慢优雅的旋转动画
      mesh.current.rotation.x = clock.getElapsedTime() * 0.02;
      mesh.current.rotation.y = clock.getElapsedTime() * 0.03;
      
      // 降低鼠标交互敏感度
      mesh.current.rotation.x += mouse.y * 0.005;
      mesh.current.rotation.y += mouse.x * 0.005;
    }
    
    if (light.current) {
      // 动态光源跟随鼠标 - 更强的光照效果
      light.current.position.x = mouse.x * 8;
      light.current.position.y = mouse.y * 8;
      light.current.position.z = 8;
    }
  });

  return (
    <group>
      <pointLight ref={light} intensity={2.5} color="#00d4ff" distance={50} />
      <Points ref={mesh} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial 
          transparent 
          vertexColors
          size={0.2}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

// 浮动几何体 - 更复杂的动画效果
function FloatingGeometry() {
  const meshes = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    const { clock, mouse } = state;
    const t = clock.getElapsedTime();
    
    if (meshes.current) {
      meshes.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh;
        
        // 更复杂的浮动动画 - 添加螺旋运动
        const amplitude = 2 + i * 0.5;
        const frequency = 0.5 + i * 0.1;
        mesh.position.y = Math.sin(t * frequency + i) * amplitude;
        mesh.position.x += Math.cos(t * frequency * 0.7 + i) * 0.01;
        mesh.position.z += Math.sin(t * frequency * 0.5 + i) * 0.01;
        
        // 更动态的旋转效果
        mesh.rotation.x = t * (0.3 + i * 0.1) + Math.sin(t + i) * 0.2;
        mesh.rotation.y = t * (0.2 + i * 0.05) + Math.cos(t + i) * 0.3;
        mesh.rotation.z = t * (0.4 + i * 0.08) + Math.sin(t * 0.7 + i) * 0.1;
        
        // 降低鼠标交互敏感度
        mesh.rotation.y += mouse.x * 0.2;
        mesh.rotation.x += mouse.y * 0.2;
        
        // 添加缩放动画
        const scale = 1 + Math.sin(t + i * 2) * 0.1;
        mesh.scale.setScalar(scale);
      });
    }
  });

  return (
    <group ref={meshes}>
      {/* 立方体 - 更鲜艳的颜色 */}
      <mesh position={[-8, 0, -5]}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial 
          color="#00d4ff" 
          transparent 
          opacity={0.8}
          wireframe
          emissive="#001122"
        />
      </mesh>
      
      {/* 八面体 */}
      <mesh position={[8, 0, -3]}>
        <octahedronGeometry args={[1.2]} />
        <meshStandardMaterial 
          color="#ff6b9d" 
          transparent 
          opacity={0.8}
          wireframe
          emissive="#220011"
        />
      </mesh>
      
      {/* 圆环 */}
      <mesh position={[0, 6, -8]}>
        <torusGeometry args={[1.8, 0.6, 12, 32]} />
        <meshStandardMaterial 
          color="#7c3aed" 
          transparent 
          opacity={0.7}
          wireframe
          emissive="#110022"
        />
      </mesh>
      
      {/* 四面体 */}
      <mesh position={[-6, -4, -6]}>
        <tetrahedronGeometry args={[1.4]} />
        <meshStandardMaterial 
          color="#06ffa5" 
          transparent 
          opacity={0.8}
          wireframe
          emissive="#001122"
        />
      </mesh>
      
      {/* 新增：十二面体 */}
      <mesh position={[6, -2, -4]}>
        <dodecahedronGeometry args={[1]} />
        <meshStandardMaterial 
          color="#fbbf24" 
          transparent 
          opacity={0.7}
          wireframe
          emissive="#221100"
        />
      </mesh>
    </group>
  );
}

// 相机控制器 - 降低敏感度
function CameraController() {
  const { camera, mouse } = useThree();
  
  useFrame(() => {
    // 更微妙的相机移动跟随鼠标
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 1, 0.02);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 1, 0.02);
  });
  
  return null;
}

const ThreeDBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 55 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
          pixelRatio: Math.min(window.devicePixelRatio, 2) // 性能优化
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }} // 性能优化
      >
        <color attach="background" args={['#000000']} />
        
        {/* 环境光 - 调整强度 */}
        <ambientLight intensity={0.3} color="#1a1a2e" />
        
        {/* 主光源 - 更强的光照 */}
        <directionalLight 
          position={[15, 15, 8]} 
          intensity={1.5} 
          color="#4f46e5"
        />
        
        {/* 额外的光源增强效果 */}
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#7c3aed" />
        
        {/* 粒子星空 */}
        <StarField />
        
        {/* 浮动几何体 */}
        <FloatingGeometry />
        
        {/* 相机控制 */}
        <CameraController />
        
        {/* 禁用轨道控制以保持自定义控制 */}
        <OrbitControls 
          enabled={false}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
      
      {/* 优化渐变叠加层 */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 30% 70%, 
              rgba(0, 212, 255, 0.15) 0%, 
              rgba(124, 58, 237, 0.08) 25%,
              rgba(255, 107, 157, 0.05) 50%,
              rgba(0, 0, 0, 0.7) 80%),
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.85) 0%, 
              rgba(26, 26, 46, 0.7) 30%,
              rgba(15, 23, 42, 0.8) 70%, 
              rgba(0, 0, 0, 0.9) 100%)
          `
        }}
      />
    </div>
  );
};

export default ThreeDBackground;
