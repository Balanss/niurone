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


  const title2 = `ontact us`.split('')

  const [textRef, inView] = useInView({
      triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
    });


    return (
        <motion.div className=' bg-opacity-50  p-4 pc:p-10 flex flex-col items-start ' >
          <ToastContainer position='bottom-center' />
          
         
                      <span className='text-[80px] phones:text-[70px] relative left-3 text-secondary font-extrabold'>C {title2.map((el, i) => ( 
          <motion.span className={` relative left-[-15px] ${style.heroHeadText} !text-white `} key={i}  ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ delay: i * 0.05 }}  > 
            {el}{""}
          </motion.span>
        ))}</span>
         
   

          <motion.p 
            variants={fadeIn("","",0.1,1)}  className='pt-10 pc:w-1/2  phones:relative  text-white leading-tight phones:text-lg text-[18px] phones:w-[80vw] w-[60vw]   phones:m-auto '>
             We invite you to join us on a journey where technology and design converge to create 
extraordinary possibilities and discover how we can collaboratively shape the future of technology 
and design. 
            </motion.p>


<div className='phones:flex phones:flex-col phones:justify-center phones:items-center mt-[80px] pc:items-start pc:justify-start g'>

<div className='flex flex-row  items-start justify-center gap-20 mt-10  m-auto '>
<ContactFunc setIsHovering={setIsHovering} />

                {/* <section className='w-[20vw] pc:left-100  relative z-[1000000000] m-auto h-[300px]'>
                  <Suspense fallback={<Loader />}>
                  <Canvas  gl={{ antialias: true, alpha: true }}  >
                    <directionalLight position={[400, 0, 10]} intensity={2} />
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 5, 1]} intensity={2} />
          <Suspense fallback={<Loader/>}>
                    <Robot isHovering={isHovering}/>
                    </Suspense>
                    </Canvas>
                    </Suspense>
                </section>  */}

     <section onMouseEnter={() => setIsHovering('right')} onMouseLeave={() => setIsHovering('')} className='phones:hidden  '>
     <Maps />
     <p className='text-white text-2xl pt-2'>Opening time : Mon - Fri || 10.00 AM - 06.00 PM</p>
     <Footer />
     </section> 
</div>

<section  className='pc:hidden mt-20 '>
     <Maps />
    <p className='text-white text-xl p-10'>
      Opening time :<br />
      Mon - Fri<br />
      10.00 AM - 06.00 PM
    </p>
     <Footer />
     </section>



</div>
           




           
                
        </motion.div>

    )
}

export default SectionWrapper(Contact,"contact");