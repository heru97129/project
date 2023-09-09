import React from "react";
import styles from './articles-info.module.scss'
import Image from 'next/image';

export function ArticlesInformations({}) {
    return <div className={styles['informations']}>
        <div className={styles['container']}>
            <div className={styles['container__banner']}>
                <ul>
                    <li>Description</li>
                    <li>Additional information</li>
                    <li>Reviews [5]</li>
                </ul>

            </div>

            <div className={styles['container__content']}>
                <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable
                    active stereo speaker takes the unmistakable look and sound of Marshall, unplugs
                    the chords, and takes the show on the road.</p>
                <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage
                    styled engineering. Setting the bar as one of the loudest speakers in its class,
                    the Kilburn is a compact, stout-hearted hero with a well-balanced audio which
                    boasts a clear midrange and extended highs for a sound that is both articulate
                    and pronounced. The analogue knobs allow you to fine tune the controls to your
                    personal preferences while the guitar-influenced leather strap enables easy and
                    stylish travel.</p>
                <div>
                    <div className={styles["images"]}>
                        <div>
                            <Image
                                alt='Mountains'
                                src={'/images/information-article/left.png'}
                                width={0}
                                height={0}
                                style={{
                                    width:'100%',
                                minWidth: '100%',
                                height: 'auto'
                            }}
                                sizes="100vw"
                                objectFit={'contain'}/>

                        </div>
                        <div>
                            <Image
                                alt='Mountains'
                                src={'/images/information-article/right.png'}
                                sizes='100vw'
                                width={0}
                                height={0}
                                style={{
                                    width:'100%',
                                minWidth: '100%',
                                height: 'auto'
                            }}
                                objectFit={'contain'}/>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>;
}
