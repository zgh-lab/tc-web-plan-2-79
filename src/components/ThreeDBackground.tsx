
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 不同页面的配色方案 - 恢复一些饱和度，保持科技感
const colorSchemes = {
  default: {
    background: '#0a0a1a',
    ambient: '#1a1a3e',
    lights: ['#4F79F6', '#3B6AF5', '#2854F4', '#1E40AF'], // 恢复蓝色饱和度
    gradient: {
      primary: 'rgba(79, 121, 246, 0.12)',
      secondary: 'rgba(59, 106, 245, 0.08)',
      tertiary: 'rgba(40, 84, 244, 0.05)',
      quaternary: 'rgba(30, 64, 175, 0.03)'
    }
  },
  cooperation: {
    background: '#1a0a1a',
    ambient: '#3e1a1a',
    lights: ['#6B7280', '#4B5563', '#374151', '#1F2937'], // 恢复灰色饱和度
    gradient: {
      primary: 'rgba(107, 114, 128, 0.12)',
      secondary: 'rgba(75, 85, 99, 0.08)',
      tertiary: 'rgba(55, 65, 81, 0.05)',
      quaternary: 'rgba(31, 41, 55, 0.03)'
    }
  },
  achievements: {
    background: '#1a1a0a',
    ambient: '#3e3e1a',
    lights: ['#22D3EE', '#0891B2', '#0E7490', '#155E75'], // 恢复青色饱和度
    gradient: {
      primary: 'rgba(34, 211, 238, 0.12)',
      secondary: 'rgba(8, 145, 178, 0.08)',
      tertiary: 'rgba(14, 116, 144, 0.05)',
      quaternary: 'rgba(21, 94, 117, 0.03)'
    }
  }
};

// 超级交互球体组件 - 更大更酷的效果
function SuperInteractiveSphere({ colorScheme }: { colorScheme: any }) {
  const mainSphereRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();
  
  // 创建多层环绕球体群
  const satelliteLayers = useMemo(() => {
    const layers = [];
    
    // 内层 - 小球体
    const innerLayer = [];
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const radius = 4 + Math.random() * 2;
      const height = (Math.random() - 0.5) * 4;
      innerLayer.push({
        position: [
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius
        ],
        color: colorScheme.lights[Math.floor(Math.random() * colorScheme.lights.length)],
        size: 0.08 + Math.random() * 0.08,
        speed: 0.2 + Math.random() * 0.2
      });
    }
    
    // 中层 - 中等球体
    const middleLayer = [];
    for (let i = 0; i < 15; i++) {
      const angle = (i / 15) * Math.PI * 2;
      const radius = 7 + Math.random() * 2;
      const height = (Math.random() - 0.5) * 6;
      middleLayer.push({
        position: [
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius
        ],
        color: colorScheme.lights[Math.floor(Math.random() * colorScheme.lights.length)],
        size: 0.12 + Math.random() * 0.08,
        speed: 0.15 + Math.random() * 0.15
      });
    }
    
    // 外层 - 大球体
    const outerLayer = [];
    for (let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 2;
      const radius = 12 + Math.random() * 3;
      const height = (Math.random() - 0.5) * 8;
      outerLayer.push({
        position: [
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius
        ],
        color: colorScheme.lights[Math.floor(Math.random() * colorScheme.lights.length)],
        size: 0.15 + Math.random() * 0.1,
        speed: 0.1 + Math.random() * 0.1
      });
    }
    
    layers.push(innerLayer, middleLayer, outerLayer);
    return layers;
  }, [colorScheme]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (mainSphereRef.current && groupRef.current && outerRingRef.current) {
      // 主球体复杂旋转和脉动
      mainSphereRef.current.rotation.x = Math.sin(time * 0.15) * 0.1;
      mainSphereRef.current.rotation.y = time * 0.2;
      mainSphereRef.current.rotation.z = Math.cos(time * 0.1) * 0.05;
      
      // 主球体大小脉动
      const scale = 1 + Math.sin(time * 0.8) * 0.08;
      mainSphereRef.current.scale.setScalar(scale);
      
      // 鼠标交互 - 更温和的响应
      const targetX = mouse.x * viewport.width * 0.08;
      const targetY = mouse.y * viewport.height * 0.08;
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetY * 0.15,
        0.02
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetX * 0.15,
        0.02
      );
      
      // 整体浮动和摆动
      groupRef.current.position.y = Math.sin(time * 0.3) * 0.3 + Math.cos(time * 0.2) * 0.1;
      groupRef.current.position.x = Math.sin(time * 0.15) * 0.2;
      
      // 外环旋转
      outerRingRef.current.rotation.z = time * 0.25;
      outerRingRef.current.rotation.x = Math.sin(time * 0.1) * 0.15;
      
      // 材质动画 - 更柔和的发光效果
      if (mainSphereRef.current.material instanceof THREE.MeshStandardMaterial) {
        mainSphereRef.current.material.emissiveIntensity = 0.15 + Math.sin(time * 1.5) * 0.1;
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* 主球体 - 恢复一些色彩饱和度 */}
      <mesh ref={mainSphereRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2.5, 128, 64]} />
        <meshStandardMaterial
          color={colorScheme.lights[0]}
          emissive={colorScheme.lights[0]}
          emissiveIntensity={0.25}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* 内部核心球体 */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.8, 64, 32]} />
        <meshStandardMaterial
          color={colorScheme.lights[1]}
          emissive={colorScheme.lights[1]}
          emissiveIntensity={0.35}
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* 多层环绕球体 */}
      {satelliteLayers.map((layer, layerIndex) => (
        <group key={layerIndex}>
          {layer.map((sat, index) => (
            <mesh
              key={`${layerIndex}-${index}`}
              position={sat.position as [number, number, number]}
            >
              <sphereGeometry args={[sat.size, 16, 16]} />
              <meshStandardMaterial
                color={sat.color}
                emissive={sat.color}
                emissiveIntensity={0.5}
                transparent
                opacity={0.9}
              />
            </mesh>
          ))}
        </group>
      ))}
      
      {/* 复杂的光环系统 - 从外向内等差递减 */}
      <group ref={outerRingRef}>
        {/* 最外层光环 */}
        <mesh rotation={[Math.PI / 6, Math.PI / 8, 0]}>
          <torusGeometry args={[15, 0.05, 16, 100]} />
          <meshStandardMaterial
            color={colorScheme.lights[0]}
            emissive={colorScheme.lights[0]}
            emissiveIntensity={0.2}
            transparent
            opacity={0.4}
          />
        </mesh>
        
        {/* 第二层光环 */}
        <mesh rotation={[Math.PI / 4, 0, Math.PI / 6]}>
          <torusGeometry args={[12, 0.06, 16, 100]} />
          <meshStandardMaterial
            color={colorScheme.lights[1]}
            emissive={colorScheme.lights[1]}
            emissiveIntensity={0.25}
            transparent
            opacity={0.5}
          />
        </mesh>
        
        {/* 第三层光环 */}
        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[9, 0.07, 16, 100]} />
          <meshStandardMaterial
            color={colorScheme.lights[2]}
            emissive={colorScheme.lights[2]}
            emissiveIntensity={0.3}
            transparent
            opacity={0.6}
          />
        </mesh>
        
        {/* 内层光环 */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[6, 0.08, 16, 100]} />
          <meshStandardMaterial
            color={colorScheme.lights[3]}
            emissive={colorScheme.lights[3]}
            emissiveIntensity={0.35}
            transparent
            opacity={0.7}
          />
        </mesh>
        
        {/* 最内层光环 */}
        <mesh rotation={[0, 0, 0]}>
          <torusGeometry args={[3, 0.09, 16, 100]} />
          <meshStandardMaterial
            color={colorScheme.lights[1]}
            emissive={colorScheme.lights[1]}
            emissiveIntensity={0.4}
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>
    </group>
  );
}

