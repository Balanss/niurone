
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

const title2 = `hy us`.split('')


const [view, setView] = useState('')
  return (
<motion.div  className='flex  flex-row gap-1  items-center phones:items-center phones:pr-10 phones:pl-5   pc:pl-20 overflow-hidden pb-[100px]  bg-background bg-cover bg-no-repeat'  ref={ref} style={{scale:scaleProgress,opacity:opacityProgress}} >
  
  <motion.section ref={textRef} initial={{ opacity: 0, y: -50 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }} transition={{ delay: 0.5 }}
    className='flex flex-col'>
  <div className=' flex flex-col flex-wrap  phones:justify-center justify-start gap-4 mt-5 h-auto pb-10'>
  <h2 className={`${style.heroHeadText} !text-4xl !text-black phones:text-left `}>Unlocking the Future: <span className='text-primary drop-shadow-md'>Where Technology Meets Design</span> </h2>

  <span className='text-[100px] phones:text-[80px] relative left-0 text-primary font-extrabold'>W {title2.map((el, i) => ( 
          <motion.span className={` relative left-[-27px] ${style.heroHeadText} !text-black `} key={i}  ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -10 }}
          transition={{ delay: i * 0.05 }}  > 
            {el}{""}
          </motion.span>
        ))}</span>

  < p className={`${style.heroSubText} !text-sm !text-black lg:!w-[50vw] phones:text-left`}> At Niurone, we believe in the transformative power of technology and its seamless integration 
with captivating designs. Our approach is grounded in innovation, where cutting-edge 
technology meets creative aesthetics to redefine possibilities and elevate user experiences.</p>
  <div>
</div>

        {tech.map((service, index) => {
          if (view === service.number) {
            return (
              <motion.div key={index} className='flex flex-col gap-1'>
                <div className='text-black  text-[12px] max-w-3xl leading-[30px]' >
                  <span className='flex border-t-2 mt-2 phones:justify-center items-center border-black'>
                    <p className={`${view === service.number ? 'bg-black p-2 text-white ' : "text-black"} flex flex-end  cursor-pointer rounded-br-lg`} onClick={() => setView(view === ''? service.number : '')}>{service.number}</p>
                    <p className={`${style.heroSubText} phones:ml-[12px] ml-[40px] !text-xl !text-black !pt-2 cursor-pointer `} onClick={() => setView(view === ''? service.number : '')}> {service.title} </p>
                  </span>
                </div>

                <motion.div className='text-black phones:text-center  max-w-3xl leading-[30px]'  initial={{opacity: 0, y: 0}} animate={{opacity: 1, y: 0}} transition={{duration: 1, ease: "easeOut"}}>
                    <p className={`${style.heroSubText} !text-[13px] phones:text-left phones:p-2 phones:w-[90vw] phones:m-auto ml-[80px]` }>{service.description}</p>
                </motion.div>
              </motion.div>
            )
          } else {
            return <div key={index}  className='text-black phones:text-center  text-[17px] max-w-3xl leading-[30px] mt-1' >
            <span className='flex border-t-2 mt-5 gap-3 items-center border-black phones:flex-col'>
              <p className={`${!view ? 'bg-black p-2 text-white ' : "text-black"} flex flex-end cursor-pointer p-2 hover:bg-primary hover:text-white rounded-br-lg`} onClick={() => setView(service.number)}> {service.number}</p>
              <p className={`${style.heroSubText} !text-black !pt-2  cursor-pointer`} onClick={() => setView(service.number)}> {service.title} </p>
            </span>
          </div>
          }
        })}
   

    
    
   
   
  </div>

</motion.section>


<div className='phones:hidden hidden xl:block '>
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