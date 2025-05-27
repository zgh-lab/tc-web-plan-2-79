
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 3D星空粒子系统
function StarField({ count = 5000 }) {
  const mesh = useRef<THREE.Points>(null);
  const light = useRef<THREE.PointLight>(null);
  
  // 生成随机粒子位置
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // 创建球形分布的粒子
      const radius = Math.random() * 25 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // 渐变色彩
      const colorIntensity = Math.random();
      colors[i * 3] = colorIntensity; // R
      colors[i * 3 + 1] = colorIntensity * 0.6; // G
      colors[i * 3 + 2] = 1; // B
    }
    
    return [positions, colors];
  }, [count]);
  
  useFrame((state) => {
    const { clock, mouse } = state;
    
    if (mesh.current) {
      // 整体旋转动画
      mesh.current.rotation.x = clock.getElapsedTime() * 0.05;
      mesh.current.rotation.y = clock.getElapsedTime() * 0.075;
      
      // 鼠标交互：根据鼠标位置调整旋转速度
      mesh.current.rotation.x += mouse.y * 0.01;
      mesh.current.rotation.y += mouse.x * 0.01;
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
      <pointLight ref={light} intensity={1} color="#4f46e5" />
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

// 浮动几何体
function FloatingGeometry() {
  const meshes = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    const { clock, mouse } = state;
    const t = clock.getElapsedTime();
    
    if (meshes.current) {
      meshes.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh;
        
        // 浮动动画
        mesh.position.y = Math.sin(t + i) * 2;
        mesh.rotation.x = t * (0.5 + i * 0.1);
        mesh.rotation.z = t * (0.3 + i * 0.05);
        
        // 鼠标交互：几何体向鼠标方向倾斜
        mesh.rotation.y = mouse.x * 0.5;
      });
    }
  });

  return (
    <group ref={meshes}>
      {/* 立方体 */}
      <mesh position={[-8, 0, -5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#3b82f6" 
          transparent 
          opacity={0.7}
          wireframe
        />
      </mesh>
      
      {/* 八面体 */}
      <mesh position={[8, 0, -3]}>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial 
          color="#8b5cf6" 
          transparent 
          opacity={0.7}
          wireframe
        />
      </mesh>
      
      {/* 圆环 */}
      <mesh position={[0, 6, -8]}>
        <torusGeometry args={[1.5, 0.5, 8, 24]} />
        <meshStandardMaterial 
          color="#06b6d4" 
          transparent 
          opacity={0.6}
          wireframe
        />
      </mesh>
      
      {/* 四面体 */}
      <mesh position={[-6, -4, -6]}>
        <tetrahedronGeometry args={[1.2]} />
        <meshStandardMaterial 
          color="#10b981" 
          transparent 
          opacity={0.7}
          wireframe
        />
      </mesh>
    </group>
  );
}

// 相机控制器
function CameraController() {
  const { camera, mouse } = useThree();
  
  useFrame(() => {
    // 微妙的相机移动跟随鼠标
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 2, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 2, 0.03);
  });
  
  return null;
}

const ThreeDBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#000000']} />
        
        {/* 环境光 */}
        <ambientLight intensity={0.2} />
        
        {/* 主光源 */}
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          color="#ffffff"
        />
        
        {/* 粒子星空 */}
        <StarField />
        
        {/* 浮动几何体 */}
        <FloatingGeometry />
        
        {/* 相机控制 */}
        <CameraController />
        
        {/* 轨道控制（禁用以保持自定义控制） */}
        <OrbitControls 
          enabled={false}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
      
      {/* 渐变叠加层 */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 50%, 
              rgba(59, 130, 246, 0.1) 0%, 
              rgba(139, 92, 246, 0.05) 30%,
              rgba(0, 0, 0, 0.8) 70%),
            linear-gradient(135deg, 
              rgba(0, 0, 0, 0.9) 0%, 
              rgba(15, 23, 42, 0.8) 50%, 
              rgba(0, 0, 0, 0.9) 100%)
          `
        }}
      />
    </div>
  );
};

export default ThreeDBackground;
