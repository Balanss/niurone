/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {useState,useEffect} from 'react'
import { style } from '../style'
import 'react-vertical-timeline-component/style.min.css'
import { projects } from '../constants'
import { SectionWrapper } from '../hoc'
import {useScroll, useTransform,motion,AnimatePresence,useMotionValue} from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useInView } from 'react-intersection-observer';







const ProjectsCard = ({ project, isVisible, setIsVisible,index}) => {   
    

 const [ pulse, setPulse] = useState(false)
 
    

return (
   <motion.div
   className={` bg-cover flex flex-row border-2 border-primary bg-[#001220] shadow-card mb-20 rounded-lg  phones:!flex-col phones:!h-full`}
   initial={{ scale: 1, width: '300px' }}
   animate={{
     scale: isVisible ? 1.03 : 1,
     zIndex: isVisible ? 1 : 0,
     boxShadow: isVisible ? '0px 0px 20px 0px rgba(0,0,0,0.5)' : '0px 0px 0px 0px rgba(0,0,0,0.5)',
     position: isVisible ? 'relative' : 'static',
     width: isVisible ? '500px' : '350px',
     height: isVisible ? 'auto' : 'auto',
     padding: isVisible ? '20px' : '0px',
   }}
   whileHover={{ scale: 1.05 }}
   transition={{ duration: 0.4, ease: 'easeIn', type: 'spring', stiffness: 50, damping: 10 }}
   >
   
   
   <motion.section className='flex phones:flex-col phones:m-auto hover:cursor-pointer flex-col gap-10 text-white items-left justify-start phones:w-screens ' onClick={() => setIsVisible(isVisible ? null : index)} > 
   
        <div className='text-white relative '>
              <h2 className={`${style.sectionHeadText} text-left px-10 py-3 pc:!text-[14px]`}> {project.title}</h2>
              {project.img && <motion.div className={`bg-[#001220] object-cover w-[25vw] pc:w-auto rounded-full pc:absolute left-[-40px] p-5 top-20`}  

               animate={pulse ? { 
                initial: { scale: 1 },
    scale: 1,
    transition: {
      duration: 1,
      yoyo: Infinity
    }
  } : {}}  >
                 <LazyLoadImage src={project.img} alt={project.title} className={`bg-white rounded-full relative z-[10000000] w-[50px] h-[50px] cursor-pointer hover:scale-105 ${isVisible?'border-2 border-blue-500': ''} `}  onClick={() => setIsVisible(isVisible ? null : index)}/>
              </motion.div>}
             
           </div>
   
           <div className='relative flex items-start flex-row phones:flex-col'>
               <p className='text-sm   mb-10 pc:w-[250px] text-left xPc:w-[300px] phones:w-[40vw] phones:text-xs phones:pl-4 pc:px-10'> {project.description}</p>
               <AnimatePresence>
               {isVisible && (
             <motion.section
               className={`${isVisible ? 'flex ' : 'hidden'}`}
               initial={{ opacity: 0, scale: 1 }}
               animate={{
                 opacity: 1,
                 scale: 1,
                 width: isVisible ? '550px' : '500px',
                 height: isVisible ? 'auto' : 'auto',

               }}
               exit={{ opacity: 0,
                scale: !isVisible ? 1 : 1,
                position: !isVisible ? 'relative' : 'relative',
                top: !isVisible ? '0px' : '10px',
                right: !isVisible ? '0px' : '40px',
                width: !isVisible ? '300px' : '550px',
                height: !isVisible ? 'auto' : 'auto',

                                                         }}
               transition={{ duration: 0.05, ease: 'easeOut', }}
             >
                  <motion.ul className='flex flex-col flex-wrap  gap-y-2  phones:w-[90vw] text-sm phones:text-md phones:px- ' exit={{ opacity: 0,}}
               transition={{ duration: 0.01, ease: 'easeOut', }}>
                  {project.point1 && <div className='inline-flex pc:w-3/4'><span className='text-cyan-400 mr-2'> - </span><li className="text-left pc:w-[200px]">{project.point1}</li></div>}
                  {project.point2 && <div className='inline-flex pc:w-3/4'><span className='text-cyan-400 mr-2'> - </span><li className="text-left pc:w-[200px]">{project.point2}</li></div>}
                  {project.point3 && <div className='inline-flex pc:w-3/4'><span className='text-cyan-400 mr-2'> - </span><li className="text-left pc:w-[200px]">{project.point3}</li></div>}
                  {project.point4 && <div className='inline-flex pc:w-3/4'><span className='text-cyan-400 mr-2'> - </span><li className="text-left pc:w-[200px]">{project.point4}</li></div>}
                  {project.point5 && <div className='inline-flex pc:w-3/4'><span className='text-cyan-400 mr-2'> - </span><li className="text-left pc:w-[200px]">{project.point5}</li></div>}
                  {project.point6 && <div className='inline-flex pc:w-3/4'><span className='text-cyan-400 mr-2'> - </span><li className="text-left pc:w-[200px]">{project.point6}</li></div>}
                  {project.point7 && <div className='inline-flex pc:w-3/4'><span className='text-cyan-400 mr-2'> - </span><li className="text-left pc:w-[200px]">{project.point7}</li></div>}
                  {project.point8 && <div className='inline-flex pc:w-3/4'><span className='text-cyan-400 mr-2'> - </span><li className="text-left pc:w-[200px]">{project.point8}</li></div>}
                  {project.point9 && <div className='inline-flex pc:w-3/4'><span className='text-cyan-400 mr-2'> - </span><li className="text-left pc:w-[200px]">{project.point9}</li></div>}
                  {project.point10 && <div className='inline-flex pc:w-3/4'><span className='text-cyan-400 mr-2'> - </span><li className="text-left pc:w-[200px]">{project.point10}</li></div>}
    
                </motion.ul>
             </motion.section>
            )}
               </AnimatePresence>
             
           </div>
   </motion.section>
   </motion.div>
)    


}



 function Roadmap() {
  
   const [visibleProject, setVisibleProject] = useState(null);

   const scrollY = useMotionValue(window.scrollY);
   const opacity = useTransform(scrollY, [4000, 5200], [1, 0.5]);
   const scale = useTransform(scrollY, [4000, 5200], [1, 0.8]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);
 
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



   const [textRef, inView] = useInView({
     triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
   });


   const title2 = `Products`.split('')


   return (
     <motion.div className='flex justify-center phones:px-[0] pc:flex-row phones:flex-col  items-start gap-[30px]  overflow-hidden tablet:w-[60vw] pc:w-[40vw] m-auto'  style={ isMobile? null : { opacity, scale }} >
    <div className='flex flex-col items-start justify-left tablet:px-4 pc:pl-10 xPc:pl-4 '>
    <section className=' phones:w-[80vw] m-auto  pc:text-left'>
      <div className='   py-2 tracking-widest pc:text-left   m-auto'>
           {title2.map((el, i) => ( 
          <motion.span className={` relative   ${style.heroHeadText} !text-white  `} key={i}  ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ delay: i * 0.05 }}  > 
            {el}{""}
          </motion.span>
        ))}
      </div>
   
      <p className='text-white phones:text-left pc:text-left pc:pl-2 xPc:pl-0  py-2'>We are constantly working on new products to provide innovative solutions to our clients. Our products are designed to enhance business operations, automate redundant tasks, and provide a seamless user experience.</p>
    </section>

    <motion.div className='pt-20 tablet:flex-col flex flex-row  xs:flex-col xs:px-3 tablet:px-8 relative   pc:items-stretch'>
         {projects.map((project, index) => (
           <ProjectsCard
             key={index}
             project={project}
             isVisible={visibleProject === index}
             setIsVisible={setVisibleProject}
             index={index}
           />
         ))}
       </motion.div>
</div>

  

  
    </motion.div>
    )
}

export default SectionWrapper(Roadmap,"Products")