import React from "react";
import styles from './span.module.scss'
export function Span({text}) {
    return <span className={styles['span']}>
        {text}

    </span>;
}
