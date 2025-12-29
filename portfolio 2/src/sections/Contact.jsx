import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { SafeGltfModel } from "../components/SafeGltfModel";
import Loader from "../components/Loader";

const Contact = () => {
  return (
    <section id="contact" className="relative flex flex-col items-center justify-center min-h-screen c-space section-spacing overflow-hidden">
      {/* Space Ame Camping as interactive background */}
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1.2, 4], fov: 60 }} gl={{ alpha: true }}>
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.5} color="#cfe8ff" />
            <hemisphereLight skyColor="#cfe8ff" groundColor="#e6f2ff" intensity={0.5} />
            <directionalLight position={[5, 6, 7]} intensity={1.0} color="#a7c7ff" />
            <Environment preset="dawn" background={false} intensity={0.6} />
            <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.3}>
              <SafeGltfModel
                path="/models/space_ame_camping_-_amelia_watson_hololive.glb"
                scale={0.6}
                position={[0, -0.4, 0]}
              />
            </Float>
          </Suspense>
        </Canvas>
      </figure>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full py-12 gap-8">
        {/* Text content - centered */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6 max-w-lg">
          <h2 className="text-heading text-center">Let's Talk</h2>
          <p className="font-normal text-neutral-400 text-center">
            Get in touch—let's create something amazing together.
          </p>
        </div>

        {/* Button at bottom center */}
        <button
          onClick={() => window.open('https://discord.com/invite/kreyWfqAx', '_blank')}
          className="px-8 py-3 text-lg rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
        >
          Let's Rock!
        </button>
      </div>
    </section>
  );
};

export default Contact;
