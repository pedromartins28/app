import axios from "axios";
import { UserTokenPayload } from "../dtos/user";

const api = axios.create({
  baseURL: process.env.AUTH_API_URL,
});

export async function authenticate(
  bearerToken: string
): Promise<UserTokenPayload> {
  const { data } = await api.post("/authenticate", null, {
    headers: { autorization: bearerToken },
  });

  return data;
}
