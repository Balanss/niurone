/* eslint-disable no-unused-vars */
import {motion} from 'framer-motion'
import { staggerContainer } from '../utils/Motion'

const  SectionWrapper = (Component,idName) => {

function HOC(){
    return (
        <motion.section 
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        transition={{duration: 0.7}}
        viewport={{once: true,amount: 0}}
        className={` relative `}
        id={idName}>

            <Component/>
        </motion.section>
    )
}
return HOC
}

export default SectionWrapper