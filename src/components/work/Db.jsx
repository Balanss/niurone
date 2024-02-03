
import {motion} from 'framer-motion'
import { fadeIn,textVariant} from "../../utils/Motion"
import { SectionWrapper } from '../../hoc'
import firebase from '../../assets/icons/fb.png'
import {Tilt} from 'react-tilt';



  function Db() {


const db = [
  {
    title: 'Firebase',
    description: 'A onboarding project for Applied Computing for kids',
    icon : firebase
},
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

  return (
<div className='  p-3 '>
  <motion.p 
  variants={fadeIn("","",0.1,1)}  className='mt-4 text-black text-center  m-auto text-[17px] max-w-3wl leading-[30px]'>
  database
  </motion.p>
  <div className='mt-2'>
    {db.map((services,index) => (
          <Tilt className=''   options={defaultOptions} key={index}>
          <motion.div
            variants={fadeIn("left", "spring", index * 0.5, 0.75)}
            className=' w-full rounded-[20px] shadow-card bg-wg  p-5'>
            <div>
              <img
                src={services.icon}
                alt='web-development'
                className='w-12 h-12 object-contain'
              />
            </div>
          </motion.div>
        </Tilt>
    ))}
  </div>


  





</div>
  )
}

export default SectionWrapper(Db,"work")