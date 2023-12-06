import { Elysia } from "elysia";
import { PrismaClient } from "@prisma/client";
import tasks from "./controllers/tasks";

const prisma = new PrismaClient();

const app = new Elysia().use(tasks).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
