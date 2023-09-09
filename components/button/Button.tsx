'use client'
import React, { useEffect, useState } from 'react'
import styles from './button.module.scss'

function Button({text,bkg}) {

 let  primary = '#B88E2F'
 let white = '#fff'
 let [color,setcolor] = useState(primary)
 let [textcolor,setTextColor] = useState(primary)
   useEffect(()=>{
    if(bkg){
      setcolor(primary)
      setTextColor(white)
    }else{
      setcolor('transparent')
      setTextColor(primary)
    }
   },[bkg])
  return (
    <div className={`${styles['button']}`} style={{backgroundColor:color,color:textcolor}}>

{text}
    </div>
  )
}

export default Button