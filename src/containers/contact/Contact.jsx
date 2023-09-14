import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import PopupModal from './PopupModal';





import './contact.css'

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_608fkfq', 'template_1mx3czp', form.current, 'kxoecO_pEXm5xrN6K')
      .then((result) => {
          console.log(result.text);
          setIsModalOpen(true); // Open modal on successful email send
          

      }, (error) => {
          console.log(error.text);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>
      <div className='betel__contact' id='contact'>
        <div className='betel__contact-info'>
          <h1>Carrer de Vicenç Buades, 14, 07470 Pollença, Illes Balears</h1>
          <h1>0034 627 89 99 14</h1>
          <h1>dorelnichitean411@gmail.com</h1>
          <h1>www.betel-mallorca.com</h1>
          
          
        </div>
        <div className='betel__contact-form'>
          <h2 className='gradient__text'>Trimite un mail</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className='betel__contact-numeemail'>
              <input type="text" name="from_name" className='text-box' placeholder='Nume' required/>
              
              <input type="email" name="user_email" className='text-box' placeholder='Email' required />
            </div>
          
            
            
            <textarea name="message" placeholder='Mesajul tau' required/>
            <input type="submit" value="Trimite" className='send-btn'/>

          </form>
        </div>
      </div>
      {/* Render the modal when isModalOpen is true */}
      {isModalOpen && <PopupModal closeModal={closeModal} />}
    </>
  )
}

export default Contact


