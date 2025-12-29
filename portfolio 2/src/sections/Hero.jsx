import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Environment, Float } from "@react-three/drei";
import { DoubleSide } from "three";
import { SafeGltfModel } from "../components/SafeGltfModel";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense, useRef } from "react";
import Loader from "../components/Loader";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const baseScale = isMobile ? 0.23 : 0.3;
  const astronautScale = baseScale * 5.6; // sedikit lebih besar
  const orbiterScale = isMobile ? baseScale * 2.5 : baseScale * 3.5;
  // Position the whole hero group so it sits beside the text
  const groupPosition = isMobile ? [0.35, 0.15, 0] : [1.0, 0.45, 0];
  return (
    <section id="home" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1.0, 3.8], fov: 60 }} gl={{ alpha: true }}>
          <Suspense fallback={<Loader />}>
            {/* Icy ambient + directional lighting and fog to blend with background */}
            <ambientLight intensity={0.5} color="#cfe8ff" />
            <hemisphereLight skyColor="#cfe8ff" groundColor="#e6f2ff" intensity={0.4} />
            <directionalLight position={[4, 6, 5]} intensity={1.1} color="#a7c7ff" />
            <fog attach="fog" color="#cfe8ff" near={4} far={12} />
            <Environment preset="dawn" background={false} intensity={0.5} />

            {/* Group the hero so orbiters revolve around astronaut and we can place it relative to text */}
            <group position={groupPosition}>
              {/* Orbiting astro model (corgi only) */}
              <OrbitingModel path="/models/astro_corgi.glb" orbitRadius={4.2} orbitSpeed={0.28} scale={orbiterScale} phase={0} />

              <Float>
                <Astronaut
                  scale={astronautScale}
                  position={[0, 0, 0]}
                />
              </Float>
            </group>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  const baseZ = 3.8;
  const baseY = 1.0;
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, baseY + state.mouse.y / 10, baseZ],
      0.5,
      delta
    );
  });
}

export default Hero;

// Simple orbiting GLB model component (buster drone)
function OrbitingModel({ path, orbitRadius, orbitSpeed, scale = 0.3, phase = 0 }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime * orbitSpeed + phase;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * orbitRadius;
      ref.current.position.z = Math.sin(t) * orbitRadius;
      ref.current.rotation.y = t * 0.5;
    }
  });
  return (
    <group ref={ref} position={[orbitRadius, 0, 0]}>
      <SafeGltfModel path={path} scale={scale} />
      <pointLight intensity={1.6} distance={30} color="#93c5fd" />
    </group>
  );
}
