/* eslint-disable react/no-unknown-property */
import {Suspense,useEffect,useState,useRef} from 'react';
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'
import { useAnimations } from "@react-three/drei";

const Background = () => {

  const [isMobile,setIsMobile] = useState(false)

  // const meshRef = useRef();
  // const [rotation, setRotation] = useState(0);


  useEffect(() => {
   
    if(window.innerWidth < 768){
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  ,[])




  const actions = useGLTF('./background/scene.gltf')



  

  return (
    <mesh >
    <hemisphereLight intensity={1.15}  groundColor={'black'}/>
    <pointLight intensity={1}/>
    <ambientLight intensity={1.5}/>
    <spotLight position={[-20,50,10]} intensity={1} angle={0.12} penumbra={1} castShadow shadow-mapSize={1024}/>
    <primitive
    scale={3}
    position={[0,0,100]}
    rotation={[0,1,0]}
    object={actions.scene}
    />  
  </mesh>
  )
}

const BackgroundCanvas = () => {

  

  return (  <div className='fixed z-[10] inset-0 w-screen h-screen'>
      <Canvas
  frameLoop='demand'
  gl={{ antialias: true, alpha: true }}
  camera={{position:[9,3,5],fov:75}}
  >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={true} 
        enablePan={true}  minDistance={0.5}
        maxDistance={100} minPolarAngle={Math.PI/2} 
        maxPolarAngle={Math.PI/2} />
        <Background />
      </Suspense>
      <Preload all/>
  </Canvas>
  </div>)


}

export default BackgroundCanvas