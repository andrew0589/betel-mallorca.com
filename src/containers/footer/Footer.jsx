import React from 'react'
import logo from '../../assets/New Project.png'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import the Facebook and Instagram icons


const Footer = () => {
  return (
    <div className='betel__footer'>
      <div className='betel__footer-links'>
        <div className='betel__footer-links_logo'>
          <img  src={logo} alt='logo'/>
          <p>Betel Mallorca</p>
        </div>
        <div className='betel__footer-links_div'>
          <h4>Links</h4>
          <p><a href='#acasa'>Acasă</a></p>
          <p><a href='#despre_noi'>Despre noi</a></p>
          <p><a href='#servicii_inchinare'>Servicii închinare</a></p>
          <p><a href='#conducere'>Conducere</a></p>
          <p><a href='#gallery'>Galerie</a></p>
          <p><a href='#mapa'>Mapa</a></p>
          
          <p><a href='#contact'>Contact</a></p>
        </div>
        <div className='betel__footer-links_div'>
          <h4>Program</h4>
          <p>Marți 20:00 - 21:00 (Rugăciune)</p>
          <p>Joi 20:00 - 21:00 (Rugăciune)</p>
          <p>Sâmbătă 16:00 - 20-00 (Studiu)</p>
          <p>Sâmbătă 19:00 - 20-00 (Cor)</p>
          <p>Duminică 10:00 - 12:00 (Serviciu divin)</p>
          <p>Duminică 18:00 - 20:00 (Serviciu divin)</p>
        </div>
        <div className='betel__footer-links_div'>
          <h4>Contact</h4>
          <p>Carrer de Vicenç Buades, 14, 07470 Pollença, Illes Balears</p>
          <p>telefon: 0034 627 89 99 14</p>
          <p>email: dorelnichitean411@gmail.com</p>
          <p>web: www.betel-mallorca.com</p>
        </div>
      </div>
      <div className='betel__footer-copyright'>
        <div className='social-icons'>
          <a href='https://www.facebook.com/groups/731249073669709' className='social-icon' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href='https://instagram.com/tineribetelmallorca?igshid=MzRlODBiNWFlZA==' className='social-icon' target='_blank' rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <p>@2023 Betel Mallorca. All rights reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer