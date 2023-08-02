'use client'

import { WorkDoneOrFormation } from '../workdoneorformation/WorkDoneOrFormation';
import React from 'react'
import styles from './journey.module.scss'
import { Span } from '../topspan/Span'

let tabJob = new Array(8).fill(0)
let tabFormation = new Array(6).fill(0)
function Journey() {
  return (
    <div className={styles['journey']}>
        <div className={styles['journey__title']}>
        <Span text='💼 Carrière' />
         <h1>Ma trajectoire jusqu'ici</h1>
        </div>
        <div className={styles['journey__exp']}>
            <div className={styles['pro']}>
               <div className={styles['pro__title']}>
                  <h2>Professionnelment</h2>
                  <p>2022 à maintenant</p>
               </div>

                   <div className={styles['pro__desc']}>
                   {tabJob.map(_=>{
                    return <WorkDoneOrFormation     />
                   })}
                   </div>
            </div>
            <div className={styles['school']}>
            <div className={styles['school__title']}>
            <h2>Formation</h2>
            <p>2019 à maintenant</p>
            </div>

                <div className={styles['school__desc']}>
                    {tabFormation.map(_=>{
                        return <WorkDoneOrFormation     />
                    })}
                </div> 
            </div>

        </div>

    </div>
  )
}

export default Journey