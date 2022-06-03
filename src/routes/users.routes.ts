import { Router } from "express";

import { CreateUserController } from "../controllers/CreateUserController";
import { ListUsersController } from "../controllers/ListUsersController";

const usersRoute = Router();

const createUser = new CreateUserController();
const listUser = new ListUsersController();

usersRoute.post("/", createUser.handle);

usersRoute.get("/", listUser.handle);

export { usersRoute };
