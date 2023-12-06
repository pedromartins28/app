import jwt from "@elysiajs/jwt";
import { cookie } from '@elysiajs/cookie'
import {Elysia, t} from "elysia";
import { loginSchema } from "../dtos/auth";
import { login } from "../services/auth";

const auth = new Elysia({prefix: "/auth"}).use(jwt({name: 'jwt', secret: 'loremipsumloremipsumloremipsumloremipsumloremipsumloremipsum'}))
    .use(cookie()).post("/login", async function(context){
        const {email, password} = context.body
        const user = await login({email, password})
        return await context.jwt.sign({name: user.name, email, id: String(user.id)})
}, {body: loginSchema}).post('/authenticate', async function(context){
    console.log(context.headers.autorization)
    const result = await context.jwt.verify(context.headers.autorization)
    return (result as any).id
}, {headers: t.Object({
    autorization: t.String()
})})

export default auth