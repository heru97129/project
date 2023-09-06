import React from "react";
import styles from './span.module.scss'
import { motion } from "framer-motion"

export function Span({text}) {
    return <motion.span className={styles['span']}
    initial={{ opacity: 0, x: -100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay:.3}}
    >
        {text}

    </motion.span>;
}
