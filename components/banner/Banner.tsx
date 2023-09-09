import React from "react";
import styles from './banner.module.scss'
export function Banner({articlesid}) {
    return <div className={styles['banner']}>
        <h3>Home</h3>
        <span>{'>'}</span>
        <h3>Shop</h3>
        <span>{'>'}</span>
        <span className={styles['hr']}></span>
        <h3>{articlesid}</h3>
    </div>;
}
