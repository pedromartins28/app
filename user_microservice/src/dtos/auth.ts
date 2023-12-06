import { t } from "elysia";

export const loginSchema = t.Object({
    email: t.String(),
    password: t.String(),
})

export type login = (typeof loginSchema)['static']