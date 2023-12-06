import { Elysia } from "elysia";
import { PrismaClient } from "@prisma/client";
import users from "./controllers/users";

const prisma = new PrismaClient();

const app = new Elysia().use(users).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
