/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from 'react';
import { getNames } from 'country-list';
import Select from 'react-select';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";


export default function ContactFunc({setIsHovering}) {


    const countries = getNames().map((name) => ({ label: name, value: name }));


    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userCompany, setUserCompany] = useState("");
    const [userLocation, setUserLocation] = useState("");
    const [ userMessage, setUserMessage] = useState("");
    const [selectedCountry, setSelectedCountry] = useState('');
    const [message, setMessage] = useState("Interested in a new website?");
    const [notARobot, setNotARobot] = useState(false);
   

    function handleMouseEnter() {
      setIsHovering('left');
    }
  
    function handleMouseLeave() {
      setIsHovering('');
    }


    const handleSubmit = async(event) => {
      event.preventDefault();
     

      if (userEmail !== "" && userName !== "" && selectedCountry !== "" && message !== "" && notARobot) {
        // ... your form submission logic ...

      const data ={
        name: userName,
        email: userEmail,
        phone: userPhone,
        company: userCompany,
        location: selectedCountry,
        message: message,
        userMessage: userMessage,
      }



      try{
         const response = await fetch(import.meta.env.VITE_SOME_ZAP_MAIL, {
          method: 'POST',
          mode: 'cors',
          headers: {
              'Content-Type': 'application/json',
            },
          body: JSON.stringify(data),

      });

      const text = await response.text();
       console.log(text);


        toast.success("Email has been sent and we will be contacting you shortly. Thank you!");
        setTimeout(() => {
          setIsHovering(false);
        setMessage('')
        setSelectedCountry('')
        setUserName('')
        setUserEmail('')
        setUserPhone('')
        setUserCompany('')
        setUserLocation('')
        setUserMessage('')
        setNotARobot(false);
        }, 3000);
      } catch (error) {
        toast.error("Error sending email. Please try again.");
        console.log(error.text)
      }
    } else {
        toast.error("Error sending email. Please try again.");
        setMessage('')
        setSelectedCountry('')
        setUserName('')
        setUserEmail('')
        setUserPhone('')
        setUserCompany('')
        setUserLocation('')
        setUserMessage('')
        setNotARobot(false);

      }
    };

    const handleCaptchaResponseChange = (response) => {
      setNotARobot(response ? true : false);
    };

  return (
    <div className=''>
    <form onSubmit={handleSubmit} className="space-y-4   text-black pc:flex pc:flex-col pc:items-start pc:w-[30vw]"  onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave} >
     <section className='pc:flex flex-row gap-5'>
<div>
                     <label htmlFor="name" className="block text-sm font-medium text-white"><span className='text-red-500'>*</span> Name:</label>
                     <input type="text" value={userName} id="name" name="name" required className="mt-1 phones:w-[70vw] bg-gray-800 text-white  block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setUserName(e.target.value)} />
                 </div>
                 <div>
                     <label htmlFor="email" className="block text-sm font-medium text-white"> <span className='text-red-500'>*</span> Email:</label>
                     <input type="email" id="email" value={userEmail} name="email" required className="mt-1 phones:w-[70vw]  block w-full py-2 px-3 border bg-gray-800 text-white border-gray-300   rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  onChange={(e) => { setUserEmail(e.target.value);}} />
                 </div>

                 <div>
                     <label htmlFor="phone" className="block text-sm font-medium text-white">Phone:</label>
                     <input type="tel" id="phone" value={userPhone} name="phone"  className="phones:w-[70vw] mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-800 text-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  onChange={(e) => setUserPhone(e.target.value)}/>
                 </div>
         </section>

         <section className='pc:flex flex-row gap-5'>

         <div>
                     <label htmlFor="company" className="block text-sm font-medium text-white">Company:</label>
                     <input type="text" id="company" value={userCompany} name="company"  className=" phones:w-[70vw] mt-1 block w-full py-2 px-3 border bg-gray-800 text-white border-gray-300  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  onChange={(e) => setUserCompany(e.target.value)}/>
                 </div>
                 <div className='phones:w-[70vw]'>
                     <label htmlFor="location" className="block text-sm font-medium text-white" >Location:</label>
                     <Select 
                       options={countries} 
                       onChange={option => setSelectedCountry(option.value)} 
                       className=''
                     />
                 </div>

         </section>

                 
                 <div className='phones:w-[70vw] box-border '>
                  <label htmlFor="message" className="block text-sm font-medium text-white">Please select one</label>
                  <select id="messageSelect" className='w-full font-medium p-2 bg-gray-800 text-white rounded-md ' value={message} placeholder='Please select one' onChange={(e) => setMessage(e.target.value)} >
                   <option >Please pick one of the options below</option>
       <option >You  need your business processes to be automated?</option>
       <option >Want to enroll in our partner project for software training ?</option>
       <option >Do you want a new website or revamp an old one?</option>
       <option >You want to book us for a free technology literacy session with your team?</option>
      <option >You want help to identify and manage your technology budget and vendors?</option>
      <option >Do you need help to develop a new indigenous product for your company?</option>
      <option >Want our AI chatbot services custom built for your internal or external enviroment?</option>
      <option >Want our in house Aimigo chatbot for automating your business or personal requirements on your website or webshop?</option>
      <option >Want to invest in our business?</option>
      <option >Want a free career counselling session with us?</option>
      <option >Want to join our team?</option>
                    </select>
                 </div>

                 <textarea  cols="20" rows="6" className="w-full rounded-md p-2 bg-gray-800 text-white phones:w-[70vw]"  value={userMessage} placeholder='Please feel free to ask any other information and we will get back to you!' onChange={(e) => setUserMessage(e.target.value)}></textarea>
                 <ReCAPTCHA
  sitekey={import.meta.env.VITE_SOME_KEY_CAP}
  onChange={handleCaptchaResponseChange}
  theme="dark"
  className=' '
/>
                 <button disabled={!notARobot?true:false} className=" phones:w-[70vw] w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
             </form>
</div>
  )
}
