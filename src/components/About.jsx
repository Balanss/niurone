/* eslint-disable no-unused-vars */

import {style} from '../style'
import { SectionWrapper } from '../hoc'
import { useRef } from 'react';
import { useEffect,useState } from 'react';
import {useScroll, useTransform,motion,AnimatePresence,useMotionValue} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import {tech} from "../constants/index"
import logo from '../assets/banner.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';






  function About() {


    const scrollY = useMotionValue(window.scrollY);
    const opacity = useTransform(scrollY, [3000, 4000], [1, 0.5]);
    const scale = useTransform(scrollY, [2700, 3400], [1, 0.8]);
  
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

    const [textRef, inView] = useInView({
      triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
    });


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










const title2 = `Why us`.split('')


const [view, setView] = useState('')
  return (

<motion.div  className='flex  flex-col gap-1 pc:px-4  items-start phones:items-center phones:pr-10 phones:pl-5    overflow-hidden pb-[100px] rounded-lg pc:w-[40vw] m-auto'     style={ isMobile? null : { opacity, scale }} > 


<div className='text-left xs:w-[80vw] tablet:w-[60vw] pc:w-[40vw] m-auto'>
       {title2.map((el, i) => ( 
          <motion.span className={`   ${style.heroHeadText} !text-white `} key={i}  ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ delay: i * 0.05 }}  > 
            {el}{""}
          </motion.span>
        ))}
    </div>

        <div className='w-[80vw] tablet:w-[60vw] pc:w-[40vw] tablet:m-auto'>
        <motion.p ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ delay:  0.05 }} className='   phones:text-left m-auto pc:text-left leading-8 font-[300]  text-white mt-2'> Seamless intergration of design and technology for you and your customers </motion.p>
        </div>

  <motion.section ref={textRef} initial={{ opacity: 0, y: -50 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }} transition={{ delay: 0.5 }}
    className='flex flex-col  tablet:w-[60vw] pc:w-[40vw] tablet:m-auto'>
  <div className=' w-[80vw] flex flex-col flex-wrap  phones:justify-center justify-start gap-4 mt-5 h-auto pb-10'>
        <div className='flex flex-col items-start'>
          {tech.map((service, index) => {
          if (view === service.number) {
            return (
              <motion.div key={index} className='flex flex-col gap-1  '>
                <div className='text-white  text-[12px] max-w-3xl leading-[30px] ' >
                  <span className='flex border-t-2 mt-2 phones:justify-center items-center border-white'>
                    <p className={`${view === service.number ? ' bg-background  p-2 text-black ' : "text-black"} flex flex-end  cursor-pointer rounded-br-lg`} onClick={() => setView(view === ''? service.number : '')}>{service.number}</p>
                    <p className={`${style.heroSubText} phones:ml-[12px] ml-[40px] !text-xl !text-white !pt-2 cursor-pointer `} onClick={() => setView(view === ''? service.number : '')}> {service.title} </p>
                  </span>
                </div>

                <motion.div className='text-white phones:text-center  max-w-3xl leading-[30px]'  initial={{opacity: 0, y: 2}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, ease: "easeOut"}}>
                    <p className={`${style.heroSubText} !text-[13px] !text-white  phones:text-left phones:p-2 phones:w-[90vw] phones:m-auto ml-[80px]` }>{service.description} </p>
                </motion.div>
              </motion.div>
            )
          } else {
            return <div key={index}  className='text-white phones:text-center  text-[17px] max-w-3xl leading-[30px] mt-1' >
            <span className='flex  mt-5 gap-3 items-center border-black phones:flex-col'>
              <div className="group cursor-pointer flex items-center pc:items-end gap-2" onClick={() => setView(service.number)}>
                <p className={`${!view ? 'bg-background opacity-25 bg-cover bg-no-repeat p-2 text-black ' :  " bg-background opacity-25 text-black"} w-[50px] group-hover:opacity-90 flex flex-end p-2 hover:bg-primary hover:text-black rounded-br-lg`}> 
                  {service.number} 
                </p>
                <p className={`${style.heroSubText} !text-white !pt-2`}> 
                  {service.title} 
                </p>
              </div>
            </span>
          </div>
          }
        })} 
        </div>
       
   

    
   
   
  </div>

</motion.section>



</motion.div>
  )
}

export default SectionWrapper(About,"about")