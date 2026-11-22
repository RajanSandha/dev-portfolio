import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// ─── Raj Kumar 3D Avatar ───────────────────────────────────────────
// Matches portrait: tall pompadour swept to the side, thick joined brows,
// brown eyes with soft dark circles, mole on the cheek, big handlebar
// mustache with curled tips, full trimmed beard, fair wheatish skin,
// white spread-collar shirt. No glasses/cap.
// ────────────────────────────────────────────────────────────────────

const PI = Math.PI;

// Tube that tapers along its length (used for the handlebar mustache).
function TaperedTube({ points, radius, taperEnd = 0.2, material, segments = 40 }) {
  const geometry = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)));
    const radial = 14;
    const g = new THREE.TubeGeometry(curve, segments, radius, radial, false);
    const pos = g.attributes.position;
    const ring = radial + 1;
    const v = new THREE.Vector3();
    const c = new THREE.Vector3();
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const f = THREE.MathUtils.lerp(1, taperEnd, Math.pow(t, 1.4));
      curve.getPointAt(t, c);
      for (let j = 0; j < ring; j++) {
        const idx = i * ring + j;
        v.fromBufferAttribute(pos, idx).sub(c).multiplyScalar(f).add(c);
        pos.setXYZ(idx, v.x, v.y, v.z);
      }
    }
    g.computeVertexNormals();
    return g;
  }, [points, radius, taperEnd, segments]);
  return <mesh geometry={geometry} material={material} />;
}

// Ellipsoid helper: unit sphere scaled per-axis.
function Blob({ position, scale, rotation, material, args = [1, 32, 24] }) {
  return (
    <mesh position={position} scale={scale} rotation={rotation} material={material}>
      <sphereGeometry args={args} />
    </mesh>
  );
}

const mirror = (pts) => pts.map(([x, y, z]) => [-x, y, z]);

// Mustache curve, centre → left tip (viewer's left = -x).
const MUSTACHE_L = [
  [0.0, -0.1, 0.415],
  [-0.09, -0.118, 0.405],
  [-0.19, -0.15, 0.375],
  [-0.28, -0.14, 0.33],
  [-0.33, -0.09, 0.29],
  [-0.335, -0.02, 0.27],
];
const MUSTACHE_R = mirror(MUSTACHE_L);

