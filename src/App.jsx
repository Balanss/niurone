/* eslint-disable no-unused-vars */

import { BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import React,{ useState ,useEffect,useRef,Suspense} from "react";
import Roadmap from "./components/Roadmap";
import { motion,useTransform,useViewportScroll } from "framer-motion";
import MiddleText from "./components/MiddleText";
import 'react-lazy-load-image-component/src/effects/blur.css';
import SparklesCore from "./ui/Sparkles";
import Footer from "./components/Footer";







const ServiceSuit = React.lazy(() => import('./components/ServiceSuit'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));


function App() {

// eslint-disable-next-line no-unused-vars
const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(false);
  const [bgTheme, setBgTheme] = useState('1');
  const [contactSide, setContactSide] = useState(false);


//add scroll to top when refresh
useEffect(() => {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
}, []);



useEffect(() => {
  const handleScroll = () => {
    const scrollHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= scrollHeight * 0.6) {
      setBgTheme('2');
    } else if (scrollPosition >= scrollHeight * 0.25) {
      setBgTheme('1');
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);



useEffect(() => {
  setTimeout(() => {
    setContactSide(true);
  }
  , 2000);
}
, []);


const { scrollYProgress } = useViewportScroll();
const opacity = useTransform(scrollYProgress, [0.9, 1, 1], [0.9, 1, 1]);
const scale = useTransform(scrollYProgress, [1, 1, 1], [0, 1, 1]);

//bg-new

  return (
   
      <BrowserRouter>
   <motion.div className={`  relative inset-0  z-50  bg-cover bg-no-repeat  `}  initial={{ opacity: 0.9 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 0.2 ,ease:'easeInOut'}}>
        <Navbar status={status} setStatus={setStatus}/>
        
        <LazyLoadImage
  alt={'background image'}
  src={bgImage} // replace with the path to your image
  className={` w-screen h-screen fixed `}
/> 
        <div  className=" "  >
          <LandingPage status={status} setStatus={setStatus} />
        </div>

    <section className="relative overflow-hidden" >
      
       <ServiceSuit />
       
          <MiddleText/>
        </motion.div>

      <div className="relative z-[10000] "  >
        <Suspense fallback={<div>Loading...</div>}>
          <About/>
        </Suspense>
      </div>

      <div className="relative z-[10000]">
        <Suspense fallback={<div>Loading...</div>}>
          <Roadmap/>
        </Suspense>

      </div>

  

    </section>




    <div className="relative z-[10000]">
       <Suspense fallback={<div>Loading...</div>}>
        <Contact/>
      </Suspense>
    </div>

    <div>
      <Footer/>
    </div>
  </motion.div>

    
      </BrowserRouter>
  );
}

export default App;