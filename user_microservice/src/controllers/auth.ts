import jwt from "@elysiajs/jwt";
import { cookie } from "@elysiajs/cookie";
import { Elysia, t } from "elysia";
import { AuthenticateResponse, authHeaders, loginSchema } from "../dtos/auth";
import { login } from "../services/auth";

const auth = new Elysia({ prefix: "/auth" })
  .use(
    jwt({
      name: "jwt",
      secret: process.env.JWT_SECRET as string,
    })
  )
  .use(cookie())
  .post(
    "/login",
    async function (context) {
      const { email, password } = context.body;
      const user = await login({ email, password });
      return await context.jwt.sign({
        name: user.name,
        email,
        id: String(user.id),
      });
    },
    { body: loginSchema }
  )
  .post(
    "/authenticate",
    async function (context) {
      const { autorization } = context.headers;

      const token = autorization.split(" ")[1];

      const result = (await context.jwt.verify(token)) as any;
      return result as AuthenticateResponse;
    },
    {
      headers: authHeaders,
    }
  );

export default auth;
