import React from 'react'
import { useState } from 'react';
import { getNames } from 'country-list';
import Select from 'react-select';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

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


    const handleSubmit = (event) => {
      event.preventDefault();
     

      if (userEmail !== "" && userName !== "" && selectedCountry !== "" && message !== "") {
        // ... your form submission logic ...

        emailjs.send(import.meta.env.VITE_SOME_APP_SERVICE, import.meta.env.VITE_SOME_APP_ID , {
            from_name: userName,
            from_email: userEmail,
            from_phone: userPhone,
            from_company: userCompany,
            from_location: userLocation,
            message: userMessage,
            from_country: selectedCountry,
            message_type: message
            }, import.meta.env.VITE_SOME_APP_KEY)
            .then(() => {
                        toast.success("Email has been sent and we will be contacting you shortly. Thank you!");
                         setIsHovering(false);
                         setMessage('')
        setSelectedCountry('')
        setUserName('')
        setUserEmail('')
        setUserPhone('')
        setUserCompany('')
        setUserLocation('')
        setUserMessage('')
            },
            (error) => {
                toast.error("Error sending email. Please try again.");
                console.log(error.text)
            });
       
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

      }
    };

  return (
    <div className='phones:w-2/4  '>
    <form onSubmit={handleSubmit} className="space-y-4   mt-5 text-black pc:flex pc:flex-col pc:items-start"  onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave} >
     <section className='pc:flex flex-row gap-5'>
<div>
                     <label htmlFor="name" className="block text-sm font-medium text-white"><span className='text-red-500'>*</span> Name:</label>
                     <input type="text" id="name" name="name" required className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white text-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={(e) => setUserName(e.target.value)} />
                 </div>
                 <div>
                     <label htmlFor="email" className="block text-sm font-medium text-white"> <span className='text-red-500'>*</span> Email:</label>
                     <input type="email" id="email" name="email" required className="mt-1 block w-full py-2 px-3 border text-black border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  onChange={(e) => { setUserEmail(e.target.value);}} />

                 </div>
         </section>
                 <div>
                     <label htmlFor="phone" className="block text-sm font-medium text-white">Phone:</label>
                     <input type="tel" id="phone" name="phone"  className="mt-1 block w-full py-2 px-3 border text-black border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  onChange={(e) => setUserPhone(e.target.value)}/>
                 </div>
                 <div>
                     <label htmlFor="company" className="block text-sm font-medium text-white">Company:</label>
                     <input type="text" id="company" name="company"  className="mt-1 block w-full py-2 px-3 border text-black border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  onChange={(e) => setUserCompany(e.target.value)}/>
                 </div>
                 <div>
                     <label htmlFor="location" className="block text-sm font-medium text-white">Location:</label>
                     <Select 
                       options={countries} 
                       onChange={option => setSelectedCountry(option.value)} 
                     />
                 </div>
                 <div>
                 <select className='w-full font-medium p-2 text-black rounded-md' value={message} placeholder='Please select one' onChange={(e) => setMessage(e.target.value)}>
                   
       <option >Interested in a new website?</option>
       <option >Interested in a ai automated chatbot?</option>
       <option >Information for Alma Matter Labs?</option>
       <option >Interested in updating a current website?</option>
       <option >Interested in a meeting with us?</option>
       <option >Business collaboration</option>
       <option >Student Advice</option>
       <option >Career Guidance</option>
                    </select>
                 </div>

                 <textarea  cols="20" rows="6" className="w-full rounded-md p-2 text-black" placeholder='Please feel free to ask any other information and we will get back to you!' onChange={(e) => setUserMessage(e.target.value)}></textarea>
                
                 <button disabled={!notARobot?true:false} className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
             </form>

             <div className='shadow-card shadow-shadow1 bg-wg mt-2 text-black p-5 rounded-md   '>
               <label htmlFor="robot" className="block text-sm font-medium ">To confirm you are not a robot:</label>
               <input  type="radio" id="notARobot" name="verification" value="notARobot" onChange={() => setNotARobot(true)} className='cursor-pointer'/>
               <label htmlFor="notARobot">Click here</label>
             </div>
</div>
  )
}
