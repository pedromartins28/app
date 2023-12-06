import * as tasks from '../respositories/tasks'
import {createTask, delTask, getTask, updateTask} from '../dtos/tasks'

export function createTask(task: createTask){
    return tasks.createTask(task)
}

export function updateTask(task: updateTask){
    return tasks.updateTask(task)
}

export function getTask(task: getTask){
    return tasks.getTask(task)
}

export function delTask(task: delTask){
    return tasks.delTask(task)
}

