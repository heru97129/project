import { NextResponse } from "next/server";


const DATA_API = 'https://fakestoreapi.com/products'

export async function GET(){
    const res = await fetch(DATA_API)


    const todo = await res.json()

    console.log(todo)

    return NextResponse.json(todo)

}