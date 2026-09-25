import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ─── Raj Kumar 3D Avatar ───────────────────────────────────────────
// Matches portrait: voluminous swept-back dark hair, handlebar
// mustache with curled tips, trimmed beard/goatee, thick brows,
// warm brown skin, angular jaw, formal white shirt, no glasses/cap.
// ────────────────────────────────────────────────────────────────────

function RajKumarModel() {
  const modelGroup = useRef();
  const headGroup = useRef();

  useFrame((state) => {
    if (!modelGroup.current || !headGroup.current) return;
    const { x, y } = state.pointer;

    // Smooth head tracking towards cursor
    headGroup.current.rotation.y = THREE.MathUtils.lerp(
      headGroup.current.rotation.y,
      x * 0.5,
      0.07
    );
    headGroup.current.rotation.x = THREE.MathUtils.lerp(
      headGroup.current.rotation.x,
      -y * 0.3,
      0.07
    );

    // Subtle torso sway following cursor
    modelGroup.current.rotation.y = THREE.MathUtils.lerp(
      modelGroup.current.rotation.y,
      x * 0.15,
      0.04
    );
    // Gentle idle breathing float
    modelGroup.current.position.y = THREE.MathUtils.lerp(
      modelGroup.current.position.y,
      -0.7 + Math.sin(state.clock.elapsedTime * 1.2) * 0.018,
      0.08
    );
  });

  // ── Materials ──────────────────────────────────────────────────

  // Warm medium-brown skin (matching portrait)
  const skinMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#c68c5c',
        roughness: 0.55,
        metalness: 0.02,
      }),
    []
  );

  // Dark hair / eyebrow / beard / mustache
  const hairMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#0f0f0f',
        roughness: 0.9,
        metalness: 0.05,
      }),
    []
  );

  // Slightly lighter hair highlight for volume
  const hairHighlightMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#1a1a1a',
        roughness: 0.85,
        metalness: 0.08,
      }),
    []
  );

  // White formal shirt
  const shirtMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#e8e4e0',
        roughness: 0.65,
        metalness: 0.02,
      }),
    []
  );

  // Shirt collar darker crease
  const collarMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#d0ccc6',
        roughness: 0.6,
        metalness: 0.03,
      }),
    []
  );

  // Eyes
  const eyeWhiteMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#f0ece8',
        roughness: 0.3,
        metalness: 0.0,
      }),
    []
  );

  const irisMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#2c1a0e',
        roughness: 0.2,
        metalness: 0.1,
      }),
    []
  );

  const pupilMat = useMemo(
    () => new THREE.MeshBasicMaterial({ color: '#050505' }),
    []
  );

  // Lips
  const lipMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#a85a5a',
        roughness: 0.5,
        metalness: 0.0,
      }),
    []
  );

  // Purple accent glow (for small tech-vibe accents)
  const glowAccent = useMemo(
    () => new THREE.MeshBasicMaterial({ color: '#c084fc' }),
    []
  );

  return (
    <group ref={modelGroup} position={[0, -0.7, 0]}>

      {/* ── TORSO / FORMAL WHITE SHIRT ────────────────────────── */}
      <mesh position={[0, -0.55, 0]} material={shirtMat}>
        <cylinderGeometry args={[0.62, 0.82, 1.0, 32]} />
      </mesh>
      {/* Shoulder broadening */}
      <mesh position={[-0.62, -0.25, 0]} material={shirtMat}>
        <sphereGeometry args={[0.22, 16, 16]} />
      </mesh>
      <mesh position={[0.62, -0.25, 0]} material={shirtMat}>
        <sphereGeometry args={[0.22, 16, 16]} />
      </mesh>

      {/* Shirt collar - Left flap */}
      <mesh position={[-0.18, 0.0, 0.28]} rotation={[0.3, 0.4, 0.15]} material={collarMat}>
        <boxGeometry args={[0.28, 0.22, 0.04]} />
      </mesh>
      {/* Shirt collar - Right flap */}
      <mesh position={[0.18, 0.0, 0.28]} rotation={[0.3, -0.4, -0.15]} material={collarMat}>
        <boxGeometry args={[0.28, 0.22, 0.04]} />
      </mesh>

      {/* ── HEAD AND FACE GROUP (tracks cursor) ───────────────── */}
      <group ref={headGroup} position={[0, 0.45, 0]}>

        {/* Neck */}
        <mesh position={[0, -0.32, 0]} material={skinMat}>
          <cylinderGeometry args={[0.18, 0.2, 0.3, 24]} />
        </mesh>

        {/* Head base sphere */}
        <mesh position={[0, 0.06, 0]} material={skinMat}>
          <sphereGeometry args={[0.44, 32, 32]} />
        </mesh>

        {/* Angular jaw (box for stronger jawline) */}
        <mesh position={[0, -0.15, 0.1]} material={skinMat}>
          <boxGeometry args={[0.42, 0.3, 0.34]} />
        </mesh>
        {/* Chin point */}
        <mesh position={[0, -0.28, 0.14]} material={skinMat}>
          <sphereGeometry args={[0.12, 16, 16]} />
        </mesh>

        {/* Ears */}
        <mesh position={[-0.44, 0.04, -0.04]} material={skinMat}>
          <sphereGeometry args={[0.1, 16, 16]} />
        </mesh>
        <mesh position={[0.44, 0.04, -0.04]} material={skinMat}>
          <sphereGeometry args={[0.1, 16, 16]} />
        </mesh>

        {/* Nose bridge */}
        <mesh position={[0, 0.0, 0.4]} rotation={[0.2, 0, 0]} material={skinMat}>
          <boxGeometry args={[0.09, 0.2, 0.1]} />
        </mesh>
        {/* Nose tip */}
        <mesh position={[0, -0.06, 0.46]} material={skinMat}>
          <sphereGeometry args={[0.075, 16, 16]} />
        </mesh>
        {/* Nostrils */}
        <mesh position={[-0.04, -0.09, 0.44]} material={skinMat}>
          <sphereGeometry args={[0.04, 12, 12]} />
        </mesh>
        <mesh position={[0.04, -0.09, 0.44]} material={skinMat}>
          <sphereGeometry args={[0.04, 12, 12]} />
        </mesh>

        {/* Beauty mark on right cheek (visible in portrait) */}
        <mesh position={[0.2, -0.02, 0.36]}>
          <sphereGeometry args={[0.022, 12, 12]} />
          <meshBasicMaterial color="#3d2518" />
        </mesh>

        {/* ── EYES ─────────────────────────────────────────────── */}
        {/* Left eye */}
        <group position={[-0.16, 0.08, 0.36]}>
          {/* Eye white */}
          <mesh material={eyeWhiteMat}>
            <sphereGeometry args={[0.075, 24, 24]} />
          </mesh>
          {/* Iris */}
          <mesh position={[0, 0, 0.045]} material={irisMat}>
            <sphereGeometry args={[0.048, 20, 20]} />
          </mesh>
          {/* Pupil */}
          <mesh position={[0, 0, 0.065]} material={pupilMat}>
            <sphereGeometry args={[0.025, 16, 16]} />
          </mesh>
          {/* Pupil highlight */}
          <mesh position={[0.015, 0.015, 0.076]}>
            <sphereGeometry args={[0.009, 12, 12]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>
        {/* Right eye */}
        <group position={[0.16, 0.08, 0.36]}>
          <mesh material={eyeWhiteMat}>
            <sphereGeometry args={[0.075, 24, 24]} />
          </mesh>
          <mesh position={[0, 0, 0.045]} material={irisMat}>
            <sphereGeometry args={[0.048, 20, 20]} />
          </mesh>
          <mesh position={[0, 0, 0.065]} material={pupilMat}>
            <sphereGeometry args={[0.025, 16, 16]} />
          </mesh>
          <mesh position={[0.015, 0.015, 0.076]}>
            <sphereGeometry args={[0.009, 12, 12]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>

        {/* ── THICK EYEBROWS (prominent, matching portrait) ────── */}
        {/* Left brow */}
        <mesh position={[-0.16, 0.17, 0.36]} rotation={[0, 0, 0.08]} material={hairMat}>
          <boxGeometry args={[0.2, 0.04, 0.06]} />
        </mesh>
        {/* Right brow */}
        <mesh position={[0.16, 0.17, 0.36]} rotation={[0, 0, -0.08]} material={hairMat}>
          <boxGeometry args={[0.2, 0.04, 0.06]} />
        </mesh>

        {/* ── LIPS ─────────────────────────────────────────────── */}
        {/* Upper lip */}
        <mesh position={[0, -0.14, 0.39]} material={lipMat}>
          <boxGeometry args={[0.18, 0.03, 0.06]} />
        </mesh>
        {/* Lower lip (slightly fuller) */}
        <mesh position={[0, -0.17, 0.38]} material={lipMat}>
          <boxGeometry args={[0.16, 0.04, 0.06]} />
        </mesh>

        {/* ── HANDLEBAR MUSTACHE (signature look!) ─────────────── */}
        {/* Main mustache body over upper lip */}
        <mesh position={[0, -0.1, 0.42]} material={hairMat}>
          <boxGeometry args={[0.32, 0.06, 0.05]} />
        </mesh>
        {/* Mustache thickness (layered for volume) */}
        <mesh position={[0, -0.085, 0.43]} material={hairMat}>
          <boxGeometry args={[0.28, 0.04, 0.04]} />
        </mesh>
        {/* Left curl tip (curling upward — the handlebar!) */}
        <mesh position={[-0.2, -0.09, 0.4]} rotation={[0, 0, 0.6]} material={hairMat}>
          <boxGeometry args={[0.12, 0.04, 0.04]} />
        </mesh>
        <mesh position={[-0.24, -0.06, 0.39]} rotation={[0, 0, 1.1]} material={hairMat}>
          <boxGeometry args={[0.07, 0.035, 0.035]} />
        </mesh>
        {/* Right curl tip (mirror) */}
        <mesh position={[0.2, -0.09, 0.4]} rotation={[0, 0, -0.6]} material={hairMat}>
          <boxGeometry args={[0.12, 0.04, 0.04]} />
        </mesh>
        <mesh position={[0.24, -0.06, 0.39]} rotation={[0, 0, -1.1]} material={hairMat}>
          <boxGeometry args={[0.07, 0.035, 0.035]} />
        </mesh>

        {/* ── TRIMMED BEARD / GOATEE ───────────────────────────── */}
        {/* Chin beard patch */}
        <mesh position={[0, -0.25, 0.22]} material={hairMat}>
          <boxGeometry args={[0.18, 0.12, 0.16]} />
        </mesh>
        {/* Soul patch (under lower lip) */}
        <mesh position={[0, -0.2, 0.34]} material={hairMat}>
          <boxGeometry args={[0.08, 0.06, 0.05]} />
        </mesh>
        {/* Jawline beard — left */}
        <mesh position={[-0.22, -0.18, 0.14]} material={hairMat}>
          <boxGeometry args={[0.08, 0.14, 0.2]} />
        </mesh>
        {/* Jawline beard — right */}
        <mesh position={[0.22, -0.18, 0.14]} material={hairMat}>
          <boxGeometry args={[0.08, 0.14, 0.2]} />
        </mesh>
        {/* Sideburns — left */}
        <mesh position={[-0.38, 0.0, 0.05]} material={hairMat}>
          <boxGeometry args={[0.07, 0.22, 0.1]} />
        </mesh>
        {/* Sideburns — right */}
        <mesh position={[0.38, 0.0, 0.05]} material={hairMat}>
          <boxGeometry args={[0.07, 0.22, 0.1]} />
        </mesh>

        {/* ── VOLUMINOUS SWEPT-BACK HAIR (pompadour/quiff) ──── */}
        {/* Main hair dome (swept back and up) */}
        <mesh position={[0, 0.28, -0.02]} material={hairMat}>
          <sphereGeometry args={[0.46, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.55]} />
        </mesh>
        {/* Extra volume on top (the pompadour lift) */}
        <mesh position={[0, 0.42, 0.08]} rotation={[0.3, 0, 0]} material={hairMat}>
          <boxGeometry args={[0.36, 0.2, 0.3]} />
        </mesh>
        {/* Front sweep (voluminous fringe falling to the right) */}
        <mesh position={[0.06, 0.4, 0.18]} rotation={[0.5, -0.15, -0.1]} material={hairHighlightMat}>
          <boxGeometry args={[0.34, 0.16, 0.22]} />
        </mesh>
        {/* Hair top rounded cap */}
        <mesh position={[0, 0.48, 0.0]} material={hairMat}>
          <sphereGeometry args={[0.28, 24, 16]} />
        </mesh>
        {/* Side hair coverage — left */}
        <mesh position={[-0.36, 0.18, -0.06]} material={hairMat}>
          <boxGeometry args={[0.14, 0.3, 0.3]} />
        </mesh>
        {/* Side hair coverage — right */}
        <mesh position={[0.36, 0.18, -0.06]} material={hairMat}>
          <boxGeometry args={[0.14, 0.3, 0.3]} />
        </mesh>
        {/* Back of hair */}
        <mesh position={[0, 0.2, -0.32]} material={hairMat}>
          <boxGeometry args={[0.52, 0.36, 0.16]} />
        </mesh>

        {/* Tiny purple tech earring accent (left ear — subtle creative touch) */}
        <mesh position={[-0.46, -0.02, -0.04]} material={glowAccent}>
          <sphereGeometry args={[0.03, 12, 12]} />
        </mesh>
      </group>
    </group>
  );
}

// ─── Atmospheric Stardust Particles ────────────────────────────────
function ParticleDust({ count = 120 }) {
  const pointsRef = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const y = (Math.random() - 0.2) * 4;
      const radius = (3 - y) * 0.45 * Math.random();
      const angle = Math.random() * Math.PI * 2;
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return pos;
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
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// ─── Main Scene Export ─────────────────────────────────────────────
export default function DeveloperAvatarScene() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0.2, 2.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        {/* Soft ambient */}
        <ambientLight intensity={0.45} />

        {/* Overhead spotlight (sharp white key light from apex) */}
        <spotLight
          position={[0, 4.5, 1.2]}
          angle={0.5}
          penumbra={0.7}
          intensity={8}
          color="#ffffff"
          castShadow
        />

        {/* Vivid purple rim backlight (signature rim glow) */}
        <pointLight
          position={[0, 0.2, -1.2]}
          intensity={14}
          color="#a855f7"
          distance={5}
        />

        {/* Secondary front fill */}
        <directionalLight position={[0, -1, 2]} intensity={0.6} color="#94a3b8" />

        {/* Raj Kumar 3D Character */}
        <RajKumarModel />

        {/* Floating particles in spotlight */}
        <ParticleDust count={150} />
      </Canvas>
    </div>
  );
}
