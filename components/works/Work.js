import React from "react";
import styles from './work.module.scss'
export function Work({title,desc,imge,techno,link}) {
    return <div className={styles['travaux']}>
        <div className={styles['travaux__title']}>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <div className={styles['travaux__description']}>
            {techno.map(data =>{
             

             return <span >{data}</span>

            })}
     
             <a href={link}>
             <img src={imge}/>
             </a>
    

        </div>

    </div>;
}
