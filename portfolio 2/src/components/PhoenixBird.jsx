import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function PhoenixBird(props) {
  const group = useRef();
  const { scene } = useGLTF("/models/phoenix_bird.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive 
        object={scene.clone()} 
        scale={props.scale || 1}
      />
    </group>
  );
}

useGLTF.preload("/models/phoenix_bird.glb");
