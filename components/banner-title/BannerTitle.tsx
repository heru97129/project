import React from "react";
import styles from './banner-title.module.scss'
import Image  from "next/image";
export function BannerTitle({title,logo}) {
  return <div className={styles['banner']}>
        <div>
             <p>
             {logo &&  <Image src='/images/logo-title.png' width={80} height={80} alt={''}  />}
             </p>
           <h1>{title}</h1>
           <h3>Home {'>'} {title}</h3>

        </div>
        </div>;
}
  