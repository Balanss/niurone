/* eslint-disable no-unused-vars */
import React,{useRef} from 'react'
import { motion } from 'framer-motion'
import { useTransform, useViewportScroll } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { TextRevealCard } from '../ui/TextRevealCard';
import {style} from '../style'



export default function MiddleText() {



    const [textRef, inView] = useInView({
        triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
      });

      const [mobile, setMobile] = React.useState(window.innerWidth <= 640);

      const title2 = `Where mind matters `.split('')

  return (<> 
  <div className='pc:w-[60vw] pc:m-auto'>
  <AnimatePresence mode='wait'>
    {mobile && 
       <div className=" overflow-hidden text-center  [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
        {title2.map((el, i) => ( 
          <motion.span className={` relative  phones:text-[21px] ${style.heroHeadText} !text-white ml-[1px] `} key={i}  ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -10 }}
          transition={{ delay: i * 0.05 }}  > 
            {el}{""}
          </motion.span>
        ))}
       </div>}
    {!mobile && <TextRevealCard />}
    </AnimatePresence>
  </div>
 </>  )
}
