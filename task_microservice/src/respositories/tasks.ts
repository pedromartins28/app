import { PrismaClient } from "@prisma/client";
import { createTask, updateTask, getTask, delTask } from "../dtos/tasks";

const prisma = new PrismaClient();

export function createTask(task: createTask){
    return prisma.task.create({
        data: task
    })
}

export function updateTask(task: updateTask){
    return prisma.task.update({
        where: {
            id: task.id
        },
        data: task
    })
}

export function getTask(task: getTask){
    return prisma.task.findMany({
        where:{
            userId: task.userId
        }
    })
}

export function delTask(task: delTask){
    return prisma.task.delete({
        where: {
            id: task.id
        }
    })
}
