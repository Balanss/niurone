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
  setTimeout(() => {
    setContactSide(true);
  }
  , 2000);
}
, []);


const { scrollYProgress } = useViewportScroll();
const opacity = useTransform(scrollYProgress, [0.9, 1, 1], [0.9, 1, 1]);
const scale = useTransform(scrollYProgress, [1, 1, 1], [0, 1, 1]);



const [changeBg, setChangeBg] = useState('newBg');




const gradients = {
  newBg: 'radial-gradient(rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))',
  new: 'radial-gradient(rgb(29, 34, 43), rgb(18, 22, 33), rgb(39, 50, 67))'
};


  return (
   
      <BrowserRouter>
  <motion.div className={`relative inset-0 z-50`} initial={{ opacity: 0.9 }} style={window.innerWidth < 625?{ backgroundImage: gradients['new'] } : { backgroundImage: gradients['newBg'] }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2 ,ease:'easeInOut'}}>
    <Navbar status={status} setStatus={setStatus}/>
    
    <div>
      <LandingPage status={status} setStatus={setStatus} />
    </div>

    <section className="relative overflow-hidden" >
      
      <SparklesCore id="sparkles" className="absolute background top-10 hidden  tablet:flex  tablet:right-8 lg:right-20  xl:right-40 bottom-10 z-[-1] w-[10%]" />
      <motion.div style={{ opacity, scale }}>
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