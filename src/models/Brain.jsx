import { useEffect, useRef, useReducer,useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import spaceScene from "../assets/3d/brain.glb";





const initialState = { direction: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'SET_DIRECTION':
      return { ...state, direction: action.payload };
    default:
      throw new Error();
  }
}

export function Brain({isMobile,sizePc}) {
  const spaceRef = useRef();
  const [state, dispatch] = useReducer(reducer, initialState);

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(spaceScene);
  const { actions } = useAnimations(animations, spaceRef);

  // useEffect(() => {
  //   actions["Scene"].setEffectiveTimeScale(0.3)
  //   actions["Scene"].play();
  // }, [actions]);


  useFrame(() => {
      // spaceRef.current.position.y += 0.0001 * state.direction;
      spaceRef.current.rotation.y += 0.001; // rotate on Y-axis by 0.01 each frame
  });
  
  const mobile = isMobile? [0,-0.35,-1]:[0 ,-0.2, 0];

  return (
    <mesh  ref={spaceRef} position={mobile} rotation={[0,1,0]}  scale={isMobile? 2: sizePc}>
      <directionalLight position={[100, 1000, 100]} intensity={2.5} />
      <primitive object={scene} />
    </mesh>
  );
}