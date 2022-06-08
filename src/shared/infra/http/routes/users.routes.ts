import { Router } from "express";

import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../../../../modules/accounts/useCases/deleteUser/DeleteUserController";
import { ListUsersController } from "../../../../modules/accounts/useCases/listUsers/ListUsersController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoute = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const deleteUserController = new DeleteUserController();

usersRoute.post("/", createUserController.handle);

usersRoute.get("/", listUsersController.handle);

usersRoute.delete(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  deleteUserController.handle
);

export { usersRoute };
