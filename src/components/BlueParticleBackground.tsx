
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function BlueLines() {
  const linesRef = useRef<THREE.Group>(null);
  const circlesRef = useRef<THREE.Group>(null);
  
  const lineData = useMemo(() => {
    const lines = [];
    const circles = [];
    
    // 生成连线端点
    const generatePoints = (count: number, yRange: [number, number]) => {
      const points = [];
      for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * 50;
        const y = yRange[0] + Math.random() * (yRange[1] - yRange[0]);
        const z = (Math.random() - 0.5) * 25;
        points.push(new THREE.Vector3(x, y, z));
      }
      return points;
    };
    
    // 上半部分较少连线 (屏幕上方)
    const upperPoints = generatePoints(8, [8, 17.5]);
    
    // 下半部分较多连线 (屏幕下方)
    const lowerPoints = generatePoints(15, [-17.5, -3]);
    
    const allPoints = [...upperPoints, ...lowerPoints];
    
    // 为每个点创建小圆
    allPoints.forEach(point => {
      circles.push({
        position: point.clone(),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.003,
          (Math.random() - 0.5) * 0.002
        )
      });
    });
    
    // 创建连线
    const maxDistance = 12;
    const maxConnections = 3;
    
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
            opacity: Math.max(0.1, (maxDistance - distance) / maxDistance * 0.4),
            startIndex: i,
            endIndex: j
          });
          connections++;
        }
      }
    }
    
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
          circleData.position.x += circleData.velocity.x * (1 + Math.sin(time * 0.1 + index * 0.05) * 0.3);
          circleData.position.y += circleData.velocity.y * (1 + Math.cos(time * 0.08 + index * 0.05) * 0.2);
          circleData.position.z += circleData.velocity.z * (1 + Math.sin(time * 0.06 + index * 0.05) * 0.1);
          
          // 边界循环
          if (circleData.position.x > 25) circleData.position.x = -25;
          if (circleData.position.x < -25) circleData.position.x = 25;
          if (circleData.position.y > 17.5) circleData.position.y = -17.5;
          if (circleData.position.y < -17.5) circleData.position.y = 17.5;
          if (circleData.position.z > 12.5) circleData.position.z = -12.5;
          if (circleData.position.z < -12.5) circleData.position.z = 12.5;
          
          circle.position.copy(circleData.position);
        }
      });
      
      // 更新连线
      linesRef.current.children.forEach((lineGroup, index) => {
        const lineData_ = lineData.lines[index];
        if (lineData_ && lineGroup.children[0]) {
          const line = lineGroup.children[0] as THREE.Line;
          const startCircle = lineData.circles[lineData_.startIndex];
          const endCircle = lineData.circles[lineData_.endIndex];
          
          if (startCircle && endCircle && line.geometry) {
            const geometry = line.geometry as THREE.BufferGeometry;
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
            <sphereGeometry args={[0.08, 8, 6]} />
            <meshBasicMaterial 
              color="#4A90E2" 
              transparent 
              opacity={0.8}
            />
          </mesh>
        ))}
      </group>
      
      {/* 渲染连线 */}
      <group ref={linesRef}>
        {lineData.lines.map((lineData_, index) => {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            lineData_.start, 
            lineData_.end
          ]);
          
          return (
            <group key={index}>
              <line geometry={geometry}>
                <lineBasicMaterial 
                  color="#4A90E2" 
                  transparent 
                  opacity={lineData_.opacity}
                />
              </line>
            </group>
          );
        })}
      </group>
    </>
  );
}

const BlueParticleBackground = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
        style={{ 
          background: 'transparent',
          width: '100%',
          height: '100%'
        }}
      >
        <BlueLines />
      </Canvas>
    </div>
  );
};

export default BlueParticleBackground;
