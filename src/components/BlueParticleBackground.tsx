
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
    
    // 生成连线端点
    const generatePoints = (count: number, yRange: [number, number]) => {
      const points = [];
      for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * 20; // 减小范围让线条更集中
        const y = yRange[0] + Math.random() * (yRange[1] - yRange[0]);
        const z = (Math.random() - 0.5) * 10; // 减小Z轴范围
        points.push(new THREE.Vector3(x, y, z));
      }
      return points;
    };
    
    // 上半部分较少连线 (屏幕上方)
    const upperPoints = generatePoints(6, [2, 8]);
    
    // 下半部分较多连线 (屏幕下方)
    const lowerPoints = generatePoints(12, [-8, -1]);
    
    const allPoints = [...upperPoints, ...lowerPoints];
    
    // 为每个点创建小圆
    allPoints.forEach(point => {
      circles.push({
        position: point.clone(),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.003,
          (Math.random() - 0.5) * 0.002,
          (Math.random() - 0.5) * 0.001
        )
      });
    });
    
    // 创建连线
    const maxDistance = 8; // 减小连接距离
    const maxConnections = 2;
    
    for (let i = 0; i < allPoints.length; i++) {
      let connections = 0;
      const pos1 = allPoints[i];
      
      for (let j = i + 1; j < allPoints.length && connections < maxConnections; j++) {
        const pos2 = allPoints[j];
        const distance = pos1.distanceTo(pos2);
        
        if (distance < maxDistance) {
          lines.push({
            start: pos1.clone(),
            end: pos2.clone(),
            opacity: Math.max(0.6, (maxDistance - distance) / maxDistance * 1.0) // 提高透明度
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
      // 更新小圆位置
      circlesRef.current.children.forEach((circle, index) => {
        const circleData = lineData.circles[index];
        if (circleData) {
          // 缓慢漂浮动画
          circleData.position.x += circleData.velocity.x * (1 + Math.sin(time * 0.1 + index * 0.1) * 0.3);
          circleData.position.y += circleData.velocity.y * (1 + Math.cos(time * 0.08 + index * 0.1) * 0.2);
          circleData.position.z += circleData.velocity.z * (1 + Math.sin(time * 0.05 + index * 0.1) * 0.1);
          
          // 边界循环
          if (circleData.position.x > 10) circleData.position.x = -10;
          if (circleData.position.x < -10) circleData.position.x = 10;
          if (circleData.position.y > 8) circleData.position.y = -8;
          if (circleData.position.y < -8) circleData.position.y = 8;
          if (circleData.position.z > 5) circleData.position.z = -5;
          if (circleData.position.z < -5) circleData.position.z = 5;
          
          circle.position.copy(circleData.position);
        }
      });
      
      // 更新连线
      linesRef.current.children.forEach((lineObject, index) => {
        const lineData_ = lineData.lines[index];
        if (lineData_ && lineObject instanceof THREE.Line) {
          const startCircle = lineData.circles.find(c => 
            c.position.distanceTo(lineData_.start) < 1.0
          );
          const endCircle = lineData.circles.find(c => 
            c.position.distanceTo(lineData_.end) < 1.0
          );
          
          if (startCircle && endCircle) {
            const geometry = lineObject.geometry as THREE.BufferGeometry;
            const positions = geometry.attributes.position.array as Float32Array;
            
            positions[0] = startCircle.position.x;
            positions[1] = startCircle.position.y;
            positions[2] = startCircle.position.z;
            positions[3] = endCircle.position.x;
            positions[4] = endCircle.position.y;
            positions[5] = endCircle.position.z;
            
            geometry.attributes.position.needsUpdate = true;
          }
        }
      });
    }
  });
  
  return (
    <>
      {/* 渲染小圆 */}
      <group ref={circlesRef}>
        {lineData.circles.map((circle, index) => (
          <mesh key={index} position={circle.position}>
            <sphereGeometry args={[0.2, 8, 6]} />
            <meshBasicMaterial 
              color="#3B82F6" 
              transparent 
              opacity={0.8}
            />
          </mesh>
        ))}
      </group>
      
      {/* 渲染连线 - 使用 TubeGeometry 替代 Line 以确保可见性 */}
      <group ref={linesRef}>
        {lineData.lines.map((lineData_, index) => {
          // 创建路径
          const curve = new THREE.LineCurve3(lineData_.start, lineData_.end);
          const tubeGeometry = new THREE.TubeGeometry(curve, 2, 0.02, 4, false);
          
          return (
            <mesh key={index}>
              <primitive object={tubeGeometry} attach="geometry" />
              <meshBasicMaterial 
                color="#3B82F6"
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
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }} // 调整相机位置更近一些
        gl={{ alpha: true, antialias: true }}
        style={{ 
          background: 'transparent',
          width: '100%',
          height: '100%'
        }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={1.0} />
        <BlueLines />
      </Canvas>
    </div>
  );
};

export default BlueParticleBackground;
