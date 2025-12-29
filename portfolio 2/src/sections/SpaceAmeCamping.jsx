import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { SafeGltfModel } from "../components/SafeGltfModel";
import Loader from "../components/Loader";

const SpaceAmeCamping = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const scale = isMobile ? 0.5 : 0.65;
  return (
    <section className="relative flex items-center justify-center min-h-[70vh] py-10">
      <h2 className="sr-only">Space Ame Camping (Test)</h2>
      <div className="absolute inset-0" style={{ width: "100vw", height: "100%" }}>
        <Canvas camera={{ position: [0, 1.2, 4], fov: 60 }} gl={{ alpha: true }}>
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.5} color="#cfe8ff" />
            <hemisphereLight skyColor="#cfe8ff" groundColor="#e6f2ff" intensity={0.5} />
            <directionalLight position={[5, 6, 7]} intensity={1.0} color="#a7c7ff" />
            <Environment preset="dawn" background={false} intensity={0.6} />

            <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.3}>
              <SafeGltfModel
                path="/models/space_ame_camping_-_amelia_watson_hololive.glb"
                scale={scale}
                position={[0, -0.4, 0]}
              />
            </Float>
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default SpaceAmeCamping;
