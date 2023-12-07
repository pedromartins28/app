import { authenticate } from "../services/auth";

export default function (bearerToken: string) {
  return authenticate(bearerToken);
}
