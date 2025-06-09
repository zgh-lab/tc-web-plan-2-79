import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 不同页面的配色方案
const colorSchemes = {
  default: {
    background: '#0a0a1a',
    ambient: '#1a1a3e',
    lights: ['#4f46e5', '#7c3aed', '#06ffa5', '#f59e0b'],
    gradient: {
      primary: 'rgba(0, 212, 255, 0.15)',
      secondary: 'rgba(124, 58, 237, 0.08)',
      tertiary: 'rgba(255, 107, 157, 0.05)',
      quaternary: 'rgba(6, 255, 165, 0.04)'
    }
  },
  cooperation: {
    background: '#1a0a1a',
    ambient: '#3e1a1a',
    lights: ['#ef4444', '#f97316', '#f59e0b', '#eab308'],
    gradient: {
      primary: 'rgba(239, 68, 68, 0.15)',
      secondary: 'rgba(249, 115, 22, 0.08)',
      tertiary: 'rgba(245, 158, 11, 0.05)',
      quaternary: 'rgba(234, 179, 8, 0.04)'
    }
  },
  achievements: {
    background: '#1a1a0a',
    ambient: '#3e3e1a',
    lights: ['#8b5cf6', '#a855f7', '#c084fc', '#d8b4fe'],
    gradient: {
      primary: 'rgba(139, 92, 246, 0.15)',
      secondary: 'rgba(168, 85, 247, 0.08)',
      tertiary: 'rgba(192, 132, 252, 0.05)',
      quaternary: 'rgba(216, 180, 254, 0.04)'
    }
  }
};

// 3D星空粒子系统
function StarField({ count = 8000, colorScheme }: { count?: number; colorScheme: any }) {
  const mesh = useRef<THREE.Points>(null);
  const light = useRef<THREE.PointLight>(null);
  
  // 粒子生成逻辑
  const [positions, colors, initialPositions] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const initialPositions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const layerRandom = Math.random();
      let radius;
      
      if (layerRandom < 0.3) {
        radius = 10 + Math.random() * 15;
      } else if (layerRandom < 0.6) {
        radius = 25 + Math.random() * 20;
      } else {
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
      
      initialPositions[i * 3] = x;
      initialPositions[i * 3 + 1] = y;
      initialPositions[i * 3 + 2] = z;
      
      // 使用配色方案的颜色
      const colorVariation = Math.random();
      const brightness = 0.4 + Math.random() * 0.6;
      const lightColors = colorScheme.lights;
      const selectedColor = lightColors[Math.floor(Math.random() * lightColors.length)];
      
      // 将hex颜色转换为RGB
      const hex = selectedColor.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16) / 255;
      const g = parseInt(hex.substr(2, 2), 16) / 255;
      const b = parseInt(hex.substr(4, 2), 16) / 255;
      
      colors[i * 3] = r * brightness;
      colors[i * 3 + 1] = g * brightness;
      colors[i * 3 + 2] = b * brightness;
    }
    
    return [positions, colors, initialPositions];
  }, [count, colorScheme]);
  
  // 动画逻辑
  useFrame((state) => {
    const { clock, mouse } = state;
    const time = clock.getElapsedTime();
    
    if (mesh.current) {
      mesh.current.rotation.x = time * 0.02 + mouse.y * 0.15;
      mesh.current.rotation.y = time * 0.03 + mouse.x * 0.15;
      mesh.current.rotation.z = Math.sin(time * 0.015) * 0.08;
      
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        const noise1 = Math.sin(time * 0.4 + i * 0.01) * 0.15;
        const noise2 = Math.cos(time * 0.3 + i * 0.015) * 0.12;
        const noise3 = Math.sin(time * 0.35 + i * 0.02) * 0.08;
        
        positions[i3] = initialPositions[i3] + noise1;
        positions[i3 + 1] = initialPositions[i3 + 1] + noise2;
        positions[i3 + 2] = initialPositions[i3 + 2] + noise3;
        
        const mouseInfluence = 0.06;
        const dx = mouse.x * 12 - positions[i3];
        const dy = mouse.y * 8 - positions[i3 + 1];
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 6) {
          const force = (6 - distance) / 6;
          positions[i3] += dx * force * mouseInfluence * 0.5;
          positions[i3 + 1] += dy * force * mouseInfluence * 0.5;
        }
      }
      
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
    
    if (light.current) {
      light.current.position.x = THREE.MathUtils.lerp(light.current.position.x, mouse.x * 12, 0.03);
      light.current.position.y = THREE.MathUtils.lerp(light.current.position.y, mouse.y * 12, 0.03);
      light.current.position.z = 8;
      light.current.intensity = 1.5 + Math.sin(time * 0.6) * 0.3;
    }
  });

  return (
    <group>
      <pointLight ref={light} intensity={3} color={colorScheme.lights[0]} distance={100} />
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

// 相机控制器
function CameraController() {
  const { camera, mouse } = useThree();
  
  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 1.5, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 1.5, 0.03);
    camera.rotation.z = THREE.MathUtils.lerp(camera.rotation.z, mouse.x * 0.02, 0.02);
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
        <color attach="background" args={[colorScheme.background]} />
        
        <ambientLight intensity={0.4} color={colorScheme.ambient} />
        
        <directionalLight 
          position={[15, 15, 8]} 
          intensity={1.2} 
          color={colorScheme.lights[0]}
        />
        <pointLight position={[-15, -10, 8]} intensity={0.9} color={colorScheme.lights[1]} />
        <pointLight position={[10, -15, -8]} intensity={0.8} color={colorScheme.lights[2]} />
        <pointLight position={[-8, 12, 5]} intensity={0.6} color={colorScheme.lights[3]} />
        
        <StarField colorScheme={colorScheme} />
        <CameraController />
        
        <OrbitControls 
          enabled={false}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
      
      {/* 鼠标光晕渐变 */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-1000"
        style={{
          background: `
            radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
              ${colorScheme.gradient.primary} 0%, 
              ${colorScheme.gradient.secondary} 20%,
              ${colorScheme.gradient.tertiary} 40%,
              ${colorScheme.gradient.quaternary} 60%,
              rgba(0, 0, 0, 0.05) 80%,
              rgba(0, 0, 0, 0.2) 100%),
            linear-gradient(135deg, 
              rgba(10, 10, 26, 0.3) 0%, 
              rgba(26, 26, 62, 0.2) 25%,
              rgba(15, 23, 42, 0.25) 50%, 
              rgba(30, 41, 59, 0.15) 75%,
              rgba(0, 0, 0, 0.3) 100%)
          `
        }}
      />
    </div>
  );
};

export default ThreeDBackground;
