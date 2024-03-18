import React,{useRef} from 'react'
import { motion } from 'framer-motion'
import { useTransform, useViewportScroll } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { TextRevealCard } from '../ui/TextRevealCard';



export default function MiddleText() {



    const [textRef, inView] = useInView({
        triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
      });



  return (<> 
  <div className='pc:w-[60vw] pc:m-auto'>
  <AnimatePresence mode='wait'>
    <TextRevealCard  inView={inView} textRef={textRef}/>
    </AnimatePresence>
  </div>
 </>  )
}
