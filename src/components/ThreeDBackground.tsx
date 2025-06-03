
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 3D星空粒子系统 - 5000个动态粒子形成球形星空
function StarField({ count = 5000 }) {
  const mesh = useRef<THREE.Points>(null);
  const light = useRef<THREE.PointLight>(null);
  
  // 生成球形分布的粒子位置和颜色
  const [positions, colors, initialPositions] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const initialPositions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // 创建更密集的球形分布
      const radius = 15 + Math.random() * 25;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      // 保存初始位置用于动画
      initialPositions[i * 3] = x;
      initialPositions[i * 3 + 1] = y;
      initialPositions[i * 3 + 2] = z;
      
      // 更丰富的星空色彩：蓝紫白色调
      const colorVariation = Math.random();
      if (colorVariation < 0.4) {
        // 亮白色星星
        colors[i * 3] = 0.9 + Math.random() * 0.1;
        colors[i * 3 + 1] = 0.9 + Math.random() * 0.1;
        colors[i * 3 + 2] = 1;
      } else if (colorVariation < 0.7) {
        // 蓝色星星
        colors[i * 3] = 0.3 + Math.random() * 0.3;
        colors[i * 3 + 1] = 0.5 + Math.random() * 0.4;
        colors[i * 3 + 2] = 1;
      } else {
        // 紫色星星
        colors[i * 3] = 0.7 + Math.random() * 0.3;
        colors[i * 3 + 1] = 0.3 + Math.random() * 0.3;
        colors[i * 3 + 2] = 1;
      }
    }
    
    return [positions, colors, initialPositions];
  }, [count]);
  
  useFrame((state) => {
    const { clock, mouse } = state;
    const time = clock.getElapsedTime();
    
    if (mesh.current) {
      // 根据鼠标移动进行旋转
      mesh.current.rotation.x = time * 0.05 + mouse.y * 0.3;
      mesh.current.rotation.y = time * 0.08 + mouse.x * 0.3;
      mesh.current.rotation.z = time * 0.02;
      
      // 动态粒子效果 - 让星星闪烁和轻微移动
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // 基于初始位置添加微妙的动画
        const noise = Math.sin(time + i * 0.01) * 0.1;
        positions[i3] = initialPositions[i3] + noise;
        positions[i3 + 1] = initialPositions[i3 + 1] + Math.cos(time + i * 0.01) * 0.1;
        positions[i3 + 2] = initialPositions[i3 + 2] + Math.sin(time * 0.5 + i * 0.02) * 0.1;
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
    
    if (light.current) {
      // 动态光源跟随鼠标
      light.current.position.x = mouse.x * 10;
      light.current.position.y = mouse.y * 10;
      light.current.position.z = 5;
    }
  });

  return (
    <group>
      <pointLight ref={light} intensity={3} color="#00d4ff" distance={60} />
      <Points ref={mesh} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial 
          transparent 
          vertexColors
          size={0.15}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

// 相机控制器 - 增强鼠标交互
function CameraController() {
  const { camera, mouse } = useThree();
  
  useFrame(() => {
    // 相机跟随鼠标移动，创造深度感
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 1, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 1, 0.03);
    
    // 轻微的相机旋转跟随
    camera.rotation.z = THREE.MathUtils.lerp(camera.rotation.z, mouse.x * 0.02, 0.02);
  });
  
  return null;
}

const ThreeDBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 70 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
          pixelRatio: Math.min(window.devicePixelRatio, 2)
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <color attach="background" args={['#0a0a1a']} />
        
        {/* 环境光 - 增加亮度 */}
        <ambientLight intensity={0.6} color="#1a1a3e" />
        
        {/* 主光源 */}
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={2} 
          color="#4f46e5"
        />
        
        {/* 额外光源 */}
        <pointLight position={[-10, -10, 5]} intensity={1.5} color="#7c3aed" />
        <pointLight position={[10, -10, -5]} intensity={1.2} color="#06ffa5" />
        
        {/* 5000个粒子的星空系统 */}
        <StarField />
        
        {/* 增强的相机控制 */}
        <CameraController />
        
        <OrbitControls 
          enabled={false}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
      
      {/* 调整渐变叠加层 - 减少暗度，增加色彩层次 */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: `
            radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
              rgba(0, 212, 255, 0.12) 0%, 
              rgba(124, 58, 237, 0.08) 30%,
              rgba(255, 107, 157, 0.04) 60%,
              rgba(0, 0, 0, 0.2) 100%),
            linear-gradient(135deg, 
              rgba(10, 10, 26, 0.4) 0%, 
              rgba(26, 26, 46, 0.2) 40%,
              rgba(15, 23, 42, 0.3) 80%, 
              rgba(0, 0, 0, 0.4) 100%)
          `
        }}
      />
    </div>
  );
};

export default ThreeDBackground;
