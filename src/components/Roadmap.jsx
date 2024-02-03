import React from 'react'
import { style } from '../style'
import { VerticalTimeline } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'
import {VerticalTimelineElement} from "react-vertical-timeline-component"
import { projects } from '../constants'
import { SectionWrapper } from '../hoc'



const ProjectsCard = ({project}) => (               
    <VerticalTimelineElement   className="vertical-timeline-element--work  "  contentArrowStyle={{ borderRight: '7px solid transparent' }}>
<div className="flex items-start overflow-hidden ">
            <span className='bg-cyan-500 mr-1 mt-4  w-2 rounded-full h-2'/>
            <span className="border-b w-[400px] h-5 flex-grow"> </span>  
        </div>

<section className='flex phones:flex-col gap-10 text-white'>
     <div className='text-white'>
           <h1 className={`${style.sectionHeadText}`}> {project.title}</h1>
        </div>
        <div>
            <p className='!text-sm font-extrabold mb-10 w-[300px] phones:w-[90vw]'> {project.description}</p>
            <ul className='flex flex-col mt-10 gap-3 phones:w-[90vw]'>
                {project.point1 && <li className="text-left"> <span className='text-cyan-400 mr-2' > - </span> {project.point1}</li>}
                {project.point2 && <li className="text-left"> <span className='text-cyan-400 mr-2' > - </span> {project.point2}</li>}
                {project.point3 && <li className="text-left"> <span className='text-cyan-400 mr-2' > - </span> {project.point3}</li>}
                {project.point4 && <li className="text-left"> <span className='text-cyan-400 mr-2' > - </span> {project.point4}</li>}
                {project.point5 && <li className="text-left"> <span className='text-cyan-400 mr-2' > - </span> {project.point5}</li>}
                {project.point6 && <li className="text-left"> <span className='text-cyan-400 mr-2' > - </span> {project.point6}</li>}
                {project.point7 && <li className="text-left"> <span className='text-cyan-400 mr-2' > - </span> {project.point7}</li>}
                {project.point8 && <li className="text-left"> <span className='text-cyan-400 mr-2' > - </span> {project.point8}</li>}
                {project.point9 && <li className="text-left"> <span className='text-cyan-400 mr-2' > - </span> {project.point9}</li>}
                {project.point10 && <li className="text-left"> <span className='text-cyan-400 mr-2' > - </span> {project.point10}</li>}

            </ul>
        </div>
</section>
    </VerticalTimelineElement>

)



 function Roadmap() {
    return (
        <div className='  flex justify-center phones:px-[0]  phones:flex-col px-[250px] items-start gap-[30px] bg-gray-700 bg-opacity-50 overflow-hidden'>
            <section className='mt-20'>
                <h1 className={`${style.heroHeadText} font-extrabold w-2/3 phones:m-auto`}>  Products </h1>
                <div className="flex items-start mt-20">
                    <div className="  border-r h-12 mx-2"></div>
                    <p className={`${style.heroSubText} !text-white phones:w-[90vw]  w-1/3`}>Our goal is to deliver the best possible product to our customers.</p>
                </div>
            </section>

            <section>

      

        <div>
            <div className='mt-20'>
            <VerticalTimeline>
                {projects.map((project,index) => (
                <ProjectsCard key={index}  project={project}/>    
                ))}
         </VerticalTimeline>
            </div>
        </div>
            </section>
        </div>
    )
}

export default SectionWrapper(Roadmap,"Products")