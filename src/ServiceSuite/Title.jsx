
import { motion,useTransform,useViewportScroll } from 'framer-motion'
import { style } from '../style'
import { useInView } from 'react-intersection-observer';
import { useState , useEffect} from 'react';


export default function Title() {

    const title2 = `elcome to Niurone Suite`.split('')

    const [textRef, inView] = useInView({
        triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
      });
  
      const { scrollY } = useViewportScroll();
      const opacity = useTransform(scrollY, [1000, 1800], [1.5, 0]);
      const scale = useTransform(scrollY, [800, 2000], [1.2, 0.8]);

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


  return (<> 
    <motion.div  className=' px-5 phones:text-center phones:mb-20 text-center text-black  border-black'   style={isMobile ? {} : { opacity, scale }} >  
    <span className='text-[100px] phones:text-[80px] relative left-1 text-primary font-extrabold'>W</span>
    {title2.map((el, i) => ( 
          <motion.span className={` relative ${style.heroHeadText} !text-black `} key={i}  ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ delay: i * 0.05 }}  > 
            {el}{""}
          </motion.span>
        ))}
       <motion.p ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ delay:  0.05 }} className='font-semibold  phones:text-left phones:mb-3'> Where technology design is the future!</motion.p>

<motion.p ref={textRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          transition={{ delay:  0.05 }} className='font-semibold w-1/3 phones:w-auto phones:text-left m-auto leading-loose  tracking-wider mt-2'> At Niurone, we specialize in cutting-edge technologies, focusing on Artificial Intelligence (AI), 
          automation, website development, and custom software solutions. Our dedicated team of 
          experts is driven by a passion for pushing the boundaries of what technology can achieve.</motion.p>

        
     </motion.div>
 </>  )
}
