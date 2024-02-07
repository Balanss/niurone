
import { motion, } from 'framer-motion'
import { serviceMini,services } from '../constants/index'
import { useState } from 'react'




export default function Card({setModalShow,modalShow,setIcon,setTitle,setDescription,setDescription2,setDescription3}) {





    const handleClick = (index) => {
        setModalShow(modalShow?false:true);
        setTitle(services[index].title);
        setDescription(services[index].description);
        setDescription2(services[index].description2);
        setDescription3(services[index].description3);
        setIcon(services[index].icon);
      }
      
      const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
<>
    {serviceMini.map((services,index) => (
      
        <motion.div className='grid grid-cols-1 shadow-shadow1 rounded-[20px]' key={index} transition={{ease:'easeIn',duration:0.7}}  >
          <motion.li  
             style={{ listStyleType: 'none' }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{ scale: hoveredIndex === index ? 1.1 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 ,mass:1.5}}  
            className=' phones:[250px] w-[250px] h-[450px]  bg-wg  p-[20px] rounded-[20px] shadow-card '
          >
            <img src={services.icon} alt='web-development'  className='w-12 h-12 object-contain'/>
            <motion.h3 className='text-black text-[26px] mt-2 font-bold text-center' >
              {services.title}
            </motion.h3>
            <motion.section  className='flex flex-col '>

              <motion.p className='text-black text-sm mt-5' 
               initial={{ opacity: 0 ,scale:0.0}}
          animate={{ opacity: 1 ,scale:1}}
          exit={{ opacity: 1.5 }}
          transition={{ duration: 1.5 }}> {services.description}
          </motion.p>

              <motion.button
                whileHover={{ backgroundColor: "#ffffff", color: "#003e34" }}
                transition={{ duration: 0.2 }}
                className='bg-primary text-white mt-5 p-2 rounded-md'
                onClick={() => handleClick(index)}
              >
                Learn More
              </motion.button>
            </motion.section> 
          </motion.li>
        </motion.div>

      
    ))}
 </> )
}
