import React, { useRef } from 'react'
import {motion, useScroll, useTransform,AnimatePresence,useViewportScroll} from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { useState } from 'react';
import { useEffect } from 'react';
import { services } from '../constants/index';
import Title from '../ServiceSuite/Title'
import Card from '../ServiceSuite/Card';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import pdf from '../assets/pdf.pdf'








  function ServiceSuite() {


const [ modalShow, setModalShow ] = useState(false);
const [ title, setTitle ] = useState("");
const [description, setDescription] = useState("");
const [description2, setDescription2] = useState("");
const [description3, setDescription3] = useState("");
const [icon, setIcon] = useState("");









useEffect(() => {
  if (modalShow) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
}, [modalShow]);



const ref =useRef(null);
const { scrollYProgress } = useScroll({
  target: ref,
  offset:['0 6',"1.33 1"],
});

const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);



const scaleProgress = isMobile 
    ? useTransform(scrollYProgress, [0, 1], [0.8, 1])
    : useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const opacityProgress = isMobile 
    ? useTransform(scrollYProgress, [0, 0.9], [0.8, 1])
    : useTransform(scrollYProgress, [0, 0.9], [0.8, 1]);


  
    useEffect(() => {
      if (modalShow) {
        setTimeout(() => {
          document.getElementById('contactButton').href = "#contact";
        }, 500);
 
      }
    }, [modalShow]);

    useEffect(() => {
      const handleKeyDown = (e) => {
        // Close the modal if the Esc key is pressed
        if (e.key === 'Escape') {
          setModalShow(false);
        }
      };
    
      // Add the event listener when the component mounts
      window.addEventListener('keydown', handleKeyDown);
    
      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, []);


  //bg-bg bg-cover bg-no-repeat

  return ( <> 
    <motion.div className=' py-10   flex xl:flex-col xl:items-center justify-center rounded-lg bg-bg bg-cover bg-no-repeat'   ref={ref} style={{scale:scaleProgress,opacity:opacityProgress}}>
      <div className='flex p-[10px]  gap-[20px]  w-screen flex-wrap xl:flex-col justify-center  '>
       <Title/>
  <div className='flex   flex-wrap flex-row  items-center justify-center m-auto gap-10  h-auto pb-10'>
    <motion.div className=' grid pc:grid-cols-3 mt-2  flex-wrap phones:gap-[4rem] justify-center gap-20 md:flex-2  desktop:flex-1 desktop:w-4/4 phones:p-0 p-10  ' >   
  <Card 
  setModalShow={setModalShow} 
  modalShow={modalShow} 
  setIcon={setIcon} 
  setTitle={setTitle} 
  setDescription={setDescription} 
  setDescription2={setDescription2} 
  setDescription3={setDescription3} 
/>
 </motion.div>  
 </div>

   </div>
    </motion.div>

<AnimatePresence>
    {modalShow && ( 
        <motion.div initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, scale: 0 }}     onClick={(e) => {
          // Close the modal if the click is outside the modal content
          if (e.target === e.currentTarget) {
            setModalShow(false);
          }
        }}
         className='fixed  z-[10000000000000000000000000] top-0 left-0 w-screen pt-10 pb-10 overflow-y-scroll h-screen  bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-wg  p-10 phones:w-[95vw]  w-[50vw] m-auto  rounded-md'>
{services.map((services,index) => (
  <React.Fragment key={index}>
    {title === services.title && (
      <>  
        <div className='phones:flex flex-col phones:mt-20  '>
          <img src={icon} alt='web-development'  className='w-12 h-12 object-contain'/>
          <h3 className='text-2xl text-black font-bold text-center mb-5'>{title}</h3>
          <section className='flex flex-row gap-5 phones:flex-col'>
            <div>
            <LazyLoadImage
            effect='blur'
  alt='web-development'
  src={services.img}
  className='w-[250px] h-[250px] object-cover rounded-md'
/> 
            </div>
            <div>
              <ul className='list-disc list-inside leading-normal tracking-wide pc:w-[30vw]'>
                <li className='text-sm mt-5  text-black'>{description}</li>
                {description2 > "" ? <li className='text-sm mt-5 text-black'>{description2}</li> : null}
                {description3 > "" ? <li className='text-sm mt-5 text-black'>{description3}</li> : null}
                <hr  className='mt-5'/>
                <h2 className='text-sm mt-5 text-black'>{services.end}<span className={`${services.link > ""? "flex":'hidden'}`}> <a href={pdf} target="_blank"  className='text-blue-500 font-bold hover:cursor-pointer hover:scale-105 underline'>here</a> </span> </h2>
               {services.end1 > "" ? <h2 className='text-sm mt-5 text-black'>{services.end1}</h2> : null}
              </ul>
              <div className='flex justify-between'>
                <button className='bg-primary text-white mt-5 p-2 rounded-md' onClick={() => setModalShow(false)}>Close</button>
                <a  id="contactButton" onClick={() => setModalShow(false)} className='bg-primary text-white mt-5 p-2 rounded-md '>Contact us!</a>
              </div>
            </div>
          </section>
        </div>
      </>
    )}
  </React.Fragment>
))}
          </div>
        </motion.div>
      )
    } 
</AnimatePresence>


 

    </>)
}

export default SectionWrapper(ServiceSuite,"services")

