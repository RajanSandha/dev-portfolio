import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Procedural Stylized 3D Developer Character with Head Tracking
function DeveloperModel() {
  const modelGroup = useRef();
  const headGroup = useRef();
  const eyesGroup = useRef();

  useFrame((state) => {
    if (!modelGroup.current || !headGroup.current) return;
    const { x, y } = state.pointer;

    // Smooth head tracking towards cursor
    headGroup.current.rotation.y = THREE.MathUtils.lerp(
      headGroup.current.rotation.y,
      x * 0.55,
      0.08
    );
    headGroup.current.rotation.x = THREE.MathUtils.lerp(
      headGroup.current.rotation.x,
      -y * 0.35,
      0.08
    );

    // Subtle torso sway
    modelGroup.current.rotation.y = THREE.MathUtils.lerp(
      modelGroup.current.rotation.y,
      x * 0.2,
      0.05
    );
    modelGroup.current.position.y = THREE.MathUtils.lerp(
      modelGroup.current.position.y,
      -0.75 + Math.sin(state.clock.elapsedTime * 1.5) * 0.02,
      0.1
    );
  });

  // Materials
  const skinMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#d49a7a',
        roughness: 0.45,
        metalness: 0.05,
      }),
    []
  );

  const hoodieMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#12131a',
        roughness: 0.85,
        metalness: 0.1,
      }),
    []
  );

  const capMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#1a1c24',
        roughness: 0.5,
        metalness: 0.2,
      }),
    []
  );

  const glassesMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#050508',
        roughness: 0.1,
        metalness: 0.9,
      }),
    []
  );

  const glowAccent = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: '#c084fc',
      }),
    []
  );

  return (
    <group ref={modelGroup} position={[0, -0.75, 0]}>
      {/* Torso / Shoulders (Hoodie) */}
      <mesh position={[0, -0.5, 0]} material={hoodieMaterial}>
        <cylinderGeometry args={[0.7, 0.85, 0.9, 32]} />
      </mesh>
      {/* Hoodie Collar */}
      <mesh position={[0, -0.05, 0]} material={hoodieMaterial}>
        <torusGeometry args={[0.36, 0.12, 16, 32]} />
      </mesh>

      {/* Head and Face Group */}
      <group ref={headGroup} position={[0, 0.42, 0]}>
        {/* Neck */}
        <mesh position={[0, -0.32, 0]} material={skinMaterial}>
          <cylinderGeometry args={[0.2, 0.22, 0.28, 24]} />
        </mesh>

        {/* Head Base */}
        <mesh position={[0, 0.05, 0]} material={skinMaterial}>
          <sphereGeometry args={[0.42, 32, 32]} />
        </mesh>

        {/* Jaw / Chin */}
        <mesh position={[0, -0.12, 0.12]} material={skinMaterial}>
          <boxGeometry args={[0.38, 0.28, 0.32]} />
        </mesh>

        {/* Ears */}
        <mesh position={[-0.43, 0.04, -0.02]} material={skinMaterial}>
          <sphereGeometry args={[0.1, 16, 16]} />
        </mesh>
        <mesh position={[0.43, 0.04, -0.02]} material={skinMaterial}>
          <sphereGeometry args={[0.1, 16, 16]} />
        </mesh>

        {/* Stylized Glasses / Shades Frame */}
        <group position={[0, 0.08, 0.36]}>
          <mesh position={[-0.17, 0, 0]} material={glassesMaterial}>
            <boxGeometry args={[0.24, 0.14, 0.06]} />
          </mesh>
          <mesh position={[0.17, 0, 0]} material={glassesMaterial}>
            <boxGeometry args={[0.24, 0.14, 0.06]} />
          </mesh>
          {/* Bridge */}
          <mesh position={[0, 0.02, 0]} material={glassesMaterial}>
            <boxGeometry args={[0.12, 0.03, 0.04]} />
          </mesh>
          {/* Subtle Cyber Glow Strip across lens */}
          <mesh position={[0, 0, 0.032]} material={glowAccent}>
            <boxGeometry args={[0.56, 0.02, 0.01]} />
          </mesh>
        </group>

        {/* Nose */}
        <mesh position={[0, -0.02, 0.42]} material={skinMaterial}>
          <coneGeometry args={[0.07, 0.12, 16]} />
        </mesh>

        {/* Baseball Cap */}
        <group position={[0, 0.2, -0.02]}>
          {/* Cap Crown */}
          <mesh material={capMaterial} position={[0, 0.04, 0]}>
            <sphereGeometry args={[0.44, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.52]} />
          </mesh>
          {/* Cap Brim (Angled forward) */}
          <mesh position={[0, 0.04, 0.38]} rotation={[-0.2, 0, 0]} material={capMaterial}>
            <cylinderGeometry args={[0.38, 0.38, 0.03, 32, 1, false, -Math.PI * 0.45, Math.PI * 0.9]} />
          </mesh>
          {/* Cap Top Button */}
          <mesh position={[0, 0.48, 0]} material={glowAccent}>
            <sphereGeometry args={[0.04, 16, 16]} />
          </mesh>
        </group>

        {/* Stylized Headphones / Earbuds with purple glow */}
        <mesh position={[-0.44, 0.04, -0.02]} material={glowAccent}>
          <cylinderGeometry args={[0.05, 0.05, 0.08, 16]} />
        </mesh>
        <mesh position={[0.44, 0.04, -0.02]} material={glowAccent}>
          <cylinderGeometry args={[0.05, 0.05, 0.08, 16]} />
        </mesh>
      </group>
    </group>
  );
}

// Atmospheric Stardust Particles Floating in the Spotlight Cone
function ParticleDust({ count = 120 }) {
  const pointsRef = useRef();

  const [positions, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sc = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // Confined in cone shape (narrower at top, wider at bottom)
      const y = (Math.random() - 0.2) * 4;
      const radius = (3 - y) * 0.45 * Math.random();
      const angle = Math.random() * Math.PI * 2;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
      sc[i] = Math.random() * 0.04 + 0.01;
    }
    return [pos, sc];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.04;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#e2e8f0"
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function DeveloperAvatarScene() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0.2, 2.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        {/* Soft Ambient Light */}
        <ambientLight intensity={0.4} />

        {/* Overhead Volumetric Spotlight (Sharp white key light from apex) */}
        <spotLight
          position={[0, 4.5, 1.2]}
          angle={0.5}
          penumbra={0.7}
          intensity={8}
          color="#ffffff"
          castShadow
        />

        {/* Vivid Purple / Violet Rim Backlight (The signature rim glow from the video) */}
        <pointLight
          position={[0, 0.2, -1.2]}
          intensity={14}
          color="#a855f7"
          distance={5}
        />

        {/* Secondary Front Fill Light */}
        <directionalLight position={[0, -1, 2]} intensity={0.6} color="#94a3b8" />

        {/* Developer Character Model */}
        <DeveloperModel />

        {/* Floating Particles in Spotlight */}
        <ParticleDust count={150} />
      </Canvas>
    </div>
  );
}
