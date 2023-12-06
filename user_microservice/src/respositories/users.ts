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

export function getUser(user: getUser){
    return prisma.user.findMany({
        where:{
            id: user.id
        }
    })
}

export function delUser(user: delUser){
    return prisma.user.delete({
        where: {
            id: user.id
        }
    })
}
