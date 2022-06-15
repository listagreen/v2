import { Router } from "express";

import { CreateUserController } from "../../../../modules/users/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../../../../modules/users/useCases/deleteUser/DeleteUserController";
import { ListUserController } from "../../../../modules/users/useCases/listUser/ListUsersController";
import { UnverifyUserController } from "../../../../modules/users/useCases/unverifyUser/UnverifyUserController";
import { VerifyUserController } from "../../../../modules/users/useCases/verifyUser/VerifyUserController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoute = Router();

const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();
const verifyUserController = new VerifyUserController();
const unverifyUserController = new UnverifyUserController();
const listUserController = new ListUserController();

usersRoute.post("/", createUserController.handle);

usersRoute.get("/me", ensureAuthenticated, listUserController.handle);

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
