
import {motion} from 'framer-motion'
import { fadeIn,textVariant} from "../../utils/Motion"
import { SectionWrapper } from '../../hoc'
import bot from '../../assets/icons/bot.png'
import {Tilt} from 'react-tilt';
import React,{ useState } from 'react';




  function Bot() {

    const [open, setOpen] = useState(false);

    const other = [
        {
          title: 'Bot',
          description: 'A onboarding project for Applied Computing for kids',
          read:' Meet our advanced chatbot technology—an efficient personal assistant automating tasks, minimizing errors, and ensuring 24/7 availability. Boosting productivity by handling redundant functions, this cutting-edge solution empowers your business with streamlined operations and reliable support. Embrace a future of precision and efficiency with our versatile chatbot at your service.',
          icon : bot
        }
      ]
      




const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    2000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const handleClick = () => {
setOpen(open?false:true)
}



  return (
    <>
   <div className='flex flex-col'>
  <motion.p 
  variants={fadeIn("","",0.1,1)}  className='mt-4 text-black text-center  m-auto text-[17px] max-w-3wl leading-[30px]'>
  Bot Technology
  </motion.p>
  <div className='mt-2 flex flex-col items-center justify-center'>
    {other.map((services,index) => (
      <React.Fragment key={index}>
        <Tilt className='' options={defaultOptions}>
          <motion.div
            variants={fadeIn("left", "spring", index * 0.5, 0.75)}
            className=' w-full rounded-[20px] shadow-card bg-wg p-5 '>
            <div>
              <img src={services.icon} alt='web-development'  className='w-12 h-12 object-contain' />
            </div>
          </motion.div>
        </Tilt>
        <motion.p variants={fadeIn("left", "spring", index * 0.5, 0.75)} className={`${open? 'w-[250px] bg-primary p-4  mt-2':null}`}> {open? services.read :null} </motion.p>
      </React.Fragment>
    ))}


  </div> 
  </div>
    </>
  )
}

export default SectionWrapper(Bot,"work")