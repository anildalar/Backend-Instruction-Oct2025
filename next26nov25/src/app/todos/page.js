'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios';

//2. Defination area
function page() {
    const [todos, setTodos] = useState([]);

    // You have to call the api
    useEffect(()=>{
        console.log('OK');
        try {
            axios.get('http://localhost:3000/api/todos')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setTodos(response.data);
                console.log('todos >>>>>>',todos);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

        } catch (error) {
            
        }

    },[]);
    //Every funciton may return something
    //array.map(function(currentValue, index, arr), thisValue)
    return (
        <>
            <div>Todos List</div>
            <ul>
                
                {
                    todos.length > 0 &&
                    todos.map((cv,idx,arr)=>{
                        return <><li>{cv.title}</li></>
                    })
                }
            </ul>

        </>
        
    )
}


//3. export area
export default page;