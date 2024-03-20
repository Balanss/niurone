/* eslint-disable no-unused-vars */
import React,{useRef,useState,useEffect} from 'react'
import { useTransform,motion,AnimatePresence,useMotionValue} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { TextRevealCard } from '../ui/TextRevealCard';
import {style} from '../style'



export default function MiddleText() {

  const scrollY = useMotionValue(window.scrollY);
  const opacity = useTransform(scrollY, [1000, 4000], [1, 0.5]);
  const scale = useTransform(scrollY, [2000, 3400], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
 
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

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



    const [textRef, inView] = useInView({
        triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
      });

      const [mobile, setMobile] = React.useState(window.innerWidth <= 1000);

      const title2 = `Where mind matters `.split('')

  return (<> 
  <motion.div className='pc:w-[40vw] pc:m-auto' style={ isMobile? null : { opacity, scale }}>
  <AnimatePresence mode='wait'>
    {mobile && 
       <div className=" overflow-hidden text-center  [mask-image:linear-gradient(to_bottom,transparent,white,transparent)] mb-10">
        {title2.map((el, i) => ( 
          <motion.span className={` relative  xs:text-[21px] tablet:text-5xl ${style.heroHeadText} !text-white ml-[1px]  `} key={i}  ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -10 }}
          transition={{ delay: i * 0.05 }}  > 
            {el}{""}
          </motion.span>
        ))}
       </div>}
    {!mobile && <TextRevealCard />}
    </AnimatePresence>
  </motion.div>
 </>  )
}
