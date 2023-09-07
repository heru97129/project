'use client';

import { createSlice } from "@reduxjs/toolkit"



export interface CounterState {
    value : number
    name : string
}

const initialState : CounterState = {
    value : 0,
    name:'none'
}

export const counterSlice = createSlice({
   name : 'counter',
   initialState,
   reducers : {
     increment : (state) => {state.value += 1},
     decrement : (state) => {state.value -= 1},
     incrementByAmount : (state,action) => {
        state.value += action.payload

     },
     SET_NAME :((state,action)=> void(state.name = action.payload))

   }
})


export const {increment,decrement,incrementByAmount,SET_NAME} = counterSlice.actions

export default counterSlice.reducer