/* eslint-disable no-unused-vars */

import {style} from '../style'
import { SectionWrapper } from '../hoc'
import { useRef } from 'react';
import { useEffect,useState } from 'react';
import {useScroll, useTransform,motion,AnimatePresence} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import {tech} from "../constants/index"
import logo from '../assets/banner.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';





  function About() {

    const [textRef, inView] = useInView({
      triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
    });


const ref =useRef(null);
const { scrollYProgress } = useScroll({
  target: ref,
  offset:['0 5',"1.33 1"],
});


const scaleProgress= useTransform(scrollYProgress, [0, 1], [0.9, 1]);
const opacityProgress= useTransform(scrollYProgress, [0, 0.9], [0, 1]);

const title2 = `Why us`.split('')


const [view, setView] = useState('')
  return (
<motion.div  className='flex  flex-row gap-1  items-center phones:items-center phones:pr-10 phones:pl-5   pc:pl-20 overflow-hidden pb-[100px] rounded-lg pc:w-[60vw] m-auto'   ref={ref} style={{scale:scaleProgress,opacity:opacityProgress}} >
  
  <motion.section ref={textRef} initial={{ opacity: 0, y: -50 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }} transition={{ delay: 0.5 }}
    className='flex flex-col'>
  <div className=' flex flex-col flex-wrap  phones:justify-center justify-start gap-4 mt-5 h-auto pb-10'>


  <span className='relative left-5   '> {title2.map((el, i) => ( 
          <motion.span className={` relative  phones:text-[40px] ${style.heroHeadText} !text-white ml-[1px] `} key={i}  ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -10 }}
          transition={{ delay: i * 0.05 }}  > 
            {el}{""}
          </motion.span>
        ))}</span>


 <h2 className={`${style.heroHeadText} !text-2xl !text-white phones:text-left !font-[300]   `}>Seamless intergration of design and technology for you and your customers </h2>


        {tech.map((service, index) => {
          if (view === service.number) {
            return (
              <motion.div key={index} className='flex flex-col gap-1 '>
                <div className='text-white  text-[12px] max-w-3xl leading-[30px]' >
                  <span className='flex border-t-2 mt-2 phones:justify-center items-center border-white'>
                    <p className={`${view === service.number ? ' bg-background  p-2 text-black ' : "text-black"} flex flex-end  cursor-pointer rounded-br-lg`} onClick={() => setView(view === ''? service.number : '')}>{service.number}</p>
                    <p className={`${style.heroSubText} phones:ml-[12px] ml-[40px] !text-xl !text-white !pt-2 cursor-pointer `} onClick={() => setView(view === ''? service.number : '')}> {service.title} </p>
                  </span>
                </div>

                <motion.div className='text-white phones:text-center  max-w-3xl leading-[30px]'  initial={{opacity: 0, y: 2}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, ease: "easeOut"}}>
                    <p className={`${style.heroSubText} !text-[13px] !text-white  phones:text-left phones:p-2 phones:w-[90vw] phones:m-auto ml-[80px]` }>{service.description}</p>
                </motion.div>
              </motion.div>
            )
          } else {
            return <div key={index}  className='text-white phones:text-center  text-[17px] max-w-3xl leading-[30px] mt-1' >
            <span className='flex  mt-5 gap-3 items-center border-black phones:flex-col'>
              <p className={`${!view ? 'bg-background opacity-25 bg-cover bg-no-repeat p-2 text-black ' :  " bg-background opacity-25 text-black"} hover:opacity-90 flex flex-end cursor-pointer p-2 hover:bg-primary hover:text-black rounded-br-lg`} onClick={() => setView(service.number)}> {service.number}</p>
              <p className={`${style.heroSubText} !text-white !pt-2  cursor-pointer`} onClick={() => setView(service.number)}> {service.title} </p>
            </span>
          </div>
          }
        })}
   

    
    
   
   
  </div>

</motion.section>


<div className='phones:hidden hidden xl:block p-10 relative z-[100000]'>
  <LazyLoadImage
    src={logo}
    alt='logo'
    effect='blur'
    className=''
  />
</div>


</motion.div>
  )
}

export default SectionWrapper(About,"about")