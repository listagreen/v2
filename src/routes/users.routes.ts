import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { ListUsersController } from "../modules/accounts/useCases/listUsers/ListUsersController";

const usersRoute = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

usersRoute.post("/", createUserController.handle);

usersRoute.get("/", listUsersController.handle);

export { usersRoute };
