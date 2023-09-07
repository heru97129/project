import React, { MutableRefObject, useRef } from 'react'
import styles from './homepage.module.scss' ;
import Range from '../therange/Range';
import OurProducts from '../ourproducts/OurProducts';
import Rooms from '../rooms/Rooms';
import Fourniture from '../fourniture/Fourniture';

function HomePage({}) {

  
return (
    <main >
    <div className={styles['homepage']}>

    </div>
    <Range />
    <OurProducts />
    <Rooms />    
    <Fourniture />
    </main>
  )
}

export default HomePage