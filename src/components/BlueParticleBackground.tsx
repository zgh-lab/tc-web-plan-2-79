
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
    
    // 生成更多连线端点，确保在可视范围内
    const generatePoints = (count: number, yRange: [number, number]) => {
      const points = [];
      for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * 15; // 调整范围
        const y = yRange[0] + Math.random() * (yRange[1] - yRange[0]);
        const z = (Math.random() - 0.5) * 8; // 调整Z轴范围
        points.push(new THREE.Vector3(x, y, z));
      }
      return points;
    };
    
    // 上半部分连线
    const upperPoints = generatePoints(8, [1, 6]);
    
    // 下半部分连线
    const lowerPoints = generatePoints(15, [-6, -1]);
    
    const allPoints = [...upperPoints, ...lowerPoints];
    
    // 为每个点创建小圆
    allPoints.forEach(point => {
      circles.push({
        position: point.clone(),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.004,
          (Math.random() - 0.5) * 0.003,
          (Math.random() - 0.5) * 0.002
        )
      });
    });
    
    // 创建连线
    const maxDistance = 6; // 连接距离
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
            opacity: Math.max(0.4, (maxDistance - distance) / maxDistance * 0.8)
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
          if (circleData.position.x > 8) circleData.position.x = -8;
          if (circleData.position.x < -8) circleData.position.x = 8;
          if (circleData.position.y > 6) circleData.position.y = -6;
          if (circleData.position.y < -6) circleData.position.y = 6;
          if (circleData.position.z > 4) circleData.position.z = -4;
          if (circleData.position.z < -4) circleData.position.z = 4;
          
          circle.position.copy(circleData.position);
        }
      });
      
      // 更新连线
      linesRef.current.children.forEach((lineObject, index) => {
        const lineData_ = lineData.lines[index];
        if (lineData_ && lineObject instanceof THREE.Mesh) {
          const startCircle = lineData.circles.find(c => 
            c.position.distanceTo(lineData_.start) < 1.0
          );
          const endCircle = lineData.circles.find(c => 
            c.position.distanceTo(lineData_.end) < 1.0
          );
          
          if (startCircle && endCircle) {
            // 重新创建管道几何体以更新连线
            const curve = new THREE.LineCurve3(startCircle.position, endCircle.position);
            const newGeometry = new THREE.TubeGeometry(curve, 2, 0.03, 6, false);
            lineObject.geometry = newGeometry;
          }
        }
      });
    }
  });
  
  return (
    <>
      {/* 渲染小圆 - 增大尺寸和亮度 */}
      <group ref={circlesRef}>
        {lineData.circles.map((circle, index) => (
          <mesh key={index} position={circle.position}>
            <sphereGeometry args={[0.15, 8, 6]} />
            <meshBasicMaterial 
              color="#60A5FA" 
              transparent 
              opacity={0.9}
            />
          </mesh>
        ))}
      </group>
      
      {/* 渲染连线 - 使用更粗的管道 */}
      <group ref={linesRef}>
        {lineData.lines.map((lineData_, index) => {
          const curve = new THREE.LineCurve3(lineData_.start, lineData_.end);
          const tubeGeometry = new THREE.TubeGeometry(curve, 2, 0.03, 6, false);
          
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
    <div className="w-full h-full">
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
          height: '100%'
        }}
        dpr={window.devicePixelRatio}
      >
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <BlueLines />
      </Canvas>
    </div>
  );
};

export default BlueParticleBackground;
