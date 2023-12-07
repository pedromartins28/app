import {t} from "elysia";

export const createUserSchema = t.Object({
    name: t.String(),
    email: t.String(),
    password: t.String(),
})

export const updateUserSchema = t.Object({
    id: t.Number(),
    name:  t.Optional(t.String()),
    email:  t.Optional(t.String()),
    password:  t.Optional(t.String()),
})

export const getUserSchema = t.Object({
    id:  t.Number()
})

export const delUserSchema = t.Object({
    id:  t.String(),
})

export type createUser = (typeof createUserSchema)['static']

export type updateUser = (typeof updateUserSchema)['static']

export type getUser = (typeof getUserSchema)['static']

export type delUser = { id: number };