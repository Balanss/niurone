/* eslint-disable no-unused-vars */
import {motion} from 'framer-motion'
import { fadeIn} from "../utils/Motion"
import { SectionWrapper } from '../hoc'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import bgContact from '../assets/bgContact.webp';
import ContactFunc from './ContactFunc';
import Maps from './map/Maps';
import Footer from './Footer';
import { useInView } from 'react-intersection-observer';
import { style } from '../style'




function Contact() {

  const [isHovering, setIsHovering] = useState();


  const title2 = `Contact us`.split('')

  const [textRef, inView] = useInView({
      triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
    });


    return (
        <motion.div className=' bg-opacity-50  px-4 phones:py-4 tablet:py-8 pc:py-10  flex flex-col items-start tablet:w-[60vw] pc:w-[40vw] md:m-auto mb-10 overflow-hidden' >
          <ToastContainer position='bottom-center' />
          
                      <div className=' relative   '> {title2.map((el, i) => ( 
          <motion.span className={` relative  ${style.heroHeadText} !text-white `} key={i}  ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ delay: i * 0.05 }}  > 
            {el}{""}
          </motion.span>
        ))}</div>
         
   

          <motion.p 
            variants={fadeIn("","",0.1,1)}  className='pt-10  phones:relative break-words text-white leading-tight phones:text-lg text-[18px] phones:w-[80vw]   xs:m-auto  tablet:m-0'>
             We invite you to join us on a journey where technology and design converge to create 
              extraordinary possibilities and discover how we can collaboratively shape the future of technology 
                and design. 
            </motion.p>


<div className='phones:flex phones:flex-col phones:justify-center phones:items-center mt-[80px] pc:items-start pc:justify-start flex'>

<div className='flex flex-row  items-start justify-center gap-20 mt-1  md:w-1/2 md:m-auto md:mb-5 '>
<ContactFunc setIsHovering={setIsHovering} />
</div>





</div>
           




           
                
        </motion.div>

    )
}

export default SectionWrapper(Contact,"contact");