import { useEffect, useRef, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import robotScene from "../assets/3d/robot.glb";

export function Robot({isHovering}) {
    const robotRef = useRef();

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 1023);
        };
      
        window.addEventListener('resize', handleResize);
      
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    // Load the 3D model and animations from the provided GLTF file
    const { scene, animations } = useGLTF(robotScene);

    const { actions } = useAnimations(animations, robotRef);

    // Play the "Take 001" animation when the component mounts
    useEffect(() => {
        actions["sphere body|sphere bodyAction"].play();
    }, []);

    useEffect(() => {
        let rotationInterval;
        if (isHovering) {
            rotationInterval = setInterval(() => {
                if (robotRef.current.rotation.y > -2) {
                    robotRef.current.rotation.y -= 0.01; // adjust rotation speed as needed
                }
            }, 5); // adjust interval as needed
        } else {
            rotationInterval = setInterval(() => {
                if (robotRef.current.rotation.y < 0) {
                    robotRef.current.rotation.y += 0.01; // adjust rotation speed as needed
                }
            }, 5); // adjust interval as needed
        }

        // Clean up the interval on unmount or when isHovering changes
        return () => clearInterval(rotationInterval);
    }, [isHovering]);

    return (
        <group>
            <mesh ref={robotRef} position={[0, 0, 0]} scale={isMobile? 3:8} rotation={[0,0,0]}>
                <primitive object={scene} />
            </mesh>
        </group>
    );
}