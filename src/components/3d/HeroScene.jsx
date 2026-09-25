import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 1. Cybernetic Core Polyhedron
function CyberCore({ pointer }) {
  const meshRef = useRef();
  const wireframeRef = useRef();
  const innerCoreRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.25;
      
      // Gentle cursor parallax
      meshRef.current.rotation.x += (state.pointer.y * 0.4 - meshRef.current.rotation.x) * delta * 2;
      meshRef.current.rotation.y += (state.pointer.x * 0.4 - meshRef.current.rotation.y) * delta * 2;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.15;
      wireframeRef.current.rotation.y -= delta * 0.3;
    }
    if (innerCoreRef.current) {
      const t = state.clock.getElapsedTime();
      const scale = 1 + Math.sin(t * 2) * 0.08;
      innerCoreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group>
      {/* Outer Torus Orbital Ring */}
      <mesh rotation={[Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={0.8} />
      </mesh>

      {/* Second Orbital Ring */}
      <mesh rotation={[-Math.PI / 4, 0, Math.PI / 3]}>
        <torusGeometry args={[2.8, 0.015, 16, 100]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.8} />
      </mesh>

      {/* Main Geodesic Lattice */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color="#0f172a"
          roughness={0.2}
          metalness={0.9}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Glowing Wireframe Overlay */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[1.52, 1]} />
        <meshStandardMaterial
          color="#818cf8"
          emissive="#6366f1"
          emissiveIntensity={1.5}
          wireframe
        />
      </mesh>

      {/* Inner Pulsing Quantum Energy Core */}
      <mesh ref={innerCoreRef}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={2.5}
          roughness={0.1}
          metalness={0.5}
        />
      </mesh>
    </group>
  );
}

// 2. Orbiting Satellite Microservice Nodes
function SatelliteNodes() {
  const groupRef = useRef();

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
      groupRef.current.rotation.z += delta * 0.15;
    }
  });

  const nodes = useMemo(() => [
    { pos: [2.6, 0.5, 0], color: '#6366f1', label: 'FastAPI' },
    { pos: [-2.4, -0.8, 0.8], color: '#06b6d4', label: 'NestJS' },
    { pos: [0.8, 2.7, -0.5], color: '#10b981', label: 'EDI/AS2' },
    { pos: [-1.2, 2.2, 1.2], color: '#f59e0b', label: 'Redis' },
    { pos: [0, -2.6, -1.0], color: '#ec4899', label: 'AI/Vision' },
  ], []);

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.pos}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={3}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

// 3. Particle Starfield Cloud
function ParticleStream({ count = 180 }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      coords[i * 3] = (Math.random() - 0.5) * 12;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 12;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return coords;
  }, [count]);

  const pointsRef = useRef();

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#818cf8"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Main 3D Canvas Scene
export default function HeroScene() {
  return (
    <div className="w-full h-full min-h-[380px] lg:min-h-[520px] relative">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#818cf8" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#06b6d4" />
        <spotLight position={[0, 5, 5]} intensity={1.8} angle={0.6} penumbra={1} color="#6366f1" />

        <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
          <CyberCore />
          <SatelliteNodes />
        </Float>

        <ParticleStream />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.7}
          minPolarAngle={Math.PI / 2.3}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
