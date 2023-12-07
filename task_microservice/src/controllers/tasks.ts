import { Elysia } from "elysia";
import authenticate from "../middlewares/authenticate";
import { getTask, createTask, updateTask, delTask } from "../services/tasks";
import {
  createTaskSchema,
  delTaskSchema,
  updateTaskSchema,
} from "../dtos/tasks";
import { authHeaders } from "../dtos/user";

const tasks = new Elysia({ prefix: "/tasks" })
  .get(
    "/",
    async function (context) {
      const user = await authenticate(context.headers.autorization);
      return getTask({ userId: Number(user.id) });
    },
    { headers: authHeaders }
  )
  .post(
    "/",
    async function (context) {
      const user = await authenticate(context.headers.autorization);
      return createTask({ ...context.body, userId: Number(user.id) });
    },
    { body: createTaskSchema, headers: authHeaders }
  )
  .put(
    "/",
    async function (context) {
      await authenticate(context.headers.autorization);
      return updateTask(context.body);
    },
    { body: updateTaskSchema, headers: authHeaders }
  )
  .delete(
    "/:id",
    async function (context) {
      await authenticate(context.headers.autorization);
      return delTask({ id: Number(context.params.id) });
    },
    { params: delTaskSchema, headers: authHeaders }
  );

export default tasks;
