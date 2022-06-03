import { Router } from "express";

import { CreateUserController } from "../controllers/CreateUserController";

const createUserRoute = Router();

const createUser = new CreateUserController();

createUserRoute.post("/", createUser.handle);

export { createUserRoute };
