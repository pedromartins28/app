import { Elysia } from "elysia";
import { getUser, createUser, updateUser, delUser } from "../services/users";
import {
  createUserSchema,
  delUserSchema,
  updateUserSchema,
} from "../dtos/users";

const users = new Elysia({ prefix: "/users" })
  .get("/", function (context) {
    return getUser();
  })
  .post(
    "/",
    function (context) {
      return createUser(context.body);
    },
    { body: createUserSchema }
  )
  .put(
    "/",
    function (context) {
      return updateUser(context.body);
    },
    { body: updateUserSchema }
  )
  .delete(
    "/:id",
    function (context) {
      console.log(Number(context.params.id));
      return delUser({ id: Number(context.params.id)});
    },
    { params: delUserSchema }
  );

export default users;
