'use client'
import { Recom } from '../recom/Recom';
import React, { useEffect,useRef,useState } from 'react'
import styles from './recommendation.module.scss'
import Verify from '../hooks/VerifyWidth';


let arrayRecoms = new Array(3).fill(0) 
function Recommendation({getboxArea}) {
    let recommandationRef = useRef()
    let [widthPosition,setWidthPosition] = useState(0)
    let VerifyWidth = new Verify(setWidthPosition,'pres')
    useEffect(()=>{
       getboxArea({Recommandation : recommandationRef.current.offsetTop})
       VerifyWidth.FindWidth()
    },[widthPosition])
    return (
        <div className={styles['recommendation']} ref={recommandationRef}>
            <div className={styles['recommendation__controler']}>
                <h1>Recommendations</h1>
                <div className={styles['arrows']}>

                    <img src='images\arrow left.png'/>
                    <img src='images\arrow right.png'/>
                </div>
            </div>
            <div className={styles['recommendation__gallerie']}>
                <div className={styles['inner-gal']}>
               {arrayRecoms.map((_,i)=>{
                 return <Recom key={i} />
               })}
               </div>
            </div>

        </div>
    )
}

export default Recommendation