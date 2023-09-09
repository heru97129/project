import React from "react";
import styles from './gallerie.module.scss'


export function Gallery({tabGallery}) {
    return <div className={styles["gallerie"]}>
        <div className={styles['grid']}>
           {tabGallery.map((data)=>{
            return(
                <div>
                    <img src={data} />
                </div>
            )
           })}
        </div>
    </div>;
}
