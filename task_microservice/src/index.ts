import { Elysia } from "elysia";
import tasks from "./controllers/tasks";
import swagger from "@elysiajs/swagger";

const app = new Elysia().use(swagger()).use(tasks).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
