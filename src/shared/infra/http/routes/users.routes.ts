import { Router } from "express";

import { CreateUserController } from "../../../../modules/users/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../../../../modules/users/useCases/deleteUser/DeleteUserController";
import { ListUsersController } from "../../../../modules/users/useCases/listUsers/ListUsersController";
import { UnverifyUserController } from "../../../../modules/users/useCases/unverifyUser/UnverifyUserController";
import { VerifyUserController } from "../../../../modules/users/useCases/verifyUser/VerifyUserController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoute = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const deleteUserController = new DeleteUserController();
const verifyUserController = new VerifyUserController();
const unverifyUserController = new UnverifyUserController();

usersRoute.post("/", createUserController.handle);

usersRoute.get("/", listUsersController.handle);

usersRoute.delete(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  deleteUserController.handle
);

usersRoute.patch(
  "/verify",
  ensureAuthenticated,
  ensureAdmin,
  verifyUserController.handle
);

usersRoute.patch(
  "/unverify",
  ensureAuthenticated,
  ensureAdmin,
  unverifyUserController.handle
);

export { usersRoute };
