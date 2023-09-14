import React from 'react'
import { Article } from '../../components'
import biserica from '../../assets/betel1.jpeg'
import mail from '../../assets/mail.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import {conducator01, conducator02, conducator03, conducator04, conducator05, conducator06} from './imports'
import './conducere.css'

const Conducere = () => {
  return (
    <div className='betel__conducere section__padding' id="conducere">
        <div className='container'>
            <h1 className='heading'>Conducere</h1>
            <div className='card-wrapper'>
                <div className='card'>
                    <img src={biserica} alt='card background' className='card-img'/>
                    <img src={conducator01} alt='profile image' className='profile-img'/>
                    <h1></h1>
                    <p className='job-title'>Pastor Senior</p>
                    <a href='#' className='btn pastor1'></a>
                    <ul className='social-media'>
                        <li><a href='#'><img src={mail}/></a></li>
                        <li><a href='#'><img src={facebook}/></a></li>
                        <li><a href='#'><img src={instagram}/></a></li>
                    </ul>
                </div>
                <div className='card'>
                    <img src={biserica} alt='card background' className='card-img'/>
                    <img src={conducator01} alt='profile image' className='profile-img'/>
                    <h1></h1>
                    <p className='job-title'>Conducator</p>
                    <a href='#' className='btn pastor2'></a>
                    <ul className='social-media'>
                        <li><a href='#'><img src={mail}/></a></li>
                        <li><a href='#'><img src={facebook}/></a></li>
                        <li><a href='#'><img src={instagram}/></a></li>
                    </ul>
                </div>
                <div className='card'>
                    <img src={biserica} alt='card background' className='card-img'/>
                    <img src={conducator01} alt='profile image' className='profile-img'/>
                    <h1></h1>
                    <p className='job-title'>Membru comitet</p>
                    <a href='#' className='btn pastor3'></a>
                    <ul className='social-media'>
                        <li><a href='#'><img src={mail}/></a></li>
                        <li><a href='#'><img src={facebook}/></a></li>
                        <li><a href='#'><img src={instagram}/></a></li>
                    </ul>
                </div>
                <div className='card'>
                    <img src={biserica} alt='card background' className='card-img'/>
                    <img src={conducator01} alt='profile image' className='profile-img'/>
                    <h1></h1>
                    <p className='job-title'>Conducator</p>
                    <a href='#' className='btn pastor4'></a>
                    <ul className='social-media'>
                        <li><a href='#'><img src={mail}/></a></li>
                        <li><a href='#'><img src={mail}/></a></li>
                        <li><a href='#'><img src={mail}/></a></li>
                    </ul>
                </div>
                <div className='card'>
                    <img src={biserica} alt='card background' className='card-img'/>
                    <img src={conducator01} alt='profile image' className='profile-img'/>
                    <h1></h1>
                    <p className='job-title'>Pastor Senior</p>
                    <a href='#' className='btn pastor5'></a>
                    <ul className='social-media'>
                        <li><a href='#'><img src={mail}/></a></li>
                        <li><a href='#'><img src={mail}/></a></li>
                        <li><a href='#'><img src={mail}/></a></li>
                    </ul>
                </div>
                <div className='card'>
                    <img src={biserica} alt='card background' className='card-img'/>
                    <img src={conducator01} alt='profile image' className='profile-img'/>
                    <h1></h1>
                    <p className='job-title'>Membru comitet</p>
                    <a href='#' className='btn pastor6'></a>
                    <ul className='social-media'>
                        <li><a href='#'><img src={mail}/></a></li>
                        <li><a href='#'><img src={mail}/></a></li>
                        <li><a href='#'><img src={mail}/></a></li>
                    </ul>
                </div>
                <div className='card'>
                    <img src={biserica} alt='card background' className='card-img'/>
                    <img src={conducator01} alt='profile image' className='profile-img'/>
                    <h1></h1>
                    <p className='job-title'>Conducator</p>
                    <a href='#' className='btn pastor7'></a>
                    <ul className='social-media'>
                        <li><a href='#'><img src={mail}/></a></li>
                        <li><a href='#'><img src={mail}/></a></li>
                        <li><a href='#'><img src={mail}/></a></li>
                    </ul>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Conducere