import React from 'react'
import styles from './range.module.scss'
import Image from 'next/image'

let tabRang = ['/images/range/range1.png','/images/range/range2.png','/images/range/range3.png']

function Range() {
  return (
    <div className={styles['range']}>
    <h1>Browse The Range</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    <div className={styles['range__images']}>
     {
        tabRang.map((data,i) =>{
         
            return(
                <Image src={data} alt='' width={400} height={500} />
            )
        })
     }

    </div>



    </div>
  )
}

export default Range