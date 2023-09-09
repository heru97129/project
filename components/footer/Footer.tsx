import React from 'react'
import styles from './footer.module.scss'


function Footer() {
  return (
    <main className={styles['footer']}>
        <div className={styles['footer__container']}>
            <div className={styles['logo']}>
                <h2>Furino.</h2>

                <p>400 University Drive Suite 200 Coral <br/> Gables,
FL 33134 USA</p>
            </div>
            <div className={styles['options']}>
             <div>
                <ul>
                    <li>Links</li>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
             </div>
             <div>
                <ul>
                    <li>Help</li>
                    <li>Payment Options</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                </ul>
             </div>
             <div>
                <ul>
                    <li>Newsletter</li>
                    <li>
                        <input placeholder='Enter Your Email Adresss' />
                        <div>
                            SUBSCRIBE
                        </div>
                    </li>
                </ul>
             </div>
            </div>
       
        </div>
        <div className={styles['right']}>
                <hr />
                2023 furino.All right reserved
            </div>

    </main>
  )
}

export default Footer