function RajKumarModel() {
  const modelGroup = useRef();
  const headGroup = useRef();

  useFrame((state) => {
    if (!modelGroup.current || !headGroup.current) return;
    const { x, y } = state.pointer;

    headGroup.current.rotation.y = THREE.MathUtils.lerp(headGroup.current.rotation.y, x * 0.5, 0.07);
    headGroup.current.rotation.x = THREE.MathUtils.lerp(headGroup.current.rotation.x, -y * 0.3, 0.07);
    modelGroup.current.rotation.y = THREE.MathUtils.lerp(modelGroup.current.rotation.y, x * 0.15, 0.04);
    modelGroup.current.position.y = THREE.MathUtils.lerp(
      modelGroup.current.position.y,
      -0.7 + Math.sin(state.clock.elapsedTime * 1.2) * 0.018,
      0.08
    );
  });

  // ── Materials ──────────────────────────────────────────────────
  const m = useMemo(
    () => ({
      skin: new THREE.MeshStandardMaterial({ color: '#d9a781', roughness: 0.6, metalness: 0.0 }),
      shade: new THREE.MeshStandardMaterial({ color: '#a8735f', roughness: 0.8, metalness: 0.0 }),
      hair: new THREE.MeshStandardMaterial({ color: '#0d0d0f', roughness: 0.55, metalness: 0.15 }),
      hairLight: new THREE.MeshStandardMaterial({ color: '#2a2a30', roughness: 0.4, metalness: 0.2 }),
      beard: new THREE.MeshStandardMaterial({ color: '#16130f', roughness: 0.95, metalness: 0.0 }),
      shirt: new THREE.MeshStandardMaterial({ color: '#f6f4f8', roughness: 0.7, metalness: 0.0 }),
      collar: new THREE.MeshStandardMaterial({ color: '#e4e1ea', roughness: 0.7, metalness: 0.0 }),
      eyeWhite: new THREE.MeshStandardMaterial({ color: '#f1ebe6', roughness: 0.3 }),
      iris: new THREE.MeshStandardMaterial({ color: '#4a2b17', roughness: 0.25 }),
      pupil: new THREE.MeshBasicMaterial({ color: '#070504' }),
      lip: new THREE.MeshStandardMaterial({ color: '#d98a86', roughness: 0.45 }),
      mole: new THREE.MeshBasicMaterial({ color: '#2a1810' }),
      white: new THREE.MeshBasicMaterial({ color: '#ffffff' }),
    }),
    []
  );

  const Eye = ({ x }) => (
    <group position={[x, 0.1, 0.345]}>
      <Blob scale={[0.075, 0.052, 0.05]} material={m.eyeWhite} args={[1, 24, 18]} />
      <Blob position={[0, -0.002, 0.03]} scale={[0.037, 0.037, 0.02]} material={m.iris} args={[1, 20, 16]} />
      <Blob position={[0, -0.002, 0.045]} scale={[0.018, 0.018, 0.01]} material={m.pupil} args={[1, 16, 12]} />
      <Blob position={[0.012, 0.012, 0.052]} scale={[0.006, 0.006, 0.004]} material={m.white} args={[1, 8, 8]} />
      {/* upper lid */}
      <Blob position={[0, 0.03, 0.012]} scale={[0.082, 0.026, 0.05]} material={m.skin} args={[1, 24, 12]} />
      {/* lash line */}
      <mesh position={[0, 0.02, 0.05]} material={m.pupil}>
        <boxGeometry args={[0.13, 0.008, 0.01]} />
      </mesh>
      {/* soft dark circle */}
      <Blob position={[0, -0.058, -0.005]} scale={[0.07, 0.014, 0.05]} material={m.shade} args={[1, 20, 10]} />
    </group>
  );

  const Brow = ({ side }) => (
    <group position={[side * 0.145, 0.205, 0.37]} rotation={[0.18, side * -0.28, side * 0.12]}>
      <Blob scale={[0.115, 0.032, 0.035]} material={m.hair} args={[1, 20, 12]} />
      <Blob position={[side * 0.07, 0.012, 0]} scale={[0.07, 0.03, 0.03]} rotation={[0, 0, side * 0.2]} material={m.hair} args={[1, 16, 10]} />
    </group>
  );

  return (
    <group ref={modelGroup} position={[0, -0.7, 0]}>
      {/* ── TORSO / WHITE SHIRT ───────────────────────────────── */}
      <mesh position={[0, -0.55, 0]} material={m.shirt}>
        <cylinderGeometry args={[0.6, 0.86, 1.0, 40]} />
      </mesh>
      <Blob position={[-0.64, -0.22, 0]} scale={[0.24, 0.2, 0.24]} material={m.shirt} />
      <Blob position={[0.64, -0.22, 0]} scale={[0.24, 0.2, 0.24]} material={m.shirt} />

      {/* Open collar V (skin) */}
      <Blob position={[0, -0.04, 0.2]} scale={[0.14, 0.2, 0.2]} material={m.skin} />

      {/* Spread collar flaps */}
      <mesh position={[-0.2, -0.02, 0.26]} rotation={[0.35, 0.45, 0.55]} material={m.collar}>
        <boxGeometry args={[0.36, 0.2, 0.035]} />
      </mesh>
      <mesh position={[0.2, -0.02, 0.26]} rotation={[0.35, -0.45, -0.55]} material={m.collar}>
        <boxGeometry args={[0.36, 0.2, 0.035]} />
      </mesh>
      {/* collar band behind neck */}
      <mesh position={[0, 0.0, 0.0]} material={m.collar}>
        <cylinderGeometry args={[0.27, 0.3, 0.1, 32, 1, true]} />
      </mesh>
      {/* placket seam */}
      <mesh position={[0, -0.55, 0.76]} material={m.collar}>
        <boxGeometry args={[0.012, 0.9, 0.01]} />
      </mesh>

      {/* ── HEAD (tracks cursor) ─────────────────────────────── */}
      <group ref={headGroup} position={[0, 0.45, 0]}>
        {/* Neck */}
        <mesh position={[0, -0.3, 0]} material={m.skin}>
          <cylinderGeometry args={[0.18, 0.21, 0.32, 28]} />
        </mesh>

        {/* Head: tall ellipsoid + a slightly squarer jaw */}
        <Blob position={[0, 0.06, 0]} scale={[0.42, 0.5, 0.43]} material={m.skin} args={[1, 48, 36]} />
        <Blob position={[0, -0.14, 0.05]} scale={[0.37, 0.3, 0.37]} material={m.skin} args={[1, 32, 24]} />

        {/* Ears */}
        <Blob position={[-0.415, 0.03, -0.03]} scale={[0.05, 0.1, 0.075]} material={m.skin} args={[1, 16, 14]} />
        <Blob position={[0.415, 0.03, -0.03]} scale={[0.05, 0.1, 0.075]} material={m.skin} args={[1, 16, 14]} />

        {/* Nose */}
        <Blob position={[0, 0.02, 0.4]} scale={[0.05, 0.12, 0.06]} rotation={[0.25, 0, 0]} material={m.skin} args={[1, 16, 14]} />
        <Blob position={[0, -0.06, 0.445]} scale={[0.07, 0.055, 0.06]} material={m.skin} args={[1, 20, 16]} />
        <Blob position={[-0.055, -0.07, 0.425]} scale={[0.035, 0.035, 0.04]} material={m.skin} args={[1, 12, 10]} />
        <Blob position={[0.055, -0.07, 0.425]} scale={[0.035, 0.035, 0.04]} material={m.skin} args={[1, 12, 10]} />

        {/* Mole on viewer's-left cheek */}
        <mesh position={[-0.185, -0.07, 0.355]} material={m.mole}>
          <sphereGeometry args={[0.02, 12, 12]} />
        </mesh>

        {/* Eyes + brows */}
        <Eye x={-0.16} />
        <Eye x={0.16} />
        <Brow side={-1} />
        <Brow side={1} />

        {/* Lips (lower lip peeks out under the mustache) */}
        <Blob position={[0, -0.165, 0.395]} scale={[0.075, 0.026, 0.035]} material={m.lip} args={[1, 20, 12]} />

        {/* ── HANDLEBAR MUSTACHE ──────────────────────────────── */}
        <TaperedTube points={MUSTACHE_L} radius={0.05} taperEnd={0.18} material={m.beard} />
        <TaperedTube points={MUSTACHE_R} radius={0.05} taperEnd={0.18} material={m.beard} />
        <Blob position={[0, -0.105, 0.4]} scale={[0.1, 0.045, 0.04]} material={m.beard} args={[1, 20, 12]} />

        {/* ── FULL TRIMMED BEARD ──────────────────────────────── */}
        {/* chin & under-jaw */}
        <Blob
          position={[0, 0.06, 0]}
          scale={[0.435, 0.52, 0.445]}
          material={m.beard}
          args={[1, 48, 32, 0, PI * 2, PI * 0.7, PI * 0.3]}
        />
        {/* jaw beard (wraps the squarer jaw volume) */}
        <Blob
          position={[0, -0.14, 0.05]}
          scale={[0.385, 0.315, 0.385]}
          material={m.beard}
          args={[1, 40, 28, 0, PI * 2, PI * 0.6, PI * 0.4]}
        />
        {/* cheek beard up to the sideburns, viewer's left */}
        <Blob
          position={[0, -0.14, 0.05]}
          scale={[0.385, 0.315, 0.385]}
          material={m.beard}
          args={[1, 24, 20, 0, PI * 0.24, PI * 0.28, PI * 0.34]}
        />
        {/* cheek beard, viewer's right */}
        <Blob
          position={[0, -0.14, 0.05]}
          scale={[0.385, 0.315, 0.385]}
          material={m.beard}
          args={[1, 24, 20, PI * 0.76, PI * 0.24, PI * 0.28, PI * 0.34]}
        />
        {/* beard fullness under lip */}
        <Blob position={[0, -0.235, 0.3]} scale={[0.14, 0.07, 0.1]} material={m.beard} args={[1, 20, 14]} />
        {/* sideburns */}
        <Blob position={[-0.405, 0.1, 0.02]} scale={[0.03, 0.12, 0.07]} material={m.beard} args={[1, 12, 12]} />
        <Blob position={[0.405, 0.1, 0.02]} scale={[0.03, 0.12, 0.07]} material={m.beard} args={[1, 12, 12]} />

        {/* ── POMPADOUR (swept toward viewer's right) ─────────── */}
        {/* scalp cap, front/top */}
        <Blob
          position={[0, 0.06, -0.01]}
          scale={[0.445, 0.53, 0.46]}
          material={m.hair}
          args={[1, 48, 28, 0, PI * 2, 0, PI * 0.33]}
        />
        {/* sides + back, kept above the ears */}
        <Blob
          position={[0, 0.06, -0.02]}
          scale={[0.445, 0.52, 0.46]}
          material={m.hair}
          args={[1, 48, 28, PI * 0.88, PI * 1.24, PI * 0.2, PI * 0.28]}
        />
        {/* tall front volume */}
        <Blob position={[0.0, 0.64, 0.1]} scale={[0.3, 0.3, 0.32]} rotation={[0.25, 0, -0.1]} material={m.hair} />
        {/* swept mass rolling to the right */}
        <Blob position={[0.16, 0.64, -0.02]} scale={[0.26, 0.24, 0.3]} rotation={[0, 0, -0.55]} material={m.hair} />
        {/* tuft falling past the right temple */}
        <Blob position={[0.36, 0.5, -0.02]} scale={[0.12, 0.09, 0.17]} rotation={[0, 0, -0.9]} material={m.hair} />
        {/* left side volume */}
        <Blob position={[-0.2, 0.52, 0.02]} scale={[0.18, 0.13, 0.26]} rotation={[0, 0, 0.35]} material={m.hair} />
        {/* back volume */}
        <Blob position={[0, 0.3, -0.26]} scale={[0.34, 0.26, 0.18]} material={m.hair} />
        {/* gloss streaks */}
        <Blob position={[0.0, 0.9, 0.1]} scale={[0.18, 0.02, 0.13]} rotation={[0.2, 0, -0.15]} material={m.hairLight} args={[1, 16, 8]} />
        <Blob position={[0.2, 0.82, 0.04]} scale={[0.13, 0.018, 0.1]} rotation={[0.1, 0, -0.5]} material={m.hairLight} args={[1, 16, 8]} />
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
    <div className="w-full h-full relative" style={{ touchAction: 'pan-y' }}>
      <Canvas
        camera={{ position: [0, 0.25, 3.0], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        style={{ touchAction: 'pan-y' }}
      >
        <ambientLight intensity={0.8} />

        {/* Key light from front-top so the face is evenly lit */}
        <spotLight position={[0.5, 3.5, 3]} angle={0.7} penumbra={0.8} intensity={22} color="#ffffff" />

        {/* Purple rim backlight, kept as an edge accent */}
        <pointLight position={[0, 0.4, -1.4]} intensity={7} color="#a855f7" distance={5} />

        {/* Front fill */}
        <directionalLight position={[0, 0, 3]} intensity={0.7} color="#fff4ea" />

        <RajKumarModel />
        <ParticleDust count={150} />
      </Canvas>
    </div>
  );
}
