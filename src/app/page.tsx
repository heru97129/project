"use client"
import { useSelector,useDispatch } from 'react-redux'
import {increment,decrement,incrementByAmount} from '../app/GlobalRedux/features/couter/counterSlice'
import {  useState } from 'react'
import type { RootState } from '../app/GlobalRedux/store'

import BasicLayout from './basic-layout/BasicLayout'

function Home() {

  const count = useSelector((state : RootState)=> state.counter.value)
  const dispatch = useDispatch()


  return ( 
    <main>
   <BasicLayout >
    
<button onClick={()=>dispatch(increment())}>increment</button>
    <button onClick={()=>dispatch(decrement())}>decrement</button>
    <button onClick={()=>dispatch(incrementByAmount(2))}>increment by 2</button>
   <span>{count}</span> 


   </BasicLayout >
    </main>
  )
}

export default Home