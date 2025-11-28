//1. Import area
import { prisma } from "@/lib/prisma";

import React from 'react'

export default async function page() {
        //prisma.model.method(aa1) //actual Argument
    let todosRecords = await prisma.todo.findMany(); // Read Operation  CRUD //camleCase
    console.log(todosRecords);
    //Return Statement
    return (
        <>
            <h1>This is an example of ServerSide Componet</h1>  
            <ul>
                {
                    //array.map(aa1,aa2,aa3);
                    todosRecords.map((cv,idx,arr)=>{
                        return (<li key={idx}>{cv.title}</li>)
                    })
                }
            </ul>
        </>
    )
}
