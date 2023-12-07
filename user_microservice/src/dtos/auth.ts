import { t } from "elysia";

export const loginSchema = t.Object({
  email: t.String(),
  password: t.String(),
});

export type login = (typeof loginSchema)["static"];

export const authHeaders = t.Object({
  autorization: t.String(),
});

export type AuthenticateResponse = {
  email: string;
  name: string;
  id: number;
};
