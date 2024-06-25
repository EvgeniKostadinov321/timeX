import { useRef, useState, useEffect,Suspense } from 'react';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function Card1() {
  const gltf = useLoader(GLTFLoader, '/timex.glb');
  const [modelCenter, setModelCenter] = useState(new THREE.Vector3()); // Default center
  const modelRef = useRef(); // Reference for accessing model bounding box

  useEffect(() => {
    if (modelRef.current) {
      const modelBox = new THREE.Box3().setFromObject(modelRef.current);
      const modelCenter = modelBox.getCenter(); // Get model's center

      // Calculate ideal camera position and zoom level:
      const modelSize = modelBox.getSize(new THREE.Vector3()); // Get model size
      const largestDimension = Math.max(modelSize.x, modelSize.y, modelSize.z);
      const distance = largestDimension * 3; // Adjust distance as needed
      const zoom = 0.8; // Initial zoom level (adjust as needed)

      const camera = gltf.scene.getObjectByName('camera'); // Assuming camera is named
      if (camera) {
        camera.position.set(modelCenter.x, modelCenter.y, modelCenter.z - distance);
        camera.lookAt(modelCenter);
        camera.zoom = zoom; // Set initial zoom level
      }
    }
  }, [gltf]);

  return (
    <Canvas style={{  background: '#444' }}>
      <Suspense >
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 1, 3]} intensity={1.5 * Math.PI} />
        <pointLight position={[0, 2, 1]} intensity={0.8} />
        <Sky environment="/sky2NEW.jpg" />
        <mesh ref={modelRef}> {/* Attach ref for centering */}
          <primitive
            object={gltf.scene}
            position={[0, 0.7, 0]}
            scale={[0.15, 0.15, 0.15]}
          />
        </mesh>

        <OrbitControls enableZoom={true} enableZoomSpeed={1.2} enablePan={false} /> {/* Adjust zoom speed */}
        <OrbitControls target={modelCenter} autoRotate /> {/* Auto-rotate for a dynamic view */}
      </Suspense>
    </Canvas>
  );
}
