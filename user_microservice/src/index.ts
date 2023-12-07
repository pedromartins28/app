import { Elysia } from "elysia";
import { PrismaClient } from "@prisma/client";
import users from "./controllers/users";
import auth from "./controllers/auth";
import swagger from "@elysiajs/swagger";

const app = new Elysia().use(swagger()).use(users).use(auth).listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
