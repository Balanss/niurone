import webdev from '../assets/cards/web.jpg'
import auto from '../assets/cards/auto.jpg'
import worcpilot from '../assets/cards/worc.jpg'
import software from '../assets/icons/software.gif'
import aml from '../assets/cards/aml.jpg'
import firebase from '../assets/icons/fb.png'
import bot from '../assets/icons/bot.png'
import automation from '../assets/icons/automation.png'
import web from '../assets/web.gif'
import autom from '../assets/automation.gif'
import alma from '../assets/alma.gif'
import worc from '../assets/worcpilot.gif'
import botgif from '../assets/icons/botgif.gif'
import chatpic from '../assets/cards/chatpic.jpg'

export const navLinks = [
    {
      id: "services",
      title: "Niurone Suite",
    },
    {
      id: "about",
      title: "Why Us",
    }, 
    {
      id: "Products",
      title: "Products",
    },
    {
      id: "contact",
      title: "Contact",
    },

   

  ];


  export const projects = [
    {
      title: "Product // 01",
      name: "media Pilot",
      company:"Squarelion Agency",
      description:"WorcPilot is a system that is built to automate the process of project management and to make it easier for the agency to manage their projects and clients.",
      point1:'Employee management',
      point2:'Client management',
      point3:'Project management',
      point4:'Task management',
      point5:'Content management',
      point6:'Design management',
      point7:'File management',
      point8:'Project tracking',
      point9:'Project reporting',
      point10:'Document automation',
      stylingDot:'bg-cyan-500  mt-3 w-4 rounded-full h-4',
      stylingLine:'border-b w-[400px] h-5 flex-grow',
    },
     {
      title: "Product // 02",
      Name : "Aimigo",
      company:"Squarelion Agency",
      description:"Aimigo is an automated AI tool in the form of a chatbot designed for businesses to automate redundant tasks, handle data, and assist customers, Fast and efficiently.",
      point1:'Customized chatbot on websites',
      point2:" Customized chatbot on windows pc",
      point3:'Customized chatbot on mobile devices (WhatsApp)',
      point4:'Automated customer support',
      point5:'Automated lead generation',
      point6:'Automated data collection',
      point7:'Automated data analysis',
      point8:'Automated Emailing',
      stylingDot:'bg-cyan-500  mt-3 w-4 rounded-full h-4',
      stylingLine:'border-b w-[400px] h-5 flex-grow',

    },

    {
      title: "Product",
      name:'Deal Stamps',
      company:"Squarelion Agency",
      description:"more info coming soon! Work in progress",
      point1:'Point of sale system',
      point2:'Inventory automation management',
      point3:'Deal Stamps',

    },

  ];

export const tech = [{
  title:'Innovative Technology Solutions',
  number:'01',
  description:'Our technology solutions are designed to propel businesses into the future. From harnessing  the capabilities of Artificial Intelligence to creating efficient automation systems, we provide the  tools that empower organizations to thrive in an ever-evolving digital landscape. ',
  // icon:[ html,css,javascript,react,three,tailwind,vite,electron]
},
{
  title:'Sleek and Functional Designs',
  number:'02',
  description:'Our design philosophy revolves around the idea that beauty should meet functionality. Whether crafting a corporate website, developing an intuitive user interface, or designing custom software, our team of skilled designers ensures that every pixel aligns with your brand identity and enhances the overall user experience.',
  icon:[ bot,automation,firebase],
},
{
  title:'Responsive Web Development',
  number:'03',
  description:'In a world where accessibility is key, our responsive web development ensures that your online  presence shines on all devices. From desktops to smartphones, our websites adapt seamlessly,  providing users with a consistent and engaging experience. ',
  // icon:[ html,css,javascript,react,three,tailwind,vite,electron]
},
{
  title:'Bespoke Software Tailored to You',
  number:'04',
  description:'Recognizing the uniqueness of every business, our custom software solutions are meticulously crafted to meet your specific needs. We go beyond functionality, focusing on creating software that reflects your brand essence and streamlines your operations.',
  // icon:[ html,css,javascript,react,three,tailwind,vite,electron]
},
{
  title:'Intuitive User Experiences',
  number:'05',
  description:'We understand that user experience is at the core of successful designs. From wireframes to  interactive prototypes, we meticulously plan and execute designs that not only look visually  stunning but also provide an intuitive and delightful journey for your users. '
},
{
  title:'Security at the Forefront',
  number:'06',
  description:'In a digital age where cybersecurity is paramount, our designs prioritize security. Whether  developing websites, applications, or custom software, we implement robust security measures to safeguard your digital assets and user information. '
},
]

