'use client'

import React from 'react'
import { useState } from 'react'
import {styles } from  '../../styles/page.css'

export default function Home() {

   let [data,setdata] = useState(0)
    return (
        <main className={styles} >
             {data}
             <button onClick={()=> setdata(data + 1)}>send</button>

        </main>
    )
}
