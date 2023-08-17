'use client'

import { WorkDoneOrFormation } from '../workdoneorformation/WorkDoneOrFormation';
import React, { useEffect,useRef,useState} from 'react'
import styles from './journey.module.scss'
import { Span } from '../topspan/Span'
import Verify from '../hooks/VerifyWidth';

let tabJob = new Array(8).fill(0)
let tabFormation = new Array(6).fill(0)

function Journey({getboxArea}) {
    let journeyRef = useRef()
    let [widthPosition,setWidthPosition] = useState(0)
    let VerifyWidth = new Verify(setWidthPosition,'pres')

    useEffect(()=>{
        getboxArea({Carriere:{
            top : journeyRef.current.offsetTop,
            bottom : journeyRef.current.offsetTop  + journeyRef.current.offsetHeight
        }})
        VerifyWidth.FindWidth()
    },[widthPosition])

    
  return (
    <div className={styles['journey']} ref={journeyRef}>
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
                    <div className={styles['inner-desk']}>
                   {tabJob.map((_,i)=>{
                    return <WorkDoneOrFormation   key={i}  />
                   })}
                   </div>
                   </div>
            </div>
            <div className={styles['school']}>
            <div className={styles['school__title']}>
            <h2>Formation</h2>
            <p>2019 à maintenant</p>
            </div>

                <div className={styles['school__desc']}>
                    <div className={styles['inner-school']}>
                    {tabFormation.map((_,j)=>{
                        return <WorkDoneOrFormation  key={j}   />
                    })}
                    </div>
                </div> 
            </div>

        </div>

    </div>
  )
}

export default Journey