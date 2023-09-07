import React from 'react'
import styles from './fourniture.module.scss'
import Image from 'next/image'

let tabFourni=[
    '/images/fourniture/images1.png',
    '/images/fourniture/images2.png',
    '/images/fourniture/images3.png',
    '/images/fourniture/images4.png',
    '/images/fourniture/images5.png',
    '/images/fourniture/images6.png',
    '/images/fourniture/images7.png',
    '/images/fourniture/images8.png',
    '/images/fourniture/images9.png'
]
function Fourniture() {
  return (
    <main className={styles['fourni']}>
         <h4>Share your setup with</h4>
        <h1>#FuniroFurniture</h1>
        <div className={styles['fourni__gallerie']}>
         {tabFourni.map((data,i)=>{

            return(
                <div>
                    <img src={data} key={i}/>
                </div>
                )
         })}
        </div>

    </main>
  )
}

export default Fourniture