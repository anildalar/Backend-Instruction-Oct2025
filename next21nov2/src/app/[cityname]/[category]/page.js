import React from 'react'



//1. Define 
export default async  function page({params:params}) {
    //Example of Destructuring...
    const { cityname,category } = await params
    console.log(">>>>>>",cityname);
    console.log(">>>>>>",category);
    //Every function return something
    return (
        <h1>{category} in {cityname}</h1>
    )
}


//2. Call