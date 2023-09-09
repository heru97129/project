import React from "react";
import Image from 'next/image'
import styles from './filter.module.scss'

export function Filter({}) {
  return <div className={styles['filter']}>
          <div className={styles['container']}>
         <div className={styles['left']}>
           <Image src='/images/shop-filter/system-uicons_filtering.png' alt='' width={30} height={30} />
           <p>filter</p>
           <Image src='/images/shop-filter/ci_grid-big-round.png' alt='' width={30} height={30} />
           <Image src='/images/shop-filter/bi_view-list.png' alt='' width={30} height={30} />
            <span></span>
             <p>Showing 1–16 of 32 results</p>
         </div>
         <div className={styles['right']}>
            <div className={styles['show']}>
              <p>Show</p>
               <span>16</span>
            </div>

            <div className={styles['sort']}>
              <p>Sort by</p>
               <span></span>
            </div>
         </div>
         </div>
        </div>;
}
  