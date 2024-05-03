import fastify from 'fastify';
import { routes } from "./routes";
import cors from '@fastify/cors'

const app = fastify({ logger: true })
app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message })
})

const start = async () => {

    await app.register(cors);
    await app.register(routes);


    try {
        const port = process.env.PORT || 3333
    } catch (error) {
        process.exit(1) // sudo npm install @types/node --save
    }
}

start();