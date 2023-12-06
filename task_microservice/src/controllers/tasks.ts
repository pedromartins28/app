import {Elysia} from "elysia";
import authenticate from "../middlewares/authenticate";
import { getTask, createTask, updateTask, delTask } from "../services/tasks";
import { createTaskSchema, delTaskSchema, updateTaskSchema } from "../dtos/tasks";

const tasks = new Elysia({prefix: "/tasks"}).get("/", function(context){
    const user = authenticate(context)
    return getTask({userId: user.id})
}).post("/", function(context){
    const user = authenticate(context)
    return createTask(context.body)
}, {body: createTaskSchema}).put("/", function(context){
    const user = authenticate(context)
    return updateTask(context.body)
}, {body: updateTaskSchema}).delete("/:id", function(context){
    const user = authenticate(context)
    return delTask(context.params)
}, {params: delTaskSchema})

export default tasks

