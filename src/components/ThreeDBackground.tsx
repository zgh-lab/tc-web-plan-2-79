
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls, Sphere } from '@react-three/drei';
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
    for (let i = 0; i < 30; i++) {
      const angle = (i / 30) * Math.PI * 2;
      const radius = 4 + Math.random() * 2;
      const height = (Math.random() - 0.5) * 6;
      innerLayer.push({
        position: [
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius
        ],
        color: colorScheme.lights[Math.floor(Math.random() * colorScheme.lights.length)],
        size: 0.08 + Math.random() * 0.12,
        speed: 0.5 + Math.random() * 0.5
      });
    }
    
    // 中层 - 中等球体
    const middleLayer = [];
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const radius = 7 + Math.random() * 3;
      const height = (Math.random() - 0.5) * 8;
      middleLayer.push({
        position: [
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius
        ],
        color: colorScheme.lights[Math.floor(Math.random() * colorScheme.lights.length)],
        size: 0.15 + Math.random() * 0.15,
        speed: 0.3 + Math.random() * 0.3
      });
    }
    
    // 外层 - 大球体
    const outerLayer = [];
    for (let i = 0; i < 15; i++) {
      const angle = (i / 15) * Math.PI * 2;
      const radius = 12 + Math.random() * 4;
      const height = (Math.random() - 0.5) * 10;
      outerLayer.push({
        position: [
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius
        ],
        color: colorScheme.lights[Math.floor(Math.random() * colorScheme.lights.length)],
        size: 0.2 + Math.random() * 0.2,
        speed: 0.2 + Math.random() * 0.2
      });
    }
    
    layers.push(innerLayer, middleLayer, outerLayer);
    return layers;
  }, [colorScheme]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (mainSphereRef.current && groupRef.current && outerRingRef.current) {
      // 主球体复杂旋转和脉动
      mainSphereRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
      mainSphereRef.current.rotation.y = time * 0.4;
      mainSphereRef.current.rotation.z = Math.cos(time * 0.2) * 0.1;
      
      // 主球体大小脉动
      const scale = 1 + Math.sin(time * 1.5) * 0.15;
      mainSphereRef.current.scale.setScalar(scale);
      
      // 鼠标交互 - 更强烈的响应
      const targetX = mouse.x * viewport.width * 0.15;
      const targetY = mouse.y * viewport.height * 0.15;
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetY * 0.3,
        0.03
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetX * 0.3,
        0.03
      );
      
      // 整体浮动和摆动
      groupRef.current.position.y = Math.sin(time * 0.6) * 0.5 + Math.cos(time * 0.4) * 0.2;
      groupRef.current.position.x = Math.sin(time * 0.3) * 0.3;
      
      // 外环旋转
      outerRingRef.current.rotation.z = time * 0.5;
      outerRingRef.current.rotation.x = Math.sin(time * 0.2) * 0.3;
      
      // 材质动画 - 更强烈的发光效果
      if (mainSphereRef.current.material instanceof THREE.MeshStandardMaterial) {
        mainSphereRef.current.material.emissiveIntensity = 0.3 + Math.sin(time * 3) * 0.2;
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* 主球体 - 更大更亮 */}
      <mesh ref={mainSphereRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2.5, 128, 64]} />
        <meshStandardMaterial
          color={colorScheme.lights[0]}
          emissive={colorScheme.lights[0]}
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.85}
        />
      </mesh>
      
      {/* 内部核心球体 */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.8, 64, 32]} />
        <meshStandardMaterial
          color={colorScheme.lights[1]}
          emissive={colorScheme.lights[1]}
          emissiveIntensity={0.6}
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
                emissiveIntensity={0.7}
                transparent
                opacity={0.9}
              />
            </mesh>
          ))}
        </group>
      ))}
      
      {/* 复杂的光环系统 */}
      <group ref={outerRingRef}>
        {/* 主光环 */}
        <mesh rotation={[0, 0, 0]}>
          <torusGeometry args={[5, 0.08, 16, 100]} />
          <meshStandardMaterial
            color={colorScheme.lights[1]}
            emissive={colorScheme.lights[1]}
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </mesh>
        
        {/* 倾斜光环 */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[6, 0.06, 16, 100]} />
          <meshStandardMaterial
            color={colorScheme.lights[2]}
            emissive={colorScheme.lights[2]}
            emissiveIntensity={0.4}
            transparent
            opacity={0.6}
          />
        </mesh>
        
        {/* 垂直光环 */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[6.5, 0.04, 16, 100]} />
          <meshStandardMaterial
            color={colorScheme.lights[3]}
            emissive={colorScheme.lights[3]}
            emissiveIntensity={0.3}
            transparent
            opacity={0.5}
          />
        </mesh>
        
        {/* 外围超大光环 */}
        <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[8, 0.03, 16, 100]} />
          <meshStandardMaterial
            color={colorScheme.lights[0]}
            emissive={colorScheme.lights[0]}
            emissiveIntensity={0.2}
            transparent
            opacity={0.4}
          />
        </mesh>
      </group>
      
      {/* 能量粒子效果 */}
      <group>
        {Array.from({ length: 50 }, (_, i) => {
          const angle = (i / 50) * Math.PI * 2;
          const radius = 3 + Math.sin(i * 0.5) * 2;
          return (
            <mesh
              key={i}
              position={[
                Math.cos(angle) * radius,
                Math.sin(i * 0.3) * 4,
                Math.sin(angle) * radius
              ]}
            >
              <sphereGeometry args={[0.03, 8, 8]} />
              <meshStandardMaterial
                color={colorScheme.lights[i % colorScheme.lights.length]}
                emissive={colorScheme.lights[i % colorScheme.lights.length]}
                emissiveIntensity={1}
                transparent
                opacity={0.8}
              />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

// 增强的3D星空粒子系统
function EnhancedStarField({ count = 8000, colorScheme }: { count?: number; colorScheme: any }) {
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
      
      if (layerRandom < 0.2) {
        radius = 15 + Math.random() * 20;
      } else if (layerRandom < 0.5) {
        radius = 35 + Math.random() * 25;
      } else {
        radius = 60 + Math.random() * 40;
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
      
      const lightColors = colorScheme.lights;
      const selectedColor = lightColors[Math.floor(Math.random() * lightColors.length)];
      
      const hex = selectedColor.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16) / 255;
      const g = parseInt(hex.substr(2, 2), 16) / 255;
      const b = parseInt(hex.substr(4, 2), 16) / 255;
      
      const brightness = 0.3 + Math.random() * 0.7;
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
        
        const noise1 = Math.sin(time * 0.4 + i * 0.01) * 0.2;
        const noise2 = Math.cos(time * 0.3 + i * 0.015) * 0.15;
        const noise3 = Math.sin(time * 0.35 + i * 0.02) * 0.1;
        
        positions[i3] = initialPositions[i3] + noise1;
        positions[i3 + 1] = initialPositions[i3 + 1] + noise2;
        positions[i3 + 2] = initialPositions[i3 + 2] + noise3;
        
        const mouseInfluence = 0.08;
        const dx = mouse.x * 15 - positions[i3];
        const dy = mouse.y * 10 - positions[i3 + 1];
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 8) {
          const force = (8 - distance) / 8;
          positions[i3] += dx * force * mouseInfluence * 0.6;
          positions[i3 + 1] += dy * force * mouseInfluence * 0.6;
        }
      }
      
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
    
    if (light.current) {
      light.current.position.x = THREE.MathUtils.lerp(light.current.position.x, mouse.x * 15, 0.03);
      light.current.position.y = THREE.MathUtils.lerp(light.current.position.y, mouse.y * 15, 0.03);
      light.current.position.z = 10;
      light.current.intensity = 2 + Math.sin(time * 0.8) * 0.5;
    }
  });

  return (
    <group>
      <pointLight ref={light} intensity={4} color={colorScheme.lights[0]} distance={150} />
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

// 增强的相机控制器
function EnhancedCameraController() {
  const { camera, mouse } = useThree();
  
  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 2, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 2, 0.03);
    camera.rotation.z = THREE.MathUtils.lerp(camera.rotation.z, mouse.x * 0.03, 0.02);
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
          intensity={1.5} 
          color={colorScheme.lights[0]}
        />
        <pointLight position={[-20, -15, 10]} intensity={1.2} color={colorScheme.lights[1]} />
        <pointLight position={[15, -20, -10]} intensity={1.0} color={colorScheme.lights[2]} />
        <pointLight position={[-10, 15, 8]} intensity={0.8} color={colorScheme.lights[3]} />
        
        {/* 超级交互球体 */}
        <SuperInteractiveSphere colorScheme={colorScheme} />
        
        <EnhancedStarField colorScheme={colorScheme} />
        <EnhancedCameraController />
        
        <OrbitControls 
          enabled={false}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
      
      {/* 增强的鼠标光晕渐变 */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-1000"
        style={{
          background: `
            radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
              ${colorScheme.gradient.primary} 0%, 
              ${colorScheme.gradient.secondary} 15%,
              ${colorScheme.gradient.tertiary} 30%,
              ${colorScheme.gradient.quaternary} 45%,
              rgba(0, 0, 0, 0.1) 60%,
              rgba(0, 0, 0, 0.3) 100%),
            linear-gradient(135deg, 
              rgba(10, 10, 26, 0.4) 0%, 
              rgba(26, 26, 62, 0.3) 25%,
              rgba(15, 23, 42, 0.35) 50%, 
              rgba(30, 41, 59, 0.25) 75%,
              rgba(0, 0, 0, 0.4) 100%)
          `
        }}
      />
    </div>
  );
};

export default ThreeDBackground;
