import * as users from '../respositories/users'
import {createUser, delUser, getUser, updateUser} from '../dtos/users'

export async function createUser(user: createUser){
    user.password = await Bun.password.hash(user.password)
    return users.createUser(user)
}

export async function updateUser(user: updateUser){
    if(user.password){
        user.password = await Bun.password.hash(user.password)
    }
    return users.updateUser(user)
}

export function getUser(){
    return users.getUser()
}

export function delUser(user: delUser){
    return users.delUser(user)
}
