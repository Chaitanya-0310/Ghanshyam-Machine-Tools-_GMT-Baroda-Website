"use client";

import { Bounds, Center, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

function LatheChuck({
  animate,
  scrollProgress,
}: {
  animate: boolean;
  scrollProgress: React.RefObject<number>;
}) {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/lathe_chuck.glb");

  useFrame((_state, delta) => {
    if (!group.current) return;
    const progress = scrollProgress.current ?? 0;
    const rotationTarget = 0.1 + progress * 0.78;
    const xTarget = -0.2 + progress * 0.48;
    const yTarget = 0.06 - progress * 0.2;
    const scaleTarget = 0.78 + progress * 0.5;
    const damping = animate ? 4.2 : 12;

    group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, rotationTarget, damping, delta);
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, -0.22 + progress * 0.2, damping, delta);
    group.current.position.x = THREE.MathUtils.damp(group.current.position.x, xTarget, damping, delta);
    group.current.position.y = THREE.MathUtils.damp(group.current.position.y, yTarget, damping, delta);
    const scale = THREE.MathUtils.damp(group.current.scale.x, scaleTarget, damping, delta);
    group.current.scale.setScalar(scale);
  });

  return (
    <group ref={group} position={[-0.2, 0.06, 0]} rotation={[0.1, -0.22, 0]} scale={0.78}>
      <Bounds fit clip observe margin={1.22}>
        <Center>
          <primitive object={scene} />
        </Center>
      </Bounds>
    </group>
  );
}

useGLTF.preload("/lathe_chuck.glb");

export function ChuckScene() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);
  const scrollProgress = useRef(0);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => setCanvasReady(true), 500);
    return () => window.clearTimeout(timeout);
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
    <div className="gmt-chuck" aria-label="3D visual of a lathe chuck">
      {canvasReady && <div className="gmt-chuck__canvas" aria-hidden="true">
        <Canvas
          dpr={[1, 1.5]}
          camera={{ fov: 35, position: [0, 0, 6.5] }}
          frameloop={reducedMotion ? "demand" : "always"}
          shadows
        >
          <color attach="background" args={["#edf0f5"]} />
          <ambientLight intensity={1.5} />
          <directionalLight position={[3.5, 4.5, 5]} intensity={3.2} castShadow />
          <directionalLight position={[-4, -2, 3]} intensity={1.1} color="#29246d" />
          <pointLight position={[2, -3, 4]} intensity={1.5} color="#ee3038" />
          <Suspense fallback={null}>
            <LatheChuck animate={!reducedMotion} scrollProgress={scrollProgress} />
          </Suspense>
          {!reducedMotion && (
            <OrbitControls
              enableDamping
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI * 0.28}
              maxPolarAngle={Math.PI * 0.72}
              rotateSpeed={0.7}
            />
          )}
        </Canvas>
      </div>}
      {canvasReady && !reducedMotion && <p className="gmt-chuck__hint" aria-hidden="true">Drag to inspect</p>}
      <img
        className="gmt-chuck__fallback"
        src="/gmt-hero-chuck.png"
        alt="Precision lathe chuck and machined steel tooling"
        width="1715"
        height="915"
        style={{ display: canvasReady ? undefined : "block" }}
      />
    </div>
  );
}
