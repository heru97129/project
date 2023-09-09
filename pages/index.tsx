"use client"

import { useSelector,useDispatch } from 'react-redux'
import {increment,decrement,incrementByAmount} from '../src/app/GlobalRedux/features/couter/counterSlice'
import {  useState } from 'react'
import type { RootState } from '../src/app/GlobalRedux/store'
import styles from '../src/app/pages.module.css'
import BasicLayout from '../src/app/basic-layout/BasicLayout'
import HomePage from '../components/homepage/HomePage'

function Home() {




  return ( 
    <main className={styles['main']} >
   <BasicLayout >
    <HomePage />



   </BasicLayout >
    </main>
  )
}

export default Home