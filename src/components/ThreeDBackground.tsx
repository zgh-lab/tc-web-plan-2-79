
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * THREE from 'three';

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

// 相机控制器 - 降低敏感度
function CameraController() {
  const { camera, mouse } = useThree();
  
  useFrame(() => {
    // 更微妙的相机移动跟随鼠标
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.02);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.5, 0.02);
  });
  
  return null;
}

const ThreeDBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 65 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
          pixelRatio: Math.min(window.devicePixelRatio, 2)
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <color attach="background" args={['#000000']} />
        
        {/* 环境光 - 增强亮度 */}
        <ambientLight intensity={0.6} color="#1a1a2e" />
        
        {/* 主光源 - 更强的光照 */}
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={2} 
          color="#4f46e5"
        />
        
        {/* 额外的光源增强效果 */}
        <pointLight position={[-5, -5, 5]} intensity={1.2} color="#7c3aed" />
        <pointLight position={[5, 5, -5]} intensity={1} color="#00d4ff" />
        
        {/* 粒子星空 */}
        <StarField />
        
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
              rgba(0, 212, 255, 0.08) 0%, 
              rgba(124, 58, 237, 0.04) 25%,
              rgba(255, 107, 157, 0.02) 50%,
              rgba(0, 0, 0, 0.4) 80%),
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.6) 0%, 
              rgba(26, 26, 46, 0.4) 30%,
              rgba(15, 23, 42, 0.5) 70%, 
              rgba(0, 0, 0, 0.7) 100%)
          `
        }}
      />
    </div>
  );
};

export default ThreeDBackground;
