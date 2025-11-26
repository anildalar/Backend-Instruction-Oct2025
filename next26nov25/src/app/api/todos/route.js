import { prisma } from "@/lib/prisma";


//1. Function defination
export async function GET(request) {  // Fa
    //We are reciving the reqeuest
                     // model = table
                      // prisma.model.method()
     const todos = await prisma.todo.findMany();


    // We are giving the response
    //Every function may return something
    return Response.json(todos)
}