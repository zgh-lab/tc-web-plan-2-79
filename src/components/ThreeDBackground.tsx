
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 3D星空粒子系统 - 增强版本，更多粒子和层次
function StarField({ count = 8000 }) {
  const mesh = useRef<THREE.Points>(null);
  const light = useRef<THREE.PointLight>(null);
  
  // 生成多层球形分布的粒子位置和颜色
  const [positions, colors, initialPositions] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const initialPositions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // 创建多层球形分布，增加深度感
      const layerRandom = Math.random();
      let radius;
      
      if (layerRandom < 0.3) {
        // 内层：密集的小星星
        radius = 10 + Math.random() * 15;
      } else if (layerRandom < 0.6) {
        // 中层：中等密度
        radius = 25 + Math.random() * 20;
      } else {
        // 外层：稀疏的大星星
        radius = 45 + Math.random() * 30;
      }
      
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
      
      // 更丰富的星空色彩：多种色调混合
      const colorVariation = Math.random();
      const brightness = 0.4 + Math.random() * 0.6;
      
      if (colorVariation < 0.25) {
        // 亮白色星星
        colors[i * 3] = brightness;
        colors[i * 3 + 1] = brightness;
        colors[i * 3 + 2] = brightness + 0.2;
      } else if (colorVariation < 0.45) {
        // 蓝色星星
        colors[i * 3] = brightness * 0.4;
        colors[i * 3 + 1] = brightness * 0.7;
        colors[i * 3 + 2] = brightness;
      } else if (colorVariation < 0.65) {
        // 紫色星星
        colors[i * 3] = brightness * 0.8;
        colors[i * 3 + 1] = brightness * 0.4;
        colors[i * 3 + 2] = brightness;
      } else if (colorVariation < 0.8) {
        // 青色星星
        colors[i * 3] = brightness * 0.3;
        colors[i * 3 + 1] = brightness * 0.9;
        colors[i * 3 + 2] = brightness * 0.8;
      } else {
        // 金色星星
        colors[i * 3] = brightness;
        colors[i * 3 + 1] = brightness * 0.8;
        colors[i * 3 + 2] = brightness * 0.3;
      }
    }
    
    return [positions, colors, initialPositions];
  }, [count]);
  
  useFrame((state) => {
    const { clock, mouse } = state;
    const time = clock.getElapsedTime();
    
    if (mesh.current) {
      // 根据鼠标移动进行旋转，更加流畅缓慢
      mesh.current.rotation.x = time * 0.02 + mouse.y * 0.15;
      mesh.current.rotation.y = time * 0.03 + mouse.x * 0.15;
      mesh.current.rotation.z = Math.sin(time * 0.015) * 0.08;
      
      // 动态粒子效果 - 让星星闪烁和轻微移动
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        // 基于初始位置添加微妙的动画
        const noise1 = Math.sin(time * 0.4 + i * 0.01) * 0.15;
        const noise2 = Math.cos(time * 0.3 + i * 0.015) * 0.12;
        const noise3 = Math.sin(time * 0.35 + i * 0.02) * 0.08;
        
        positions[i3] = initialPositions[i3] + noise1;
        positions[i3 + 1] = initialPositions[i3 + 1] + noise2;
        positions[i3 + 2] = initialPositions[i3 + 2] + noise3;
        
        // 鼠标交互 - 轻微的吸引效果，但更加缓慢自然
        const mouseInfluence = 0.06; // 减小影响力
        const dx = mouse.x * 12 - positions[i3];
        const dy = mouse.y * 8 - positions[i3 + 1];
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 6) {
          const force = (6 - distance) / 6;
          positions[i3] += dx * force * mouseInfluence * 0.5; // 减半速度
          positions[i3 + 1] += dy * force * mouseInfluence * 0.5;
        }
      }
      
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
    
    if (light.current) {
      // 动态光源跟随鼠标，但移动更缓慢
      light.current.position.x = THREE.MathUtils.lerp(light.current.position.x, mouse.x * 12, 0.03);
      light.current.position.y = THREE.MathUtils.lerp(light.current.position.y, mouse.y * 12, 0.03);
      light.current.position.z = 8;
      light.current.intensity = 1.5 + Math.sin(time * 0.6) * 0.3; // 减缓光强变化
    }
  });

  return (
    <group>
      <pointLight ref={light} intensity={3} color="#00d4ff" distance={100} />
      <Points ref={mesh} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial 
          transparent 
          vertexColors
          size={0.12}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

// 相机控制器 - 增强鼠标交互，更缓慢平滑
function CameraController() {
  const { camera, mouse } = useThree();
  
  useFrame(() => {
    // 相机跟随鼠标移动，创造深度感，降低速度使其更平滑
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 1.5, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 1.5, 0.03);
    
    // 轻微的相机旋转跟随，更加缓慢
    camera.rotation.z = THREE.MathUtils.lerp(camera.rotation.z, mouse.x * 0.02, 0.02);
  });
  
  return null;
}

const ThreeDBackground = () => {
  // 创建滚动事件处理器的引用
  const scrollRef = useRef(0);
  
  // 监听滚动事件，更新滚动位置
  React.useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 75 }}
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
        
        {/* 增强的环境光 */}
        <ambientLight intensity={0.4} color="#1a1a3e" />
        
        {/* 多个动态光源创造丰富的光影效果 */}
        <directionalLight 
          position={[15, 15, 8]} 
          intensity={1.2} 
          color="#4f46e5"
        />
        <pointLight position={[-15, -10, 8]} intensity={0.9} color="#7c3aed" />
        <pointLight position={[10, -15, -8]} intensity={0.8} color="#06ffa5" />
        <pointLight position={[-8, 12, 5]} intensity={0.6} color="#f59e0b" />
        
        {/* 8000个粒子的丰富星空系统 */}
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
      
      {/* 增强的鼠标光晕和多层渐变叠加层 - 更加缓慢平滑的过渡效果 */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-1000"
        style={{
          background: `
            radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
              rgba(0, 212, 255, 0.15) 0%, 
              rgba(124, 58, 237, 0.08) 20%,
              rgba(255, 107, 157, 0.05) 40%,
              rgba(6, 255, 165, 0.04) 60%,
              rgba(0, 0, 0, 0.05) 80%,
              rgba(0, 0, 0, 0.2) 100%),
            linear-gradient(135deg, 
              rgba(10, 10, 26, 0.3) 0%, 
              rgba(26, 26, 62, 0.2) 25%,
              rgba(15, 23, 42, 0.25) 50%, 
              rgba(30, 41, 59, 0.15) 75%,
              rgba(0, 0, 0, 0.3) 100%),
            radial-gradient(ellipse at 20% 80%, 
              rgba(124, 58, 237, 0.08) 0%, 
              transparent 50%),
            radial-gradient(ellipse at 80% 20%, 
              rgba(6, 255, 165, 0.06) 0%, 
              transparent 50%)
          `
        }}
      />
      
      {/* 额外的装饰性渐变层 - 更加细微 */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: `
            linear-gradient(45deg, 
              transparent 0%, 
              rgba(79, 70, 229, 0.02) 25%, 
              transparent 50%, 
              rgba(124, 58, 237, 0.02) 75%, 
              transparent 100%)
          `
        }}
      />
    </div>
  );
};

export default ThreeDBackground;
