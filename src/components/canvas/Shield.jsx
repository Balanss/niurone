/* eslint-disable react/no-unknown-property */
import {Suspense,useEffect,useState,useRef} from 'react';
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF,Decal, useTexture, Float} from '@react-three/drei'
import CanvasLoader from '../Loader'

import web from '../../assets/web.png'

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

  const actions = useGLTF('./shield/scene.gltf')
const [decal] = useTexture([web]);
  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]} />
      <mesh castShadow receiveShadow scale={5}>
        <icosahedronGeometry args={[0,1]}/>
        <meshStandardMaterial color='#fff8eb' polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal 
        map={decal}
        position={[0,0,1]}
        rotation={[2*Math.PI,0,6.25]}
        flatShading
        />
        </mesh>
    </Float>
  )
}

const BackgroundCanvas = () => {

  

  return (  <div className=''>
      <Canvas
  frameLoop='demand'
  shadows
  camera={{position:[9,3,5],fov:55}}
  gl= {{preserveDrawingBuffer:true}}
  >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
        enablePan={true} 
        maxDistance={100} minPolarAngle={Math.PI/2} 
        maxPolarAngle={Math.PI/2} />
        <Background />
      </Suspense>
      <Preload all/>
  </Canvas>
  </div>)


}

export default BackgroundCanvas