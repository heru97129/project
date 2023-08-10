import React, { useEffect,useRef } from 'react'
import styles from './contact.module.scss'
import { Span } from '../topspan/Span'

function Contact({getboxArea}) {
    let contactRef = useRef()

    useEffect( ()=>{
         getboxArea({Contact : contactRef.current.offsetTop})
    },[])
  return (
    <div className={styles['contact']} ref={contactRef}>
        <div className={styles['contact__container']}>
            <Span text='📬 Contact' />
            <h1>Contactez moi !! </h1>
            <div className={styles['contact-infos']}>
                <span>
                    <img   src='images\WHATSAPP.png' />
                    <p>plus d'infos</p>
                </span>
                <span>
                    <img src='images\PaperPlaneTilt.png'/>
                    <h3>Email:</h3>
                    <p>Beaujourgregory@gmail.com</p>
                </span>
            </div>

            <p className={styles['back-top']}>Revenir au top <img src="images\ArrowUp.png" /> </p>

        </div>
    </div>
  )
}

export default Contact