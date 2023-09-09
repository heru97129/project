"use client"
import { useSelector,useDispatch } from 'react-redux'
import {increment,decrement,incrementByAmount} from '../app/GlobalRedux/features/couter/counterSlice'
import {  useState } from 'react'
import type { RootState } from '../app/GlobalRedux/store'

import BasicLayout from './basic-layout/BasicLayout'
import HomePage from '../../components/homepage/HomePage'

function Home() {

  const count = useSelector((state : RootState)=> state.counter.value)
  const dispatch = useDispatch()


  return ( 
    <main>
   <BasicLayout >
    <HomePage />



   </BasicLayout >
    </main>
  )
}

export default Home