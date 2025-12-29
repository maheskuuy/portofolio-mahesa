import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { Particles } from "./Particles";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);
  return (
    <section className="absolute inset-0">
      {/* Icy gradient overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-cyan-950/40 via-blue-950/30 to-indigo-950/50" />

      {/* Star Particles Layer 1 - Background stars */}
      <div className="absolute inset-0 -z-50">
        <Particles
          className="absolute inset-0"
          quantity={150}
          staticity={30}
          ease={50}
          size={0.5}
          color="#93c5fd"
        />
      </div>

      {/* Star Particles Layer 2 - Foreground stars */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <Particles
          className="absolute inset-0"
          quantity={80}
          staticity={50}
          ease={30}
          size={0.8}
          color="#e0f2fe"
        />
      </div>

      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            filter: "brightness(0.9) contrast(1.1) saturate(1.3) hue-rotate(15deg)",
          }}
        />
        {/* Atmospheric icy glow effect */}
        <div
          className="absolute inset-0 -z-44 blur-3xl"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(147,197,253,0.15), transparent 60%)",
          }}
        />
        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            filter: "brightness(0.85) saturate(1.2) hue-rotate(10deg)",
            y: mountain3Y,
          }}
        />
        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            filter: "brightness(1.1) saturate(1.3) hue-rotate(20deg)",
            x: planetsX,
          }}
        />
        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/assets/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            filter: "brightness(0.9) saturate(1.25) hue-rotate(8deg)",
            y: mountain2Y,
          }}
        />
        {/* Fog Layer - Low-level mist */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cyan-300/15 via-blue-400/5 to-transparent" />
        {/* Mountain Layer 1 */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            filter: "brightness(1.0) saturate(1.3) hue-rotate(5deg)",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