// 增强的相机控制器
function EnhancedCameraController() {
  const { camera, mouse } = useThree();
  
  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 1, 0.02);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 1, 0.02);
    camera.rotation.z = THREE.MathUtils.lerp(camera.rotation.z, mouse.x * 0.015, 0.01);
  });
  
  return null;
}

const ThreeDBackground = ({ variant = 'default' }: { variant?: keyof typeof colorSchemes }) => {
  const scrollRef = useRef(0);
  const colorScheme = colorSchemes[variant];
  
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
        camera={{ position: [0, 0, 15], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
          pixelRatio: Math.min(window.devicePixelRatio, 2)
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <color attach="background" args={[colorScheme.background]} />
        
        <ambientLight intensity={0.4} color={colorScheme.ambient} />
        
        <directionalLight 
          position={[20, 20, 10]} 
          intensity={1.2} 
          color={colorScheme.lights[0]}
        />
        <pointLight position={[-20, -15, 10]} intensity={1.0} color={colorScheme.lights[1]} />
        <pointLight position={[15, -20, -10]} intensity={0.8} color={colorScheme.lights[2]} />
        <pointLight position={[-10, 15, 8]} intensity={0.7} color={colorScheme.lights[3]} />
        
        {/* 超级交互球体 */}
        <SuperInteractiveSphere colorScheme={colorScheme} />
        
        <EnhancedCameraController />
        
        <OrbitControls 
          enabled={false}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
      
      {/* 增强的鼠标光晕渐变 - 恢复一些色彩 */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-1000"
        style={{
          background: `
            radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
              ${colorScheme.gradient.primary} 0%, 
              ${colorScheme.gradient.secondary} 15%,
              ${colorScheme.gradient.tertiary} 30%,
              ${colorScheme.gradient.quaternary} 45%,
              rgba(0, 0, 0, 0.2) 60%,
              rgba(0, 0, 0, 0.4) 100%),
            linear-gradient(135deg, 
              rgba(10, 10, 26, 0.5) 0%, 
              rgba(26, 26, 62, 0.4) 25%,
              rgba(15, 23, 42, 0.45) 50%, 
              rgba(30, 41, 59, 0.35) 75%,
              rgba(0, 0, 0, 0.5) 100%)
          `
        }}
      />
    </div>
  );
};

export default ThreeDBackground;
