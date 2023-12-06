import { PrismaClient } from "@prisma/client";
import { createUser, updateUser, getUser, delUser } from "../dtos/users";

const prisma = new PrismaClient();

export function createUser(user: createUser){
    return prisma.user.create({
        data: user
    })
}

export function updateUser(user: updateUser){
    return prisma.user.update({
        where: {
            id: user.id
        },
        data: user
    })
}

export function getUser(){
    return prisma.user.findMany({
        select:{
            email: true,
            id: true,
            name: true,
            password: false
        },
    })
}

export function delUser(user: delUser){
    return prisma.user.delete({
        where: {
            id: user.id
        }
    })
}

export function getUserByEmail(email: string){
    return prisma.user.findUnique(
        {where: {
            email
        }}
    )
}
