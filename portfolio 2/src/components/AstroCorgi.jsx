import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useMotionValue, useSpring } from "motion/react";
import { useFrame } from "@react-three/fiber";

export function AstroCorgi(props) {
  const group = useRef();
  const { nodes, materials, animations, scene } = useGLTF("/models/astro_corgi.glb");
  const { actions } = useAnimations(animations, group);
  
  useEffect(() => {
    if (animations.length > 0) {
      // Play first animation if available
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, { damping: 30 });
  
  useEffect(() => {
    ySpring.set(-1);
  }, [ySpring]);
  
  useFrame(() => {
    if (group.current) {
      group.current.position.y = ySpring.get();
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive 
        object={scene} 
        scale={props.scale || 1}
        position={props.position || [0, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/astro_corgi.glb");
