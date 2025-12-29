import React, { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";

function GltfContent({ path, scale = 1, position = [0, 0, 0], rotation, ...props }) {
  const { scene } = useGLTF(path);
  return (
    <primitive object={scene.clone()} scale={scale} position={position} rotation={rotation} {...props} />
  );
}

export function SafeGltfModel({ path, scale = 1, position = [0, 0, 0], rotation, ...props }) {
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetch(path, { method: "HEAD" })
      .then((res) => {
        if (mounted) setAvailable(res.ok);
      })
      .catch(() => {
        if (mounted) setAvailable(false);
      });
    return () => {
      mounted = false;
    };
  }, [path]);

  if (!available) return null;
  return <GltfContent path={path} scale={scale} position={position} rotation={rotation} {...props} />;
}
