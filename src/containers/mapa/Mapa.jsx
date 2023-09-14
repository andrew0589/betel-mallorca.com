import React, { useEffect } from 'react'
import './mapa.css'



const Mapa = () => {
    useEffect(() => {
        const navLinks = document.getElementById("navLinks");
    
        function showMenu() {
          navLinks.style.right = "0";
        }
    
        function hideMenu() {
          navLinks.style.right = "-200px";
        }
      }, []);
    


    
    return (
     
        <div className='betel__mapa section__margin' id='mapa'>
            
            <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d765.138754701379!2d3.078392269624083!3d39.90659399822042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDU0JzIzLjciTiAzwrAwNCc0NC41IkU!5e0!3m2!1sro!2ses!4v1681748822625!5m2!1sro!2ses"
            width='100%'
            height='400'

            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        
        </div>
    
    )
}

export default Mapa