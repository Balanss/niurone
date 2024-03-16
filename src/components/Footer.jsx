import  { useState } from 'react'
import email from '../assets/email.png'
import pin from '../assets/pin.png'
import number from '../assets/number.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'


export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [changeBg, setChangeBg] = useState('new');

  const gradients = {
    newBg: 'radial-gradient(rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))',
    new: 'radial-gradient(rgb(29, 34, 43), rgb(18, 22, 33), rgb(39, 50, 67))'
  };

  const resources = [
    {url:'https://sketchfab.com/3d-models/360-sphere-robot-a0bd28b7133648848427a5c27975611b',name:'360 Sphere Robot'},
    {url:'https://sketchfab.com/3d-models/brain-hologram-09d686a1a1f745cba6b2385d0c831214',name:'Brain Hologram'},
    {url:'https://lordicon.com/icons',name:'Free gif animations'},
  ]

  return (
    <div className=' bg-white text-black px-6 py-3 w-screen  flex pc:inline-flex pc:gap-10 pc:justify-center pc:items-start phones:justify-center phones:items-center phones:flex-col pc:text-xs' >
      
      <h3 className='text-md pl-2 pt-2  pc:mr-auto'>Niurone &copy; 2024 </h3>

      <div className=' flex gap-y-3 gap-x-3 flex-row  '>
      <section className='flex gap-2 items-center'>
      <img src={email} alt='email' className='w-4 h-4 inline-block '/>
        <p className='inline-block  text-sm'> niurone@shaananportfolio.com </p>
      </section>

      <section className='flex gap-2 items-center'>
      <img src={number} alt='email' className='w-4 h-4 inline-block '/>
        <p className='inline-block  text-sm'> +597 8550581 </p>
      </section>

      <section className='flex gap-2 items-center'>
      <img src={pin} alt='email' className='w-4 h-4 inline-block '/>
        <p className='inline-block  text-sm'> Agilalaan #79, Paramaribo, Suriname  </p>
      </section>

      <section className='flex gap-2 items-center hover:scale-[1.1]'>
        <img src={facebook} alt='facebook' className='w-4 h-4 inline-block '/>
        <a href="https://www.facebook.com/squarelion/" target="_blank" rel="noopener noreferrer"> Facebook</a>
      </section>

      <section className='flex gap-2 items-center hover:scale-[1.1]'>
        <img src={linkedin} alt='linkedin' className='w-4 h-4 inline-block '/>
        <a href="https://www.linkedin.com/company/squarelion-agency/mycompany/" target='_black' rel='noopener noreferrer'>LinkedIn</a>
      </section>

      
        <button onClick={() => setShowModal(true)}  className='bg-blue-500 hover:bg-blue-700 text-white text-xs  py-1 px-1 rounded mt-1' > Resources
        </button>
      </div>
  

        {showModal && (
          <div className='fixed inset-0 flex items-center justify-center z-[50000000000]'>
            <div className='bg-white text-black p-8 rounded shadow-lg flex flex-col gap-10'>
              <h2>Resources used for this page:</h2>
              {resources.map((resource, index) => (
                <a 
                  key={index} 
                  href={resource.url} 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='text-blue-500 hover:text-blue-700'
                >
                  {resource.name}
                </a>
              ))}
              <button onClick={() => setShowModal(false)} className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
  )
}