export const  services = [ {
  title: 'Web Development',
  description:  " Corporate Websites: Design and develop professional, responsive websites that showcase your  brand identity and provide essential information.", 
description2:'E-commerce Platforms: Build robust online shopping platforms with secure payment gateways, ensuring a seamless customer experience.',
description3:' Web Applications: Develop customized web applications tailored to specific business needs,  enhancing user engagement and functionality.',
  icon : web,
  service: 1,
  img: webdev

},
{
  title: 'Ui/Ux Design',
  description: 'Performance Optimization: Ensure fast loading times and resource efficiency for seamless user experiences across devices, platforms, and browsers.',
  description2:'Enhanced Visual Communication: Utilize 3D technology for richer visual storytelling, making complex information more engaging and understandable.',
  icon : worc,
  service: 6,
  img: worcpilot
},
{
  title: 'Automation Solutions',
  description: 'Workflow Optimization: Design and implement automated processes to streamline workflows, allowing employees to focus on more strategic responsibilities. ',
  description2:'Chatbot Development: Conversational AI: Build intelligent chatbots for websites or applications, enhancing customer interaction and support services. ',
  icon : autom,
  service: 2,
  img: auto
},
{
  title: 'Chatbot Development',
  description: 'Conversational AI: Build intelligent chatbots for websites or applications, enhancing customer interaction and support services. ',
  description2:'Custom Chatbot Development: Develop customized chatbots that are tailored to your specific business needs, providing automated support and customer engagement. ',
  icon : botgif,
  service: 3,
  img: chatpic

},
{
  title: 'Custom Software Development',
  description: 'Bespoke Software Solutions: Develop custom software solutions that are tailored to your specific business needs. ',
  description2:'Software Integration: Seamlessly integrate custom software with existing systems to create a cohesive and efficient IT infrastructure.',
  icon : software,
  service: 4,
  img: auto

},

  {
      title: 'Alma Mater Labs',
      description: 'Technology Consulting: Provide expert guidance on technology adoption, strategy, and digital  transformation.',
      description2:'Training Programs: Offer training sessions to empower clients with the skills and knowledge  required to leverage new technologies effectively.',
      icon : alma,
      service: 5,
      img: aml
  },


]

export const serviceMini=[{
  title: 'Web Development',
  description: 'We create and develop websites that are responsive, user-friendly, and visually appealing.  Our websites are designed to enhance your online presence and provide a seamless user  experience.',
  icon : web,
  service: 1,
},
{
  title: 'Ui/Ux Design',
  description:"Our focus in designing UI/UX-friendly websites revolves around creating platforms that seamlessly integrate client needs with cutting-edge technologies, ensuring user-friendly experiences and embracing innovative solutions.",
 icon : worc,
  service: 6
},
{
  title: 'Automation Solutions',
  description: 'Business Process Automation (BPA): Develop solutions to automate end-to-end business processes for increased productivity. ',
 icon : autom,
  service: 2
},
{
  title:'Chatbot Development',
  description:'Aimigo is an intelligent chatbot that is designed to automate customer interactions and support  services. Aimigo is customized to suit your business needs and enhance customer  engagement.',
  icon : botgif,
  service: 3,
  img: auto

},
{
  title:'Custom Software Development',
  description:'We develop custom software solutions that are tailored to your specific business needs. Our  software is designed to enhance productivity, efficiency, and overall business performance.',
  icon : software,
  service: 4,
  img: auto
},
  {
      title: 'Alma Mater Labs project',
      description: 'The Applied Computing onboarding project is crafted to offer a wide-ranging support system, assisting individuals in need with fundamental principles and advanced guidance. Our initiative aims to empower participants. ',
      icon : alma,
      service: 5
},



]