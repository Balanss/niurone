
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React,{ useState ,useEffect,useRef,Suspense} from "react";
import Roadmap from "./components/Roadmap";
import { motion,useTransform,useViewportScroll } from "framer-motion";
import MiddleText from "./components/MiddleText";
import LoadingBar from "./components/LoadingBar";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import bgImage from './assets/bgpic.png';



const ServiceSuit = React.lazy(() => import('./components/ServiceSuit'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));


function App() {

const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(false);
  const [bgTheme, setBgTheme] = useState('1');

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




const { scrollYProgress } = useViewportScroll();
const opacity = useTransform(scrollYProgress, [0.9, 1, 1], [0.9, 1, 1]);
const scale = useTransform(scrollYProgress, [1, 1, 1], [0, 1, 1]);
//transition-all duration-2000 ease-in-out animate-reveal



  return (
   
      <BrowserRouter>
{isLoading ?
  <div className="fixed inset-0 z-50 bg-slate-800 h-screen w-screen flex items-center justify-center">
            <LazyLoadImage
  alt={'background image'}
  src={bgImage} // replace with the path to your image
  className={`opacity-50 absolute  z-[1000000000000000] bg-no-repeat w-[100vw] h-[100vh] bg-cover bg-center`}
/> 
      <LoadingBar setIsLoading={setIsLoading} />
  </div>
:
   <motion.div className={` bg-backOne relative inset-0  z-50  bg-cover bg-no-repeat  overflow-x-hidden`}  initial={{ opacity: 0.9 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 2.9 ,ease:'easeInOut'}}>
        <Navbar status={status} setStatus={setStatus}/>
        <div className={` bg-test  opacity-50 w-screen h-screen bg-cover  fixed bg-no-repeat`}> </div>
        <div  className="  overflow-hidden bg-hero-pattern bg-cover bg-no-repeat bg-center"  >
          <LandingPage status={status} setStatus={setStatus} />
        </div>

        <motion.div   className="relative z-[10000] overflow-hidden  "   style={{ opacity, scale }} >
      
       <ServiceSuit />
       
          <MiddleText/>
        </motion.div>

          <div className="relative z-[10000] overflow-hidden"  >
        <Suspense fallback={<div>Loading...</div>}>
        <About/>
          </Suspense>
          </div>


          <div className="relative z-[10000] overflow-hidden"  >
        <Suspense fallback={<div>Loading...</div>}>
         <Roadmap/>
          </Suspense>
          </div>


          <div className="relative z-[10000] " >
         <Suspense fallback={<div>Loading...</div>}>
         <Contact/>
          <Footer/>
          </Suspense>
          </div>

      





        </motion.div>
}

    
      </BrowserRouter>
  );
}

export default App;