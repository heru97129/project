'use client'

import React from 'react'
import styles from './cardproduct.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'



function CardProd({title,desc,price,images,label}) {
  let route = useRouter()

  return (
    <div className={styles['card-prod']} onClick={()=> route.push(`/shop/${title}`)} >
      {label !== ''  &&  <span className={styles['card-prod__label']}>
            <Image src={label} alt='card' width={50} height={50}/>
        </span>}
        {label === ''  &&  <span className={styles['card-prod__label']}>
    
        </span>}
    <Image src={images} alt='card' width={350} height={350}/>
      <div className={styles['card-prod__text']}>
      
        <h2>{title}</h2>
        <p>{desc}</p>
        <h3>{price}</h3>
      </div>

    </div>
  )
}

export default CardProd