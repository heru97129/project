import React from 'react'
import styles from './footer.module.scss'

function Footer() {
  return (
    <div className={styles['footer']}>
         <p>Copyright © Beaujour grégory · 2023</p>
         <div className={styles['footer__icones']}>
            <img src='images\linkedingrey.png'/>
            <img src='images\githubgrey.png'/>
            <img src='images\behancegrey.png'/>

         </div>
          
    </div>
  )
}

export default Footer