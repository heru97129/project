'use client'
import React from 'react'
import { useState } from 'react'

export default function Home() {

   let [data,setdata] = useState(0)
    return (
        <main >
             {data}
             <button onClick={()=> setdata(data + 1)}>send</button>

        </main>
    )
}
