import{Suspense, useEffect, useState} from 'react'
import { motion,useTransform } from 'framer-motion';
import { AnimatePresence,useViewportScroll } from 'framer-motion';
import { Brain } from '../models/Brain';
import { Canvas } from '@react-three/fiber';
import Loader from './Loader';


export default function LandingPage() {

  const { scrollY } = useViewportScroll();
  const opacity = useTransform(scrollY, [300, 900], [1, 0]);
  const scale = useTransform(scrollY, [300, 900], [1, 0.8]);

  

const [size, setSize] = useState(7);
const [isMobile, setIsMobile] = useState(window.innerWidth <= 1020);

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





  return (
<>
<div className='flex flex-row justify-center items-center pt-[200px] phones:pt-[50px] xPc:w-[90vw] phones:flex-col pc:h-screen  '>

<motion.div className='w-3/4 phones:w-screen phones:h-screen flex flex-col items-center justify-center'  style={{ opacity }}
              initial={{ opacity: 0.5 ,x:-10}}
              animate={{ opacity: 1 ,x:0 ,rotateX:0}}
              exit={{ opacity: 0.5}}
              transition={{ duration: 0.9 ,ease:'easeInOut'}}>
                
  <Canvas className='canvas xPc:!h-screen !h-[500px]' gl={{ antialias: false }}  dpr={[0, 0.8]} camera={{ position: [0, 0, 10], fov: !isMobile ? 12 : 10 }} >
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <Suspense fallback={<Loader/>}>
      <Brain size={size} isMobile={isMobile}/>
    </Suspense>
  </Canvas>
</motion.div>

<section className='pc:relative phones:w-fit phones:px-10   pc:w-1/2  flex-col  pc:m-auto phones:flex phones:items-left phones:justify-center '> 
          <AnimatePresence mode='wait'>
          <motion.h1
                        style={{ zIndex: 2 }} // Add this line
                        initial={{ opacity: 0 ,x:10,scale:0.2,rotateX:-10}}
                        animate={{ opacity: 1 ,x:0 ,scale:1,rotateX:0}}
                        exit={{ opacity: 0.5}}
                        transition={{ duration: 0.9 ,ease:'easeInOut'}}
              className=' phones:text-5xl text-[5rem]   leading-[1.05em] linetracking-[2px]   pc:text-left font-bold text-white-100 shadow-sm mb-1 ' >
              HUMAN BRAIN.
              <br />
              <span className=' '>THE ULTIMATE</span>
              <br />
              COMMAND CENTER.
            </motion.h1>
          </AnimatePresence>

          
          <motion.h1  style={{opacity}} className='pc:text-left font-extrabold pc:text-[1.7rem] text-white  shadow-sm phones:mt-1 '
  initial={{ opacity: 0.3 ,y:1000,scale:0.3,rotateY:10}}
  animate={{ opacity: 1 ,y:0 ,scale:1,rotateY:0}}
  exit={{ opacity: 1.5 }}
  transition={{ duration: 1.5 }}
> TEAM NIURONE. <br />
THE EXTENSION OF YOUR BRAIN.
</motion.h1>



    </section>



   
 </div> 
 
   </>)
}
