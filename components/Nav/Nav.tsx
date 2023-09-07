'use client'
import React from 'react'
import styles from './nav.module.scss'
import Image from 'next/image'




function Nav() {
  console.log('nav compo ')
    return (
        <main className={styles['nav']}>
            <div className={styles['nav__icones']}>
                <Image src={'/images/logo muble.png'} alt='logo' width={200} height={50}/>
            </div>
            <div className={styles['nav__menu']}>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className ={styles['nav__features']}>
                <Image src={'/images/acount.png'} alt='logo' width={23} height={23}/>
                <Image src={'/images/search.png'} alt='logo' width={23} height={23}/>
                <Image src={'/images/heart.png'} alt='logo' width={23} height={23}/>
                <Image src={'/images/shop.png'} alt='logo' width={23} height={23}/>

            </div>

        </main>
    )
}

export default Nav