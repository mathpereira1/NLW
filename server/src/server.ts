import Fastify from 'fastify'
import cors from '@Fastify/cors'
import { PrismaClient }  from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors, {
    // configurar quais endereços podem acessar
    // origin: ['http://localhost:3000']
})

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany(
    //     {
    //     where: {
    //         title:{
    //             startsWith: 'Beber'
    //         }
    //     }
    // }
    )

    return habits
})


app.listen({
    port: 3333,
}).then(()=> {
    console.log('HTTP Server running!')
})