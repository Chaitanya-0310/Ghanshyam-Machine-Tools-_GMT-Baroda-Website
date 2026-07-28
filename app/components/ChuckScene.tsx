"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function Jaw({ angle }: { angle: number }) {
  return (
    <group rotation={[0, 0, angle]}>
      <mesh position={[0.82, 0, 0.46]} castShadow>
        <boxGeometry args={[0.88, 0.38, 0.34]} />
        <meshStandardMaterial color="#2e333b" metalness={0.88} roughness={0.26} />
      </mesh>
      <mesh position={[0.52, 0, 0.67]} castShadow>
        <boxGeometry args={[0.28, 0.5, 0.26]} />
        <meshStandardMaterial color="#b4bac1" metalness={0.94} roughness={0.18} />
      </mesh>
      <mesh position={[1.13, 0, 0.47]} castShadow>
        <boxGeometry args={[0.2, 0.5, 0.42]} />
        <meshStandardMaterial color="#16191f" metalness={0.75} roughness={0.3} />
      </mesh>
    </group>
  );
}

function Chuck({
  animate,
  scrollProgress,
}: {
  animate: boolean;
  scrollProgress: React.RefObject<number>;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!animate || !group.current) return;
    const progress = scrollProgress.current ?? 0;
    group.current.rotation.z = state.clock.getElapsedTime() * 0.09 + progress * 0.55;
    group.current.rotation.y = -0.22 + progress * 0.16;
    group.current.position.y = -progress * 0.16;
  });

  return (
    <group ref={group} rotation={[0.14, -0.22, 0]}>
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.75, 1.75, 0.68, 72]} />
        <meshStandardMaterial color="#747b84" metalness={0.92} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0.38]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[1.38, 1.38, 0.13, 72]} />
        <meshStandardMaterial color="#d4d8dc" metalness={0.95} roughness={0.14} />
      </mesh>
      <mesh position={[0, 0, 0.52]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.42, 0.42, 0.16, 48]} />
        <meshStandardMaterial color="#12161c" metalness={0.9} roughness={0.24} />
      </mesh>
      {[0, Math.PI / 2, Math.PI, (Math.PI * 3) / 2].map((angle) => (
        <mesh key={angle} position={[Math.cos(angle) * 1.43, Math.sin(angle) * 1.43, 0.56]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.09, 0.09, 0.13, 24]} />
          <meshStandardMaterial color="#15191f" metalness={0.8} roughness={0.22} />
        </mesh>
      ))}
      <Jaw angle={0} />
      <Jaw angle={(Math.PI * 2) / 3} />
      <Jaw angle={(Math.PI * 4) / 3} />
    </group>
  );
}

export function ChuckScene() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const scrollProgress = useRef(0);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const trigger = ScrollTrigger.create({
      trigger: ".gmt-hero",
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        scrollProgress.current = self.progress;
      },
    });

    return () => trigger.kill();
  }, [reducedMotion]);

  return (
    <div className="gmt-chuck" aria-label="Interactive 3D visual of a three-jaw lathe chuck">
      <div className="gmt-chuck__canvas" aria-hidden="true">
        <Canvas dpr={[1, 1.5]} camera={{ fov: 35, position: [0, 0, 6.5] }} shadows>
          <color attach="background" args={["#edf0f5"]} />
          <ambientLight intensity={1.4} />
          <directionalLight position={[3.5, 4.5, 5]} intensity={3.2} castShadow />
          <directionalLight position={[-4, -2, 3]} intensity={1.1} color="#29246d" />
          <pointLight position={[2, -3, 4]} intensity={1.5} color="#ee3038" />
          <Chuck animate={!reducedMotion} scrollProgress={scrollProgress} />
        </Canvas>
      </div>
      <img className="gmt-chuck__fallback" src="/gmt-hero-chuck.png" alt="Precision lathe chuck and machined steel tooling" width="1715" height="915" />
    </div>
  );
}
