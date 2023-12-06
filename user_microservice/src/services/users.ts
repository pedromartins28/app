import * as users from '../respositories/users'
import {createUser, delUser, getUser, updateUser} from '../dtos/users'

export function createUser(user: createUser){
    return users.createUser(user)
}

export function updateUser(user: updateUser){
    return users.updateUser(user)
}

export function getUser(user: getUser){
    return users.getUser(user)
}

export function delUser(user: delUser){
    return users.delUser(user)
}
