import {useState} from 'react'
import { Link } from 'react-router-dom'
import {style} from '../style'
import {navLinks} from '../constants'
import menu from '../assets/menu.png'
import close from '../assets/close.png'
import logo from '../assets/aitumeicon.png'
import { motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Navbar() {

    const [active,setActive] = useState('')
    const [toggle,setToggle] = useState('false')
  



//bg-[#050816]
 //&nbsp; 
    return (
        <nav className={`${style.paddingX} w-screen flex items-center py-5 fixed top-0 bg-white backdrop-blur-md  rounded-lg z-[100000]`}>
    <div className='w-full flex items-center justify-between max-w-7xl mx-auto'>
      <Link to='/' className='flex xm:flex-row items-center gap-2 xs:flex-col ' 
      onClick={() => {setActive('');
      window.scrollTo(0,0)}}>
       <LazyLoadImage
          src={logo}
          alt='logo'
          effect='blur'
          className='w-16 h-16'
        />
        <p className='text-black text-sm flex  cursor-pointer phones:text-xs'>Niurone &nbsp; | Where mind matters</p>
        </Link>
        <ul className='list-none phones:hidden sm:flex flex-row gap-10'>
          {navLinks.map((link,index) => (
         <motion.li 
         key={index} 
         transition={{ type: "spring", stiffness: 200, damping: 20 }} 
         className={`${active === link.title ? "text-primary font-extrabold   underline" : "text-black"}  hover:text-black text-[18px] font-medium cursor-pointer`}
         onClick={() => {setActive(link.title)}}
         whileHover={{ scale: 1.1 }}
       >
         <a className='text-sm' href={`#${link.id}`}> {link.title}</a>
       </motion.li>
          ))}
        </ul>

        
        <div className=' lg:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? menu:close} alt='menu' className='w-6 h-6 cursor-pointer' onClick={() => {setToggle(!toggle)}}/>
    
          <div className={`${toggle? 'hidden':'flex'} bg-four p-6 black-gradient bg-third absolute top-20 right-0 my-2 min-w[140px] z-10 rounded-xl mx-4`}>
          <ul className='list-none flex justify-end items-start  flex-col gap-4'>
          {navLinks.map((link,index) => (
            <li key={index} className={`${active == link.title? "text-white underline" : "text-white "}
              font-medium cursor-pointer text-[16px]`}
              onClick={() => {setActive(link.title);setToggle(!toggle)}}>
              <a className='text-sm' href={`#${link.id}`}> {link.title}</a>
            </li>
          ))}
        </ul>
          </div>
    
    
        </div>
      </div>
        </nav>
    
      )


}
