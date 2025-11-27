import React from 'react'
import { prisma } from "@/lib/prisma";

export default async function page({params:params}) { //formal argument
    //We are reciving Params
    const { cityname,category } = await params

    //Database
    // Example: Fetch data using Prisma
                    //model=table
                   //awail prisma.model.method(aa1,aa2)
    //const cities = await prisma.cities.findMany(); 


    //2. We are return Params
    return (
        <div>page {cityname} {category}</div>
    )
}
