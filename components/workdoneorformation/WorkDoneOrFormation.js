import React from "react";
import styles from './workdoneorformation.module.scss'

export function WorkDoneOrFormation({title,text,date,finish}) {
    return <div className={styles['card-exp']}>
        <h3>{title}</h3>
        <p>{text.substring(0,200)}....</p>

        <div className={styles['card-exp__details']}>
            <span>{date}</span>
            <span>{finish}</span>

        </div>
    </div>;
}
