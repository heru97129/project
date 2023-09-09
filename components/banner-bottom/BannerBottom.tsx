import React from "react";
import Image from "next/image";
import styles from './banner-bot.module.scss'

export function BannerBottom({}) {
  return <div className={styles['banner-bot']}>
         <div className={styles['container']}>
         <div className={styles['items']}>
          <div>
            <Image src={'/images/banner-bot-shop/trophy 1.png'} alt='' width={80} height={80} />
          </div>
          <div>
          <h2>Hight Quality</h2>
            <p>crafted from top materials</p>
          </div>
         </div>
         <div className={styles['items']}>
          <div>
            <Image src={'/images/banner-bot-shop/guarantee.png'} alt='' width={80} height={80} />
          </div>
          <div>
          <h2>Warranty Protection</h2>
            <p>Over 2 years</p>
          </div>
         </div>
         <div className={styles['items']}>
          <div>
            <Image src={'/images/banner-bot-shop/shipping.png'} alt='' width={80} height={80} />
          </div>
          <div>
          <h2>Free Shipping</h2>
            <p>Order over 150 $</p>
          </div>
         </div>
         <div className={styles['items']}>
          <div>
            <Image src={'/images/banner-bot-shop/customer-support.png'} alt='' width={80} height={80} />
          </div>
          <div>
            <h2>24 / 7 Support</h2>
            <p>Dedicated support</p>
          </div>
         </div>
         </div>
      </div>;
}
  