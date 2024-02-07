import {motion} from 'framer-motion'
import { fadeIn} from "../utils/Motion"
import { SectionWrapper } from '../hoc'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Robot } from '../models';
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef,useState } from 'react';
import {useScroll, useTransform} from 'framer-motion'
import Loader from './Loader';
import Select from 'react-select';
import { getNames } from 'country-list';
import bgContact from '../assets/bgContact.jpg';
import ContactFunc from './ContactFunc';
import Maps from './map/Maps';
import Footer from './Footer';




function Contact() {

  const [isHovering, setIsHovering] = useState();


  


    return (
        <motion.div className=' bg-opacity-50  p-10 ' >
          <ToastContainer position='bottom-center' />
          <motion.p 
            variants={fadeIn("","",0.1,1)}  className='pt-10 pc:w-1/2 phones:relative phones:right-2 text-white leading-tight phones:text-xl text-2xl phones:w-[90vw] w-[60vw]   phones:m-auto '>
             Join is in shaping the future : We invite you to join us on a journey where technology and design converge to create 
extraordinary possibilities and discover how we can collaboratively shape the future of technology 
and design. 
            </motion.p>


<div className='phones:flex phones:flex-col phones:justify-center phones:items-center mt-[80px] pc:items-start pc:justify-start '>
<p className='text-secondary text-4xl font-bold tracking-wider'>   Contact us today!</p>
<div className='flex flex-row   mt-10  m-auto '>
<ContactFunc setIsHovering={setIsHovering} />
                <section className='w-[20vw] pc:left-100  relative z-[1000000000] m-auto h-[300px]'>
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
                </section> 

     <section onMouseEnter={() => setIsHovering('right')} onMouseLeave={() => setIsHovering('')} className='phones:hidden '>
     <Maps />
     <p className='text-white text-2xl pt-2'>Opening time : Mon - Fri || 10.00 AM - 06.00 PM</p>
     <Footer />
     </section> 
</div>

<section  className='pc:hidden mt-20'>
     <Maps />
    <p className='text-white text-2xl p-10'>
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