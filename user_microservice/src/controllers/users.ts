import {Elysia} from "elysia";
import authenticate from "../middlewares/authenticate";
import { getUser, createUser, updateUser, delUser } from "../services/users";
import { createUserSchema, delUserSchema, updateUserSchema } from "../dtos/users";

const users = new Elysia({prefix: "/users"}).get("/", function(context){
    return getUser()
}).post("/", function(context){
    const user = authenticate(context)
    return createUser(context.body)
}, {body: createUserSchema}).put("/", function(context){
    const user = authenticate(context)
    return updateUser(context.body)
}, {body: updateUserSchema}).delete("/:id", function(context){
    const user = authenticate(context)
    return delUser(context.params)
}, {params: delUserSchema})

export default users