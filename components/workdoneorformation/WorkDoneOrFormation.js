import React, { useState } from "react";
import styles from './workdoneorformation.module.scss'

export function WorkDoneOrFormation({title,text,date,finish}) {
    let [lirePlus,setLirePlus] = useState(false)
    return <div className={styles['card-exp']}>
        <h3>{title}</h3>
        {!lirePlus && <p>{text.substring(0,200)}.... </p>}
        {lirePlus && <p>{text}</p>}
       { !lirePlus &&<span className={styles['card-exp__lirePlus']} onClick={()=> setLirePlus(e => !e)}>Lire plus</span>}
      { lirePlus &&  <span className={styles['card-exp__lirePlus']} onClick={()=> setLirePlus(e => !e)}>Lire moins</span>}

        <div className={styles['card-exp__details']}>
            <span>{date}</span>
            <span>{finish}</span>

        </div>
    </div>;
}
