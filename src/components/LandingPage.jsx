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
const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);
const [isPc, setIsPc] = useState(window.innerWidth > 1023 && window.innerWidth <= 1439);
const [isXPc, setIsXPc] = useState(window.innerWidth > 1440);
const [sizePc, setSizePc] = useState(1 );



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
<div className='flex flex-row justify-center items-center  phones:flex-col-reverse phones:pt-[200px] xPc:w-[90vw] pt-20 pc:h-screen  '>

<motion.div className='pc:w-3/4 phones:w-screen  flex flex-col items-center justify-center '  
              initial={{ opacity: 1 ,x:-10}}
              animate={{ opacity: 1 ,x:0 ,rotateX:0}}
              exit={{ opacity: 1}}
              transition={{ duration: 0.9 ,ease:'easeInOut'}}>
                
  <Canvas className='canvas pc:!h-screen phones:!h-[200px] ' gl={{ antialias: false }}  dpr={[0, 0.8]} camera={{ position: [0, 0, 10], fov: !isMobile ? 12: 12 }} >
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <Suspense fallback={<Loader/>}>
      <Brain size={size} isMobile={isMobile} sizePc={sizePc}/>
    </Suspense>
  </Canvas>

</motion.div>

<section className='relative phones:w-fit phones:px-10    pc:w-1/2  flex-col  pc:m-auto phones:flex phones:items-left phones:justify-center '> 
          <AnimatePresence mode='wait'>
          <motion.h1
                        style={{ zIndex: 2 ,opacity,scale}} // Add this line
                        initial={{ opacity: 0 ,x:10,scale:0.2,rotateX:-10}}
                        animate={{ opacity: 1 ,x:0 ,scale:1,rotateX:0}}
                        exit={{ opacity: 0.5}}
                        transition={{ duration: 0.9 ,ease:'easeInOut'}}
              className=' text-[2.9rem] xPc:text-[3.2rem] 2Xpc:text-[4rem] phones:text-[2.5rem] phones:mb-10   leading-[1.05em] linetracking-[2px]   pc:text-left  text-white-100  mb-1 font-[300] ' >
              HUMAN BRAIN
              <br />
              <span className=' '>The ultimate</span>
              <br />
              command center
            </motion.h1>
          </AnimatePresence>

          
          <motion.h1  style={{opacity,scale}} className='pc:text-left phones:text-[13px]  pc:text-[1.7rem] text-white  font-[300] phones:mt-1 '
  initial={{ opacity: 0.3 ,y:-30,scale:0.3,rotateY:10}}
  animate={{ opacity: 1 ,y:0 ,scale:1,rotateY:0}}
  exit={{ opacity: 1.5 }}
  transition={{ duration: 1.5 }}
> TEAM NIURONE. <br className='phones:hidden'/>The tech side of your brain
</motion.h1>



    </section>



   
 </div> 
 
   </>)
}
