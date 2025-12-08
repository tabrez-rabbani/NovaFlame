"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';
import { useMediaQuery } from '@/hooks/useMediaQuery';

function FloatingParticles({ count = 50 }) {
    const mesh = useRef<THREE.InstancedMesh>(null);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Generate random particles
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100
            const factor = 20 + Math.random() * 100
            const speed = 0.01 + Math.random() / 200
            const xFactor = -50 + Math.random() * 100
            const yFactor = -50 + Math.random() * 100
            const zFactor = -50 + Math.random() * 100
            temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
        }
        return temp;
    }, [count]);

    useFrame((state, delta) => {
        if (!mesh.current) return;

        particles.forEach((particle, i) => {
            let { t, factor, speed, xFactor, yFactor, zFactor } = particle
            t = particle.t += speed / 2
            const a = Math.cos(t) + Math.sin(t * 1) / 10
            const b = Math.sin(t) + Math.cos(t * 2) / 10
            const s = Math.cos(t)

            dummy.position.set(
                (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
                (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
                (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            )
            dummy.scale.set(s, s, s)
            dummy.rotation.set(s * 5, s * 5, s * 5)
            dummy.updateMatrix()
            mesh.current!.setMatrixAt(i, dummy.matrix)
        })
        mesh.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <dodecahedronGeometry args={[0.2, 0]} />
            <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={0.5} toneMapped={false} />
        </instancedMesh>
    )
}

function MainDish() {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} floatingRange={[-0.2, 0.2]}>
            {/* Simple procedural plate abstract representation */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
                <cylinderGeometry args={[2.5, 2.3, 0.2, 64]} />
                <meshStandardMaterial
                    color="#111"
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>

            {/* Center "Food" Abstract Glow */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[1.2, 32, 32]} />
                <meshStandardMaterial
                    color="#ff6600"
                    emissive="#ff3300"
                    emissiveIntensity={0.8}
                    roughness={0.4}
                    transparent
                    opacity={0.9}
                />
            </mesh>

            {/* Decorative Rings */}
            <mesh rotation={[Math.PI / 3, 0, 0]}>
                <torusGeometry args={[3, 0.05, 16, 100]} />
                <meshStandardMaterial color="#d4af37" metalness={1} roughness={0} />
            </mesh>
            <mesh rotation={[-Math.PI / 3, 0, 0]}>
                <torusGeometry args={[3.2, 0.05, 16, 100]} />
                <meshStandardMaterial color="#d4af37" metalness={1} roughness={0} />
            </mesh>
        </Float>
    )
}

export function HeroScene() {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div className="absolute inset-0 z-0 h-screen w-full">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />

                <color attach="background" args={['#0a0a0a']} />

                <Suspense fallback={null}>
                    <Environment preset="city" />
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={10} castShadow />
                    <pointLight position={[-10, -10, -10]} intensity={1} color="#d4af37" />

                    <MainDish />
                    <FloatingParticles count={isMobile ? 30 : 80} />

                    <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.5} far={10} color="#000000" />
                </Suspense>
            </Canvas>
            {/* Overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
        </div>
    );
}
