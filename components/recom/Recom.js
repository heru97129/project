import React from "react";
import styles from './recom.module.scss'
export function Recom({text,poste,person}) {


    return <div className={styles['recoms']}>
        <img src='images\Quotes.png'/>
        <p>{text}
        </p>
        <div className={styles['recoms__profil']}>
            <img src='images\image 3.png'/>
            <div>
                <h3>{person}</h3>
                <p>{poste}</p>
            </div>
        </div>
    </div>;
}
