import React,{useRef} from 'react'
import { motion } from 'framer-motion'
import { useTransform, useViewportScroll } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer';



export default function MiddleText() {



    const [textRef, inView] = useInView({
        triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
      });



  return (<> 
    <AnimatePresence mode='wait'>
    <motion.div className='text-white px-10 py-20 text-center phones:text-[2rem] text-[4rem] font-bold' 
    initial={{ opacity: 0.3 ,y:1000,scale:0.3,rotateY:10}}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -5, scale: inView? 1 : 0.7 }}
    exit={{ opacity: 1 }}
    transition={{ duration: 1.5 }}> 
        <h1 className='text-white phones:text-left' ref={textRef}>
        Empowering tomorrow. One innovation at a time!
        </h1>
    </motion.div>
    </AnimatePresence>
 </>  )
}
