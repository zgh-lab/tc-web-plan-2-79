
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
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

// 超级交互球体组件 - 移除粒子，专注核心球体
function SuperInteractiveSphere({ colorScheme }: { colorScheme: any }) {
  const mainSphereRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (mainSphereRef.current && groupRef.current && outerRingRef.current && glowRef.current) {
      // 主球体复杂旋转和脉动 - 减慢动画速度
      mainSphereRef.current.rotation.x = Math.sin(time * 0.08) * 0.1;
      mainSphereRef.current.rotation.y = time * 0.1;
      mainSphereRef.current.rotation.z = Math.cos(time * 0.05) * 0.05;
      
      // 主球体大小脉动 - 减慢速度
      const scale = 1 + Math.sin(time * 0.4) * 0.08;
      mainSphereRef.current.scale.setScalar(scale);
      
      // 泛光效果脉动 - 增强效果
      const glowScale = 1.2 + Math.sin(time * 0.6) * 0.15;
      glowRef.current.scale.setScalar(glowScale);
      
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
      
      // 整体浮动和摆动 - 减慢速度
      groupRef.current.position.y = Math.sin(time * 0.15) * 0.3 + Math.cos(time * 0.1) * 0.1;
      groupRef.current.position.x = Math.sin(time * 0.08) * 0.2;
      
      // 外环旋转 - 减慢速度
      outerRingRef.current.rotation.z = time * 0.12;
      outerRingRef.current.rotation.x = Math.sin(time * 0.05) * 0.15;
      
      // 材质动画 - 增强发光效果
      if (mainSphereRef.current.material instanceof THREE.MeshStandardMaterial) {
        mainSphereRef.current.material.emissiveIntensity = 0.3 + Math.sin(time * 0.75) * 0.15;
      }
      
      // 泛光材质动画 - 增强
      if (glowRef.current.material instanceof THREE.MeshStandardMaterial) {
        glowRef.current.material.emissiveIntensity = 0.2 + Math.sin(time * 0.5) * 0.1;
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* 泛光效果 - 外层光晕，增强效果 */}
      <mesh ref={glowRef} position={[0, 0, 0]}>
        <sphereGeometry args={[3.8, 64, 32]} />
        <meshStandardMaterial
          color={colorScheme.lights[0]}
          emissive={colorScheme.lights[0]}
          emissiveIntensity={0.15}
          transparent
          opacity={0.2}
        />
      </mesh>
      
      {/* 主球体 - 增强亮度和发光 */}
      <mesh ref={mainSphereRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2.5, 128, 64]} />
        <meshStandardMaterial
          color={colorScheme.lights[0]}
          emissive={colorScheme.lights[0]}
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* 内部核心球体 - 增强亮度 */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.8, 64, 32]} />
        <meshStandardMaterial
          color={colorScheme.lights[1]}
          emissive={colorScheme.lights[1]}
          emissiveIntensity={0.5}
          transparent
          opacity={0.4}
        />
      </mesh>
      
      {/* 复杂的光环系统 - 更大的直径，从外向内等差递减，增加泛光 */}
      <group ref={outerRingRef}>
        {/* 最外层光环 - 直径25，增加泛光 */}
        <mesh rotation={[Math.PI / 6, Math.PI / 8, 0]}>
          <torusGeometry args={[25, 0.08, 16, 100]} />
          <meshStandardMaterial
            color={colorScheme.lights[0]}
            emissive={colorScheme.lights[0]}
            emissiveIntensity={0.3}
            transparent
            opacity={0.5}
          />
        </mesh>
        
        {/* 第二层光环 - 直径20，增加泛光 */}
        <mesh rotation={[Math.PI / 4, 0, Math.PI / 6]}>
          <torusGeometry args={[20, 0.09, 16, 100]} />
          <meshStandardMaterial
            color={colorScheme.lights[1]}
            emissive={colorScheme.lights[1]}
            emissiveIntensity={0.35}
            transparent
            opacity={0.6}
          />
        </mesh>
        
        {/* 第三层光环 - 直径15，增加泛光 */}
        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[15, 0.1, 16, 100]} />
          <meshStandardMaterial
            color={colorScheme.lights[2]}
            emissive={colorScheme.lights[2]}
            emissiveIntensity={0.4}
            transparent
            opacity={0.7}
          />
        </mesh>
        
        {/* 第四层光环 - 直径10，增加泛光 */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[10, 0.11, 16, 100]} />
          <meshStandardMaterial
            color={colorScheme.lights[3]}
            emissive={colorScheme.lights[3]}
            emissiveIntensity={0.45}
            transparent
            opacity={0.8}
          />
        </mesh>
        
        {/* 最内层光环 - 直径5，增加泛光 */}
        <mesh rotation={[0, 0, 0]}>
          <torusGeometry args={[5, 0.12, 16, 100]} />
          <meshStandardMaterial
            color={colorScheme.lights[1]}
            emissive={colorScheme.lights[1]}
            emissiveIntensity={0.5}
            transparent
            opacity={0.9}
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
