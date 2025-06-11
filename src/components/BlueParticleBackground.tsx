
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function BlueLines() {
  const linesRef = useRef<THREE.Group>(null);
  const circlesRef = useRef<THREE.Group>(null);
  
  const lineData = useMemo(() => {
    const lines = [];
    const circles = [];
    
    console.log('Generating line data...');
    
    // 重新设计点的分布 - 左下角和右下角密集
    const generateDistributedPoints = () => {
      const points = [];
      
      // 左下角密集区域 (30个点)
      for (let i = 0; i < 30; i++) {
        const x = -8 + Math.random() * 4; // -8 到 -4
        const y = -4 + Math.random() * 3; // -4 到 -1
        const z = (Math.random() - 0.5) * 4;
        points.push({
          position: new THREE.Vector3(x, y, z),
          density: 1.0 // 最高密度
        });
      }
      
      // 右下角密集区域 (30个点)
      for (let i = 0; i < 30; i++) {
        const x = 4 + Math.random() * 4; // 4 到 8
        const y = -4 + Math.random() * 3; // -4 到 -1
        const z = (Math.random() - 0.5) * 4;
        points.push({
          position: new THREE.Vector3(x, y, z),
          density: 1.0 // 最高密度
        });
      }
      
      // 中下区域 (15个点)
      for (let i = 0; i < 15; i++) {
        const x = -3 + Math.random() * 6; // -3 到 3
        const y = -3 + Math.random() * 2; // -3 到 -1
        const z = (Math.random() - 0.5) * 3;
        points.push({
          position: new THREE.Vector3(x, y, z),
          density: 0.7 // 中等密度
        });
      }
      
      // 中间区域 (10个点)
      for (let i = 0; i < 10; i++) {
        const x = -4 + Math.random() * 8; // -4 到 4
        const y = -1 + Math.random() * 3; // -1 到 2
        const z = (Math.random() - 0.5) * 3;
        points.push({
          position: new THREE.Vector3(x, y, z),
          density: 0.4 // 较低密度
        });
      }
      
      // 上部区域 (5个点)
      for (let i = 0; i < 5; i++) {
        const x = -3 + Math.random() * 6; // -3 到 3
        const y = 2 + Math.random() * 2; // 2 到 4
        const z = (Math.random() - 0.5) * 2;
        points.push({
          position: new THREE.Vector3(x, y, z),
          density: 0.2 // 最低密度
        });
      }
      
      return points;
    };
    
    const allPoints = generateDistributedPoints();
    
    // 为每个点创建小圆
    allPoints.forEach((pointData, index) => {
      circles.push({
        position: pointData.position.clone(),
        density: pointData.density,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.008, // 加速运动
          (Math.random() - 0.5) * 0.006,
          (Math.random() - 0.5) * 0.005
        ),
        phase: Math.random() * Math.PI * 2 // 随机相位
      });
    });
    
    // 创建连线 - 基于密度和距离
    const maxDistance = 3; // 缩短连接距离
    const maxConnections = 6;
    
    for (let i = 0; i < allPoints.length; i++) {
      let connections = 0;
      const pointA = allPoints[i];
      
      for (let j = i + 1; j < allPoints.length && connections < maxConnections; j++) {
        const pointB = allPoints[j];
        const distance = pointA.position.distanceTo(pointB.position);
        
        if (distance < maxDistance) {
          // 根据密度和位置计算透明度
          const avgDensity = (pointA.density + pointB.density) / 2;
          const heightFactor = Math.max(0.1, 1 - (Math.max(pointA.position.y, pointB.position.y) + 4) / 8);
          const finalOpacity = avgDensity * heightFactor * 0.8;
          
          lines.push({
            start: pointA.position.clone(),
            end: pointB.position.clone(),
            opacity: finalOpacity,
            startDensity: pointA.density,
            endDensity: pointB.density
          });
          connections++;
        }
      }
    }
    
    console.log(`Generated ${circles.length} circles and ${lines.length} lines`);
    
    return { lines, circles };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (circlesRef.current && linesRef.current) {
      // 大大加速动画 - 更新小圆位置
      circlesRef.current.children.forEach((circle, index) => {
        const circleData = lineData.circles[index];
        if (circleData) {
          // 加速漂浮动画，更高频率
          const speedMultiplier = 3; // 3倍速度
          circleData.position.x += circleData.velocity.x * speedMultiplier * (1 + Math.sin(time * 0.5 + circleData.phase) * 0.6);
          circleData.position.y += circleData.velocity.y * speedMultiplier * (1 + Math.cos(time * 0.4 + circleData.phase) * 0.5);
          circleData.position.z += circleData.velocity.z * speedMultiplier * (1 + Math.sin(time * 0.3 + circleData.phase) * 0.3);
          
          // 边界循环
          if (circleData.position.x > 10) circleData.position.x = -10;
          if (circleData.position.x < -10) circleData.position.x = 10;
          if (circleData.position.y > 5) circleData.position.y = -5;
          if (circleData.position.y < -5) circleData.position.y = 5;
          if (circleData.position.z > 4) circleData.position.z = -4;
          if (circleData.position.z < -4) circleData.position.z = 4;
          
          circle.position.copy(circleData.position);
          
          // 根据密度调整透明度
          const material = circle.material as THREE.MeshBasicMaterial;
          material.opacity = circleData.density * 0.8;
        }
      });
      
      // 快速更新连线
      linesRef.current.children.forEach((lineObject, index) => {
        const lineData_ = lineData.lines[index];
        if (lineData_ && lineObject instanceof THREE.Mesh) {
          const startCircle = lineData.circles.find(c => 
            c.position.distanceTo(lineData_.start) < 2
          );
          const endCircle = lineData.circles.find(c => 
            c.position.distanceTo(lineData_.end) < 2
          );
          
          if (startCircle && endCircle) {
            // 重新创建更细的管道几何体
            const curve = new THREE.LineCurve3(startCircle.position, endCircle.position);
            const newGeometry = new THREE.TubeGeometry(curve, 2, 0.02, 6, false); // 更细的管道
            lineObject.geometry.dispose();
            lineObject.geometry = newGeometry;
            
            // 动态调整透明度
            const material = lineObject.material as THREE.MeshBasicMaterial;
            const pulseEffect = 0.8 + 0.2 * Math.sin(time * 2 + index * 0.1);
            material.opacity = lineData_.opacity * pulseEffect;
          }
        }
      });
    }
  });
  
  return (
    <>
      {/* 渲染小圆 - 缩小尺寸 */}
      <group ref={circlesRef}>
        {lineData.circles.map((circle, index) => (
          <mesh key={index} position={circle.position}>
            <sphereGeometry args={[0.08, 8, 6]} />
            <meshBasicMaterial 
              color="#60A5FA" 
              transparent 
              opacity={circle.density * 0.8}
            />
          </mesh>
        ))}
      </group>
      
      {/* 渲染连线 - 更细的管道 */}
      <group ref={linesRef}>
        {lineData.lines.map((lineData_, index) => {
          const curve = new THREE.LineCurve3(lineData_.start, lineData_.end);
          const tubeGeometry = new THREE.TubeGeometry(curve, 2, 0.02, 6, false); // 更细
          
          return (
            <mesh key={index}>
              <primitive object={tubeGeometry} attach="geometry" />
              <meshBasicMaterial 
                color="#60A5FA"
                transparent 
                opacity={lineData_.opacity}
              />
            </mesh>
          );
        })}
      </group>
    </>
  );
}

const BlueParticleBackground = () => {
  console.log('BlueParticleBackground rendering...');
  
  return (
    <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance"
        }}
        style={{ 
          background: 'transparent',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0
        }}
        dpr={Math.min(window.devicePixelRatio, 2)}
      >
        <ambientLight intensity={2} />
        <pointLight position={[8, 8, 8]} intensity={2.5} />
        <pointLight position={[-8, -8, 8]} intensity={2} />
        <BlueLines />
      </Canvas>
    </div>
  );
};

export default BlueParticleBackground;
