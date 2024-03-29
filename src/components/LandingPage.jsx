/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import{Suspense, useEffect, useState} from 'react'
import { motion,useTransform } from 'framer-motion';
import { AnimatePresence,useViewportScroll } from 'framer-motion';
import { Brain } from '../models/Brain';
import { Canvas } from '@react-three/fiber';
import Loader from './Loader';
import { TypewriterEffect } from '../ui/TypewriterEffect';
import { TypewriterEffectTwo } from '../ui/TypewriterEffectTwo';
import { OrbitControls } from '@react-three/drei';





export default function LandingPage() {

  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [300, 900], [1, 0]);
  const scale = useTransform(scrollY, [300, 900], [1, 0.8]);



const [size, setSize] = useState(7);
const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);
const [isPc, setIsPc] = useState(window.innerWidth > 1023 && window.innerWidth <= 1439);
const [isXPc, setIsXPc] = useState(window.innerWidth > 1440);
const [sizePc, setSizePc] = useState(1 );
const [secretText, setSecretText] = useState(false);



useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1023);

if (window.innerWidth > 900 && window.innerWidth <= 1000) {
  setSizePc(1);
  } else if (window.innerWidth > 1000 && window.innerWidth <= 1400) {
    setSizePc(0.8);
  }
  else if (window.innerWidth > 1440) {
    setSizePc(1.1);
  }
  };

  window.addEventListener('resize', handleResize);

  // Cleanup the event listener on component unmount
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, [sizePc,  isPc, isXPc]);




  return (
<>
<div className='flex flex-row justify-center items-center  phones:flex-col-reverse phones:pt-[180px] xPc:w-[90vw] pt-20 pc:h-screen  '>

<motion.div className='pc:w-3/4 phones:w-screen  flex flex-col items-center justify-center '  
              initial={{ opacity: 1 ,x:-10}}
              animate={{ opacity: 1 ,x:0 ,rotateX:0}}
              exit={{ opacity: 1}}
              transition={{ duration: 0.9 ,ease:'easeInOut'}}>
                 
                 <Canvas className='canvas pc:!h-screen phones:!h-[200px] hover:cursor-grabbing' onMouseEnter={() => setSecretText(true)} gl={{ antialias: false }} dpr={[0, 0.8]} camera={{ position: [0, 0, 10], fov: !isMobile ? 12: 12 }}>
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <Suspense fallback={<Loader/>}>
      <Brain size={size} isMobile={isMobile} sizePc={sizePc} />
    </Suspense>
   {!isMobile &&  <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />}
  </Canvas>

</motion.div>

<section className='relative phones:w-fit phones:px-10    pc:w-1/3  flex-col  pc:m-auto phones:flex phones:items-left phones:justify-center '> 
        <TypewriterEffect />
        {secretText && <TypewriterEffectTwo />}
          {/* <RevealTitle  /> */}

          
          <motion.h1  style={{opacity,scale}} className='pc:text-left phones:text-[13px] pc:mt-10  pc:text-[1.7rem] text-white   phones:mt-1 font-[500]'
  initial={{ opacity: 0.3 ,y:-30,scale:0.3,rotateY:10}}
  animate={{ opacity: 1 ,y:0 ,scale:1,rotateY:0}}
  exit={{ opacity: 1.5 }}
  transition={{ duration: 1.5 }}
> TEAM NIURONE <br className=''/> <span className='font-[300]'> The tech side of your brain </span>
</motion.h1>



    </section>



   
 </div> 
 
   </>)
}
