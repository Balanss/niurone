import React, { Suspense, useEffect, useState ,useRef} from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { EffectComposer, DepthOfField, Bloom, Noise, HueSaturation, BrightnessContrast, Sepia, } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { useFrame ,useThree} from "@react-three/fiber";
import { useSpring, a } from '@react-spring/three';







import CanvasLoader from "../Loader";

const Light = ({ isMobile }) => {
  const computer = useGLTF("./lights/scene.gltf");
  const [scale, setScale] = useState(10);  // Initial scale


  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = -0.25 - 0.25 * Math.sin(clock.getElapsedTime() * Math.PI * 0.1);
      meshRef.current.position.z = -0.25 - 0.25 * Math.sin(clock.getElapsedTime() * Math.PI * 0.1);
      
    }
  });




  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={0.15} groundColor='red' />
      <directionalLight position={[0,11, 5]} intensity={1.1} />
      <directionalLight position={[-1,0, -2]} intensity={0.2} />
      <directionalLight position={[1,0, -2]} intensity={0.1} />
      <directionalLight position={[-1,-4, -4]} intensity={0.1} />
      <pointLight intensity={1} />
      <primitive object={computer.scene} position={[0, -0.5,0]} scale={scale} rotation={[0,0,0.1]} />
    </mesh>
  );
};

const LightCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  





  return (
    <Canvas
frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 0], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}

   
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
   
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Light isMobile={isMobile} />
         <EffectComposer>
          <DepthOfField focusDistance={0} focalLength={0.0} bokehScale={0.2} height={300} />
          <Bloom luminanceThreshold={0} luminanceSmoothing={10} height={300} />
          <Noise opacity={0.05} />
          <BrightnessContrast brightness={0} contrast={0} />
          <Sepia intensity={10} />
          <HueSaturation
            blendFunction={BlendFunction.NORMAL} // blend mode
            hue={3} // hue in radians
            saturation={0.5} // saturation in radians
          />
        </EffectComposer>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default LightCanvas;