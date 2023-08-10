'use client'
import { Recom } from '../recom/Recom';
import React, { useEffect,useRef } from 'react'
import styles from './recommendation.module.scss'


let arrayRecoms = new Array(3).fill(0) 
function Recommendation({getboxArea}) {
    let recommandationRef = useRef()

    useEffect(()=>{
       getboxArea({Recommandation : recommandationRef.current.offsetTop})
    },[])
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
               {arrayRecoms.map((_,i)=>{
                 return <Recom key={i} />
               })}
            </div>

        </div>
    )
}

export default Recommendation