import { t } from "elysia";

export type UserTokenPayload = {
  id: number;
  email: string;
  name: string;
};

export const authHeaders = t.Object({
  autorization: t.String(),
});
