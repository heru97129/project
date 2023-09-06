import {Span} from '../topspan/Span';
import React, {useEffect, useState} from "react";
import styles from './home.module.scss'
import {motion} from "framer-motion"

export function HomePage({}) {

    return <div className={styles['home']}>
        <div className={styles['home__pres']}>
            <div className={styles['svgLogo']}>

                <h2>
                    <motion.span
                        initial={{
                        opacity: 0,
                        y: -100
                    }}
                        animate={{
                        opacity: 1,
                        Y: 0
                    }}
                        transition={{
                        delay: .1
                    }}>A.</motion.span>
                    <motion.span
                        initial={{
                        opacity: 0,
                        y: -100
                    }}
                        animate={{
                        opacity: 1,
                        Y: 0
                    }}
                        transition={{
                        delay: .2
                    }}>D.</motion.span>
                    <motion.span
                        initial={{
                        opacity: 0,
                        y: -100
                    }}
                        animate={{
                        opacity: 1,
                        Y: 0
                    }}
                        transition={{
                        delay: .3
                    }}>N.</motion.span>
                    <motion.span
                        initial={{
                        opacity: 0,
                        y: -100
                    }}
                        animate={{
                        opacity: 1,
                        Y: 0
                    }}
                        transition={{
                        delay: .4
                    }}>A</motion.span>

                </h2>
            </div>
            <div>
                <Span text='👋 Salutations !'/>
                <motion.h1
                    initial={{
                    opacity: 0,
                    x: -100
                }}
                    animate={{
                    opacity: 1,
                    x: 0
                }}
                    transition={{
                    delay: .3
                }}>Beaujour
                    <br/>
                    Grégory
                </motion.h1>
                <motion.h3
                    initial={{
                    opacity: 0,
                    y: -100
                }}
                    animate={{
                    opacity: 1,
                    y: 0
                }}
                    transition={{
                    delay: .5
                }}>Front - end developpeur</motion.h3>
                <div className={styles['reseau']}>
                    <motion.img
                        initial={{
                        opacity: 0,
                        x: -100
                    }}
                        animate={{
                        opacity: 1,
                        x: 0
                    }}
                        transition={{
                        delay: .8
                    }}
                        src="images/behance.png"/>
                    <motion.img
                        initial={{
                        opacity: 0,
                        x: -100
                    }}
                        animate={{
                        opacity: 1,
                        x: 0
                    }}
                        transition={{
                        delay: 1
                    }}
                        src="images/github.png"/>

                    <motion.img
                        initial={{
                        opacity: 0,
                        x: -100
                    }}
                        animate={{
                        opacity: 1,
                        x: 0
                    }}
                        transition={{
                        delay: 1.2
                    }}
                        src="images/linkedin.png"/>

                </div>
            </div>
        </div>
        <div className={styles['home__image']}>
            <motion.img
                initial={{
                opacity: 0,
                scale: 0.5
            }}
                animate={{
                opacity: 1,
                scale: 1
            }}
                transition={{
                duration: 0.5
            }}
                src="images/anime perso (2).png"/>
        </div>
        <div className={styles['home__cv']}>
            <motion.div
                className={styles['cv']}
                initial={{
                opacity: 0,
                x: 100
            }}
                animate={{
                opacity: 1,
                x: 0
            }}
                transition={{
                delay: 1.5
            }}>
                <h3>téléchargé le cv</h3>
            </motion.div>
        </div>
    </div>;
}
