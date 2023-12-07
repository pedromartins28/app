import { t } from "elysia";

export const createTaskSchema = t.Object({
  title: t.String(),
  desc: t.String(),
  date: t.String(),
});

export const updateTaskSchema = t.Object({
  id: t.Number(),
  title: t.Optional(t.String()),
  desc: t.Optional(t.String()),
  date: t.Optional(t.String()),
});

export const getTaskSchema = t.Object({
  userId: t.Number(),
});

export const delTaskSchema = t.Object({
  id: t.String(),
});

export type createTask = (typeof createTaskSchema)["static"] & {
  userId: number;
};

export type updateTask = (typeof updateTaskSchema)["static"];

export type getTask = (typeof getTaskSchema)["static"];

export type delTask = { id: number };
