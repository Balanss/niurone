import React,{useState,useRef} from 'react'
import { style } from '../style'
import 'react-vertical-timeline-component/style.min.css'
import { projects } from '../constants'
import { SectionWrapper } from '../hoc'
import {motion , AnimatePresence} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';





const ProjectsCard = ({project}) => {   
    
    const [isVisible, setIsVisible] = useState(false);

    

return <motion.div className={`${project.bg} flex flex-row  border-2 border-primary shadow-card  mb-20 rounded-lg phones:!w-screen  phones:!flex-col phones:!h-full `} initial={{ scale: 1,width:'300px' }}
      animate={{ scale: isVisible ? 1.03 : 1,
      zIndex: isVisible ? 1 : 0,
      boxShadow: isVisible ? '0px 0px 20px 0px rgba(0,0,0,0.5)' : '0px 0px 0px 0px rgba(0,0,0,0.5)',
      position: isVisible ? 'relative' : 'static',
      width: isVisible ? '550px' : '300px',
      height: isVisible ? '550px' : '500px',}}
      whileHover={{ scale:  1.1 }} 
      transition={{ duration: 0.2,ease:'easeIn', type: "spring", stiffness: 90, damping: 10 }}>


<motion.section className='flex phones:flex-col flex-col gap-10 text-white items-left phones:w-screens ' > 
     <div className='text-white relative '>
           <h2 className={`${style.sectionHeadText} text-left px-10 py-10 pc:!text-[14px]`}> {project.title}</h2>
           {project.img && <div className={`${project.bg} object-cover rounded-full pc:absolute left-[-30px] p-5 top-20`}>
              <LazyLoadImage src={project.img} alt={project.title} className={`bg-white rounded-full w-[50px] h-[50px] cursor-pointer hover:scale-105`}  onClick={() => setIsVisible(!isVisible)}/>
           </div>}
          
        </div>

        <div className='relative flex items-start flex-row phones:flex-col'>
            <p className='text-sm phones:text-xl font-extrabold mb-10 pc:w-[250px] text-left xPc:w-[300px] phones:w-[90vw] phones:pl-4 pc:px-10'> {project.description}</p>
            <AnimatePresence>
         {isVisible && (
            <motion.section className={`${isVisible? 'flex ':'hidden'}`}     
             initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1,
             scale: 1 ,
             width: isVisible ? '500px' : '550px',
              height: isVisible ? '650px' : '600px'}}
            exit={{ opacity: 0, scale: !isVisible ? 1 : 1, position: !isVisible ? 'relative' : 'static'}}
            transition={{ duration: 0.2 ,ease:'easeIn'}}> 
               <ul className='flex flex-col flex-wrap  gap-y-2  phones:w-[90vw] text-sm phones:text-lg phones:px-4 '>
                {project.point1 && <div className='inline-flex '><span className='text-cyan-400 mr-2'> - </span><li className="text-left pc:w-[200px] ">{project.point1}</li></div>}
                {project.point2 && <div className='inline-flex'><span className='text-cyan-400 mr-2'> - </span><li className="text-left pc:w-[200px]">{project.point2}</li></div>}
                {project.point3 && <div className='inline-flex'><span className='text-cyan-400 mr-2'> - </span><li className="text-left pc:w-[200px]">{project.point3}</li></div>}
                {project.point4 && <div className='inline-flex'><span className='text-cyan-400 mr-2'> - </span><li className="text-left pc:w-[200px]">{project.point4}</li></div>}
                {project.point5 && <div className='inline-flex'><span className='text-cyan-400 mr-2'> - </span><li className="text-left pc:w-[200px]">{project.point5}</li></div>}
                {project.point6 && <div className='inline-flex'><span className='text-cyan-400 mr-2'> - </span><li className="text-left pc:w-[200px]">{project.point6}</li></div>}
                {project.point7 && <div className='inline-flex'><span className='text-cyan-400 mr-2'> - </span><li className="text-left pc:w-[200px]">{project.point7}</li></div>}
                {project.point8 && <div className='inline-flex'><span className='text-cyan-400 mr-2'> - </span><li className="text-left pc:w-[200px]">{project.point8}</li></div>}
                {project.point9 && <div className='inline-flex'><span className='text-cyan-400 mr-2'> - </span><li className="text-left pc:w-[200px]">{project.point9}</li></div>}
                {project.point10 && <div className='inline-flex'><span className='text-cyan-400 mr-2'> - </span><li className="text-left pc:w-[200px]">{project.point10}</li></div>}
 
             </ul>
          </motion.section>
         )}
            </AnimatePresence>
          
        </div>
</motion.section>
</motion.div>

}



 function Roadmap() {

    const [ref, inView] = useInView({
        triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes back into view
      });

    return (
        <div className='  flex justify-center phones:px-[0] pc:flex-row phones:flex-col px-[250px] items-start gap-[30px] bg-gray-700 bg-opacity-50 overflow-hidden'> 
        <div>
        <motion.div ref={ref}
  className='pt-20 flex flex-row phones:flex-col pc:w-screen pc:items-stretch pc:justify-start xPc:justify-center xPc:flex-nowrap'
  initial={{ opacity: 0, x: -500 }}
  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -500 }}
  transition={{ duration: 0.7 }} // transition duration of 0.7 seconds
> 
  {projects.map((project,index) => (
    <ProjectsCard key={index}  project={project}/>    
  ))}
</motion.div>
        </div>
        </div>
    )
}

export default SectionWrapper(Roadmap,"Products")